<script setup lang="ts">
import GalleryImage from "@/components/GalleryImage.vue";
import { contentRows } from '@/data/content-row-config.js'
import { ref } from 'vue';

const galleryImages = contentRows['1']
const galleryImagesRef = ref(contentRows['100'])
const galleryImagesValues = ref(contentRows['100']).value
console.log({ galleryImages });

</script>

<template>
  <section id="gallery">
    <GalleryImage v-for="(img, index) in galleryImages" :src="img.src" />
    <!-- <div v-for="(img, index) in galleryImages" class="gallery-image" -->
    <!-- :style="{ 'background-image': 'url(' + testSrc + ')' }"></div> -->
  </section>

</template>

<style scoped>
#gallery {
  position: absolute;
  top: 0;
  left: 17%;
  transform: translate(0, -120px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 8px;
  width: 70%;
  height: 700px;
  gap: 8px;
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
