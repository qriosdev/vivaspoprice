<template>
  <main>
    <section id="hero">
      <div class="row">
        <p class="pre-title">Up For</p>
        <h1>Phone Sex?</h1>
        <p class="sub-title">
          Want a hot conversation with local singles from the comfort of your
          home? Look no further. Dial our chatline and start talking to real
          people in your area. Your calls are confidential and secure so don’t
          hold back and have fun.
        </p>

        <Button text="Call Now" :internal="false" target="_self" />
      </div>
    </section>

    <Optin />

    <section id="chat">
      <div class="row">
        <div class="column">
          <h2>Phone Chat</h2>
          <Divider />
          <p>
            Phone chat dating has been around for a long time but no so many
            people engage in it nowadays. You may ask, are phone chat lines
            still popular? Well, they may not be as popular as dating apps like
            Tinder but they’re still very popular among those who want to feel
            that instant excitement and connection with a total stranger without
            much effort.
          </p>
          <p>
            You see, with dating apps everything depends on the appearance and
            quantity, which makes things more time-consuming to quickly find
            what you need. With phone sex, especially when there is a good
            number of free phone chat line services, everything is largely up to
            you and your own imagination. Phone sex removes the physical
            appearance and all that swiping left and right. You just need to
            find a person who is on the same wave as you’re at the moment.
          </p>
          <p>
            Of course, you still need to spend some time to find someone you
            like, but it’s much faster. And once you do, you both can launch
            into your fantasy world immediately, unlike Tinder and traditional
            dating apps and websites where you have to spend even more time to
            meet up, maybe dine or have a drink, etc. Who wants to do all of
            that for some little fun?!
          </p>
        </div>
      </div>
    </section>

    <section id="why">
      <div class="row">
        <h2>Why Phone Sex</h2>
        <Divider />
      </div>
      <div class="row two-columns">
        <p>
          One of the main reasons why many people still enjoy phone sex dating
          is because of privacy and safety it offers. All modern phone chat
          lines for singles have privacy features that keep all of your
          information secure and discreet. No one will ever find out who you are
          or where you are unless you yourself give up too many details. They
          can only know what you tell them. You can meet someone over the phone
          and talk to them safely from your bed. Local chat lines are simple and
          convenient to use. You don’t have to go anywhere or schedule a time
          for it. You can meet new people from anywhere, including your own
          local area in case you would want to meet up for even more intense
          activities.
        </p>
        <p>
          Your appearance doesn’t matter here. It’s all about your imagination.
          Your surrounding doesn’t matter either. You and your partner can
          create your own surrounding you both want and have fun in it together.
          You can be yourself, experiment, or even reinvent yourself. Unlike
          sexting, you can hear another person’s voice, which makes things even
          more exciting. Dressed or undressed, you’ll surely have a lot of fun.
          A lot of phone sex lines are free but they usually not that good. The
          best ones are usually premium but the good thing is they tend to offer
          a free trial. Paid chat lines are superior because people there are
          much more committed. So what are you waiting for? Dial now and give it
          try!
        </p>
      </div>
      <div class="row btn">
        <Button text="Give It a Try" :internal="false" target="_self" />
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
    const toggles = await $content('/toggles/phonesex/faqs')
      .sortBy('createdAt')
      .fetch()

    return { toggles }
  },
}
</script>

<style lang="scss" scoped>
#hero {
  background-image: url('/phone-sex-hero.jpg'),
    radial-gradient(circle at top right, #2b3ea0 0%, $blue 45%);
  background-blend-mode: soft-light;
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

  .pre-title {
    text-transform: uppercase;
    letter-spacing: 4px;
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

#chat {
  background-image: url('/free-phone-chat.jpg');
  background-size: cover;
  background-blend-mode: overlay;
  background-color: rgba($blue, 70%);
  background-position: 25% 50%;

  .row {
    display: flex;
    justify-content: flex-end;
  }

  .column {
    max-width: 700px;
  }
}

#why {
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
