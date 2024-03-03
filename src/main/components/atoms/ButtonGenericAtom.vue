<template>
  <button 
    type="submit" 
    :disabled="disabled"
    @click="$emit('click')"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: 'ButtonGenericAtom',
  props: {
    buttonText: String,
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
button {
  background-color: $background-primary;
  color: $color-primary;
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  // font-size: 1.2rem;
  // background-color: #055b9b;
  // color: #fff;
  // border-radius: 6px;
  // border: 0px;
}
</style>