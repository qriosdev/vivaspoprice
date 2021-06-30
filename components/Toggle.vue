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
  margin: 0.5em 0;
  text-align: left;

  &-title {
    @include fluid-typography(18, 22);
    color: $black;
    background-color: $white;
    text-align: left;
    display: block;
    width: 100%;
    padding: 1rem 2.5rem;
    position: relative;
    cursor: pointer;
    border: none;
    outline: rgba($grey, 0.3) solid 1px;

    &::before {
      content: '+';
      color: $red;
      position: absolute;
      top: 50;
      left: 0.8em;
      transition: all 0.3s ease;
    }

    &.open {
      &::before {
        transform: rotate(45deg);
      }
    }
  }

  &-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;

    & > div {
      padding: 1rem 2.5rem;
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
