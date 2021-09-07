<template>
  <main>
    <section id="hero">
      <div class="row">
        <h1>Cam Girls</h1>
        <p class="sub-title">
          Looking for some online fun with hot girls who like to perform for
          you? Check below for the best cam girls sites at the moment based on
          our monthly assessment and user reviews on the web.
        </p>

        <Button
          link="/find-cam-girls/"
          text="Watch Live Now"
          :internal="false"
        />
      </div>
    </section>

    <Optin />

    <section id="cam">
      <div class="row">
        <div class="column">
          <h2>Cam Sites</h2>
          <Divider />
          <p>
            What are cam sites? Cam sites are websites that host webcam models
            who perform for viewers live in real-time unlike porn websites. What
            many people like about cam sites is that there are interactions with
            viewers. Performers read their chat and usually respond. Viewers can
            suggest certain actions to models to perform but it’s up to the
            models to decide what to do.
          </p>
          <p>
            There are many cam sites streaming a huge variety of content from
            dirty talk (like visual
            <nuxt-link to="/phone-sex/">phone sex</nuxt-link>) to masturbating,
            foreplay, sex acts, and much more. Each cam model has their own
            style and preferences, and viewers can choose who to watch and
            follow. For example, some cam girls stream chatting with viewers in
            the chat room showing their private parts while others host solo sex
            streams.
          </p>
          <p>
            Here, at Up For Fling, we spend an extensive amount of time on
            testing and research to pick the best cam sites on the web. We
            analyzed engagement rates, user reviews, traffic, user experience,
            and more. The cam sites you see on our websites are the most
            reliable and top-rated in the industry. If you’re new to the cam
            girls check out one of the websites above.
          </p>
        </div>
      </div>
    </section>

    <section id="local">
      <div class="row">
        <h2>How It Works</h2>
        <Divider />
      </div>
      <div class="row two-columns">
        <p>
          Cam sites are two-way streets. Cam girls want to connect with their
          audience and make money from tips and donations from viewers who enjoy
          their content. Most of cam models have a system where they offer a
          menu of acts they’d perform based on tips amount. Many models also
          offer private sessions for a limited amount of users who tip well or
          ready to pay per minute. Keep in mind that not all cam girls earn the
          same amount. A lot of it comes down to how performers market
          themselves and whether or not they are able to connect with their fans
          on the level that would motivate those fans enough to tip. Overall,
          cam sites feel much more personal than porn sites.
        </p>
        <p>
          Cam sites are legal for anyone who is 18 years and older. They are
          usually free for everyone to watch but most of top performers start
          their streams free for public and then transition into private
          sessions for certain viewers only when their content becomes much more
          spicy. If you’re into “watching” or “observing” then you may enjoy
          these live cam sites a lot. There are so many options to choose from.
          And it’s not just limited to one person performing, there are couples
          too or multiple people performing on one stream too. You don’t have to
          pay anything if you don’t want to. But if you like someone and want to
          interact with them you can tip them to get noticed.
        </p>
      </div>
      <div class="row btn">
        <Button
          link="/find-cam-girls/"
          text="Watch Live Now"
          :internal="false"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    metaTitle() {
      return `Best Free Cam Girls Sites Of ${this.getCurrentYear} | Live Cam To Cam | Up For Fling`
    },
    metaDescription() {
      return `Looking for some online fun with hot girls who like to perform for you? Check below for the best cam girls sites of ${this.getCurrentYear} based on actual user reviews on the web.`
    },
    metaImage() {
      return process.env.baseUrl + '/static/cam-girls-center2-1.jpg'
    },

    getCurrentYear() {
      const currentYear = new Date()
      const fullYear = currentYear.getFullYear()
      return fullYear
    },
  },
}
</script>

<style lang="scss" scoped>
#hero {
  background-image: url('/cam-girls-center2-1.jpg'),
    radial-gradient(circle at top right, rgba($red, 60%) 0%, $blue 65%);
  background-blend-mode: luminosity;
  background-size: cover;
  background-position: center;
  padding: 7vw 0 20vw;
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    background-image: linear-gradient(180deg, rgba($black, 0) 0%, $blue 100%);
    z-index: 1;
  }

  .row {
    text-align: center;
    max-width: 700px;
    position: relative;
    z-index: 2;
  }

  .sub-title {
    margin-bottom: 3rem;

    @include fluid-typography(15, 18);
  }

  .arrow {
    display: inline-block;
    font-size: 4rem;
    color: $red;
    transform: rotate(90deg);
    line-height: 35px;
    width: 50px;
    height: 50px;
  }
}

#cam {
  background-image: url('/wet-cam-girl.jpg');
  background-size: cover;
  background-blend-mode: overlay;
  background-color: rgba($blue, 70%);
  background-position: 55% 50%;

  .column {
    max-width: 700px;
  }
}

#local {
  background-image: url('/3circles-bg.png'),
    linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(254, 73, 67, 0.2) 100%);
  background-size: cover;
  background-position: center;

  .two-columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    @include on-desktop {
      grid-gap: 4rem;
    }
  }

  .btn {
    text-align: center;
    padding: 2rem 0;
  }
}

#questions {
  .title {
    text-align: center;
    margin-bottom: 4rem;
  }

  .toggle {
    p {
      margin: 0;
    }
  }
}
</style>
