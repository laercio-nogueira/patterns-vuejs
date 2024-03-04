<template>
  <transition name="fade-toast">
    <div
      v-if="startTransition"
      class="transition-wrapper">

      <div
        class="toast-backdrop"
        data-test-toast-backdrop
        @click.self="close"></div>

      <div
        class="toast"
        :class="{'toast--swipe': isSwipeMode}"
        role="dialog"
        @touchstart="onSwipeStart"
        @touchend="onSwipeEnd"
      >

        <div
          v-if="isSwipeMode"
          class="swipe-anchor" />

        <slot name="content">
          <i
            class="icon-close"
            aria-label="Close toast"
            data-test-toast-close-button
            @click.self="close" />

          <h4
            v-if="title"
            data-test-toast-title
            class="toast-title">

            {{ title }}
          </h4>

          <slot name="customTitle" />

          <div
            class="toast-content"
            data-test-toast-content>

            <slot />
          </div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
  const ESC = 27;

  export default {
    name: 'ToastAtom',

    props: {
      open: {
        type: Boolean,
        default: true,
      },
      title: {
        type: String,
        default: null,
      },
      icon: {
        type: String,
        default: null,
      },
      variant: {
        type: String,
        default: 'default',
      },
    },

    data: () => ({
      startTransition: false,
      showOverlay: false,
      touchstartY: 0,
      touchendY: 0,
    }),

    computed: {
      isSwipeMode() {
        return this.variant === 'swipe';
      },
    },

    watch: {
      open() {
        if (this.open) {
          this.openToastActions();
        } else {
          this.closeToastActions();
        }
      },
    },

    mounted() {
      if (this.open) {
        this.openToastActions();
      }

      this.startTransition = true;
    },

    beforeUnmount() {
      this.closeToastActions();
    },

    methods: {
      escKeyHandler(event) {
        if (event.keyCode === ESC) {
          this.close();
        }
      },

      openToastActions() {
        document.body.classList.add('toast-open');
        document.addEventListener('keyup', this.escKeyHandler);
      },

      closeToastActions() {
        setTimeout(() => {
          document.body.classList.remove('toast-open');
        }, 100);

        document.removeEventListener('keyup', this.escKeyHandler);
      },

      close() {
        this.$emit('close');
      },

      onSwipeStart(event) {
        this.touchstartY = event.changedTouches[0].screenY;
      },

      onSwipeEnd(event) {
        this.touchendY = event.changedTouches[0].screenY;
        this.handleSwipeDown();
      },

      handleSwipeDown() {
        if (!this.isSwipeMode) return;

        if (this.touchendY > this.touchstartY) {
          this.close();
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  $animation-duration: .5s;

  .fade-toast-enter-active {
    transition-duration: $animation-duration;

    .toast-backdrop {
      transition: opacity $animation-duration;
    }

    .toast {
      transition: transform $animation-duration;
    }
  }

  .fade-toast-leave-active {
    transition-duration: $animation-duration;

    .toast-backdrop {
      transition: opacity $animation-duration;
    }

    .toast {
      transition: transform $animation-duration;
    }
  }

  .fade-toast-enter {
    .toast-backdrop {
      opacity: 0;
    }

    .toast {
      transform: translateY(100vh);
    }
  }

  .fade-toast-leave-to {
    .toast-backdrop {
      opacity: 0;
    }

    .toast {
      transform: translateY(100vh);
    }
  }

  .toast {
    background: $color-white;
    bottom: 0;
    display: flex;
    flex-direction: column;
    left: 0;
    padding: rem(48px) rem(30px) rem(41px) rem(30px);
    position: fixed;
    transform: translateY(0);
    width: 100%;
    z-index: 101;

    &--swipe {
      border-radius: rem(4px) rem(4px) 0 0;
      padding: 0;
    }

    .swipe-anchor {
      background-color: $color-gray-13;
      border-radius: rem(20px);
      height: rem(4px);
      margin: rem(8px) auto;
      width: rem(24px);
    }

    .icon-close {
      color: $color-gray-60;
      cursor: pointer;
      display: block;
      position: absolute;
      right: rem(30px);
      top: rem(30px);
      z-index: 103;

      &:hover {
        opacity: .8;
      }
    }
  }

  .toast-backdrop {
    // sass-lint:disable no-color-literals
    background-color: rgba(0, 0, 0, .6);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
  }
</style>

<style lang="scss">
  .toast-open {
    overflow-y: hidden;
  }

  .toast-title {
    color: $color-black;
    font-stretch: normal;
    font-style: normal;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.4;
    margin-bottom: rem(16px);
  }

  .body-text {
    color: $color-gray-60;
    margin: 0;
  }
</style>
