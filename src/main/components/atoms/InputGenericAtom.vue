<template>
<div class="form__input">
  <label :for="inputName">{{ textLabel }}</label>
  <input
    :type="type" 
    :name="inputName" 
    :placeholder="placeholder" 
    :required="required"
    :value="value"
    @input="$emit('input', $event.target.value)"
    v-mask="mask"
  />
</div>
</template>

<script>
export default {
  name: 'InputGenericAtom',
  props: {
    textLabel: String,
    placeholder: String,
    inputName: String,
    type: String,
    value: String,
    required: {
      type: Boolean,
      default: false
    },
    mask: String
  }
}
</script>

<style scoped lang="scss">
.form__input {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: $font-default;

  & label {
    color: $color-primary;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: rem(3px);
    letter-spacing: rem(0.5px);
  }

  & input {
    font-size: 1rem;
    padding: rem(10px);
    border-radius: rem(6px);
    outline: none;
    border-color: $color-gray;
    border-width: rem(1px)
  }
}
</style>