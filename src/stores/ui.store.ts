import { computed, reactive, ref } from 'vue';
import { defineStore } from 'pinia';

const initialUIState: any = {
  showGallery: false,
};

export const useUIStore = defineStore('ui', () => {
  const uiState = reactive(initialUIState);
  const showGalleryState = ref(false)
  const showGallery = computed(() => showGalleryState);

  // const isConnected = computed(() => !!userState.wallet);

  const setGalleryShow = (state: boolean | null) => {
    console.warn('HEARD SET GALLERY IN UI SSTORE', { state, showgal: showGallery.value, showGalleryState: showGalleryState.value });

    showGalleryState.value = state === null ? !showGallery.value : state;
  }

  return {
    showGallery,
    setGalleryShow
  };
});