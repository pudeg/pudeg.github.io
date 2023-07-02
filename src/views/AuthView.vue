<script lang="ts" setup>
import { useUserStore } from '@/stores/user.store';
import { useCountryStateCityStore } from '@/stores/country-state-city.store';
import { useOrderStore } from '@/stores/order.store';
import { computed, onMounted, ref, type Ref } from 'vue';
import { useAdminStore } from '@/stores/admin.store';

export interface AdminCredentials {
  email: string;
  password: string;
}

const adminStore = useAdminStore()

const formData: Ref<AdminCredentials> = ref({
  email: '',
  password: '',
})


const userSubmitted = ref(false);
const formError = ref(false);
const authError = ref(false);




const onSubmit = async () => {
  const { email, password } = formData.value;

  if (!(email && password)) {
    formError.value = true;
  }

  await adminStore.authenticate(email, password)
}

onMounted(async () => { });
</script>

<template>
  <section id="auth-view">
    AUTH VIEW BITCH
    <!-- <form class="auth-form">
      <div class="form-group">
        <label for="shipping-name">Real/Fake Name</label>
        <input v-model=" order.shippingAddress!.name " type="text" name="shipping-name" id="shipping-name" />
      </div>
      <div class="form-group">
        <label for="shipping-street-address1">Address1</label>
        <input v-model=" order.shippingAddress!.address1 " type="text" name="shipping-street-address1"
          id="shipping-street-address1" />
      </div>
      <div class="form-group" id="submit-button-group">
        <input @click=" handleSubmit " type="button" name="shipping-submit" id="shipping-submit" value="Submit" />
      </div>
    </form> -->
  </section>
</template>

<style scoped>
#auth-view {
  color: black;
}
</style>
