import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import type { Order, Token, TokenResponse, UserModel, UserSubscriptions } from '@/models/user.model';
import Web3 from 'web3';
import { tokenCollectionRef, listenOnUser, getOrders, listenOnUserOrders, updateUserOrder, addOwnerToToken, setUser } from '@/firestore/db';
import { CONSTS } from '@/data/Constants';
import { firestore } from '@/firestore/firestore';
import { QueryDocumentSnapshot, where } from 'firebase/firestore';
const { doc, setDoc, getDocs, query, connectFirestoreEmulator } = firestore;

const initialUser: UserModel = {
  mi777Balance: null,
  wallet: null,
  orders: {},
};

export const useOrderStore = defineStore('orders', () => {
  const subscriptions: UserSubscriptions = {
    user: null,
    orders: null
  }
});