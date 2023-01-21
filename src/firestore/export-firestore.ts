
import { firestore } from './firestore';
import fs from 'node:fs';
import type { DocumentData, DocumentReference, QueryDocumentSnapshot } from 'firebase/firestore';
import type { Order, Token, UserModel } from '@/models/user.model';

const { doc, getDocs, collection } = firestore;

const download = (filename: string, text: string) => {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}



const firestoreScheme = {
  tokens: {
    '0': {}
  },
  users: {
    '0x03121': {
      collections: {
        orders: {
          '0': {}
        },
      }
    }
  },
}

export const saveJsonToFile = (name: string, data: any) => {
  const filename = `./${ name }.json`;
  console.warn('running savejson', JSON.stringify(data, null, 2));
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
};

interface UserModelWithId extends UserModel {
  id: string;
}

export const exportFirestore = async () => {
  console.log('STARTED');

  const tokenDocs = (await getDocs(collection('tokens'))).docs.map(_ => _.data()) as DocumentReference<Token>[];

  const userDocs = (await getDocs(collection('users'))).docs.map(_ => ({ ..._.data() as UserModel, id: _.id }) as UserModelWithId);

  let userOrderJoin: any[] = [];

  console.warn({ tokenDocs, userDocs });

  userDocs.forEach(async (userDoc) => {
    let user = userDoc;
    const userId = userDoc.id;
    const userOrders = (await getDocs(collection('users', userId, 'orders'))).docs.map(_ => _.data());
    console.warn({ userOrders });

    userOrderJoin.push({
      ...user,
      orders: userOrders
    })

  });

  setTimeout(() => {
    console.log({ userOrderJoin });

    download('milady-db-export.json', JSON.stringify({ tokens: tokenDocs, users: userOrderJoin }))
  }, 1000);


  return JSON.stringify({ tokens: tokenDocs, users: userOrderJoin })
}





const getUserDoc = () => { }

const getUserOrderDocs = () => { }

const normalizeWallet = () => { }

const normalizeTokenId = () => { }

const writeUser = () => { }

const writeUserOrders = () => { }

const deleteUser = () => { }

const deleteOrders = () => { }


// exportFirestore()

// export const exportFirestore = (data: any) => {
// saveJsonToFile('milady-db-export.json', data)
// }

// export const createTokenCollection = async (min = 1, max = 778) => {
//   const startTime = performance.now();

//   let batchCount = 2;
//   let batchCursor = 1;
//   let cursor = min;

//   while (batchCursor <= batchCount && cursor <= max) {

//     const batch = writeBatch();

//     while (cursor < (batchCursor * 500) && cursor < max) {
//       const token = doc('tokens', cursor.toString());
//       batch.set(token, { id: cursor, owner: null });

//       ++cursor;
//     }

//     ++batchCursor;

//     await batch.commit();
//   }

//   saveJsonToFile('token-batch-results.json', JSON.stringify({
//     collection: 'tokens',
//     count: (await getDocs(collection('tokens'))).size,
//     elapsedTime: performance.now() - startTime
//   }, null, 2));

//   return {
//     collection: 'tokens',
//     count: (await getDocs(collection('tokens'))).size,
//     elapsedTime: performance.now() - startTime
//   };
// };