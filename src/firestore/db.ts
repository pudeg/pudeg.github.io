import type { Order, UserModel } from '@/models/user.model';
import { firestore } from './firestore';
import { type DocumentReference, type DocumentData, type DocumentSnapshot, onSnapshot, type Unsubscribe, QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore';

const { collection, doc, setDoc, addDoc, getDoc, updateDoc, getDocs } = firestore;

const COLLECTION_NAMES = {
  users: 'users',
  orders: 'orders',
}

export const userCollectionRef = collection(COLLECTION_NAMES.users);

export const getOrderCollectionRef = (wallet: string) => collection(COLLECTION_NAMES.users, wallet, 'orders');

export const getUserDocRef = (wallet: string): DocumentReference<DocumentData> => doc(COLLECTION_NAMES.users, wallet)

export const listenOnUser = (wallet: string, callback: (doc: DocumentSnapshot<DocumentData>) => void): Unsubscribe => {
  return onSnapshot(getUserDocRef(wallet), callback);
}

export const listenOnUserOrders = (wallet: string, callback: (querySnapshot: QuerySnapshot) => void): Unsubscribe => {
  return onSnapshot(getOrderCollectionRef(wallet), callback);
}

export const getUserDoc = async (ref: DocumentReference): Promise<DocumentSnapshot<unknown>> => {
  return await getDoc(ref);
}

export const getOrders = async (wallet: string): Promise<Order[]> => {
  return (await getDocs(getOrderCollectionRef(wallet))).docs.map((_) => ({ ...(_ as QueryDocumentSnapshot<Order>).data(), id: _.id }) as Order);
}

export const addNewOrder = async (wallet: string, { index }: Partial<Order>): Promise<DocumentReference<unknown>> => {
  const defaultOrder: Order = {
    index,
    jerseySize: null,
    shippingAddress: null,
    status: 'SHIPPING_UNASSIGNED',
  }

  const collRef = collection('users', wallet, 'orders');

  const res = await addDoc(collRef, defaultOrder);

  return res;
}

export const updateUserOrder = async (wallet: string, id: string, updates: Partial<Order>): Promise<void> => {
  await setDoc(doc(COLLECTION_NAMES.users, wallet, 'orders', id), updates, { merge: true });
}

export const getUser = async (wallet: string, { mi777Balance }: Partial<UserModel> = {}): Promise<UserModel> => {
  const balance = mi777Balance || 0;
  const userDoc = await getUserDoc(getUserDocRef(wallet));

  // * 1) Create or update user doc
  await setDoc(getUserDocRef(wallet), { mi777Balance: balance, wallet }, { merge: true });

  // * 2) Get reference to existing orders collection (creates new empty collection if non existent)
  const userOrders = await getOrders(wallet);
  console.warn('[IN USERSTORE GET USER > userOrders()]', userOrders);

  // * 3) Get the difference of current balance and number of existing orders

  const newOrderCount = mi777Balance - userOrders.length

  // * 4) If difference is greater than 0, add new docs for each additional token
  if (newOrderCount > 0) {
    for (let index = 0; index < newOrderCount; index++) {
      await addNewOrder(wallet, { index: userOrders.length });
    }
  }

  return {
    //@ts-ignore
    ...(userDoc.data()),
    orders: (await getOrders(wallet)).reduce((acc, curr: Order, i) => ({ ...acc, [(curr.id || '')]: curr }), {})
  } as UserModel;
}