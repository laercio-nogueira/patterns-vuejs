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
  font-size: rem(16px);
  color: #07448f;
  margin: rem(2px) 0px;
  padding: 0;
  line-height: rem(20px);
  font-family: $font-default;
}
</style>