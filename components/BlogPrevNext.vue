<template>
  <div class="prev-next">
    <div class="prev">
      <nuxt-link v-if="prev" :to="`/blog/${prev.slug}/`">{{
        prev.title
      }}</nuxt-link>
    </div>
    <div class="next">
      <nuxt-link v-if="next" :to="`/blog/${next.slug}/`">{{
        next.title
      }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style lang="scss" scoped>
.prev-next {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1em;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  a {
    font-weight: 700;
    padding: 1em 0;
  }

  .prev {
    a::before {
      content: '←';
      margin-right: 0.5em;
    }
  }

  .next {
    text-align: right;

    a::after {
      content: '→';
      margin-left: 0.5em;
    }
  }
}
</style>
