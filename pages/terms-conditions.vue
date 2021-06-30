<template>
  <main>
    <section id="hero">
      <div class="row">
        <h1>
          {{ terms.title }}
        </h1>
      </div>
    </section>

    <section id="content">
      <div class="row">
        <NuxtContent :document="terms" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const terms = await $content('legal/terms-conditions').fetch()
    return { terms }
  },

  data() {
    return {
      metaTitle: 'Terms & Conditions | ChatLineMate',
      metaDescription:
        'Welcome to CHATLINEMATE, the best website to meet hots singles for phone chat, hookup, or more. See our terms.',
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
  padding: calc(50px + 5vw) 0;

  .row {
    color: $white;
    text-align: center;
  }
}
</style>
