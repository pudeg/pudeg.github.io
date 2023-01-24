// import { firestore } from './firestore';
// import fs from 'node:fs';
// import { setDoc, type DocumentData, type DocumentReference, type QueryDocumentSnapshot, deleteDoc } from 'firebase/firestore';
// import type { Order, Token, UserModel } from '@/models/user.model';
// const { doc, getDocs, collection, } = firestore;
import { dbData } from '@/firestore/mi777-db';

// const userCollection = collection('users');



// dbData.forEach(async (user: any) => {
//   await setDoc(doc('users', user.wallet), { wallet: user.wallet }, { merge: true });
//   (user.orders || []).forEach(async (order: any) => {
//     await setDoc(doc('users', user.wallet, 'orders', order.tokenId), { ...order }, { merge: true });
//   });
// });



// const userDocs = (await getDocs(userCollection))

// userDocs.docs.forEach(async (user) => {
//   const normalizedWallet = user.id.toLowerCase();
//   console.warn({ userDocs });

//   const newUser = {
//     wallet: normalizedWallet,
//     orders: (await getDocs(collection('users', user.id, 'orders'))).docs.map(order => order.data() as Order)
//   }

//   console.warn({ newUser });
//   await setDoc(doc('users', normalizedWallet), { merge: true });

//   newUser.orders.forEach(async (order) => {
//     await setDoc(doc('users', normalizedWallet, 'orders', (order?.tokenId || '')), { merge: true });
//   });


//   console.warn('END OF USER DOCS FOR EACH');
// });

// export const butthole = dbData

