<template>
  <main>
    <section id="hero">
      <div class="row">
        <h1>Blog</h1>
      </div>
    </section>
    <section id="articles">
      <div class="row">
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
      metaTitle: 'Blog | ChatLineMate',
      metaDescription:
        "Read ChatLineMate's blog to get useful tips and info about phone chat, phone hookup, and much more.",
      metaImage: process.env.baseUrl + require('~/assets/img/bg-hero.jpg'),
    }
  },
}
</script>

<style lang="scss" scoped>
#hero {
  background-image: url('~assets/img/bg-hero.jpg');
  background-size: cover;
  background-color: rgba(9, 10, 10, 0.8);
  background-blend-mode: overlay;
  background-position: 50%;
  padding: calc(30px + 10vw) 0;

  h1 {
    text-align: center;
    color: $white;
  }
}

#articles {
  background-color: #f5f5f5;

  h1 {
    text-align: center;
  }

  .blogs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2em;
  }
}
</style>
