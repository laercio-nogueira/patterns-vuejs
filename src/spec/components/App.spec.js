import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router';
import App from '../../main/components/App.vue'
import AlertGenericAtom  from '../../../src/main/components/atoms/AlertGenericAtom.vue'
import HeaderGenericAtom  from '../../../src/main/components/atoms/HeaderGenericAtom.vue'
import MenuSidebarMolecule  from '../../../src/main/components/molecules/MenuSidebarMolecule.vue'

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.prototype.EventEmitter = {
  $on: jest.fn(),
  $emit: jest.fn()
};
const router = new VueRouter()

const wrapper = mount(App, {
  localVue,
  router
})

describe('App Component', () => {
  test('When mounted component, expect compoents to be rendered', async () => {
    expect(wrapper.findComponent(AlertGenericAtom).exists()).toBeTruthy();
    expect(wrapper.findComponent(HeaderGenericAtom).exists()).toBeTruthy();
    expect(wrapper.findComponent(MenuSidebarMolecule).exists()).toBeTruthy();
  })
})