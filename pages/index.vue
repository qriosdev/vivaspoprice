<template>
  <main>
    <section id="hero">
      <div class="row">
        <div class="left">
          <div class="title">
            <h1>THE HOTTEST CHAT LINE</h1>
            <p>
              Aren't you tired of faked online profiles and wasted time? Let's
              experience something REAL.
            </p>
          </div>
          <div class="steps">
            <BlurbLeft
              icon="keypad.svg"
              title="DIAL OUR NUMBER"
              text="Call our phone chat line to start your trial and connect to local singles."
            />
            <BlurbLeft
              icon="microphone.svg"
              title="RECORD AND LISTEN"
              text="Record your personal greeting and listen to others' greetings to find your match."
            />
            <BlurbLeft
              icon="chatting.svg"
              title="START CHATTING"
              text="When you find someone interesting, connect privately and start chatting."
            />
          </div>
          <div class="btns">
            <Button
              :link="phone"
              icon="phone-call-web.svg"
              setclass="btn-primary db"
              :internal="false"
            />
            <Button
              link="/secret-offer/"
              text="Secret Offer"
              setclass="btn-secondary-black db"
              target="_blank"
            />
          </div>
        </div>
        <div class="right girl-red">
          <Picture image="chatline-girl.png" setclass="db center" />
        </div>
      </div>
    </section>

    <section id="nostrings">
      <div class="row">
        <div class="title">
          <h2>NO STRINGS ATTACHED</h2>
          <p>
            Chat with the hottest singles in your city. Let your voice show off
            your real self with instant phone chat with other flirty local
            singles. Experience new exciting connections in the comfort of your
            home.
          </p>
        </div>
        <div class="facts">
          <Blurb
            image="real-connections.jpg"
            title="REAL CONNECTIONS"
            text="You only talk to other hot local singles who sound interesting to you – no paid operators – 100% real."
            setimgclass="br5 mb1"
          />
          <Blurb
            image="private-chat.jpg"
            title="PRIVATE CHAT"
            text="Every call is private and confidential. Your information is always secure. We know privacy."
            setimgclass="br5 mb1"
          />
          <Blurb
            image="local-fun.jpg"
            title="LOCAL FUN"
            text="It's all up to you. Create your own experience with other like-minded in your area within minutes."
            setimgclass="br5 mb1"
          />
        </div>
      </div>
    </section>

    <section id="try">
      <div class="row">
        <div class="container">
          <div class="callout">
            <h2>TRY FOR FREE</h2>
            <p>Talk to <b>local singles</b> now</p>
          </div>
          <div class="btns">
            <Button
              :link="phone"
              icon="phone-call-web.svg"
              setclass="btn-primary db"
              :internal="false"
            />
            <Button
              link="/secret-offer/"
              text="Secret Offer"
              setclass="btn-secondary-white db"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="benefits">
      <div class="row">
        <div class="title">
          <h2>PAID MEMEBER BENEFITS</h2>
          <p>
            DailyChatLine offers first-time male callers a free trial which
            gives access to amazing ladies and exciting phone chat features to
            connect with local singles for dating and fun.
          </p>
        </div>
        <div class="features">
          <div class="one">
            <BlurbLeft
              icon="mobile-phone.svg"
              title="USE ANY PHONE"
              text="Your Paid Membership may be utilized from any phone number, so you could join from everywhere."
            />
            <BlurbLeft
              icon="priority.svg"
              title="PRIORITY CUSTOMER SERVICE"
              text="Paid membership with affordable packages gives you the most talk time with great local women."
            />
            <BlurbLeft
              icon="send.svg"
              title="PRIORITY MESSAGES"
              text="Paid member have choice to place their message ahead of trial users that are complimentary."
            />
            <BlurbLeft
              icon="microphone.svg"
              title="SAVED GREETING"
              text="Connect faster by using your previously recorded greeting so you can start chatting immediately."
            />
          </div>
          <div class="two">
            <BlurbLeft
              icon="loyalty.svg"
              title="LOYALTY PROGRAM"
              text="Enjoy rewards and earn bonus chat time for being a loyal Paid Member of DailyChatLine."
            />
            <BlurbLeft
              icon="renewal.svg"
              title="FAST RENEWAL"
              text="As a Paid Member, you are all set to rapidly and simply add minutes to prevent disconnects during a chat."
            />
            <BlurbLeft
              icon="access.svg"
              title="PRIORITY ACCESS"
              text="Enjoy priority access to our system no matter how busy it gets. No waiting!"
            />
            <BlurbLeft
              icon="ad-free.svg"
              title="AD-FREE"
              text="Paid membership removes sponsor ads as you browse through other members' greetings."
            />
          </div>
        </div>
      </div>
    </section>

    <section id="why">
      <div class="row">
        <div class="container">
          <div class="callout">
            <h2>WHY US</h2>
            <p>
              DailyChatLine is the best free trial chatline with to meet local
              singles. Connect live with real, sexy wowmen for fun, friendship,
              or relationship. Yes, you’re talking to real local women. We have
              NO paid operators. Plus, you’re in control of who you want to talk
              to. Every call is private and anonymous.
            </p>
          </div>
          <div class="btns">
            <Button
              :link="phone"
              icon="phone-call-web.svg"
              setclass="btn-primary db"
              :internal="false"
            />
            <Button
              link="/secret-offer/"
              text="Secret Offer"
              setclass="btn-secondary-white db"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="advice">
      <div class="row">
        <div class="title">
          <h2>GREETINGS ADVICE</h2>
          <p>
            DailyChatLine offers first-time male callers a free trial which
            gives access to hottest ladies and exciting phone chat features to
            connect with local singles for dating and fun.
          </p>
        </div>
        <div class="cards">
          <FlipCard
            ftitle="LISTEN"
            ftext="Mumbling or hearing background noise can be a turn-off. Develop an excellent impression by listening to it to make sure it's clear and perceptible and taking the time to record your greeting in a quiet place."
            btitle="PAY ATTENTION"
            btext="Do not simply attempt to impress her by droning on about yourself. Reveal interest by asking questions and listening (without interruption) to her answer."
            :button="{ url: phone, text: 'CALL NOW', external: true }"
          />
          <FlipCard
            ftitle="SHARE"
            ftext="Give your age, name and crucial things that make you special. Share your character instead of personal details like e-mail or workplace (preserve this for private chats in case you need)."
            btitle="EXPRESS"
            btext="Be free to express that you're enthusiastic and want excitement! Women want to be wanted, but natural and mutual is key."
            :button="{ url: phone, text: 'CALL NOW', external: true }"
          />
          <FlipCard
            ftitle="BE SPECIFIC"
            ftext="Do you need a sexual escape, an entertaining chat or the partner you wish to spend the rest of your life with? Let her know so you will attract the right person for you."
            btitle="CONNECT"
            btext="Connecting on similarities builds attraction, and differences can fuel intrigue. Both areas are great ways to build a stronger interest and attraction."
            :button="{ url: phone, text: 'CALL NOW', external: true }"
          />
          <FlipCard
            ftitle="SMILE"
            ftext="Most of women respond to charm, warmth and confidence. Smiles can be heard in our voices, so smile when you record your greeting to show your friendliness."
            btitle="HAVE FUN"
            btext="Once you get to know her a bit, find the things that make her laugh. Nothing connects two people in conversation like laughter."
            :button="{ url: phone, text: 'CALL NOW', external: true }"
          />
        </div>
      </div>
    </section>

    <section id="faq">
      <div class="row title">
        <h2>FAQ</h2>
        <p>
          At DailyChatLine, we strive to give you a fun and pleasant way to
          connect with other like-minded singles. You can get answers quickly in
          our Frequently Asked Questions below, which cover everything you need
          to know to start chatting with singles instantly.
        </p>
      </div>
      <div class="row toggles">
        <Toggle v-for="faq in faqs" :key="faq.question" :title="faq.question">
          <nuxt-content :document="faq" />
        </Toggle>
      </div>
    </section>
    <section id="start">
      <div class="row">
        <h2>START CHATTING TODAY</h2>
        <p>60 min FREE chat line</p>
        <div class="btns">
          <Button
            :link="phone"
            icon="phone-call-web.svg"
            setclass="btn-primary db"
            :internal="false"
          />
          <Button
            link="/secret-offer/"
            text="Secret Offer"
            setclass="btn-secondary-black db"
            target="_blank"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const faqs = await $content('faqs').sortBy('createdAt').fetch()
    return { faqs }
  },

  data() {
    return {
      metaTitle: '60 Minute Free Chat Line | DailyChatLine',
      metaDescription:
        "Aren't you tired of faked online profiles and wasted time? Let's experience something REAL. Try the hottest free trial chat line.",
      metaImage:
        process.env.baseUrl + require('~/assets/img/phonegirl-in-red.jpg'),
      phone: process.env.phone,
    }
  },
}
</script>

