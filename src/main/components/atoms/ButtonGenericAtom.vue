<template>
  <button 
    type="submit" 
    :disabled="disabled"
    @click="$emit('click')"
    :style="{ 'width': width, 'float': float}"
    class="btn btn-primary"
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
    },
    width: {
      type: String,
      default: '100%'
    },
  }
}
</script>

<style scoped lang="scss">
button {
  background-color: $color-primary;
  font-family: $font-default;
  color: $color-white;
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>