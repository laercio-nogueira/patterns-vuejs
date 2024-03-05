import { createLocalVue, shallowMount } from '@vue/test-utils'
import ToggleSwitchAtom from '../../../main/components/atoms/ToggleSwitchAtom.vue'

const localVue = createLocalVue();
const wrapper = shallowMount(ToggleSwitchAtom, {
  localVue,
})

describe('ToggleSwitchAtom Component', () => {
  test('When mounted component expect contain class switch and input type checkbox', async () => {
    expect(wrapper.find('label').classes()).toEqual(["switch"]);
    expect(wrapper.find('input').attributes('type')).toEqual("checkbox");
  })
})
