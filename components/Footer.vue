<template>
  <footer>
    <div class="row">
      <div class="footer-menu">
        <nuxt-link to="/blog/">BLOG</nuxt-link>
        <nuxt-link to="/privacy-policy/">PRIVACY POLICY</nuxt-link>
        <nuxt-link to="/terms-conditions/">TERMS AND CONDITIONS</nuxt-link>
      </div>
      <div class="copyright">
        ALL RIGHTS RESERVED @ CHATLINEMATE {{ getCurrentYear() }}
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    getCurrentYear() {
      const currentYear = new Date()
      const fullYear = currentYear.getFullYear()
      return fullYear
    },
  },
}
</script>

<style lang="scss" scoped>
.row {
  text-align: center;
  font-size: 0.8rem;
  padding: 2em 0;
  line-height: 1;
}

a {
  margin: 1em;
  display: inline-block;
}

.copyright {
  padding: 1em 0;
}
</style>
