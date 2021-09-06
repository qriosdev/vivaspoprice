<template>
  <main>
    <section id="content">
      <div class="row">
        <h1>{{ privacy.title }}</h1>
        <Divider setclass="center" />
        <NuxtContent :document="privacy" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const privacy = await $content('legal/privacy-policy').fetch()
    return { privacy }
  },

  computed: {
    metaTitle() {
      return this.privacy.title
    },
    metaDescription() {
      return this.privacy.description
    },
  },
}
</script>

<style lang="scss" scoped>
#content {
  padding: calc(4rem + 8vw) 0;

  h1 {
    text-align: center;
  }
}
</style>
