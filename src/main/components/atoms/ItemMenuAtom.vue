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
    background: #FBFCFB;
    border-bottom: 1px solid #ddd;

    &:hover {
      background: #f1f1f1;
    }
  }

  &__nav-link {
    display: block;
    margin: 0;
    border: 0;
    padding: 10px 15px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;

    & span {
      margin-left: 10px
    }
  }
}
</style>