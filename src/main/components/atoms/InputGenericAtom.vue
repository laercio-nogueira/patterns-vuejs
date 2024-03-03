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
  >
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
    }
  }
}
</script>

<style scoped lang="scss">
.form__input {
  display: flex;
  flex-direction: column;
  width: 100%;

  & label {
    color: $color-primary;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 3px;
    letter-spacing: 0.5px;
  }

  & input {
    font-size: 1rem;
    padding: 10px;
    border-radius: 6px;
    outline: none;
    border-color: $color-gray;
    border-width: 1px
  }
}
</style>