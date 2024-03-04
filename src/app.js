import Vue from 'vue';
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import VueTheMask from 'vue-the-mask';

import App from '#components/App.vue';
import manageRouters from '#/router/manageRouters';
import createStore from './main/store'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter);
Vue.use(VueTheMask);

const router = new VueRouter(manageRouters);
const store = new Vuex.Store(createStore)

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('body');
