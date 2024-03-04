<template>
  <p class="heading1">{{ text }}</p>
</template>

<script>
export default {
  name: 'Heading1Atom',
  props: {
    text: String
  }
}
</script>

<style scoped lang="scss">
.heading1 {
  font-size: rem(28px);
  font-weight: bold;
  color: #555;
  margin: 0;
  padding: 0;
  text-align: left;
  line-height: rem(20px);
  font-family: $font-default;
}
</style>