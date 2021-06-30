<template>
  <main>
    <section id="hero">
      <div class="row">
        <h1>
          {{ privacy.title }}
        </h1>
      </div>
    </section>

    <section id="content">
      <div class="row">
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

  data() {
    return {
      metaTitle: 'Privacy Policy | ChatLineMate',
      metaDescription:
        'We place a very high level of importance on the privacy of our users. We do not sell, rent, or share any information you provide to us with any third party company.',
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
