import { computed, ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { Order, UserSubscriptions, } from '@/models/user.model';
import { CONSTS } from '@/data/Constants';
import { useUserStore } from '@/stores/user.store';


const userOrderState: Ref<Order[]> = ref([])

export const useOrderStore = defineStore('orders', () => {
  const subscriptions: UserSubscriptions = {
    user: null,
    orders: null
  }

  const userStore = useUserStore()

  const orders = computed(() => userOrderState.value);

  const loadUserOrders = async () => {
    if (!(userStore.isConnected && userStore.wallet)) return null;

    const placedOrders = await getUserOrders(userStore.wallet);

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
    });

    userOrderState.value = [...defaultOders, ...placedOrders]
  }

  const getUserOrders = async (wallet: string): Promise<Order[]> => {
    const endpoint = `${ CONSTS.getUserOrdersRemote }/${ wallet }`;

    const { orders }: { orders: Order[] } = await (await fetch(
      endpoint, {
      method: 'GET',
    })).json();

    return orders;
  }

  const addOrder = async (tokenId: string, data: Partial<Order>): Promise<Order | null> => {
    if (!(userStore.isConnected && userStore.wallet)) return null;

    const endpoint = `${ CONSTS.createUserOrderRemote }`;

    const response: Order | null = await (await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ order: data, wallet: userStore.wallet, tokenId })
    })).json();

    await userStore.setState(userStore.wallet);

    await loadUserOrders();

    return response;
  }

  return {
    loadUserOrders,
    getUserOrders,
    orders,
    addOrder,
    userOrderState
  }
});