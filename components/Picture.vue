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

  // computed: {
  //   getImgWidth() {
  //     const img = this.$refs.img
  //     return img.clientWidth
  //   },

  //   getImgHeight() {
  //     const img = this.$refs.img
  //     return img.clientHeight
  //   },
  // },

  methods: {
    setImgSize() {
      const img = this.$refs.img
      img.width = img.clientWidth
      img.height = img.clientHeight
    },
  },

  // mounted() {
  //   const img = this.$refs.img
  //   img.onload = () => {
  //     img.width = this.getImgWidth
  //     img.height = this.getImgHeight
  //   }
  // },

  // updated() {
  //   const img = this.$refs.img
  //   img.width = img.clientWidth
  //   img.height = img.clientHeight
  // },
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
</style>
