import { computed, reactive, ref } from 'vue';
import { defineStore } from 'pinia';


export const useUIStore = defineStore('ui', () => {
  const showGalleryState = ref(false)
  const showGallery = computed(() => showGalleryState);

  const setGalleryShow = (state: boolean | null) => {
    showGalleryState.value = state === null ? !showGallery.value : state;
  }

  return {
    showGallery,
    setGalleryShow
  };
});