
import { firestore } from './firestore';
import fs from 'node:fs';
import type { DocumentData, DocumentReference, QueryDocumentSnapshot, Timestamp } from 'firebase/firestore';
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

const formatDateTime = (timestamp: Timestamp) => {
  return `${ timestamp.toDate().toLocaleDateString() } ${ timestamp.toDate().toLocaleTimeString() }`
}

interface UserModelWithId extends UserModel {
  id: string;
}

export const exportFirestore = async () => {
  console.time('EXPORT FIRESTORE')
  let time = performance.now()
  console.log('STARTED @', time);

  const tokenDocs = (await getDocs(collection('tokens'))).docs.map(_ => _.data()) as Token[];

  const userDocs = (await getDocs(collection('users'))).docs.map(_ => ({ ..._.data() as UserModel, id: _.id }) as UserModelWithId);

  let userOrderJoin: any[] = [];

  console.warn({ tokenDocs, userDocs });

  userDocs.forEach(async (userDoc) => {
    let user = userDoc;
    const userId = userDoc.id;
    const userOrders = (await getDocs(collection('users', userId, 'orders'))).docs.map(_ => ({
      //@ts-ignore
      ..._.data(),
      //@ts-ignore
      created: _.data().created ? formatDateTime(_.data().created) : null,
      //@ts-ignore
      modified: _.data().modified ? formatDateTime(_.data().modified) : null,
      ownedToken: tokenDocs.filter(_ => _.owner === userId).map(_ => ({
        ..._,
        created: _.created ? formatDateTime(_.created) : null,
        modified: _.modified ? formatDateTime(_.modified) : null,
      }))
    }));

    // console.warn({ userOrders });
    const p = new Date(Date.now())
    p.toLocaleDateString()
    userOrderJoin.push({
      ...user,
      created: user.created ? formatDateTime(user.created) : null,
      modified: user.modified ? formatDateTime(user.modified) : null,
      orders: userOrders
    })

  });
  console.warn('ENDED @ ', performance.now() - time);

  console.timeEnd('EXPORT FIRESTORE')

  setTimeout(() => {
    console.log({ userOrderJoin });

    download('milady-db-export.json', JSON.stringify({ tokens: tokenDocs, users: userOrderJoin }))
  }, 1000);


  return JSON.stringify({ tokens: tokenDocs, users: userOrderJoin })
}