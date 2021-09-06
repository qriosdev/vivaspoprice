<template>
  <main>
    <section id="hero">
      <div class="row">
        <h1>Easy Hookup</h1>
        <p class="sub-title">
          Just fun. No string attached. Want to find a girl for one night stand
          nearby? We got you. Check below for top-rated adult dating sites with
          the highest hookup rates based on thousands of feedbacks from users.
        </p>

        <Button
          link="/find-hookup/"
          text="Meet Hot Singles"
          :internal="false"
        />
      </div>
    </section>

    <Optin />

    <section id="dating">
      <div class="row">
        <div class="column">
          <h2>Adult Dating</h2>
          <Divider />
          <p>
            Aren’t you tired of Tinder, Bumble, and other those phone apps that
            bring absolute zero results? Don’t you want hookup almost instantly
            without spending time and money on dinner and drinks?
          </p>
          <p>
            Hooking up should be fun, not serious, or time-consuming. You
            already have a job for that. That’s why here, at Up For Fling, we
            try our best to help you save time and have more fun. Our team is
            constantly looking for the best adult dating sites around the web
            and testing and analyzing them with our internal scoring system to
            get you only the top quality services and websites that meet your
            needs. Services we list have millions of single (and sometimes
            married) adult personals combined who are interested in sex dating,
            booty calls, or affairs.
          </p>
          <p>
            You can find local singles near your area for hookups in no time.
            And the cool thing is you don’t have to spend much time and money on
            unnecessary stuff like dinner and drinks. Websites that make our
            list are active and have thousands of members joining every day. You
            won’t run out of options. Stop wasting your time on those fake
            hookup sites full of singles actually looking for love. Instead, use
            one of the services listed on
            <nuxt-link to="/">UpForFling.com</nuxt-link> and enjoy amazing booty
            calls and easy stress-free hookups when you want it.
          </p>
          <p>
            If you’re looking for a quick casual hookup, look no further,
            UpForFling.com has all the best of the best. Meet your perfect sex
            partners today!
          </p>
        </div>
      </div>
    </section>

    <section id="local">
      <div class="row">
        <h2>Local Hookup Near Me</h2>
        <Divider />
      </div>
      <div class="row two-columns">
        <p>
          Many of our users ask, “How to find local hookups near me?”, so we
          include that criteria into our scoring system to show services that
          offer local hookup options. We know that it can be challenging to find
          someone hot who lives nearby. It was even more challenging in the past
          when the internet was not accessible as it’s today. But things have
          changed. Nowadays, everyone is connected in some way through the
          internet. It’s never been so easy to find what you want in a short
          period of time. But the biggest issue now is that there are too many
          options and some of those are scams. And no one has time to vet each
          app or website. That’s where we, Up For Fling, come in to save the
          day.
        </p>
        <p>
          We track many websites, services, and apps and their users to see
          what’s trending at the moment. This way, we always know where the
          crowd is hanging out and it helps us find the best local hookup
          options for our users. The services we list focus on bringing together
          open-minded people who are looking for casual hookups with no strings
          attached. You can find a fuck buddy nearby without checking hundreds
          of websites and apps. It’s possible using UpForFling.com. If you are a
          tad nervous about joining one of the services we list, just remember,
          we do what you’re comfortable with. Keep your identity private and
          don’t share until you’re 100% sure. Start right now and find that hot
          local single to spend your night with!
        </p>
      </div>
      <div class="row btn">
        <Button
          link="/find-hookup/"
          text="Meet Local Singles"
          :internal="false"
        />
      </div>
    </section>

    <section id="questions">
      <div class="row title">
        <h2>Questions Answered</h2>
        <Divider setclass="center" />
      </div>
      <div class="row">
        <Toggle
          v-for="toggle in toggles"
          :key="toggle.question"
          :title="toggle.question"
        >
          <nuxt-content :document="toggle" />
        </Toggle>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const toggles = await $content('/toggles/hookup/faqs')
      .sortBy('createdAt')
      .fetch()

    return { toggles }
  },
}
</script>

<style lang="scss" scoped>
#hero {
  background-image: url('/upforhookup.jpg'),
    radial-gradient(circle at top right, #2b3ea0 0%, $blue 45%);
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

#dating {
  background-image: url('/girl-red-room.jpg');
  background-size: cover;
  background-blend-mode: overlay;
  background-color: rgba($blue, 70%);

  .row {
    display: flex;
    justify-content: flex-end;
  }

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
