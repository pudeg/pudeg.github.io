<script setup lang="ts">
import { RouterView } from "vue-router";
import ConnectButton from "@/components/ConnectButton.vue";
import GotoOrderViewPrompt from "@/components/GotoOrderViewPrompt.vue";
import Gallery from "@/components/Gallery.vue";
import { computed } from "vue";
import { useUserStore } from "@/stores/user.store";
// import { exportFirestore } from '@/firestore/export-firestore'
// const exportDb = await exportFirestore()
// console.log(exportDb);

const userStore = useUserStore();

userStore.init()

const onHide = () => {
  return false;
}
const showOrderPrompt = computed(() => userStore.hasUnassignedTokens);
</script>

<template>
  <ConnectButton />
  <GotoOrderViewPrompt />
  <main id="app-body">

    <section id="router-container">
      <RouterView />
    </section>
    <Gallery  />
  </main>
  <!-- <vue-easy-lightbox :visible="true" :imgs="images" :index="0" @hide="onHide">
      <template v-slot:prev-btn="{ prev }">
        <button @click="prev">show the prev</button>
      </template>

      <template v-slot:next-btn="{ next }">
        <button @click="next">show the next</button>
      </template>

      <template v-slot:close-btn="{ close }">
        <button @click="close">close lightbox</button>
      </template>

      <template v-slot:toolbar="{ toolbarMethods }">
        <button @click="toolbarMethods.zoomIn">zoom in</button>
        <button @click="toolbarMethods.zoomOut">zoom out</button>
        <button @click="toolbarMethods.rotateLeft">Anticlockwise rotation</button>
        <button @click="toolbarMethods.rotateRight">clockwise rotation</button>
      </template>
    </vue-easy-lightbox> -->
    <!-- <vue-easy-lightbox :visible="true" :imgs="images" :index="0" @hide="onHide"></vue-easy-lightbox> -->

</template>

<style scoped>
#silent-box {
  height: 800px;
  z-index: 200;
}

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

.container[data-row="1"] {
  height: 200px;
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
