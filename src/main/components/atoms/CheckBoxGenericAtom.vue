<template>
  <label class="checkbox__control">
    {{ textLabel }}
    <input type="checkbox" :value="value" :checked="checked" @change="$emit('change', $event.target.checked)">
    <span></span>
  </label>
</template>

<script>
export default {
  name: 'CheckBoxGenericAtom',
  props: {
    textLabel: String,
    value: String,
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
/* Customize the label (the container) */
.checkbox__control {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: $font-default;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;

    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }

  &:hover input ~ span {
    background-color: $color-gray;
  }

  & input:checked ~ span {
    background-color: #2196F3;
  }

  & input:checked ~ span:after {
    display: block;
  }

  & span:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}

</style>