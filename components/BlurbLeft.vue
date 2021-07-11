<template>
  <div class="blurb-left">
    <picture v-if="image" class="blurb-image">
      <source
        :srcSet="require(`~/assets/img/${image}?webp`)"
        type="image/webp"
      />
      <source :srcSet="require(`~/assets/img/${image}`)" type="image/jpeg" />
      <img :src="require(`~/assets/img/${image}`)" />
    </picture>

    <div
      v-if="icon"
      class="blurb-icon"
      v-html="require(`~/assets/icon/${icon}?include`)"
    ></div>

    <div class="blurb-content">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
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
    setclass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.blurb-left {
  margin: 1rem 0;
  display: flex;

  img {
    max-width: 175px;
    border-radius: 50%;
    margin-bottom: 1em;
  }

  .blurb-icon {
    background-color: $green;
    width: 60px;
    height: 60px;
    padding: 1em;
    border-radius: 50%;
    margin-right: 1em;
    display: flex;
    justify-content: center;
    align-items: center;

    &::v-deep svg {
      width: 30px;
    }
  }

  h3 {
    font-weight: 300;
  }
}
</style>
