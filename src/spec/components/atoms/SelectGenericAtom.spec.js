import { createLocalVue, shallowMount } from '@vue/test-utils'
import SelectGenericAtom from '../../../main/components/atoms/SelectGenericAtom.vue'

const localVue = createLocalVue();
const wrapper = shallowMount(SelectGenericAtom, {
  localVue,
  propsData: {
    items: [{ mockItem: "mock-item" }, { mockItem: "mock-item2" }],
    selected: "mock-item",
    field: "mockItem",
  }
})

describe('SelectGenericAtom Component', () => {
  test('When mounted component expect contain class "form-select" and 3 options', () => {
    expect(wrapper.classes()).toEqual(["form-select"]);
    expect(wrapper.findAll("option")).toHaveLength(3);
  })
})