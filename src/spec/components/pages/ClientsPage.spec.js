import { createLocalVue, shallowMount } from '@vue/test-utils'
import ClientsPage from '../../../main/components/pages/ClientsPage.vue'

const localVue = createLocalVue();
const wrapper = shallowMount(ClientsPage, {
  localVue
})

describe("ClientsPage Component Test", () => {
  test('When mounted component expect to be rendered', () => {
    expect(wrapper.exists()).toBe(true);
  })
})
