import { createLocalVue, shallowMount } from '@vue/test-utils'
import Heading1Atom from '../../../main/components/atoms/Heading1Atom.vue'

const localVue = createLocalVue();
const wrapper = shallowMount(Heading1Atom, {
  localVue,
})

describe('Heading1Atom Component', () => {
  test('When mounted component expect to equal "Mock Test Heading 1"', async () => {
    await wrapper.setProps({
      text: "Mock Test Heading 1"
    })
    expect(wrapper.html()).toEqual("<p class=\"heading1\">Mock Test Heading 1</p>");
  })
})