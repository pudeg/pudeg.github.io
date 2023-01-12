<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import ConnectButton from "@/components/ConnectButton.vue";
// import Confetti from "@/components/Confetti.vue";
import ContentRow from "@/components/ContentRow.vue";
import GotoOrderViewPrompt from "@/components/GotoOrderViewPrompt.vue";
import GalleryGrid from "@/components/GalleryGrid.vue";
import { computed } from "vue";
import router from "@/router";
import { useUserStore } from "@/stores/user.store";
import { contentRows } from '@/data/content-row-config'

const rowIndexes = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
]

const userStore = useUserStore();
console.log(contentRows)

userStore.init()

const showOrderPrompt = computed(() => userStore.hasUnassignedTokens);

const handleFormButtonClick = async (e: Event): Promise<void> => {
  if (!showOrderPrompt) return;

  router.push(('/vip'));
};

</script>

<template>
  <!-- <div id="app"> -->
  <ConnectButton />
  <GotoOrderViewPrompt />
  <main id="app-body">
    <section id="router-container">
      <RouterView />
    </section>

  </main>
  <!-- </div> -->
  <!-- <Confetti /> -->
</template>

<style scoped>
#app-body {
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 4;
  height: 100%;
  overflow: scroll;
  gap: 16px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 16px;
  min-height: 100vh;
  padding: 0 200px;
  background-color: brown;
  border: 1px solid black;
  z-index: 0;
}

.text-content {
  width: 100%;
  font-size: 28px;
  font-weight: bold;
}

.container[data-row="0"] {
  background-image: url('./assets/content-rows/0_0.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.container[data-row="0"] .text-content>div:nth-child(1) {
  font-weight: 600;
  font-size: 40px;
}

/* .container[data-row="0"] .text-content > div:nth-child(2){} */

.container[data-row="1"] {
  /* position: absolute; */
  /* top: 820px; */
  /* left: 17%; */
  height: 200p;
  height: 60%;
  min-height: 60%;
}

.container[data-row="2"] .content-row-background {
  background-image: url('./assets/content-rows/full-rows/content-row-2-all.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  min-height: fit-content;
  width: 100%;
}

#mi777-model-viewer {
  width: 70%;
  height: 70%;
}
</style>
