import { computed, ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { Order, UserModel, UserSubscriptions } from '@/models/user.model';
import { getOrders } from '@/firestore/db';
import { CONSTS } from '@/data/Constants';
import { useUserStore } from "@/stores/user.store.rewrite";

const initialUser: UserModel = {
  mi777Balance: null,
  wallet: null,
  orders: {},
};

const userOrderState: Ref<Order[]> = ref([])

export const useOrderStore = defineStore('orders', () => {
  const subscriptions: UserSubscriptions = {
    user: null,
    orders: null
  }

  const userStore = useUserStore()

  const hasOrders = computed(() => !!userOrderState.value.length);
  const orders = computed(() => userOrderState.value);

  const loadUserOrders = async () => {
    if (!(userStore.isConnected && userStore.wallet)) return null;

    const placedOrders = await getOrders(userStore.wallet);

    const defaultOders: Order[] = userStore.tokens.unclaimed.map(tokenId => {
      return {
        tokenId,
        status: 'SHIPPING_UNASSIGNED',
        jerseySize: 'Large',
        shippingAddress: {
          name: '',
          address1: '',
          city: '',
          stateProvince: '',
          postalCode: '',
          country: ''
        }
      }
    })

    userOrderState.value = [...defaultOders, ...placedOrders]
  }

  const hasOrder = (tokenId: string) => {
    return userOrderState.value.some(_ => _.tokenId === tokenId)
  }

  const getUserOrder = (tokenId: string): Order | null => {
    if (!(hasOrder(tokenId))) return null;
    return userOrderState.value.find(_ => _.tokenId === tokenId) || null;
  }

  const addOrder = async (tokenId: string, data: Partial<Order>) => {
    if (!(userStore.isConnected && userStore.wallet)) return null;

    const endpoint = `${ CONSTS.createUserOrderLocal }`;

    const response: {} = await (await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ order: data, wallet: userStore.wallet, tokenId })
    })).json();

    await loadUserOrders()

    return userOrderState.value
  }

  return {
    loadUserOrders, getUserOrder, hasOrder, hasOrders,
    orders, addOrder
  }
});