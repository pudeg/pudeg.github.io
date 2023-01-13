import { createRouter, createWebHistory } from "vue-router";
import HomeView2 from "@/views/HomeView2.vue";
import { macBookPro16FrontEndData, } from "@/data/home-view-data";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView2,
      props: { ...macBookPro16FrontEndData },
    },
    {
      path: "/vip",
      name: "vip",
      component: () => import("../views/VIPView.vue"),
    },
    {
      path: "/home2",
      component: HomeView2,
      props: { ...macBookPro16FrontEndData },
    },
  ],
});

export default router;
