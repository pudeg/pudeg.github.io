import { firestore } from './firestore';
import fs from 'node:fs';
import type { DocumentData, DocumentReference, QueryDocumentSnapshot } from 'firebase/firestore';
import type { Order, Token, UserModel } from '@/models/user.model';

const { doc, getDocs, collection, } = firestore;


const userCollection = collection('users')


const userDocs = (await getDocs(userCollection))

userDocs.docs.forEach(async (doc) => {
  const data = doc.data()
  const normalizedWallet = doc.id.toLowerCase();

  const newUser = {
    //@ts-ignore
    wallet: normalizedWallet
  }

  const orders = (await getDocs(collection('users', doc.id, 'orders')))

})

userDocs.forEach((doc) => {
  doc.
})

const getUserDoc = () => { }

const getUserOrderDocs = () => { }

const normalizeWallet = () => { }

const normalizeTokenId = () => { }

const writeUser = () => { }

const writeUserOrders = () => { }

const deleteUser = () => { }

const deleteOrders = () => { }
