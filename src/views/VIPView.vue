<script lang="ts" setup>
import { useUserStore } from '@/stores/user.store';
import { ref } from 'vue';
import ShippingForm from '@/components/ShippingForm.vue';
import AppMenu from '@/components/AppMenu.vue';

const userSubmitted = ref(false);

const showMenu = ref(false);

const userStore = useUserStore();

const toggleMenu = () => {
  console.log('menu click');

  showMenu.value = !showMenu.value;
}


</script>

<template>
  <section id="vip-view">
    <header id="vip-header">
      <div id="header-content-left">
        <svg @click="toggleMenu" id="menu-open" class="app-button" width="40" height="40" viewBox="2 1.5  28 28"
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
        <div class="header-text">Minted {{ userStore.ownedTokenIds.length }} Jerseys. Placed {{ userStore.assignedOrders.length }}
          Order</div>
        <div class="header-right-bottom">
          <span class="normal-text">Once submitted, order = final. </span>
          <span class="bold-text">Once submitted, order = final.</span>
        </div>
      </div>
    </header>

    <div v-if="userSubmitted" id="pixel-editor-container">
      <iframe src="https://hamilsauce.github.io/playground/simple-pixel-editor/" width="430" height="800"
        frameborder="0"></iframe>
    </div>
    <div v-else class="shipping-forms">
      <h1>Have jersey</h1>
      <ShippingForm v-for="(order, index) in userStore.orders" :order-id="order.tokenId" />
    </div>
  </section>
  <AppMenu @closemenu="toggleMenu" :show="showMenu" />
</template>

<style>
.caption-text {
  font-size: 16px;
}

.header-text {
  font-size: 40px;
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

#menu-open {
  cursor: pointer;
}

.shipping-forms {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  /* width: 100%; */
  padding: 32px;
  color: var(--order-prompt-purple);
  font-size: 24px;
}
</style>
