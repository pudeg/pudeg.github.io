import { firestore, } from './firestore';
import fs from 'node:fs';
import { setDoc, type DocumentData, type DocumentReference, type QueryDocumentSnapshot, deleteDoc, where, QuerySnapshot } from 'firebase/firestore';
import type { Order, Token, UserModel } from '@/models/user.model';



const { doc, getDocs, collection, runTransaction, query } = firestore;




// const tokenDocs = (await getDocs(tokenCollection))



const tokenCollection = collection('tokens')

const unownedTokenDocQuery = query(tokenCollection, where('owner', '==', null))

const tokenSnap = await getDocs(unownedTokenDocQuery);

// tokenSnap.docs.map(_ => _.)
// tokenSnap.forEach(async (token: QueryDocumentSnapshot<unknown>): Promise<void> => {
//   const tokenData = token.data() as Token;

//   // doc.data() is never undefined for query doc snapshots
//   const newTokenDoc = {
//     ...tokenData,
//     id: tokenData.id.toString(),
//     modified: firestore.Timestamp.now(),
//   } as Token;

//   console.log(token.id, " => ", token.data());
// });


// try {
//   const updatedTokens = await runTransaction(async (transaction) => {

//     tokenSnap
//       .forEach(async (token: QueryDocumentSnapshot<unknown>): Promise<void> => {
//         const tokenDoc = await transaction.get(token.ref)
//         const tokenData = tokenDoc.data() as Token;

//         transaction.update(token.ref, {
//           ...tokenData,
//           id: tokenData.id.toString(),
//           modified: firestore.Timestamp.now(),
//         });

//         console.log(token.id, " => ", token.data());
//       });
//   });

// } catch (e) {
//   // This will be a "population is too big" error.
//   console.error(e);
// }



// tokenSnap.forEach(async (token: any) => {
//   const stringId = token.id.toString()
//   //     console.error(e);
//   await setDoc(doc('tokens', stringId), {
//     owner: token.owner || null,
//     id: stringId,
//     modified: firestore.Timestamp.now(),
//   }, { merge: true });

//   console.warn('just ran', { stringId });

//   // (token.orders || []).forEach(async (order: any) => {
//   //   await setDoc(doc('tokens', token.wallet, 'orders', order.tokenId), { ...order }, { merge: true });
//   // });
// });


//   try {
//     const newPopulation = await runTransaction(async (transaction) => {
//       const sfDoc = await transaction.get(sfDocRef);
//       if (!sfDoc.exists()) {
//         throw "Document does not exist!";
//       }

//       const newPop = sfDoc.data().population + 1;
//       if (newPop <= 1000000) {
//         transaction.update(sfDocRef, { population: newPop });
//         return newPop;
//       } else {
//         return Promise.reject("Sorry! Population is too big");
//       }
//     });

//     console.log("Population increased to ", newPopulation);
//   } catch (e) {
//     // This will be a "population is too big" error.
//     console.error(e);
//   }
// });


// tokenDocs.docs.forEach(async (user) => {
//   const normalizedWallet = user.id.toLowerCase();
//   console.warn({ tokenDocs });

//   const newUser = {
//     wallet: normalizedWallet,
//     orders: (await getDocs(collection('users', user.id, 'orders'))).docs.map(order => order.data() as Order)
//   }

//   console.warn({ newUser });
//   await setDoc(doc('users', normalizedWallet), { merge: true });

//   newUser.orders.forEach(async (order) => {
//     await setDoc(doc('users', normalizedWallet, 'orders', (order?.tokenId || '')), { merge: true });

//     // await deleteDoc(doc('users', user.id, 'orders', (order?.tokenId || '')));
//   });

//   // await deleteDoc(doc('users', user.id));

//   console.warn('END OF USER DOCS FOR EACH');
// });

export const butthole = 'fuk'


