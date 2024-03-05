import { createLocalVue, shallowMount } from '@vue/test-utils'
import ButttonGenericAtom from '../../../main/components/atoms/ButtonGenericAtom.vue'

const localVue = createLocalVue();
const wrapper = shallowMount(ButttonGenericAtom, {
  localVue,
})

describe('ButttonGenericAtom Component', () => {
  test('When mounted component, expect contain Text-Button, class btn and btn-primary and width 100%', async () => {
    await wrapper.setProps({ 
      buttonText: 'Text-Button',
    })
    expect(wrapper.find('button').text()).toBe('Text-Button');
    expect(wrapper.find('button').classes()).toEqual(["btn", "btn-primary"]);
    expect(wrapper.find('button').attributes().style).toEqual("width: 100%;");
  })
})