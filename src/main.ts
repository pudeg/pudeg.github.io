import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueEasyLightbox from 'vue-easy-lightbox'


import "./assets/main.css";
import "@/assets/styleguide.css"
import "@/assets/globals.css"
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueEasyLightbox);
app.mount("#app");
