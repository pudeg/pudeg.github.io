import { computed, reactive } from "vue";
import { defineStore } from "pinia";
import type { Order, UserModel, UserSubscriptions } from "@/models/user.model";
import Web3 from 'web3';
import { getUser, listenOnUser, listenOnUserOrders, updateUserOrder } from "@/firestore/db";

const GCF_LOCAL_URL = 'http://localhost:5000/my-lady-8b48f/us-central1/getMiladyBalance';
const GCF_URL = 'https://us-central1-my-lady-8b48f.cloudfunctions.net/getMiladyBalance';
const MILADY_BALANCE_ENDPOINT = GCF_URL;

const initialUser: UserModel = {
  mi777Balance: null,
  wallet: null,
  orders: {},
};

export const useUserStore = defineStore("user", () => {
  const web3 = new Web3(Web3.givenProvider);

  const subscriptions: UserSubscriptions = {
    user: null,
    orders: null
  }

  const userState = reactive(initialUser);

  const user = computed(() => userState);
  const balance = computed(() => userState.mi777Balance);
  const orders = computed(() => userState.orders);
  const assignedOrders = computed(() => Object.values(orders.value).filter(order => order.status !== 'SHIPPING_UNASSIGNED'));
  const unassignedOrders = computed(() => Object.values(orders.value).filter(order => order.status === 'SHIPPING_UNASSIGNED'));

  const hasBalance = computed(() => balance.value > 0);
  const hasUnassignedTokens = computed(() => unassignedOrders.value.length > 0);
  const unassignedTokenCount = computed(() => unassignedOrders.value.length);
  const isConnected = computed(() => !!userState.wallet);

  const startListeningOnUser = (wallet: string) => {
    if (subscriptions.user !== null) {
      subscriptions.user();
      subscriptions.user = null;
    }

    subscriptions.user = listenOnUser(wallet, (doc) => {
      const docData = doc.data()

      console.warn({ docData });
      Object.assign(userState, docData);
    })
  }

  const startListeningOnOrders = (wallet: string) => {
    if (subscriptions.orders !== null) {
      subscriptions.orders();
      subscriptions.orders = null;
    }

    subscriptions.orders = listenOnUserOrders(wallet, (ordersSnap) => {
      ordersSnap.forEach((doc) => {
        const docId = doc.id;
        console.log('USER ORDERS FIRESTORE LISTENER');
        console.log({
          doId: doc.id,
          userStateOrders: userState.orders,
          doc,
          selectedOrde: userState.orders[docId],
        });



        Object.assign(userState.orders[docId], doc.data());
      });
    });
  }

  const init = async () => {
    const wallet = (await web3.eth.getAccounts())[0];

    if (wallet) {
      const mi777Balance = await fetchMI777Balance(wallet);

      Object.assign(userState, await fetchUser(wallet, mi777Balance));

      startListeningOnUser(wallet);
      startListeningOnOrders(wallet);
    }
  }

  const connect = async () => {
    const web3 = new Web3(Web3.givenProvider)

    let wallet = (await web3.eth.getAccounts())[0] || (await web3.eth.requestAccounts())[0]

    const mi777Balance: number = await fetchMI777Balance(wallet);

    await fetchUser(wallet, mi777Balance);

    startListeningOnUser(wallet);
    startListeningOnOrders(wallet);
  }


  const updateOrder = async (id: string, updates: Partial<Order>): Promise<void> => {
    await updateUserOrder(user.value.wallet || '', id, updates);
  }

  const getOrder = (id: string): Order => {
    return user.value.orders[id];
  }

  const fetchUser = async (wallet: string, mi777Balance: number): Promise<null> => {
    const res = await getUser(wallet, { mi777Balance });
    Object.assign(userState, res);

    return null;
  }

  const fetchMI777Balance = async (wallet?: string) => {
    if (!(isConnected && wallet)) return console.error('USER NOT CONNECTED, CANT GET BALANCE');

    const endpoint = `${ MILADY_BALANCE_ENDPOINT }/${ wallet }`;

    try {
      const balanceResponse: any = await (await fetch(endpoint, {
        method: 'GET',
      })).json();

      return balanceResponse.balance
    } catch (error) {
      console.error(error);
    }
  }

  return {
    user,
    orders,
    balance,
    fetchMI777Balance,
    isConnected,
    hasUnassignedTokens,
    hasBalance,
    unassignedTokenCount,
    assignedOrders,
    init,
    connect,
    unassignedOrders,
    getOrder,
    updateOrder
  };
});