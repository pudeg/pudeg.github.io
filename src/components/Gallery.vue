<script setup lang="ts">
import { ref } from 'vue';
import { useUIStore } from "@/stores/ui.store";

const images = [
  {
    src: './src/assets/content-rows/100_0.jpg', title: 'this is title'
  },
  {
    src: './src/assets/content-rows/100_1.jpg',
  },
  {
    src: './src/assets/content-rows/100_2.jpg',
  },
  {
    src: './src/assets/content-rows/100_3.jpg',
  },
  {
    src: './src/assets/content-rows/100_4.jpg',
  },
  {
    src: './src/assets/content-rows/100_5.jpg',
  },
  {
    src: './src/assets/content-rows/100_6.jpg',
  },
  {
    src: './src/assets/content-rows/100_7.jpg',
  },
  {
    src: './src/assets/content-rows/100_8.jpg',
  },
  {
    src: './src/assets/content-rows/100_9.jpg',
  },
];

const uiStore = useUIStore();

const visible = ref(uiStore.showGallery);

const onHide = () => {
  return false;
}

const open = () => {
  uiStore.setGalleryShow(true);
}

const closeGallery = () => {
  uiStore.setGalleryShow(false);
}

</script>
<template>
  <div id="gallery">
    <vue-easy-lightbox loop="true" scroll-disabled="true" :visible="uiStore.showGallery.value" :imgs="images" :index="0"
      @hide="onHide">
      <template v-slot:prev-btn="{ prev }">
        <button @click="prev">show the prev</button>
      </template>
      <template v-slot:next-btn="{ next }">
        <button @click="next">show the next</button>
      </template>
      <template v-slot:close-btn="{ close }">
        <button @click="closeGallery">close lightbox</button>
      </template>
      <template v-slot:toolbar="{ toolbarMethods }">
        <button @click="toolbarMethods.zoomIn">zoom in</button>
        <button @click="toolbarMethods.zoomOut">zoom out</button>
      </template>
    </vue-easy-lightbox>
  </div>

</template>

<style scoped>
#gallery {
  position: static;
  top: 0;
  z-index: 400;
}
</style>
