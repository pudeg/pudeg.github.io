<script setup lang="ts">
defineProps({
  src: String
})

</script>

<template>
  <!-- <div class="gallery-image" :style="{ 'background-color': `#591db2` }"></div> -->
  <div class="gallery-image" :style="{ 'background-image': `${ src ? 'url(' + src + ')' : '#591db2' }` }"></div>

</template>

<style >
.gallery-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  background-color: 2px solid var(--app-purple);
  filter: opacity(1)  contrast(1.35);
  border-radius: 13px;
  border: 1px solid var(--order-prompt-purple);
}
</style>
