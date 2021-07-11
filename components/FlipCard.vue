<template>
  <div class="flip-card">
    <div class="front">
      <i
        v-if="ficon"
        class="fc-icon"
        v-html="require(`~/assets/icon/${ficon}?include`)"
      ></i>
      <h3 class="title">{{ ftitle }}</h3>
      <p class="text">
        {{ ftext }}
      </p>
    </div>
    <div class="back">
      <h3 class="title">{{ btitle }}</h3>
      <p class="text">
        {{ btext }}
      </p>
      <a v-if="button && button.external" :href="button.url" class="fc-btn">{{
        button.text
      }}</a>
      <nuxt-link v-else :to="button.url" class="fc-btn">{{
        button.text
      }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ficon: {
      type: String,
      default: '',
    },
    ftitle: {
      type: String,
      default: '',
    },
    ftext: {
      type: String,
      default: '',
    },
    bicon: {
      type: String,
      default: '',
    },
    btitle: {
      type: String,
      default: '',
    },
    btext: {
      type: String,
      default: '',
    },
    button: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.flip-card {
  height: 300px;
  position: relative;
  perspective: 600px;
  margin-bottom: 1em;

  .front,
  .back {
    width: 100%;
    height: 100%;
    padding: 2em;
    text-align: center;
    background-color: #3398db;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    overflow: hidden;
    transition: transform 0.8s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > * {
      color: $white;
    }
  }

  .back {
    background-color: #9b59b6;
    transform: rotateX(180deg);
  }

  &:hover .front {
    transform: rotateX(-180deg);
  }
  &:hover .back {
    transform: rotateX(0deg);
  }

  &::v-deep svg {
    width: 35px;
    height: 35px;
    margin-bottom: 1em;
  }

  .title {
    margin-bottom: 1em;
  }

  .text {
    font-size: 0.9rem;
  }

  .fc-btn {
    color: $white;
    margin-top: 1em;
    padding: 0.4em 0.6em;
    border: 2px solid $white;
    border-radius: 100px;
  }
}
</style>
