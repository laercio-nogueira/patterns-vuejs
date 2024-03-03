<template>
  <div>
    <HeaderGenericAtom logo="Sistema XYZ"/>
    <MenuSidebar />

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
import MenuSidebar from '#components/molecules/MenuSidebar'

export default {
  name: 'HomePage',
  components: {
    HeaderGenericAtom,
    MenuSidebar
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