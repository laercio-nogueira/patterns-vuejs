import Vue from 'vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './main/stylesheet/font-awesome.css'
import App from '#components/App.vue';
import manageRouters from '#/router/manageRouters';

Vue.use(VueRouter);
const router = new VueRouter(manageRouters);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('body');
