<template>
  <section id="optin">
    <div class="row">
      <h2>Join our VIP club for exclusive offers</h2>
      <form ref="form" @submit.prevent="handleOptin">
        <input
          v-if="show"
          ref="input"
          v-model="email"
          type="email"
          :placeholder="placeholder"
          minlength="5"
          maxlength="100"
          required
        />
        <button ref="button" type="submit">{{ button }}</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      placeholder: 'Email',
      show: true,
      button: 'Count Me In',
      success: false,
      error: false,
    }
  },

  methods: {
    async handleOptin() {
      try {
        const request = await fetch('/.netlify/functions/mc-optin', {
          method: 'post',
          body: JSON.stringify({
            email: this.email,
          }),
        })

        const response = await request.json()
        console.log(response)

        if (response === 'success') {
          this.show = false
          this.button = 'Thank you for joining!'
          this.$refs.button.setAttribute('disabled', true)
        }

        if (response === 'invalid') {
          this.email = ''
          this.placeholder = 'Enter a valid email'
          this.$refs.input.classList.add('error', 'shake')
          setTimeout(() => {
            this.$refs.input.classList.remove('shake')
          }, 1100)
        }
      } catch (error) {
        console.log(error)
      }
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

      &[disabled] {
        cursor: unset;
      }
    }
  }

  .error {
    border: 3px solid $coral;
  }

  .shake {
    animation: shake 1s linear;
  }

  @keyframes shake {
    0% {
      transform: translateX(-1%);
    }
    10% {
      transform: translateX(2%);
    }
    20% {
      transform: translateX(-2%);
    }
    40% {
      transform: translateX(3%);
    }
    50% {
      transform: translateX(-3%);
    }
    60% {
      transform: translateX(2%);
    }
    70% {
      transform: translateX(-2%);
    }
    80% {
      transform: translateX(1%);
    }
    90% {
      transform: translateX(-1%);
    }
    100% {
      transform: translateX(0);
    }
  }
}
</style>
