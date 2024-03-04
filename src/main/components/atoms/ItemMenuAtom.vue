<template>
  <li class="menu-sidebar__nav-item"> 
    <a @click="$router.push(page)" class="menu-sidebar__nav-link"> 
      <i :class="`fa fa-${icon}`" /> 
      <span>{{ textItem }}</span> 
    </a>
  </li>
</template>

<script>
export default {
  name: 'ItemMenuAtom',
  props: {
    textItem: String,
    page: String,
    icon: String
  }
}
</script>

<style scoped lang="scss">
.menu-sidebar {

  &__nav-item {
    color: #555;
    background: $color-gray-light;
    border-bottom: rem(1px) solid $color-gray-medium;

    &:hover {
      background: $color-gray;
    }
  }

  &__nav-link {
    display: block;
    margin: 0;
    border: 0;
    padding: rem(10px) rem(15px);
    text-decoration: none;
    font-size: rem(14px);
    font-weight: 300;
    cursor: pointer;
    color: $color-gray-dark;
    font-family: $font-default;

    & span {
      margin-left: rem(10px)
    }
  }
}
</style>