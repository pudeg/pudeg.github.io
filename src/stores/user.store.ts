import { computed, ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { UserSubscriptions } from '@/models/user.model';
import Web3 from 'web3';
import { CONSTS } from '@/data/Constants';


interface UserModel {
  wallet: string | null;
  tokens: {
    inWallet: string[],
    unclaimed: string[],
    claimedByUser: string[],
    claimedByOther: string[],
  }
}

const userState: Ref<UserModel> = ref({
  wallet: null,
  tokens: {
    inWallet: [],
    unclaimed: [],
    claimedByUser: [],
    claimedByOther: [],
  }
})

export const useUserStore = defineStore('user', () => {
  const subscriptions: UserSubscriptions = {
    user: null,
    orders: null
  }

  const user = computed(() => userState.value);

  const wallet = computed(() => userState.value.wallet)

  const tokens = computed(() => userState.value.tokens)

  const claimedAndClaimableTokens = computed(() => [...tokens.value.claimedByUser, ...tokens.value.unclaimed])

  const isConnected = computed(() => !!userState.value.wallet);

  const hasClaimableTokens = computed(() => !!tokens.value.unclaimed.length);

  const balance = computed(() => new Set([...tokens.value.claimedByUser, ...tokens.value.inWallet]));
  const totalTokensMinted = computed(() => balance.value.size);

  const init = async () => {
    const web3 = new Web3(Web3.givenProvider)

    const wallet = ((await web3.eth.getAccounts())[0] || '').toLowerCase();

    if (wallet) {
      await setState(wallet);
    }
  }

  const connect = async () => {
    const web3 = new Web3(Web3.givenProvider);

    let wallet = ((await web3.eth.getAccounts())[0] || (await web3.eth.requestAccounts())[0]).toLowerCase()

    if (wallet) {
      await setState(wallet);
    }
  }

  const setState = async (wallet: string): Promise<void> => {
    if (!(isConnected && wallet)) return;

    const endpoint = `${ CONSTS.getUserStateRemote }/${ wallet }`;

    const response: UserModel = await (await fetch(endpoint, {
      method: 'GET',
    })).json();

    userState.value = response;
  }

  return {
    setState,
    user,
    tokens,
    wallet,
    hasClaimableTokens,
    totalTokensMinted,
    isConnected,
    init,
    connect,
    claimedAndClaimableTokens,
  }
});