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
      metaTitle: 'Terms & Conditions | DailyChatLine',
      metaDescription:
        'This Agreement sets out your agreement with us with respect to your use of the Services as well as our ability to communicate with you.',
      metaImage:
        process.env.baseUrl + require('~/assets/img/phonegirl-in-red.jpg'),
    }
  },
}
</script>

<style lang="scss" scoped>
#hero {
  padding: 2vw 0;
  background-color: $light;

  h1 {
    margin-bottom: 0;
    text-align: center;
  }
}
</style>
