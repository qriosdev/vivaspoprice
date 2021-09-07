<template>
  <main>
    <section id="hero">
      <div class="row">
        <p class="pre-title">Are You</p>
        <h1>Up For Fling?</h1>
        <p class="sub-title">
          Whether you’re looking for women who want to hook up, free trial local
          chat line numbers, cam girls, or adult dating sites that actually
          work, we handpicked all the best sites right here on Up For Fling.
        </p>
        <Button hash="#fun" text="Let's Have Fun" />
      </div>
    </section>

    <section id="fun">
      <div class="row">
        <h2>I'm Up For...</h2>
        <Divider />
      </div>
      <div class="row cards">
        <Card url="/hookup/" background="upfor-hookup1.jpg" title="Hookup" />
        <Card
          url="/phone-sex/"
          background="phone-sex-350.jpg"
          title="Phone Sex"
        />
        <Card
          url="/cam-girls/"
          background="cam-girls-340.jpg"
          title="Cam Girls"
        />
      </div>
    </section>

    <Optin />

    <section id="easier">
      <div class="row easier-txt">
        <div class="column">
          <h2>It's Never Been Easier</h2>
          <Divider />
          <p>
            <b
              >Up For Fling cuts out the nonsense to help you to find local
              women that want to have sex in just minutes.</b
            >
          </p>
          <p>
            Our site offers an
            <nuxt-link to="/hookup/"
              >easy and quick way to find and fuck local women</nuxt-link
            >
            regardless of their age, look, or status. Instead of spending hours
            searching and swiping through hundreds of profiles to find a booty
            call, our site can find you a girl within 4 miles of your location
            who wants to fuck tonight with no strings attached.
          </p>
          <p>
            We all how hard it is for men to get laid, so we work hard to create
            this site to take out all the hustles and make it super simple. Just
            imagine having a regular fuck buddy or multiple fuck buddies for sex
            anytime you want it. Instead of spending time checking your
            Facebook, Instagram, Snapchat, etc. you could be meeting up with
            someone hot right now for a quickie.
          </p>
          <p>
            You can stop looking up profiles on random sites and enjoy the
            largest selection of hot girls around your area craving for a hookup
            tonight with guys just like you. Our website partners with a network
            of services that has over 5 million profiles around the country to
            find exactly what you’re looking for in just minutes.
          </p>
        </div>
      </div>
      <div class="row stats">
        <Counter :number="8400" suffix="+" title="HOOKUPS DAILY" />
        <Counter :number="600" suffix="K+" title="ACTIVE USERS" />
        <Counter :number="28" suffix="M+" title="MESSAGES EXCHANGED" />
      </div>
    </section>

    <section id="using">
      <div class="row">
        <div class="column-left">
          <h2>Using Our Website</h2>
          <Divider />
          <p>
            Using our website, you no longer have to doubt or constantly ask
            yourself what you have to do to get laid. Everything is
            straightforward. People who use our website are straight shooters
            and don’t need anything before meeting up for sex. If you want to
            make it more romantic it’s totally up to you but it’s not required.
          </p>
          <p>
            You could simply meet at your place or wherever you agreed upon to
            fuck. Hassle-free. You could even do it outdoors, in a car, park,
            beach, etc. People using our website are super chill and know
            exactly what they want with nothing extra.
          </p>
          <p>
            Now, the only question is, who will you choose to be your next fuck
            buddy?
          </p>

          <div class="toggles">
            <Toggle
              v-for="toggle in togglesUsing"
              :key="toggle.title"
              :title="toggle.title"
            >
              <nuxt-content :document="toggle" />
            </Toggle>
          </div>
        </div>

        <div class="column-right">
          <div class="cards">
            <Card
              url="/hookup/"
              background="upfor-hookup1.jpg"
              title="Hookup"
            />
            <Card
              rurl="/phone-sex/"
              background="phone-sex-350.jpg"
              title="Phone Sex"
            />
            <Card
              url="/cam-girls/"
              background="cam-girls-340.jpg"
              title="Cam Girls"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="finding">
      <div class="row">
        <div>
          <h2>Finding Your Perfect Fuck Buddy Tonight</h2>
          <Divider />
          <p>
            Whatever you call it, a fuck buddy, one-night stand, no strings
            attached relationship, or booty call, we all know that it simply
            means one thing – we want to fuck, right now. For some people it
            could be very casual sex, for others it’s a relationship with no
            feelings. We understand and don’t sugarcoat it. That’s why our site
            is considered one of the best adult sites of the year that focuses
            on delivering results you’re looking for – get laid. No need to make
            things complicated.
          </p>

          <div class="btn">
            <Button link="/hookup/" text="Easy Hookup" />
          </div>
        </div>
      </div>
    </section>

    <section id="new">
      <div class="row">
        <h2>New to This?</h2>
        <Divider />
      </div>
      <div class="row two-columns">
        <p>
          For those who’re new to this and need clarification, a fuck buddy is
          someone you are sleeping with/fucking where both of you understand
          that each person is simply using the other for sex and pleasure with
          no other extra commitment. This is not a relationship in its
          traditional sense, so no, they’re not your girlfriend or boyfriend,
          neither are they your side-chick or mistress. A fuck buddy is just for
          pure pleasure. This is a transactional type of casual relationship
          where all people involved simply want to have no strings attached
          casual sex with no nothing extra. You meet, you fuck. It’s that
          simple. Make sure you keep that mindset throughout the process to
          manage your own and your potential flings’ expectations. Don’t get too
          invested.
        </p>
        <p>
          At the same time, fuck buddies are committed to one thing – sex. So
          you can rely on them for that, assuming you both agree on your
          specific arrangements. If you both want you can be friends but it’s
          not very common because it’d involve more feelings and attachment.
          Usually, the hottest sex happens when people don’t know each other at
          all and keep it that way. It makes sense because you don’t really want
          to know their issues, problems, etc., you just want to have great sex.
          Most of fuck buddies are discrete and enjoy safe and private intimacy
          with someone steady and reliable. Yes, people want to try new things
          but at some point, we all find what we like the most and would want to
          repeat that many times.
        </p>
      </div>
    </section>

    <section id="more">
      <div class="row title">
        <h2>Want to Know More?</h2>
        <Divider />
      </div>
      <div class="row">
        <Toggle
          v-for="toggle in togglesMore"
          :key="toggle.title"
          :title="toggle.title"
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
    const togglesUsing = await $content('/toggles/home/using')
      .sortBy('createdAt')
      .fetch()
    const togglesMore = await $content('/toggles/home/more')
      .sortBy('createdAt')
      .fetch()
    return { togglesUsing, togglesMore }
  },

  computed: {
    metaTitle() {
      return `Best Hookup, Phone Sex, Cam Girls Sites of ${this.getCurrentYear} | Up For Fling`
    },
    metaDescription() {
      return `Whether you’re looking for women that want to hook up or some online fun, you can find it all on the best adult dating site of the ${this.getCurrentYear}`
    },
    metaImage() {
      return process.env.baseUrl + '/static/uff-hero.jpg'
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
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
}

#hero {
  display: flex;
  align-items: center;
  position: relative;
  background-position: center;
  background-image: linear-gradient(
      180deg,
      rgba(26, 24, 68, 0) 0%,
      #1a1844 100%
    ),
    url('/shape-square.png');
  min-height: 100vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-blend-mode: soft-light;
    background-image: url('/uff-hero.jpg'),
      radial-gradient(circle at top right, #2b3ea0 0%, #1a1844 45%);
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  .row {
    text-align: center;
    max-width: 700px;
  }

  .pre-title {
    text-transform: uppercase;
    letter-spacing: 4px;
  }

  .sub-title {
    margin-bottom: 3rem;

    @include fluid-typography(15, 18);
  }
}

#fun {
  background-blend-mode: screen;
  background-image: url('/free-hookup-upforfling.jpg');
  background-color: $blue;
  background-size: cover;
  background-position: center;
  padding-top: calc(3rem + 8vw);
  min-height: 100vh;

  .row:first-child {
    margin-bottom: 4rem;
  }
}

