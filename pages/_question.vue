<template>
  <main>
    <section id="content">
      <div class="row">
        <h1>{{ question.question }}</h1>
        <Divider setclass="center" />
        <NuxtContent :document="question" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const question = await $content('questions', params.question).fetch()
    return { question }
  },

  computed: {
    metaTitle() {
      return this.question.question
    },
    metaDescription() {
      return this.question.description
    },
  },
}
</script>

<style lang="scss" scoped>
#content {
  padding: calc(4rem + 8vw) 0;
  min-height: 90vh;

  h1 {
    text-align: center;
  }
}
</style>
