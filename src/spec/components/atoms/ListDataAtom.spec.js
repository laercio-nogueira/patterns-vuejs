import { createLocalVue, shallowMount } from '@vue/test-utils'
import ListDataAtom from '../../../main/components/atoms/ListDataAtom.vue'

const localVue = createLocalVue();
const wrapper = shallowMount(ListDataAtom, {
  localVue,
  propsData: {
    legends: ['mock-legend1', 'mock-legend2'],
    items: [{
      'mock-legend1': 'mock-legend1-value',
      'mock-legend2': 'mock-legend2-value'
    }],
    link: true,
    remove: true
  }
})

describe('ListDataAtom Component', () => {
  test('When mounted component expect contain class "table table-striped table-bordered and totalColSpan = 4"', () => {
    expect(wrapper.classes()).toEqual(["table", "table-striped", "table-bordered"]);
    expect(wrapper.vm.totalColSpan).toEqual(4);
  })
})