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
    height: rem(46px);
    min-height: rem(46px);
    filter: none;
    background-image: none;

    &__logo {
      color: $color-white;
      font-family: $font-default;
      font-size: rem(20px);
      margin-left: rem(20px);
      vertical-align: middle;
      line-height: rem(46px);
      text-shadow: rem(5px) rem(5px) rem(5px) rgba(0,0,0,0.3);
    }
}
</style>