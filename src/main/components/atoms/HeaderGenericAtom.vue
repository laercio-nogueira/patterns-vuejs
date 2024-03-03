<template>
<div class="page-header navbar navbar-fixed-top">
  <div class="page-header-inner">
    <div class="page-header__logo">
      {{ logo }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HeaderGenericAtom',
  props: {
    logo: String
  }
}
</script>

<style scoped lang="scss">
.page-header {
    background-color: $background-primary;
    width: 100%;
    margin: 0;
    border: 0;
    padding: 0;
    height: 46px;
    min-height: 46px;
    filter: none;
    background-image: none;

    &__logo {
      color: $color-white;
      font-family: $font-default;
      font-size: 20px;
      margin-left: 20px;
      vertical-align: middle;
      line-height: 46px;
      text-shadow: 5px 5px 5px rgba(0,0,0,0.3);
    }
}
</style>