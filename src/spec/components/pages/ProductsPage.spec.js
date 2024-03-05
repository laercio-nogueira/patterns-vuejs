import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import VueTheMask from 'vue-the-mask';
import ProductsPage from '../../../main/components/pages/ProductsPage.vue'

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueTheMask);

const store = new Vuex.Store({
  modules: {
    clients: {
      namespaced: true,
      state: {
        clients: [],
      },
      getters: {
        getClients: state => state.clients
      },
      actions: {
        removeClient: jest.fn()
      }
    },
    products: {
      namespaced: true,
      state: {
        items: []
      },
      getters: {
        getProducts: state => state.items
      },
      actions: {
        addProduct: jest.fn()
      }
    }
  }
})

const wrapper = shallowMount(ProductsPage, {
  localVue,
  store
})

describe("ProductsPage Component Test", () => {
  test('When mounted component expect to be rendered', () => {
    expect(wrapper.exists()).toBe(true);
  })
})