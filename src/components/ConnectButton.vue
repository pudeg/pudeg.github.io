<script setup lang="ts">
import { useUserStore } from "@/stores/user.store";
import { computed } from "vue";

const userStore = useUserStore();

const DEFAULT_CONNECT_TEXT = 'Connect';

const connectButtonContent = computed(() => userStore.isConnected ? `${ userStore.user.wallet?.slice(0, 6).toLowerCase() }...${ userStore.user.wallet?.slice(-5, -1).toLowerCase() }` : DEFAULT_CONNECT_TEXT);

const backgroundColor = computed(() => userStore.hasBalance ? 'mint' : userStore.isConnected ? 'gray' : '');

const handleConnectClick = async () => {
  userStore.connect();
};

</script>

<template>
  <div id="connect-container">
    <button id="connect-button" :class="backgroundColor" @click="handleConnectClick">
      {{ connectButtonContent }}</button>
  </div>
</template>

<style scoped>
#connect-container {
  position: absolute;
  right: 10%;
  top: 5%;
}

#connect-container,
#connect-container * {
  z-index: 100;
}

#connect-button {
  width: 100%;
  height: 100%;
  padding: 12px 32px;
  border: none;
  border-radius: 32px;
  background-color: var(--gargoyle-gas);
  font-weight: 600;
  font-size: 20px;
  font-family: var(--font-family-ibm_plex_mono);
}

#connect-button:hover {
  filter: contrast(1.4) saturate(2);
}

#connect-button.gray {
  background: var(--app-gray);
}

#connect-button.mint {
  background-color: var(--order-prompt-mint);
}
</style>
