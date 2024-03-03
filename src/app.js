import Vue from 'vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './main/stylesheet/font-awesome.css'
import HomePage from '#components/pages/HomePage.vue';
import manageRouters from '#/router/manageRouters';

Vue.use(VueRouter);
const router = new VueRouter(manageRouters);

const vm = new Vue({
  render: (h) => h(HomePage),
  router,
}).$mount('body');
