import VueRouter from 'vue-router';
import { createLocalVue, mount } from '@vue/test-utils';
import manageRouters from "../../main/router/manageRouters"

jest.mock('../../main/components/pages/HomePage.vue', () => ({
  name: 'HomePage',
  render: (createElement) => createElement('div', { class: 'HomePageMock' }),
}));

jest.mock('../../main/components/pages/ProductsPage.vue', () => ({
  name: 'ProductsPage',
  render: (createElement) => createElement('div', { class: 'ProductsPageMock' }),
}));

jest.mock('../../main/components/pages/ClientsPage.vue', () => ({
  name: 'ClientsPage',
  render: (createElement) => createElement('div', { class: 'ClientsPageMock' }),
}));

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter(manageRouters);
const wrapper = mount({ template: '<router-view />' }, {
  localVue,
  router,
});

describe('ManageRouters', () => {

  test('When called route product then should load component ProductsPage', async () => {
    await router.push('/products');
    expect(wrapper.find('div').classes()).toEqual(["ProductsPageMock"]);
  });

  test('When called route clients then should load component ClientsPage', async () => {
    await router.push('/clients');
    expect(wrapper.find('div').classes()).toEqual(["ClientsPageMock"]);
  });

  test('When called route root then should load component HomePage', async () => {
    await router.push('/');
    expect(wrapper.find('div').classes()).toEqual(["HomePageMock"]);
  });

})