<template>
  <main>
    <section id="content">
      <div class="row title">
        <h1>{{ about.title }}</h1>
        <Divider setclass="center" />
      </div>
      <div class="row">
        <NuxtContent :document="about" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const about = await $content('about').fetch()
    return { about }
  },

  computed: {
    metaTitle() {
      return this.about.title
    },
    metaDescription() {
      return this.about.description
    },
  },
}
</script>

<style lang="scss" scoped>
#content {
  padding: calc(4rem + 8vw) 0;
  background-image: url('/shape-square.png');
  background-position: bottom left;
  background-size: cover;

  .row {
    max-width: 750px;
  }

  .title {
    margin-bottom: 3rem;
  }

  h1 {
    text-align: center;
  }
}
</style>
