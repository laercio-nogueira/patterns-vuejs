import { createLocalVue, shallowMount } from '@vue/test-utils'
import SliderAtom from '../../../main/components/atoms/SliderAtom.vue'

const localVue = createLocalVue();
const wrapper = shallowMount(SliderAtom, {
  localVue,
  propsData: {
    open: true,
    showClose: true,
  }
})

describe('SliderAtom Component', () => {
  test('When mounted component expect contain class "transition-wrapper" and "fade-slide and transition-wrapper', async () => {
    expect(wrapper.find('div').classes()).toEqual(["transition-wrapper"]);
    expect(wrapper.find('transition-stub').attributes('name')).toEqual('fade-slide')
    expect(wrapper.vm.showOverlay).toBeFalsy();
    expect(wrapper.vm.hasHeaderSlot).toBe(false);
  })
})
