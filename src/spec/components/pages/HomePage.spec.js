import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import HomePage from '../../../main/components/pages/HomePage.vue'

const localVue = createLocalVue();
localVue.use(Vuex);

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


const wrapper = mount(HomePage, {
  localVue,
  store
})

describe("HomePage Component Test", () => {
  test('When mounted component expect to be rendered', () => {
    expect(wrapper.exists()).toBe(true);
  })
})