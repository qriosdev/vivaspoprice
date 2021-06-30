<template>
  <main>
    <section id="hero">
      <div class="row">
        <h1>Free Trial Chat Line</h1>
        <p class="sub-title">60 Minute Free Trial Phone Chat</p>
        <div class="cta-btns">
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
          />
        </div>
      </div>
      <div class="shape-divider-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
    <section id="local">
      <div class="row">
        <h2>Local Connections</h2>
        <p class="sub-title">
          Simply call the line and start phone chatting with the sexiest singles
          in your area without paying a cent. Let your fantasies and voice show
          off your real self with other hot local singles who want the same.
          Experience the hottest chat line in North America in the comfort of
          your home.
        </p>
      </div>
      <div class="row girls">
        <Blurb
          image="brianna.jpg"
          title="Brianna"
          text="“So much more fun than online dating. Wasted no time here.”"
          alt="brianna"
        />
        <Blurb
          image="lindsey.jpg"
          title="Lindsey"
          text="“Never thought I'd like phone sex but guys here are something else.”"
          alt="lindsey"
        />
        <Blurb
          image="vanessa.jpg"
          title="Vanessa"
          text="“Always thought of trying phone sex and now I'm addicted.”"
          alt="vanessa"
        />
        <Blurb
          image="erika.jpg"
          title="Erika"
          text="“I'm a challenge. Good that a lot of guys here love challenges :)”"
          alt="erika"
        />
        <Blurb
          image="lexi.jpg"
          title="Lexi"
          text="“I was so shy at first but met some really nice and gentle guys.”"
          alt="lexi"
        />
        <Blurb
          image="brooke.jpg"
          title="Brooke"
          text="“The best experience in my life ever. Rough, dirty and vulgarrrr.”"
          alt="brooke"
        />
      </div>
      <div class="row cta-btns">
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
        />
      </div>
    </section>
    <section id="try">
      <div class="row">
        <h2>Try For Free</h2>
        <p class="sub-title">
          ChatLineMate is the #1 free trial phone chat line to flirt and meet
          singles for fun. Connect live with real, sexy women for casual dating,
          or serious relationship. All callers are real people. We have NO paid
          operators policy. You’re in total control of who you want to talk to.
          Every call is confidential and anonymous.
        </p>
        <div class="cta-btns">
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
          />
        </div>
      </div>
    </section>
    <section id="how">
      <div class="row">
        <h2>How To</h2>
        <p class="sub-title">
          Here at ChatLineMate, we try our best to give you a fun and easy way
          to connect with other like-minded singles. You can get answers quickly
          in our Frequently Asked Questions below, which cover everything you
          need to know to start phone chatting with singles immediately.
        </p>
        <div class="faq-girl">
          <div class="faq-container">
            <Toggle
              v-for="faq in faqs"
              :key="faq.question"
              :title="faq.question"
            >
              <nuxt-content :document="faq" />
            </Toggle>
          </div>
          <Picture image="girl-standing.png" alt="hot chat line mate" />
        </div>
      </div>
      <div class="row cta-btns">
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
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const faqs = await $content('faqs').sortBy('createdAt').fetch()
    const articles = await $content('blogs').sortBy('createdAt').fetch()
    return { faqs, articles }
  },

  data() {
    return {
      phone: process.env.phone,
      metaTitle: 'ChatLineMate | 60 Min Free Trial Chat Line',
      metaDescription:
        'Try the hottest phone chat line with local singles. FREE to try! Our new callers get 60 min free phone chat with a total privacy. Call our chat line now!',
      metaImage: process.env.baseUrl + require('~/assets/img/bg-hero.jpg'),
    }
  },
}
</script>

<style lang="scss" scoped>
.sub-title {
  @include fluid-typography(17, 20);
  margin-bottom: 5vw;
}

#hero {
  background-image: url('~assets/img/bg-hero.jpg');
  background-size: cover;
  background-position: center;
  background-color: rgba(9, 10, 10, 0.8);
  background-blend-mode: overlay;
  position: relative;
  padding: calc(50px + 5vw) 0;

  .row {
    color: $white;
    text-align: center;
  }

  .shape-divider-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: translateY(1px);

    svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: calc(20px + 5vw);
      max-width: unset;

      .shape-fill {
        fill: #ffffff;
      }
    }
  }
}

#local {
  .row {
    text-align: center;
  }

  .girls {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2em;
  }
}

#try {
  background-image: url('~assets/img/couple.jpg');
  background-size: cover;
  background-position: center top;
  background-color: rgba(9, 10, 10, 0.8);
  background-blend-mode: overlay;
  position: relative;
  padding: calc(50px + 5vw) 0;

  .row {
    text-align: center;
    color: $white;
  }
}

#how {
  .row {
    text-align: center;
  }

  @include on-desktop {
    .faq-girl {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-gap: 2rem;
      align-items: center;
      margin-bottom: 5vw;
    }
  }
}

@include on-tablet {
  .cta-btns {
    max-width: 500px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1em;
    margin: auto;
  }
}
</style>
