// import { computed, reactive, ref, type Ref } from 'vue';
// import { defineStore } from 'pinia';
// import type { Order, Token, TokenResponse, UserModel, UserSubscriptions } from '@/models/user.model';
// import Web3 from 'web3';
// import { tokenCollectionRef, listenOnUser, getOrders, listenOnUserOrders, updateUserOrder, addOwnerToToken, setUser } from '@/firestore/db';
// import { CONSTS } from '@/data/Constants';
// import { firestore } from '@/firestore/firestore';
// import { getDoc, type DocumentReference, type QueryDocumentSnapshot, type where } from 'firebase/firestore';
// const { doc, setDoc, getDocs, query } = firestore;


// const initialUser: UserModel = {
//   mi777Balance: null,
//   wallet: null,
//   orders: {},
// };

// export const useUserStore = defineStore('user', () => {
//   const web3 = new Web3(Web3.givenProvider);

//   const userState: UserModel = reactive(initialUser);
//   const connectedWallet: Ref<string | null> = ref(null);
//   const userRef: Ref<DocumentReference | null> = ref(null)
//   const isConnected = computed(() => !!connectedWallet.value && typeof connectedWallet.value === 'string');

//   const subscriptions: UserSubscriptions = {
//     user: null,
//     orders: null
//   }



//   const connect = async () => {

//     connectedWallet.value = ((await web3.eth.getAccounts())[0] || (await web3.eth.requestAccounts())[0]).toLowerCase()

//     if (connectedWallet.value) {
//       await handleTokens(wallet);

//       startListeningOnUser(wallet);
//       startListeningOnOrders(wallet);
//     }
//   }


//   const normalize = (string: string) => string.toString().toLowerCase().trim().normalize();

//   const getWalletTokenIds = async (wallet: string): Promise<TokenResponse[]> => {
//     if (!(isConnected.value)) return []

//     const endpoint = `${ CONSTS.MILADY_BALANCE_ENDPOINT }/${ wallet }`;

//     try {
//       const { tokens }: any = await (await fetch(endpoint, { method: 'GET' })).json();

//       return (tokens || []).map((_: TokenResponse) => (normalize(_.TokenId || '')));
//     } catch (error) {
//       console.error('queryWalletForTokens' + error);
//       return [];
//     }
//   }


//   const init = async () => {
//     await connect();

//     if (isConnected.value) {
//       const tokens = await getWalletTokenIds(connectedWallet.value as string)

//       if (tokens && tokens.length) {
//         userRef.value = await initializeUser(connectedWallet.value, tokens)
//       }
//     }


//     if (wallet) {
//       await handleTokens(wallet);

//       startListeningOnUser(wallet);
//       startListeningOnOrders(wallet);
//     }
//   }

//   const initializeUser = async (wallet: string, tokenIds: string[]) => {
//     const res = await setUser(wallet);

//     const user = await getDoc(doc(wallet));




//     if (user.exists()) {
//       const tokens = await getWalletTokenIds(connectedWallet.value as string)

//       if (tokens && tokens.length) {

//       }
//     }


//     if (wallet) {
//       await handleTokens(wallet);

//       startListeningOnUser(wallet);
//       startListeningOnOrders(wallet);
//     }
//   }

//   return {
//     // user,
//     // orders,
//     // balance,
//     // queryWalletForTokens,
//     // isConnected,
//     // hasUnassignedTokens,
//     // hasBalance,
//     // unassignedTokenCount,
//     // assignedOrders,
//     // init,
//     // connect,
//     // unassignedOrders,
//     // getOrder,
//     // updateOrder,
//     // scatterUrl,
//     // ownedTokenIds
//   };
// });