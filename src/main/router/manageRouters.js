export default {
  routes: [
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