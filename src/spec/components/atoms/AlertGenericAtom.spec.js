import { createLocalVue, mount } from '@vue/test-utils'
import AlertGenericAtom from '../../../main/components/atoms/AlertGenericAtom'

const $mockOn = jest.fn();
const $mockEmit = jest.fn();

const localVue = createLocalVue();
localVue.prototype.EventEmitter = {
  $on: $mockOn,
  $emit: $mockEmit
};
const wrapper = mount(AlertGenericAtom, {
  localVue,
})

describe('AlertGenericAtom Component', () => {
  test('When mounted component, expect default values and dispatch openAlert', () => {
    expect(wrapper.vm.show).toBeFalsy();
    expect(wrapper.vm.message).toBe("");
    expect(wrapper.vm.type).toBe('success');
    expect(wrapper.attributes().class).toBe('alert alert-success popup-alert');
    expect($mockOn).toHaveBeenCalledWith("openAlert", expect.any(Function));
  })
})
