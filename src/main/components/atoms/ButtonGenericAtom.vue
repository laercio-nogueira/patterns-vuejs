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
  font-family: $font-default;
  color: $color-white;
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  width: 100%;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>