import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueTheMask from 'vue-the-mask';
import InputGenericAtom from '../../../main/components/atoms/InputGenericAtom.vue'

const localVue = createLocalVue();
localVue.use(VueTheMask);
const wrapper = shallowMount(InputGenericAtom, {
  localVue,
  propsData: {
    textLabel: "Mock Input Generic",
    placeholder: "Mock Placeholder",
    inputName: "GenericInput",
    type: "text",
    value: "Mock Value",
    required: true,
    mask: "###.###.###-##"
  }
})

describe('InputGenericAtom Component', () => {
  test('When mounted component expect to equal "Mock Input Generic', async () => {
    expect(wrapper.html())
      .toEqual("<div class=\"form__input\"><label for=\"GenericInput\">Mock Input Generic</label> <input type=\"text\" name=\"GenericInput\" placeholder=\"Mock Placeholder\" required=\"required\"></div>");
  })
})