import { createLocalVue, mount } from '@vue/test-utils'
import MenuSidebarMolecule from '../../../main/components/molecules/MenuSidebarMolecule.vue'
import ItemMenuAtom  from '../../../main/components/atoms/ItemMenuAtom.vue'

const localVue = createLocalVue();
const wrapper = mount(MenuSidebarMolecule, {
  localVue,
})

describe('MenuSidebarMolecule Component', () => {
  test('When mounted component expect compoents to be rendered and contain 3 ItemMenuAtom', async () => {
    expect(wrapper.findComponent(ItemMenuAtom).exists()).toBeTruthy();
    expect(wrapper.findAllComponents(ItemMenuAtom)).toHaveLength(3);
  })
})