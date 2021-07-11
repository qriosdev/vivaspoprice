<template>
  <div class="blog-card">
    <nuxt-link :to="`/${url}/`">
      <Picture :image="image" setclass="full-width" />
      <h3>{{ title }}</h3>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    image: String,
    title: String,
  },
}
</script>

<style lang="scss" scoped>
.blog-card {
  background-color: $white;
  border-radius: 10px;
  overflow: hidden;

  a {
    display: block;
  }

  h3 {
    font-size: 1.1rem;
    padding: 0.5em 1.4em;
    letter-spacing: 0.4px;
    text-transform: uppercase;
  }
}
</style>
