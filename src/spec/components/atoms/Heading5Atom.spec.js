import { createLocalVue, shallowMount } from '@vue/test-utils'
import Heading5Atom from '../../../main/components/atoms/Heading5Atom.vue'

const localVue = createLocalVue();
const wrapper = shallowMount(Heading5Atom, {
  localVue,
})

describe('Heading5Atom Component', () => {
  test('When mounted component expect to equal "Mock Test Heading 5', async () => {
    await wrapper.setProps({
      text: "Mock Test Heading 5"
    })
    expect(wrapper.html()).toEqual("<p class=\"heading5\">Mock Test Heading 5</p>");
  })
})