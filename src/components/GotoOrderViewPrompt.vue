<script setup lang="ts">
import { useUserStore } from "@/stores/user.store";
import { computed, ref } from "vue";
import router from "@/router";
import { useRoute } from "vue-router";




const userStore = useUserStore();
const currentRoute = useRoute()

const connectButtonContent = computed(() => userStore.isConnected ? (userStore.user.wallet?.slice(0, 3) + '...' + userStore.user.wallet?.slice(-4, -1)).toLowerCase() : 'Connect');

const userClosed = ref(false);

const handleOrderButtonClick = async () => {
  router.push('vip');
};

const setUserClosed = (state?: boolean) => {
  userClosed.value = state ? state : !userClosed.value
};
const userClosedComputed = computed(() => userClosed.value);

const show = computed(() => !currentRoute.name?.toString().toLowerCase().includes('vip') && userStore.hasUnassignedTokens && userClosed.value !== true);

</script>

<template>
  <header v-if="show" id="prompt-header" >
    <div id="prompt-header-close">
      <button @click="setUserClosed(true)" id="close-prompt">X</button>
    </div>
    <div id="prompt-header-left">
      <div class="prompt-row">
        <div>✅ Great job! You minted {{ userStore.ownedTokenIds.length }} mi777 Jersey Tokens.</div>
        <div>🔲 But you've only placed {{ userStore.assignedOrders.length }} orders.</div>

      </div>
      <div class="prompt-row">
        <div class="text--purple">Proceed to the ZK-Order Experience</div>
        <div class="text--purple">to Get your Physical Jerseys!</div>
      </div>
      <div class="prompt-row">
        <div class="text--purple">Select your Sizes + Enter your Shipping Destinations</div>
        <div class="text--purple">w/ the mi777 privacy-enabled shipping experience.!</div>
      </div>
    </div>
    <div id="prompt-header-right">
      <button @click="handleOrderButtonClick" id="prompt-header-order-button">Place my Jersey Orders!</button>
    </div>

  </header>

</template>

<style scoped>
#prompt-header {
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 32px;
  border: 1px solid black;
  overflow: hidden;

  height: 0px;
  height: 400px;

  padding: 0 64px;
  background-color: var(--order-prompt-mint);
  color: black;
  z-index: 10;
  font-family: Comic Sans MS;
  font-weight: 400;
  line-height: 56px;
  text-align: left;
  letter-spacing: -1.25px;
  font-size: 20px;
}

#prompt-header-close {
  position: absolute;
  top: 10px;
  left: 20px;
  z-index: 9;
}

#close-prompt {
  width: 100%;
  height: 100%;
  background-color: var(--order-prompt-purple);
  color: var(--app-white);
  background-color: transparent;
  border: none;
  color: var(--order-prompt-purple);
  font-weight: 1000;
  font-size: 32px;
}


#prompt-header-left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
}

#prompt-header-left>div:nth-child(1) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  line-height: 32px;
}

#prompt-header-left>div:nth-child(2) {
  line-height: 40px;
}

#prompt-header-left>div:nth-child(2)>div:nth-child(1) {
  font-size: 32px;
  font-weight: 800;
  text-decoration: underline;
}

#prompt-header-left>div:nth-child(2)>div:nth-child(2) {
  font-size: 32px;
  font-weight: 800;
}

#prompt-header-left>div:nth-child(3) {
  line-height: 40px;
  font-size: 24px;
  line-height: 32px;
}

#prompt-header-left>div:nth-child(3)>div:nth-child(1) {
  font-weight: 800;
}

#prompt-header-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 56px 0 0 0;
  height: 100%;

}

.text--purple {
  color: var(--order-prompt-purple);
}


#prompt-header.connected {
  height: 400px;
}

#prompt-header-order-button {
  padding: 16px 40px;
  background-color: var(--order-prompt-purple);
  color: white;
  border: none;
  white-space: nowrap;
  font-size: 20px;
  line-height: 33.75px;
  border-radius: 13px;
}
</style>
