<template>
  <div class="toggle">
    <button class="toggle-title" @click="toggle">{{ title }}</button>
    <div class="toggle-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },

  methods: {
    toggle(e) {
      const title = e.target
      const body = title.nextElementSibling
      const bodyHeight = body.scrollHeight + 'px'

      title.classList.toggle('open')

      if (title.classList.contains('open')) {
        body.style.maxHeight = bodyHeight
      } else {
        body.style.maxHeight = '0'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.toggle {
  margin: 1em 0;
  color: $white;
  background-image: linear-gradient(
    90deg,
    rgba($red, 30%) 0%,
    rgba($black, 0%) 100%
  );

  &-title {
    display: block;
    text-align: left;
    color: $white;
    font-size: 1rem;
    font-weight: 700;
    background-color: transparent;
    width: 100%;
    padding: 1.25rem;
    padding-right: 3rem;
    position: relative;
    cursor: pointer;
    border: none;

    &::after {
      content: '+';
      color: $black;
      position: absolute;
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
      background-color: $white;
      top: 35%;
      right: 0.8em;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease;
    }

    &.open {
      &::after {
        transform: rotate(45deg);
      }
    }
  }

  &-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;

    & > * {
      padding: 0.5rem 1.25rem;
    }

    &.expand {
      max-height: 5000px;
    }
  }

  // @media (max-width: $mobile-screen) {
  //   &-title {
  //     font-size: 1.1rem;
  //   }
  // }
}
</style>
