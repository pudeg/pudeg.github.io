<script setup lang="ts">
import GalleryImage from "@/components/GalleryImage.vue";
import { contentRows } from '@/data/content-row-config.js'
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

const galleryImages = contentRows['1']
const galleryImagesRef = ref(contentRows['100'])
const galleryImagesValues = ref(contentRows['100']).value
console.log({ galleryImages });

</script>
<template>
  <div id="gallery">
    <vue-easy-lightbox loop="true" scroll-disabled="true" :visible="uiStore.showGallery.value" :imgs="images" :index="0" @hide="onHide">
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
  <!-- <vue-easy-lightbox :visible="true" :imgs="images" :index="0" @hide="onHide"></vue-easy-lightbox> -->

</template>

<style scoped>
#gallery {
  position: static;
  top: 0;
  /* left: 17%; */
  /* transform: translate(0, -120px); */
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 8px;
  width: 70%;
  height: 700px;
  gap: 8px; */
  z-index: 400;
  /* border: 2px solid #591db2; */
}

/* .gallery-image {
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;

} */
</style>
