<template>
  <footer>
    <div class="row">
      <div class="footer-menu">
        <nuxt-link to="/about/">About</nuxt-link>
        <nuxt-link to="/questions-answered/">Questions Answered</nuxt-link>
        <nuxt-link to="/privacy-policy/">Privacy Policy</nuxt-link>
        <nuxt-link to="/terms-of-service/">Terms of Service</nuxt-link>
        <nuxt-link to="/contact/">Contact</nuxt-link>
      </div>
      <div class="copyright">Copyright @ Upforfling.com</div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  background-color: #111144;

  .row {
    text-align: center;
    padding: 2em 0;
    line-height: 1;
    color: $white;

    @include on-desktop {
      display: flex;
      justify-content: space-between;
    }
  }

  a {
    margin: 0.5em;
    display: inline-block;
    color: $white;
  }

  .footer-menu {
    margin-bottom: 2rem;

    @include on-tablet {
      margin-bottom: 0;
    }
  }

  .copyright {
    padding: 1em 0;
  }
}
</style>
