<template>
  <div class="btn">
    <nuxt-link
      v-if="internal && !hash"
      :to="link"
      :class="setclass"
      :target="target || '_self'"
      >{{ text }}</nuxt-link
    >

    <nuxt-link
      v-else-if="hash"
      :to="{ hash: hash }"
      :class="setclass"
      target="_self"
      >{{ text }}</nuxt-link
    >

    <a v-else :href="link" :class="setclass" :target="target || '_blank'">
      {{ text }}</a
    >
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: process.env.phone,
    },
    hash: {
      type: String,
      default: '',
    },
    setclass: {
      type: String,
      default: 'btn-primary',
    },
    text: {
      type: String,
      default: 'Call Now',
    },
    target: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    internal: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.btn-primary {
  @include btn($red, $white, $red, $shadow: true);

  &:hover {
    box-shadow: 0px 2px 30px 0px rgba($red, 70%);

    .btn-icon ::v-deep svg {
      path,
      circle {
        fill: $red;
        stroke: $red;
      }
    }
  }
}

.btn-icon ::v-deep svg {
  max-width: 25px;
  fill: $white;
  margin-bottom: -5px;
  margin-right: 0.5em;
  transition: all 0.3s ease-in-out;

  path,
  circle {
    stroke: $white;
    stroke-width: 10;
    transition: all 0.3s ease-in-out;
  }
}
</style>
