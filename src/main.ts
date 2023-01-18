import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueEasyLightbox from 'vue-easy-lightbox'


import "./assets/main.css";
import "@/assets/styleguide.css"
import "@/assets/globals.css"
const app = createApp(App, {
  data: {
    images: [
      {
        src: './assets/content-rows/100_0.jpg',
      },
      {
        src: './assets/content-rows/100_1.jpg',
      },
      {
        src: './assets/content-rows/100_2.jpg',
      },
      {
        src: './assets/content-rows/100_3.jpg',
      },
      {
        src: './assets/content-rows/100_4.jpg',
      },
      {
        src: './assets/content-rows/100_5.jpg',
      },
      {
        src: './assets/content-rows/100_6.jpg',
      },
      {
        src: './assets/content-rows/100_7.jpg',
      },
      {
        src: './assets/content-rows/100_8.jpg',
      },
      {
        src: './assets/content-rows/100_9.jpg',
      },
    ]
  }
});

app.use(createPinia());
app.use(router);
app.use(VueEasyLightbox);

app.mount("#app");
