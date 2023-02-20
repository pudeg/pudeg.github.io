import { computed, reactive, ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { Order, Token, TokenResponse, UserSubscriptions } from '@/models/user.model';
import Web3 from 'web3';
import { tokenCollectionRef, listenOnUser, getOrders, listenOnUserOrders, updateUserOrder, addOwnerToToken, setUser } from '@/firestore/db';
import { CONSTS } from '@/data/Constants';
import { firestore } from '@/firestore/firestore';
import { QueryDocumentSnapshot, where } from 'firebase/firestore';
const { doc, setDoc, getDocs, query, connectFirestoreEmulator } = firestore;


/* *

 @  READ DATA - NO USER BEING ADDED TO DB YET
 *
 *  User Connects, providing wallet
 *
 *  Send to a handleConnectedWallet function
 *
 *  >  handleConnectedWallet will query blockchain for wallet's mi777 Tokens holdings
 *
 *  >  handleConnectedWallet will search Token Collection for any Tokens owned by Wallet OR any unowned Tokens in Wallet Holdings;
 *
 *  >  handleConnectedWallet will send respond of { claimedTokens, unclaimedTokens: holdings.tokens.filter(tokenId => !claimedTokens.some(claimedToken => claimedToken.id === token)) }
 *
 * ALL USER STATE STILL ONLY FRONT END - NO WRITING TO DB UNTIL USER SUBMITS ORDER
 *
 *
 * On submit of Shipping (on 'users/orders{id}' Create)
 *
 *  Mark Token Owned
 *
 */

// const initialUser: UserModel = {
//   mi777Balance: null,
//   wallet: null,
//   orders: {},
// };

interface UserModel {
  wallet: string | null;
  tokens: {
    inWallet: string[],
    unclaimed: string[],
    claimedByUser: string[],
    claimedByOther: string[],
  }
}

const userState: Ref<UserModel> = ref({
  wallet: null,
  tokens: {
    inWallet: [],
    unclaimed: [],
    claimedByUser: [],
    claimedByOther: [],
  }
})

export const useUserStore = defineStore('user', () => {
  const subscriptions: UserSubscriptions = {
    user: null,
    orders: null
  }

  const user = computed(() => userState.value);

  const wallet = computed(() => userState.value.wallet)

  const tokens = computed(() => userState.value.tokens)

  const isConnected = computed(() => !!userState.value.wallet);

  const hasClaimableTokens = computed(() => !!tokens.value.unclaimed.length);

  const totalTokensMinted = computed(() => tokens.value.claimedByUser.length + tokens.value.inWallet.length);

  const init = async () => {
    const web3 = new Web3(Web3.givenProvider)

    const wallet = ((await web3.eth.getAccounts())[0] || '').toLowerCase();

    if (wallet) {
      await setState(wallet);

      //   await handleTokens(wallet);
      //   startListeningOnUser(wallet);
      //   startListeningOnOrders(wallet);
    }
  }

  const connect = async () => {
    const web3 = new Web3(Web3.givenProvider);

    let wallet = ((await web3.eth.getAccounts())[0] || (await web3.eth.requestAccounts())[0]).toLowerCase()

    if (wallet) {
      await setState(wallet);

      //   await handleTokens(wallet);
      //   startListeningOnUser(wallet);
      //   startListeningOnOrders(wallet);
    }
  }

  const setState = async (wallet: string) => {
    if (!(isConnected && wallet)) return null;

    const endpoint = `${ CONSTS.getUserStateLocal }/${ wallet }`;

    const response: UserModel = await (await fetch(endpoint, {
      method: 'GET',
    })).json();

    console.warn('response', response)
    Object.assign(userState.value, (response || {}))

    console.warn('userState.value', userState.value)
  }

  // const startListeningOnUser = (wallet: string) => {
  //   if (subscriptions.user !== null) {
  //     subscriptions.user();
  //     subscriptions.user = null;
  //   }

  //   subscriptions.user = listenOnUser(wallet, (doc) => {
  //     const docData = doc.data()

  //     console.warn({ docData });
  //     Object.assign(userState, docData);
  //   })
  // }

  // const startListeningOnOrders = (wallet: string) => {
  //   if (subscriptions.orders !== null) {
  //     subscriptions.orders();
  //     subscriptions.orders = null;
  //   }

  //   subscriptions.orders = listenOnUserOrders(wallet, (ordersSnap) => {
  //     ordersSnap.forEach((doc) => {
  //       const docId = doc.id;
  //       const docData = doc.data() as Order;
  //       userState.orders[docId] = docData;
  //     });
  //   });
  // }

  return {
    setState,
    user,
    tokens,
    wallet,
    hasClaimableTokens,
    totalTokensMinted,
    isConnected,
    init,
    connect,
  }
});