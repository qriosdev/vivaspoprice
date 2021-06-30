<template>
  <header>
    <div class="row">
      <nuxt-link
        to="/"
        class="logo"
        v-html="require('~/assets/img/clm-logo.svg?include')"
      ></nuxt-link>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;

  .row {
    text-align: center;
    padding: 1rem 0;
  }

  .logo {
    ::v-deep svg {
      height: calc(1rem + 2vw);
    }
  }
}
</style>
