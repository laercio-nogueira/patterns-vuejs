import Vue from 'vue';
import VueRouter from 'vue-router';
import VueTheMask from 'vue-the-mask';
import App from '#components/App.vue';
import manageRouters from '#/router/manageRouters';

Vue.use(VueRouter);
Vue.use(VueTheMask);
const router = new VueRouter(manageRouters);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('body');
