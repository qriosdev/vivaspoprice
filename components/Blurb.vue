<template>
  <div class="blurb">
    <picture v-if="image" class="blurb-image">
      <source
        :srcSet="require(`~/assets/img/${image}?webp`)"
        type="image/webp"
      />
      <source :srcSet="require(`~/assets/img/${image}`)" type="image/jpeg" />
      <img :src="require(`~/assets/img/${image}`)" :alt="alt" />
    </picture>

    <div
      v-if="icon"
      class="blurb-icon"
      v-html="require(`~/assets/icon/${icon}?include`)"
    ></div>

    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.blurb {
  text-align: center;
  margin: 1rem 0 2rem;

  img {
    max-width: 175px;
    border-radius: 50%;
  }

  .blurb-icon {
    background-color: $white;
    width: 80px;
    height: 80px;
    padding: 1.2em;
    border-radius: 50%;
    margin: 1em auto;
  }

  p {
    color: $black;
  }
}
</style>
