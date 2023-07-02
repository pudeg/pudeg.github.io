<script lang="ts" setup>
import { computed, onMounted, ref, type Ref } from 'vue';
import { type JerseySizeType, JerseySize, type Order } from '@/models/user.model';
import { useCountryStateCityStore } from '@/stores/country-state-city.store';
import { useOrderStore } from '@/stores/order.store';
import { displayStatusMap } from '@/data/Constants'

const props = defineProps({
  orderId: String,
  order: Object
});

defineEmits(['submit'])

const orderStore = useOrderStore()
const countryStateCityStore = useCountryStateCityStore();

const order: Ref<Order> = ref(props.order as Order)

const disableForm = ref(false)// ref(!['SHIPPING_UNASSIGNED', 'UNDELIVERABLE'].includes(order.value.status));

const showConfirmation = computed(() => !!disableForm.value);

const jerseySizes: JerseySizeType[] = [
  'Small',
  'Medium',
  'Large',
];

const displayStatus = ref(displayStatusMap.get(order.value.status));

const collapsed = ref(true);
// const countryList = countryStateCityStore.states;

const jerseySize = ref(order.value.jerseySize ? order.value.jerseySize :
  jerseySizes[JerseySize.Large]
);

const validateData = (): boolean => {
  const validSize = order.value.jerseySize !== null && jerseySizes.includes(order.value.jerseySize)
  return validSize && Object.values(order.value.shippingAddress || {}).every(_ => !!_);
}

const handleSubmit = async () => {
  if (validateData()) {
    const res = await orderStore.addOrder(order.value.tokenId || '', order.value)

    order.value = res || order.value;

    location.reload();
  }
}
const handleCountrySelect = async ({ target }: Event) => {
  const select = target as HTMLSelectElement;

  await countryStateCityStore.setSelectedCountry(select.selectedOptions[0].value)
}
const handleStateSelect = async ({ target }: Event) => {
  const select = target as HTMLSelectElement;

  await countryStateCityStore.setSelectedState(select.selectedOptions[0].value)
}

const toggleCollapse = () => {
  collapsed.value = !collapsed.value;
}

// onMounted(async () => {
//   await orderStore.loadUserOrders();

//   if (countryStateCityStore.hasClaimableTokens) {
//     await countryStateCityStore.loadCountries();
//   }
// });
</script>

<template>
  <div class="shipping-form-view">
    <div class="shipping-form-button">
      <h1 @click="toggleCollapse" class="shipping-form-title"
        :class="{ undeliverable: order.status === 'UNDELIVERABLE' }">Order # {{ order?.tokenId }}</h1>
      <svg v-if="showConfirmation" :class="{ arrowDown: collapsed }" width="32" height="32" viewBox="-4 -4 32 32"
        xmlns="http://www.w3.org/2000/svg" _transform="translate(0,0) rotate(50%)"
        style="transform-origin: center center;border:1px solid #FFFFFF00;" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M 1,6 13.25,17.65 M 23,6.36 10.75,17.65" style="stroke:#0000FF;stroke-width:4;" />
      </svg>
    </div>
    <div v-if="showConfirmation" class="order-confirmation"
      :class="{ collapsed: collapsed, undeliverable: order.status === 'UNDELIVERABLE' }">
      <div class="order-status" :class="{ undeliverable: order.status === 'UNDELIVERABLE' }">{{ displayStatus }}</div>
      <div class="order-addressee">{{ order.shippingAddress?.name }}</div>
      <div class="order-address1">{{ order.shippingAddress?.address1 }}</div>
      <div class="order-city">{{ order.shippingAddress?.city }}</div>
      <div class="order-state">{{ order.shippingAddress?.stateProvince }}</div>
      <div class="order-postalcode">{{ order.shippingAddress?.postalCode }}</div>
      <div class="order-country">{{ order.shippingAddress?.country }}</div>
    </div>
    <form v-else class="shipping-form">
      <div class="form-group">
        <label for="shipping-name">Real/Fake Name</label>
        <input :disabled="disableForm" v-model="order.shippingAddress!.name" type="text" name="shipping-name"
          id="shipping-name" />
      </div>
      <div class="form-group">
        <label for="shipping-street-address1">Address1</label>
        <input :disabled="disableForm" v-model="order.shippingAddress!.address1" type="text"
          name="shipping-street-address1" id="shipping-street-address1" />
      </div>
      <div class="form-group">
        <label for="shipping-city">City</label>
        <input :disabled="disableForm" v-model="order.shippingAddress!.city" type="text" name="shipping-city"
          id="shipping-city" />
      </div>
      <div class="form-group">
        <label for="shipping-state">State/Province</label>
        <!-- <input :disabled="disableForm" v-model="order.shippingAddress!.stateProvince" type="text"
          name="shipping-state" id="shipping-state" /> -->

        <select :disabled="disableForm" v-model="order.shippingAddress!.stateProvince" name="state-select"
          id="state-select" @change="handleCountrySelect">
          <option v-for="state in countryStateCityStore.states" :value="state.iso2" :state="state.name">{{ state.name }}
          </option>
        </select>

      </div>
      <div class="form-group">
        <label for="shipping-postalcode">Postal Code</label>
        <input :disabled="disableForm" v-model="order.shippingAddress!.postalCode" type="text" name="shipping-postalcode"
          id="shipping-postalcode" />
      </div>
      <div class="form-group">
        <label for="shipping-country">Country</label>
        <!-- <input :disabled="disableForm" v-model="order.shippingAddress!.country" type="text" name="shipping-country" -->
        <!-- id="shipping-country" /> -->

        <select :disabled="disableForm" name="country-select" id="country-select" @change="handleCountrySelect">
          <option v-for="   country    in    countryStateCityStore.countries   " :value="country.iso2"
            :country="country.name">{{ country.name
            }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="jersey-size">Size</label>
        <select :disabled="disableForm" v-model="order.jerseySize" name="jersey-size" id="jersey-size">
          <option v-for="(    size, index    ) in    jerseySizes   " :value="size">{{ size }}
          </option>
        </select>
      </div>
      <div class="form-group" id="submit-button-group">
        <input :disabled="disableForm" @click="handleSubmit" type="button" name="shipping-submit" id="shipping-submit"
          value="Submit" />
      </div>

    </form>
  </div>
</template>

<style>
.arrow-down {
  transform: rotate(100%) !important;
}

.undeliverable {
  color: crimson;
  font-size: 32px !important;
  font-weight: 800 !important;
}

.shipping-form-view {
  width: 100%;
}

.shipping-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  width: 500px;
  color: var(--order-prompt-purple);
  font-size: 24px;
}

.order-confirmation {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 8px;
  padding: 0 64px;
  height: 100%;
  overflow: hidden;
}

.order-confirmation>* {
  text-align: left;
  width: 100%;
  font-family: 'Comic Sans MS';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
}

.order-confirmation.collapsed,
.order-confirmation.collapsed * {
  height: 0%;
  display: none;
}

.form-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.form-group input,
select {
  font-size: 18px;
  padding: 8px;
  border-radius: 6px;
}

.form-group input[type=button] {
  background-color: var(--order-prompt-purple);
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
}

.form-group label {
  font-size: 24px;
  font-weight: 600;
}

#submit-button-group {
  justify-content: flex-end;
}

#state-select {
  min-width: 100%;
}

.shipping-form-title {
  width: 100%;
  padding: 16px;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  cursor: pointer;
  user-select: none;
}

.shipping-form-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 0px;
  height: fit-content;
  width: 100%;
  padding: 16px 32px;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  cursor: pointer;
  user-select: none;
  border-top: 2px solid black;
}
</style>
