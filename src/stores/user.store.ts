import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import type { Order, Token, TokenHoldingsResponse, TokenResponse, UserModel, UserSubscriptions } from '@/models/user.model';
import { tokenCollectionRef, listenOnUser, getOrders, listenOnUserOrders, updateUserOrder, setUser } from '@/firestore/db';
import { CONSTS } from '@/data/Constants';
import { firestore } from '@/firestore/firestore';
import { QueryDocumentSnapshot, where } from 'firebase/firestore';
const { doc, setDoc, getDocs, query } = firestore;
import Web3 from 'web3';

export interface WalletHoldingResponse {
  timestamp: string;
  wallet: string;
  tokens: string[];
}

const initialUser: UserModel = {
  mi777Balance: null,
  wallet: null,
  orders: {},
};

export const useUserStore = defineStore('user', () => {
  const subscriptions: UserSubscriptions = {
    user: null,
    orders: null
  }

  const userState: UserModel = reactive(initialUser);
  const user = computed(() => userState);
  const orders = computed(() => userState.orders);
  const scatterUrl = computed(() => CONSTS.scatterMintUrl);
  const ownedTokenIds = computed(() => Object.keys(orders.value));

  const balance = computed(() => userState.mi777Balance);
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
        const docData = doc.data() as Order;
        userState.orders[docId] = docData;
      });
    });
  }

  const init = async () => {
    const web3 = new Web3(Web3.givenProvider)

    const wallet = ((await web3.eth.getAccounts())[0] || '').toLowerCase();

    if (wallet) {
      await handleTokens(wallet);

      startListeningOnUser(wallet);

      startListeningOnOrders(wallet);
    }
  }

  const connect = async () => {
    const web3 = new Web3(Web3.givenProvider);

    let wallet = ((await web3.eth.getAccounts())[0] || (await web3.eth.requestAccounts())[0]).toLowerCase()

    if (wallet) {
      await handleTokens(wallet);

      startListeningOnUser(wallet);

      startListeningOnOrders(wallet);
    }
  }


  const queryWalletForTokens = async (wallet?: string): Promise<WalletHoldingResponse | null> => {
    if (!(isConnected && wallet)) return null;

    const endpoint = `${ CONSTS.getUserStateLocal }/${ wallet }`;

    try {
      const holdings: WalletHoldingResponse = await (await fetch(endpoint, {
        method: 'GET',
      })).json();

      return holdings;

    } catch (error) {
      console.error('queryWalletForTokens' + error);
      return null;
    }
  }

  const handleTokens = async (wallet: string): Promise<void> => {
    const holdings: WalletHoldingResponse | null = await queryWalletForTokens(wallet);
    if (!holdings) return;

    // ************  MUST CHANGE BACK TO HOLDINGS.TOKENS ***********************
    //@ts-ignore
    const matchedTokenDocs = await getTokenDocs(...holdings.holdings);
    // ************  MUST CHANGE BACK TO HOLDINGS.TOKENS ***********************
    console.log({matchedTokenDocs});

    if (!matchedTokenDocs.length) {
      userState.wallet = wallet;
      userState.mi777Balance = 0;
    }

    const matchedUnOwnedTokenDocs = matchedTokenDocs.filter(t => wallet == t.owner || !(!!t.owner));
    console.warn({matchedUnOwnedTokenDocs});

    if (matchedUnOwnedTokenDocs.length) {
      // 1) Get/Create User
      await setUser(wallet);

      const orderTokens = (await getOrders(wallet));

      const orderTokenIds = (orderTokens).map(order => (order.tokenId || '').toString());

      matchedUnOwnedTokenDocs.forEach(async (token) => {
        const tokenId = token.id;


        // TODO Move to OnCreate Cloud function
        // 0) Update tokenDocs
        if (!orderTokenIds.includes(token.id.toString())) {
          const defaultOrder: Order = {
            tokenId: (token.id || '').toString(),
            jerseySize: null,
            shippingAddress: null,
            status: 'SHIPPING_UNASSIGNED',
            modified: firestore.Timestamp.now(),
            created: !!token.created ? token.created : firestore.Timestamp.now()
          }

          // 2) Get/Create orders collection and add Order for each token
          await setDoc(doc('users', wallet, 'orders', tokenId), defaultOrder, { merge: true });
        }
      })
    }
  }

  const getTokenDocs = async (...tokenIds: string[]): Promise<Token[]> => {
    if (!tokenIds || !tokenIds.length) return [];

    const tokenQuery = query(tokenCollectionRef, where('id', 'in', tokenIds),);

    return (await getDocs(tokenQuery)).docs.map((_: QueryDocumentSnapshot<unknown>) => _.data() as Token);
  }


  const updateOrder = async (id: string, updates: Partial<Order>): Promise<void> => {
    await updateUserOrder(user.value.wallet || '', id, updates);
  }

  return {
    user,
    orders,
    balance,
    queryWalletForTokens,
    isConnected,
    hasUnassignedTokens,
    hasBalance,
    unassignedTokenCount,
    assignedOrders,
    init,
    connect,
    unassignedOrders,
    updateOrder,
    scatterUrl,
    ownedTokenIds
  };
});