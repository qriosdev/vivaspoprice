<template>
  <div class="counter">
    <div class="counter-target">{{ number }}{{ suffix }}</div>
    <div class="counter-title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
    suffix: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.counter {
  &-target {
    font-size: 4rem;
    color: $red;
    line-height: 1;
    margin-bottom: 0.2em;
  }

  &-title {
    font-size: 1.1rem;
    letter-spacing: 1px;
  }
}
</style>
