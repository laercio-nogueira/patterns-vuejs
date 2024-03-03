export default {
  routes: [
    {
      name: 'Principal',
      path: '/',
      component: () => import('../components/pages/HomePage.vue'),
    },
    {
      name: 'ProductsPage',
      path: '/products',
      component: () => import('../components/pages/ProductsPage.vue'),
    },
    {
      name: 'ClientsPage',
      path: '/clients',
      component: () => import('../components/pages/ClientsPage.vue'),
    },
  ],
};