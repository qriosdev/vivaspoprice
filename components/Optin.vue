<template>
  <section id="optin">
    <div class="row">
      <h2>Join our VIP club for exclusive offers</h2>
      <form @submit.prevent="handleOptin">
        <input
          type="email"
          placeholder="Email"
          minlength="5"
          maxlength="100"
          required
        />
        <button type="submit">Count Me In</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    handleOptin() {
      console.log('handled')
    },
  },
}
</script>

<style lang="scss" scoped>
#optin {
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba($red, 0.8) 100%
  );

  @include on-tablet {
    padding: 3vw 0;
  }

  .row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: center;
    grid-gap: 1rem;
  }

  h2 {
    font-family: $font-rw;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0;
    text-align: center;

    @include on-desktop {
      text-align: left;
    }
  }

  form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;

    & > * {
      width: 100%;
    }

    input {
      padding: 1em;
      border: none;
      border-radius: 3px;
      font-family: inherit;
      font-size: 1rem;
      outline: none;
      max-height: 67px;
    }

    button {
      @include btn(transparent, $white, $white, $shadow: false);
      margin: 0;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
