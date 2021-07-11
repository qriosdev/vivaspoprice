<template>
  <header>
    <div class="row">
      <nuxt-link to="/" class="logo">DAILYCHATLINE</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  background-color: $black;
  padding: 0.4rem;

  .row {
    text-align: center;
  }

  .logo {
    font-family: 'Oswald', sans-serif;
    color: $white;
    font-size: 2.1rem;
  }
}
</style>
