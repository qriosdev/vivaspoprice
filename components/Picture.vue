<template>
  <picture v-if="image">
    <source :srcSet="require(`~/assets/img/${image}?webp`)" type="image/webp" />
    <source :srcSet="require(`~/assets/img/${image}`)" type="image/jpeg" />
    <img
      ref="img"
      :src="require(`~/assets/img/${image}`)"
      :class="setclass"
      :alt="alt"
      @load="setImgSize()"
    />
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

  methods: {
    setImgSize() {
      const img = this.$refs.img
      img.width = img.clientWidth
      img.height = img.clientHeight
    },
  },
}
</script>

<style lang="scss" scoped>
.full-width {
  width: 100%;
}

.round {
  border-radius: 50%;
  max-width: 200px;
  height: auto;
}

.br5 {
  border-radius: 5px;
}

.mb1 {
  margin-bottom: 1rem;
}

.center {
  margin: auto;
}
</style>
