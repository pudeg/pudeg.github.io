import { computed, ref, type Ref } from 'vue';
import { defineStore } from 'pinia';

interface AdminModel {
  wallet: string | null;
  tokens: {
    inWallet: string[],
    unclaimed: string[],
    claimedByUser: string[],
    claimedByOther: string[],
  }
}

const authState: Ref<any> = ref({
  status: null
})
const adminState: Ref<AdminModel> = ref({
  wallet: null,
  tokens: {
    inWallet: [],
    unclaimed: [],
    claimedByUser: [],
    claimedByOther: [],
  }
})

export const useAdminStore = defineStore('admin', () => {
  const isAuthenticated = computed(() => authState.value.status === 'success')

  const authenticate = async (email: string, password: string) => {
    authState.value = await authenticate(email, password);

    return authState.value.status;
  }

  return {
    authenticate,
    isAuthenticated,
  }
});