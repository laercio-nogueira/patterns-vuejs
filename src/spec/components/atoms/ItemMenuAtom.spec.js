import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueTheMask from 'vue-the-mask';
import ItemMenuAtom from '../../../main/components/atoms/ItemMenuAtom.vue'

const localVue = createLocalVue();
localVue.use(VueTheMask);
const wrapper = shallowMount(ItemMenuAtom, {
  localVue,
  propsData: {
    textItem: "Mock Text",
    page: "/mock-page",
    icon: "success"
  }
})

describe('ItemMenuAtom Component', () => {
  test('When mounted component expect to equal "Mock Text and contain menu-sidebar__nav-item and fa-success', () => {
    expect(wrapper.classes()).toEqual(["menu-sidebar__nav-item"]);
    expect(wrapper.find('i').classes()).toEqual(["fa", "fa-success"]);
    expect(wrapper.find('span').html()).toBe("<span>Mock Text</span>");
  })
})