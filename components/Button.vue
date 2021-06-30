<template>
  <div class="btn">
    <nuxt-link v-if="internal" :to="link" :class="setclass" :target="target"
      ><i
        v-if="icon"
        class="btn-icon"
        v-html="require(`~/assets/icon/${icon}?include`)"
      ></i
      >{{ text }}</nuxt-link
    >

    <a v-else :href="link" :class="setclass" :target="target">
      <i
        v-if="icon"
        class="btn-icon"
        v-html="require(`~/assets/icon/${icon}?include`)"
      ></i
      >{{ text }}</a
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
      default: '_self',
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
@mixin btn($background, $color, $border) {
  background-color: $background;
  color: $color;
  text-align: center;
  text-decoration: none;
  padding: 1em 2em;
  margin-bottom: 1.5rem;
  border-radius: 100px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 2px solid $border;
  transition: all 0.3s ease-in-out;
}

.btn-primary {
  @include btn($red, $white, $red);

  &:hover {
    background-color: $white;
    border-color: $white;
    color: $red;

    .btn-icon ::v-deep svg {
      path,
      circle {
        fill: $red;
        stroke: $red;
      }
    }
  }
}

.btn-secondary-white {
  @include btn(transparent, $white, $white);

  &:hover {
    background-color: $white;
    color: $black;

    .btn-icon ::v-deep svg {
      path,
      circle {
        fill: $black;
        stroke: $black;
      }
    }
  }
}

.btn-secondary-black {
  @include btn(transparent, $black, $black);

  &:hover {
    background-color: $black;
    color: $white;

    .btn-icon ::v-deep svg {
      path,
      circle {
        fill: $white;
        stroke: $white;
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
