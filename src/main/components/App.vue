<template>
  <div>
    <HeaderGenericAtom logo="Sistema XYZ"/>
    <MenuSidebarMolecule />

    <div class="page-content">
      <div class="container mt-3">
        <div class="row">
          <div class="col-12">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderGenericAtom from '#components/atoms/HeaderGenericAtom'
import MenuSidebarMolecule from '#components/molecules/MenuSidebarMolecule'

export default {
  name: 'HomePage',
  components: {
    HeaderGenericAtom,
    MenuSidebarMolecule
  }
}
</script>

<style scoped lang="scss">
.page-content {
  display: flex;
  float: right;
  width: calc(100% - 235px);
}
</style>