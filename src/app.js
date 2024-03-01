import Vue from 'vue';
import HomePage from '#components/pages/HomePage.vue';

// eslint-disable-next-line vue/require-name-property
const vm = new Vue({ // eslint-disable-line no-new
  render: (h) => h(HomePage),
}).$mount('#main');
