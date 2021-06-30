<template>
  <picture v-if="image">
    <source :srcSet="require(`~/assets/img/${image}?webp`)" type="image/webp" />
    <source :srcSet="require(`~/assets/img/${image}`)" type="image/jpeg" />
    <img :src="require(`~/assets/img/${image}`)" :class="setclass" :alt="alt" />
  </picture>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    setclass: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.full-width {
  width: 100%;
}
</style>
