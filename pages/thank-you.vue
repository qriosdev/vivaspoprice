<template>
  <main>
    <section id="contact">
      <div class="row">
        <h1>Thank You</h1>
        <Divider setclass="center" />
        <p>We've received your message and will be in touch shortly.</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#contact {
  min-height: 90vh;
  display: flex;
  align-items: center;

  .row {
    text-align: center;
    max-width: 600px;
  }

  p {
    margin-bottom: 4rem;
  }
}
</style>
