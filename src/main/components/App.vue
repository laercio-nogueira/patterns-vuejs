<template>
  <div>
    <AlertGenericAtom />

    <HeaderGenericAtom logo="Sistema Data Stone"/>
    <MenuSidebarMolecule />

    <div class="page-content">
      <div class="container">
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
import AlertGenericAtom from '#components/atoms/AlertGenericAtom'

export default {
  name: 'HomePage',
  components: {
    HeaderGenericAtom,
    MenuSidebarMolecule,
    AlertGenericAtom
  },
}
</script>

<style lang="scss">
@import 'bootstrap/dist/css/bootstrap.min.css';
@import '../stylesheet/font-awesome.css';
@import '../stylesheet/main.scss';

.page-content {
  float: right;
  width: calc(100% - 235px);
  margin-top: rem(50px);
}
</style>