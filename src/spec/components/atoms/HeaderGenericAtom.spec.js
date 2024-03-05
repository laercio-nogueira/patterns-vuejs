import { createLocalVue, shallowMount } from '@vue/test-utils'
import HeaderGenericAtom from '../../../main/components/atoms/HeaderGenericAtom.vue'

const localVue = createLocalVue();
const wrapper = shallowMount(HeaderGenericAtom, {
  localVue,
})

describe('HeaderGenericAtom Component', () => {
  test('When mounted component, expect Logo to equal "Logo" and contain page-header, navbar and position-fixed', async () => {
    await wrapper.setProps({
      logo: "Logo"
    })
    expect(wrapper.classes()).toEqual(["page-header", "navbar", "position-fixed"]);
    expect(wrapper.props().logo).toBe("Logo");
  })
})