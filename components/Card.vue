<template>
  <nuxt-link :to="url" class="card" :style="styling">
    <div class="card-stars" :style="`--rating: ${rating}`"></div>
    <p class="card-title h3">{{ title }}</p>
    <p class="card-subtitle">{{ subtitle }}</p>
    <div class="card-icon"><i>⌝</i></div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
    rating: {
      type: String,
      default: '5',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    background: {
      type: String,
      default: '',
    },
  },

  computed: {
    bgImg() {
      return this.background
    },

    styling() {
      return `background-image: url('${this.background}'), radial-gradient(circle at bottom right, rgba(254, 73, 67, 0.8) 0%, rgba(26, 24, 68, 0.8) 100%);`
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  background-blend-mode: overlay;
  // background-image: var(--background),
  //   radial-gradient(
  //     circle at bottom right,
  //     rgba($red, 80%) 0%,
  //     rgba($blue, 80%) 100%
  //   );

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  box-shadow: 0px 20px 55px -10px rgba($red, 30%);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  min-height: calc(180px + 2vw);
  position: relative;

  & > * {
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    // background-image: var(--background),
    //   radial-gradient(
    //     circle at bottom right,
    //     rgba($red, 90%) 0%,
    //     rgba($blue, 80%) 100%
    //   );
    box-shadow: 0px 40px 120px -10px rgba($red, 30%);
    transition: all 0.3s ease;
  }

  &:hover > *:not(:last-child) {
    transform: translateY(-10px);
  }

  p {
    margin: 0;
    text-align: center;
    color: $white;
  }

  &-title {
    @include fluid-typography(30, 40);
  }

  &-icon {
    position: absolute;
    bottom: 8px;
    right: 8px;
    color: $white;
    font-size: 1.5rem;
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
    border-radius: 100%;

    i {
      width: 100%;
      height: 100%;
      transform: rotate(45deg) translate(2px, -9px);
    }
  }
}
</style>
