<template>
  <main>
    <section id="content">
      <div class="row">
        <h1>{{ terms.title }}</h1>
        <Divider setclass="center" />
        <NuxtContent :document="terms" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const terms = await $content('legal/terms-of-service').fetch()
    return { terms }
  },

  computed: {
    metaTitle() {
      return this.terms.title
    },
    metaDescription() {
      return this.terms.description
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
