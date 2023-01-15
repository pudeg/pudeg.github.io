import { createRouter, createWebHistory } from "vue-router";
import HomeView2 from "@/views/HomeView2.vue";
import { macBookPro16FrontEndData, } from "@/data/home-view-data";
import { useUserStore } from "@/stores/user.store";


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
      path: "/zk-shipping",
      name: "zk-shipping",
      component: () => import("../views/VIPView.vue"),
    },
    {
      path: "/home2",
      component: HomeView2,
      props: { ...macBookPro16FrontEndData },
    },
  ],
});

router.beforeEach(async (to, from) => {
  const userStore = useUserStore();

  if (
    // make sure the user is authenticated
    userStore.ownedTokenIds.length === 0 &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'home'
  ) {
    // redirect the user to the login page
    return { name: 'home' }
  }
})

export default router;
