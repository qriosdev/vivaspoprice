<template>
  <div class="divider" :class="setclass"></div>
</template>

<script>
export default {
  props: {
    setclass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.divider {
  height: 1px;
  background-color: $green;
  max-width: 70px;
  margin: 2rem 0;
}

.center {
  margin: 2rem auto;
}
</style>
