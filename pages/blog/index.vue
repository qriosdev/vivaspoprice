<template>
  <main>
    <section id="articles">
      <div class="row">
        <h1>BLOG</h1>
        <div class="blogs">
          <BlogCard
            v-for="article in articles"
            :key="article.slug"
            :url="`blog/${article.slug}`"
            :image="article.image"
            :title="article.title"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('blogs').sortBy('createdAt').fetch()
    return { articles }
  },

  data() {
    return {
      metaTitle: 'Blog | DailyChatLine',
      metaDescription:
        "Check out DailyChatLine's blog to find cool tips and info about phone chat, phone hookup, and much more.",
      metaImage:
        process.env.baseUrl + require('~/assets/img/phonegirl-in-red.jpg'),
    }
  },
}
</script>

<style lang="scss" scoped>
#articles {
  background-color: $light;

  h1 {
    text-align: center;
    margin-bottom: 2em;
  }

  .blogs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2em;
  }
}
</style>
