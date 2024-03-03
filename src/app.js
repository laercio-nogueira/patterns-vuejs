import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '#components/App.vue';
import manageRouters from '#/router/manageRouters';

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './main/stylesheet/font-awesome.css'

Vue.use(VueRouter);
const router = new VueRouter(manageRouters);

const vm = new Vue({
  render: (h) => h(App),
  router,
}).$mount('body');
