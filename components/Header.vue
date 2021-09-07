<template>
  <header>
    <section id="nav">
      <div class="row">
        <nuxt-link
          to="/"
          class="logo"
          aria-label="logo"
          @click.native="closeMenu"
        >
          <NuxtPicture
            ref="img"
            format="webp"
            src="/upforfling-logo.png"
            width="100"
            height="46"
            alt="Up For Fling"
          />
        </nuxt-link>
        <button ref="ham" aria-label="button" @click="toggleMenu">
          <div ref="bars"></div>
        </button>
      </div>
    </section>
    <section id="menu" ref="menu" class="hide">
      <div class="row">
        <nuxt-link to="/hookup/" @click.native="toggleMenu">Hookup</nuxt-link>
        <nuxt-link to="/phone-sex/" @click.native="toggleMenu"
          >Phone Sex</nuxt-link
        >
        <nuxt-link to="/cam-girls/" @click.native="toggleMenu"
          >Cam Girls</nuxt-link
        >
      </div>
    </section>
  </header>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      const menu = this.$refs.menu
      const bars = this.$refs.bars

      menu.classList.toggle('hide')
      bars.classList.toggle('open')
    },

    closeMenu() {
      const menu = this.$refs.menu
      const bars = this.$refs.bars

      if (!menu.classList.contains('hide')) {
        menu.classList.toggle('hide')
        bars.classList.toggle('open')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  z-index: 99;
  width: 100vw;
}

#nav {
  padding: 1rem 0;
  position: relative;
  z-index: 999;

  .row {
    width: 95%;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    max-width: 100px;
    display: flex;
    align-items: center;

    & > * {
      display: flex;
    }
  }

  button {
    position: relative;
    width: 50px;
    height: 50px;
    justify-self: end;
    background-color: rgba($red, 0);
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-out;
    cursor: pointer;

    div {
      width: 55%;
      height: 2px;
      background-color: $coral;
      transition: all 0.5s ease-out;

      &::before,
      &::after {
        content: '';
        width: 55%;
        height: 2px;
        background-color: $coral;
        position: absolute;
        top: 15px;
        left: 20px;
        transition: all 0.5s ease-out;
      }

      &::after {
        top: 32px;
      }
    }

    .open {
      &::before,
      &::after {
        left: 0px;
      }
    }
  }
}

#menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: $blue;
  z-index: 998;
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;

  .row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;
  }

  a {
    @include fluid-typography(28, 40);

    color: $white;
    font-weight: 700;
    width: 100%;
    border-bottom: 1px solid rgba($coral, 50%);
    padding: 0 0.4em;
    margin-bottom: 0.5em;
  }
}

.hide {
  opacity: 0;
  transform: translateX(100vw);
  overflow: hidden;
}
</style>
