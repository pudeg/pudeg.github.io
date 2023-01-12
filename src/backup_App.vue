<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { computed } from "vue";
import { useUserStore } from "./stores/user.store";
import router from "./router";


const userStore = useUserStore();

const isLegit = computed(() => userStore.isConnected && userStore.hasBalance);

const handleConnectClick = async () => {
  userStore.connect();
};

const handleFormButtonClick = async (e: Event): Promise<void> => {
  if (!isLegit) return;

  router.push(('/vip'));
};

</script>

<template>
  <header id="app-header">
    <img alt="Vue logo" class="logo" src="@/assets/mi777_jersey.png" width="250" height="250" />

    <div class="wrapper">
      <HelloWorld msg="Milady Moto wow!" />

      <nav>
        <a id="mint-link">Mint on Scatter</a>
        <RouterLink to="/vip">Connect to verify ownership of tokey toke</RouterLink>
        <RouterLink to="/vip">Enter your detes into the form</RouterLink>
        <RouterLink to="/vip">wait</RouterLink>
      </nav>
    </div>
    <div id="app-header__connect-container">
      <button @click="handleConnectClick" class="app-button" id="connect-button" type="button">CONNECT</button>
    </div>
  </header>

  <section id="app-body">
    <div id="app-body--top">
      <div class="wallet-message" v-if="userStore.isConnected && !userStore.hasBalance">
        Sweet work Mr. {{ userStore.user.wallet }}, you're connected. You got 0 mi777s though, so buy up.
      </div>
      <div class="wallet-message" v-if="isLegit">
        Sweet work Mr. {{ userStore.user.wallet }}, you're connected AND you got {{ userStore.user.mi777Balance }}, you
        are VIP fatty.
        <button v-if="userStore.isConnected" @click="handleFormButtonClick" id="to-form-button" class="app-button"
          type="button">
          GO TO GATED AREA IF YOU GOT WHAT IT TAKES
        </button>
      </div>

    </div>
    <RouterView />
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

#app-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0px;
  width: 100%;
  height: 100%;
}

#app-header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

.app-header__connect-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 0px;
}

#app-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  padding: 32px;
  overflow-y: scroll;
}

#app-body--top {
  display: flex;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  #app-header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 0px;
    /* grid-auto-flow: dense; */
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
