<template>
  <p class="heading5">{{ text }}</p>
</template>

<script>
export default {
  name: 'Heading5Atom',
  props: {
    text: String
  }
}
</script>

<style scoped lang="scss">
.heading5 {
  font-size: 16px;
  color: #07448f;
  margin: 2px 0px;
  padding: 0;
  line-height: 20px;
  font-family: $font-default;
}
</style>