<style lang="scss" scoped>
.btns {
  width: 80%;
  margin: auto;

  @include on-tablet {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
    margin: auto;
    width: 100%;
  }
}

.title {
  text-align: center;
  margin: auto;
  margin-bottom: 3rem;
  max-width: 800px;
}

.callout {
  text-align: center;
  margin-bottom: 2rem;

  & > * {
    color: $white;
  }
}

#hero {
  padding-bottom: 0;

  .steps {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      height: 70%;
      top: 30px;
      left: 30px;
      border-left: 1px dashed $dark;
      z-index: -99;
    }
  }

  .row {
    @include on-desktop {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
}

#nostrings {
  background-color: $light;

  .facts {
    @include on-desktop {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 2rem;
    }
  }
}

#try {
  background-image: url('~assets/img/phonegirl-in-red.jpg');
  background-size: cover;
  background-position: center left;
  background-color: rgba(9, 10, 10, 0.6);
  background-blend-mode: overlay;
  position: relative;
  padding: calc(50px + 7vw) 0;

  .row {
    @include on-desktop {
      display: flex;
      justify-content: flex-end;
    }
  }

  .container {
    @include on-desktop {
      width: 40%;
    }
  }

  h2 {
    @include fluid-typography(24, 40);
  }
}

#benefits {
  .features {
    .one,
    .two {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        height: 100%;
        top: 30px;
        left: 30px;
        border-left: 1px dashed $dark;
        z-index: -99;
      }
    }

    .one {
      @include on-desktop {
        height: 75%;
      }
    }

    .two {
      &::after {
        height: 75%;
      }
    }

    @include on-desktop {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 3rem;
    }
  }
}

#why {
  background-image: url('~assets/img/tattoo-girl.jpg');
  background-size: cover;
  background-position: 85% 0;
  background-color: rgba(9, 10, 10, 0.6);
  background-blend-mode: overlay;
  position: relative;
  padding: calc(50px + 5vw) 0;

  .container {
    @include on-desktop {
      width: 40%;
    }
  }
}

#advice {
  .row {
    max-width: 900px;
  }

  .cards {
    @include on-tablet {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
      grid-gap: 2rem;
    }
  }
}

#faq {
  background-color: $light;
}

#start {
  .row {
    text-align: center;
    max-width: 500px;
  }

  p {
    margin-bottom: 5%;
  }
}
</style>
