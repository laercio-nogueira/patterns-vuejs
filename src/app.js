import Vue from 'vue';
import VueRouter from 'vue-router';
import VueTheMask from 'vue-the-mask';
import Vuex from 'vuex'
import App from '#components/App.vue';
import manageRouters from '#/router/manageRouters';
import store from './main/store/index.js'

Vue.use(Vuex)
Vue.use(VueRouter);
Vue.use(VueTheMask);
const router = new VueRouter(manageRouters);

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('body');
