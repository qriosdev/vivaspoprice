<template>
  <form name="contact" method="POST" data-netlify="true" action="/thank-you/">
    <div>
      <label for="name">Your name</label>
      <input
        id="name"
        type="text"
        name="name"
        required
        minlength="2"
        maxlength="100"
        placeholder="Name"
      />
    </div>
    <div>
      <label for="email">Your email</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        minlength="2"
        maxlength="100"
        placeholder="Email"
      />
    </div>
    <div>
      <label for="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        minlength="10"
        required
        placeholder="Message"
      ></textarea>
    </div>
    <input type="hidden" name="form-name" value="contact" />
    <div class="btn-contact">
      <button type="submit">Send</button>
    </div>
  </form>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#contact {
  label {
    display: none;
    color: $coral;
  }

  input,
  textarea {
    display: block;
    border: none;
    border-bottom: 1px solid $coral;
    padding: 1em;
    width: 100%;
    font-size: 1rem;
    font-family: inherit;
    background: transparent;
    color: $white;
    margin-bottom: 1rem;

    &:focus {
      outline: none;

      &::placeholder {
        color: rgba($coral, 30%);
      }
    }

    &::placeholder {
      color: $coral;
    }
  }

  .btn-contact {
    display: flex;
    justify-content: flex-end;
  }

  button {
    @include btn($red, $white, $red, $shadow: true);

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