#easier {
  background-blend-mode: overlay;
  background-image: url('/upforfling-hotgirl-2.jpg'),
    linear-gradient(316deg, $blue 0%, #2b3ea0 75%);
  background-size: cover;
  background-position: 40% 50%;
  position: relative;

  .row {
    position: relative;
    z-index: 2;
  }

  .easier-txt {
    @include on-desktop {
      display: flex;
      justify-content: flex-end;

      .column {
        max-width: 60%;
      }
    }
  }

  .stats {
    background-color: rgba(60, 60, 200, 0.2);
    border-radius: 5px;
    border-color: #2b87da;
    box-shadow: inset 0px 2px 50px 0px rgb(60 60 200 / 40%);
    position: relative;
    align-items: center;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-content: center;
    grid-gap: 3rem;
    padding: 3rem 0;
    margin-top: 2rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50%;
    width: 100vw;
    background-image: linear-gradient(180deg, rgba($black, 0) 0%, $blue 100%);
    z-index: 1;
  }
}

#using {
  .toggles {
    margin: 4rem 0;
  }

  .row {
    @include on-desktop {
      display: grid;
      grid-template-columns: 2.2fr 1fr;
      grid-gap: 3.5rem;

      .column-right {
        transform: translateY(15%);
      }
    }
  }
}

#finding {
  background-blend-mode: screen;
  background-image: url('/upforflingbdms-2.jpg');
  background-color: $blue;
  background-size: cover;
  background-position: 20% 0%;
  position: relative;

  @include on-tablet {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top left;
  }

  .row {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: flex-end;

    & > div {
      max-width: 460px;
    }
  }

  .btn {
    padding: 1rem 0;
  }

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
}

#new {
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
}

#more {
  .title {
    text-align: center;
    margin-bottom: 4rem;
  }

  .divider {
    margin: 2rem auto;
  }

  .toggle {
    p {
      margin: 0;
    }
  }
}
</style>
