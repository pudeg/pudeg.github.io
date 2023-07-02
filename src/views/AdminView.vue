<script lang="ts" setup>
import { useUserStore } from '@/stores/user.store';
import { useCountryStateCityStore } from '@/stores/country-state-city.store';
import { useOrderStore } from '@/stores/order.store';
import { computed, onMounted, ref } from 'vue';
import ShippingForm from '@/components/ShippingForm.vue';
import AppMenu from '@/components/AppMenu.vue';

const userStore = useUserStore();

let orderStore = useOrderStore();

const countryStateCityStore = useCountryStateCityStore();

const userSubmitted = ref(false);

const showMenu = ref(false);

const orders = computed(() => orderStore.orders)

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
}

onMounted(async () => {
  await orderStore.loadUserOrders();

  await countryStateCityStore.loadCountries();
  if (userStore.hasClaimableTokens) {
  }
});
</script>

<template>
  <section id="vip-view">
    <header id="vip-header">
      <div id="header-content-left">
        <svg @click=" toggleMenu " id="menu-open" class="app-button" width="40" height="40" viewBox="2 1.5  28 28"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="bars" fill="#000000">
            <path id="top" d=" M 3,17 29,17 29,21.15 3,21.15 3,17 Z" transform="matrix(1,0,0,1,0,-3.1)" />
            <path id="middle" d=" M 3,14 29,14 29,18.05 3,18.05 3,14 Z" transform="matrix(1,0,0,-1,-0,22.65)" />
            <path id="bottom" transform="matrix(1,0,0,1,-0,9.3)" d=" M 3,14 29,14 29,18.05 3,18.05 3,14 Z" />
          </g>
        </svg>
      </div>
      <div id="header-content-right">
        <div class="caption-text">mi777: the MiladyMoto Jersey</div>
        <div class="header-text">Minted {{ userStore.totalTokensMinted }} Jerseys. Placed {{
          userStore.tokens.claimedByUser.length
        }}
          Order</div>
        <div class="header-right-bottom">
          <div class="normal-text">Once submitted, order = final.</div>
        </div>
        <div class="header-bottom">
          <h2 class="disclaimer-header">DISCLAIMER</h2>
          <div class="disclaimer-body">Ensure that your address is correct. Double Check it! Google It! If the address is
            not real/valid, then your jersey will probably not make it to you.</div>
          <div class="disclaimer-body">While we respect the ZK paradigm - the more accurate your shipping details are, the
            more likely you are to receive your jersey.</div>
        </div>
      </div>
    </header>

    <div v-if=" userSubmitted " id="pixel-editor-container">
    </div>
    <div v-else class="shipping-forms">
      <h1>Have jersey</h1>
      <ShippingForm v-for="(    order, index    ) in     orders    " :key=" index " :order-id=" order.tokenId "
        :order=" order " />
    </div>
  </section>
  <AppMenu @closemenu=" toggleMenu " :show=" showMenu " />
</template>

<style>
.caption-text {
  font-size: 16px;
}

.disclaimer-header {
  width: 100%;
  white-space: wrap;
  font-size: 32px !important;
  line-height: 2;
  letter-spacing: 64px;
  font-weight: 800;
  text-align: center;
}

.disclaimer-body {
  /* width: 100%; */
  /* max-width: 50px !important; */
  white-space: wrap;
  font-size: 18px !important;
  line-height: 2;
  font-weight: 600;
}

.header-text {
  font-size: 40px !;
}

.normal-text {
  font-size: 22px;

}

.bold-text {
  font-size: 22px;
  font-weight: bold;
}

#vip-view {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-auto-flow: dense;
  justify-content: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  color: var(--order-prompt-purple);
  font-size: 24px;
}


#vip-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 32px 16px;
  gap: 64px;
}

#header-content-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 0px;
  white-space: nowrap;
  font-family: 'Comic Sans MS';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 56px;
  display: flex;
  align-items: center;

  color: #7B00C7;

}

#header-content-left {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 0px;
  padding: 0 32px 16px 32px;
}

#header-content-right>* {
  width: 100%;
  height: 100%;

}

.header-right-bottom {
  width: 100%;
  height: 100%;
  font-size: 24px;
  color: black;
}
.header-bottom, .header-bottom * {
  /* width: 100%; */
  font-size: 24px;
  color: black;
  white-space: wrap !important;
}

#menu-open {
  cursor: pointer;
}

.shipping-forms {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 412px;
  padding: 32px;
  color: var(--order-prompt-purple);
  font-size: 24px;
}
</style>
