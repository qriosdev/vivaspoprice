<template>
  <main>
    <section id="content">
      <div class="row title">
        <h1>Questions Answered</h1>
        <Divider setclass="center" />
      </div>
      <div class="row qboxes">
        <div v-for="q in questions" :key="q.question" class="qbox">
          <h2>
            <nuxt-link :to="`/${q.slug}/`">{{ q.question }}</nuxt-link>
          </h2>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const questions = await $content('questions')
      .sortBy('createdAt')
      .only(['question', 'slug'])
      .fetch()
    return { questions }
  },

  data() {
    return {
      metaTitle: 'Questions Answered | Up For Fling',
      metaDescription:
        "Looking for a quick fun but don't know where to start? Find answers on your questions right here!",
      metaImage: process.env.baseUrl + require('~/static/uff-hero.jpg'),
    }
  },
}
</script>

<style lang="scss" scoped>
#content {
  padding: calc(4rem + 8vw) 0;
  min-height: 90vh;

  .title {
    text-align: center;
    margin-bottom: 7%;
  }

  .qboxes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2rem;
  }

  .qbox {
    border: solid 1px $pink;
    padding: 1.6em;
    border-radius: 4px;

    h2 {
      font-size: 1.25rem;
      margin-bottom: 0;
    }
  }
}
</style>
