<template>
  <transition name="fade-slide">
    <div
      v-if="open"
      class="transition-wrapper"
      data-test-slider-container
    >
      <div
        class="slider-backdrop"
        data-test-slider-backdrop
        @click.self="$emit('close')"
      />
      <div
        class="slider"
        role="dialog"
      >
        <header
          class="slider-header"
          :class="{ 'has-content': hasHeaderSlot }"
        >
          <i
            v-if="showClose"
            class="fa fa-close icon-close"
            aria-label="Close slider"
            data-test-slider-close-button
            @click.self="$emit('close')"
          />
          <div class="header-wrapper">
            <slot name="header" />
          </div>
          <div
            v-show="showOverlay"
            class="scroll-overlay"
          />
        </header>
        <div
          class="slider-scroll-area slider-content"
          data-test-slider-scroll-area
          @scroll="scrollHandler"
        >
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "SliderAtom",
    props: {
      open: {
        type: Boolean,
        default: false,
      },
      showClose: {
        type: Boolean,
        default: true,
      },
    },

    data: () => ({
      showOverlay: false,
    }),

    computed: {
      hasHeaderSlot() {
        return !!this.$slots.header;
      },
    },

    methods: {

      scrollHandler(event) {
        this.showOverlay = event.target.scrollTop > 0;
      },
    },
  };
</script>

<style lang="scss" scoped>

  .fade-slide-enter-active {
    transition-duration: $animation-duration;

    .slider-backdrop {
      transition: opacity $animation-duration;
    }

    .slider {
      transition: transform $animation-duration;
    }
  }

  .fade-slide-leave-active {
    transition-duration: $animation-duration;

    .slider-backdrop {
      transition: opacity $animation-duration;
    }

    .slider {
      transition: transform $animation-duration;
    }
  }

  .fade-slide-enter {
    .slider-backdrop {
      opacity: 0;
    }

    .slider {
      transform: translateX(100vw);
    }
  }

  .fade-slide-leave-to {
    .slider-backdrop {
      opacity: 0;
    }

    .slider {
      transform: translateX(100vw);
    }
  }

  .slider {
    background-color: $color-white;
    bottom: 0;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding-right: rem(27px);
    position: fixed;
    right: 0;
    top: 0;
    transform: translateX(0);
    width: rem(630px);
    z-index: 51;

    .slider-header {
      flex: 0;
      padding: 0 0 rem(120px);
      position: relative;

      &.has-content {
        padding: rem(67px) 0 rem(56px);
      }

      .icon-close {
        color: $color-grey-60;
        cursor: pointer;
        display: block;
        position: absolute;
        right: 0;
        top: rem(27px);
        z-index: 53;

        &:hover {
          opacity: .8;
        }
      }

      .back {
        color: $color-grey-60;
        cursor: pointer;
        display: block;
        left: rem(31px);
        position: absolute;
        top: rem(27px);
        z-index: 53;

        &:hover {
          opacity: .8;
        }
      }

      .header-wrapper {
        padding: 0 rem(43px) 0 rem(64px);
      }

      .scroll-overlay {
        // sass-lint:disable no-color-literals
        background-image: linear-gradient(to bottom, $color-white 20%, rgba(255, 255, 255, 0) 100%);
        bottom: rem(-80px);
        height: rem(80px);
        left: 0;
        pointer-events: none;
        position: absolute;
        width: 100%;
        z-index: 52;
      }
    }

    .slider-scroll-area {
      color: $color-grey-60;
      flex: 1;
      font-family: $font-default-regular;
      font-size: rem(16px);
      line-height: rem(24px);
      margin-bottom: rem(20px);
      overflow-y: auto;
      padding: 0 rem(43px) 0 rem(64px);

      &::-webkit-scrollbar {
        width: 6px;
      }

      // sass-lint:disable no-vendor-prefixes
      &::-webkit-scrollbar-track {
        background: transparent;
      }

      // sass-lint:disable no-vendor-prefixes
      &::-webkit-scrollbar-thumb {
        background-color: $color-grey;
        border-radius: 6px;
      }
    }
  }

  .slider-backdrop {
    background-color: rgba(0, 0, 0, .6);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 50;
  }

  ::v-deep {
    .ps__rail-x,
    .ps__rail-y {
      // sass-lint:disable no-important
      background-color: transparent !important;
      opacity: 1 !important;
      z-index: 53 !important;

      .ps__thumb-x,
      .ps__thumb-y {
        // sass-lint:disable no-important
        background-color: $color-grey-20 !important;
        width: 6px !important;
      }
    }
  }

  .slider-open {
    overflow-y: hidden;
  }
</style>
