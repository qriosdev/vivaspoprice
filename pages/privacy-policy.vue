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
      metaTitle: 'Privacy Policy | Dailychat',
      metaDescription:
        'This Privacy Policy (“Policy”) explains how information about you or associated with you (“personal information”) is collected, used and disclosed by DailyChatLine.',
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
