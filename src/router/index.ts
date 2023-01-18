import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import { macBookPro16FrontEndData, } from "@/data/home-view-data";
import { useUserStore } from "@/stores/user.store";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      props: { ...macBookPro16FrontEndData },
    },
    {
      path: "/zk-shipping",
      name: "zk-shipping",
      component: () => import("../views/VIPView.vue"),
    },
    {
      path: "/home",
      component: HomeView,
      props: { ...macBookPro16FrontEndData },
    },
  ],
});

router.beforeEach(async (to, from) => {
  const userStore = useUserStore();

  if (
    userStore.ownedTokenIds.length === 0 &&
    to.name !== 'home'
  ) {
    return { name: 'home' }
  }
})

export default router;
