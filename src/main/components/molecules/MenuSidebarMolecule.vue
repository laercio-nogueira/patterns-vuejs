<template>
<div class="menu-sidebar">
  <ul class="menu-sidebar__menu">
    <ItemMenuAtom page="/" textItem="PRINCIPAL" icon="check-square-o"/>
    <ItemMenuAtom page="/products" textItem="PRODUTOS" icon="check-square-o"/>
    <ItemMenuAtom page="/clients" textItem="CLIENTES" icon="check-square-o"/>
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
  height: 100vh;
  float: left;

  &__menu {
    margin: 0;
    padding: 0;
  }
}
</style>