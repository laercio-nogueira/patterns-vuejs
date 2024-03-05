<template>
<div class="menu-sidebar position-fixed">
  <ul class="menu-sidebar__menu">
    <ItemMenuAtom page="/" textItem="Principal" icon="check-square-o"/>
    <ItemMenuAtom page="/products" textItem="Produtos" icon="check-square-o"/>
    <ItemMenuAtom page="/clients" textItem="Clientes" icon="check-square-o"/>
  </ul>
</div>
</template>

<script>
import ItemMenuAtom from '../atoms/ItemMenuAtom'

export default {
  name: 'MenuSidebarMolecule',
  components: {
    ItemMenuAtom
  }
}
</script>

<style scoped lang="scss">
.menu-sidebar {
  background: #FBFCFB;
  width: 235px;
  float: left;
  min-height: 100vh;
  top: 46px;
  z-index: -3;

  &__menu {
    margin: 0;
    padding: 0;
  }
}
</style>