import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AdminView from '@/views/AdminView.vue';
import AuthView from '@/views/AuthView.vue';
import { macBookPro16FrontEndData, } from '@/data/home-view-data';
import { useUserStore } from '@/stores/user.store';
import { useAdminStore } from '@/stores/admin.store';





// const butt = authenticate
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: HomeView,
      props: { ...macBookPro16FrontEndData },
    },
    {
      path: '/zk-shipping',
      name: 'zk-shipping',
      component: () => import('../views/VIPView.vue'),
    },
    {
      path: '/admin-auth',
      name: 'admin-auth',
      component: AuthView,
      props: {},
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      props: {},
      beforeEnter: (to, from) => {
        const adminStore = useAdminStore()

        if (!adminStore.isAuthenticated) {
          return {
            name: 'admin-auth'
          }
        }
        return { path: to.path }
      },
    },
  ],
});

router.beforeEach(async (to, from) => {
  const userStore = useUserStore();
  if (
    !userStore.tokens.unclaimed.length && !userStore.tokens.claimedByUser.length &&
    !['home', 'admin-auth', 'admin'].includes(to.name as string)
  ) {

    return { name: 'home' }
  }
})

export default router;
