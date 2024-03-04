<template>
  <label class="switch">
    <input type="checkbox" :checked="checked" @change="$emit('change', $event.target.checked)">
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {
  name: 'ToggleSwitchAtom',
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: rem(60px);
  height: rem(34px);

  & input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
      background-color: $color-primary;
    }

    &:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $color-grey-medium;
  -webkit-transition: .4s;
  transition: .4s;

  &:before {
    position: absolute;
    content: "";
    height: rem(26px);
    width: rem(26px);
    left: rem(4px);
    bottom: rem(4px);
    background-color: $color-white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  &.round {
    border-radius: rem(34px);

    &:before {
      border-radius: 50%;
    }
  }
}
</style>