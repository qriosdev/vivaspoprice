<template>
  <main>
    <section id="contact">
      <div class="row">
        <h1>Contact</h1>
        <Divider setclass="center" />
        <p>
          If you have any questions, please, send us a message using the form
          below:
        </p>
        <Contact />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    metaTitle() {
      return `Contact us | Up For Fling`
    },
    metaDescription() {
      return `Contact Up For Fling today`
    },
  },
}
</script>

<style lang="scss" scoped>
#contact {
  min-height: 90vh;

  .row {
    text-align: center;
    max-width: 600px;
  }

  p {
    margin-bottom: 4rem;
  }
}
</style>
