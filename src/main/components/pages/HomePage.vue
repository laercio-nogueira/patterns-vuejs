<template>
  <div class="card">
    <Heading1Atom text="Home page" />
  </div>
</template>

<script>
import Heading1Atom from '#components/atoms/Heading1Atom'

export default {
  name: 'HomePage',
  components: {
    Heading1Atom
  }
}
</script>

<style scoped lang="scss">
.page-content {
  display: flex;
  float: right;
  width: calc(100% - rem(235px));
}
</style>