<template>
  <article>
    <section
      id="hero"
      :style="`background-image: url(${require(`~/assets/img/${article.image}`)})`"
    >
      <div class="row">
        <h1>{{ article.title }}</h1>
      </div>
    </section>
    <section id="blog-content">
      <div class="row">
        <nuxt-content :document="article" />
      </div>
    </section>
    <section id="more">
      <div class="row">
        <BlogPrevNext :prev="prev" :next="next" />
      </div>
    </section>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blogs', params.blog).fetch()

    const [prev, next] = await $content('blogs')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.blog)
      .fetch()

    return { article, prev, next }
  },

  computed: {
    metaTitle() {
      return this.article.title
    },
    metaDescription() {
      return this.article.description
    },
    metaImage() {
      return process.env.baseUrl + require(`~/assets/img/${this.article.image}`)
    },
  },
}
</script>

<style lang="scss" scoped>
#hero {
  background-size: cover;
  background-color: rgba($black, 0.7);
  background-blend-mode: overlay;
  background-position: 50%;
  padding: calc(50px + 10vw) 0;

  h1 {
    color: $white;
    text-align: center;
    letter-spacing: 1px;
  }
}

#blog-content {
  .row {
    max-width: 650px;
  }
}

#more {
  background-color: #f5f5f5;
  padding: 1em 0;
}
</style>
