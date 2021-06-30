<template>
  <section id="not-found">
    <div class="row">
      <h1>404</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Button text="Go to homepage" link="/" setclass="btn-primary" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
#not-found {
  background-image: url('~assets/img/bg-hero.jpg');
  background-size: cover;
  background-color: rgba($black, 0.8);
  background-blend-mode: overlay;
  background-position: top center;
  color: $white;
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;

  h1 {
    font-size: 20vw;
    margin-bottom: 0;
    line-height: 1;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1.6em;
  }
}
</style>
