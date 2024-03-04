<template>
<Transition name="bounce">
  <div :class="`alert alert-${type} popup-alert`" role="alert" v-show="show">
    {{ message }}
  </div>
</Transition>
  
</template>

<script>
export default {
  name: 'AlertGenericAtom',
  data: () => ({
    show: false,
    message: '',
    type: 'success',
  }),
  watch: {
    show (value) {
      if (value) {
        setTimeout(() => {
          this.show = false
        }, 3000)
      }
    }
  },
  mounted() {
    this.EventEmitter.$on('openAlert', ({ message, type }) => {
      this.message = message
      this.type = type
      this.show = true
    })
  }
}
</script>

<style scoped lang="scss">
.popup-alert {
  float: right;
  position: fixed;
  z-index: 999;
  top: 60px;
  right: 20px;
  font-family: $font-default;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>