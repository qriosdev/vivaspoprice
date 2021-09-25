<template>
  <main>
    <section id="hero">
      <div class="row logo">
        <NuxtPicture
          src="/img/logo-poprice-white.png"
          width="300"
          height="32"
        />
      </div>
      <div class="row tagline">
        <p>It's not popcorn</p>
        <h1>It's poprice</h1>
        <Button hash="#video" text="Learn More" />
      </div>
    </section>

    <section id="video">
      <div class="row">
        <h2>100% brown rice</h2>
        <Divider setclass="center" />
        <div class="video-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/SBJekdUhe_k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <section id="flavors">
      <div class="row">
        <h2>Flavors</h2>
        <Divider setclass="center" />
        <div class="products">
          <div v-for="product in products" :key="product.name" class="product">
            <NuxtPicture
              :src="`/img/${product.image}`"
              width="308"
              height="308"
            />
            <p>{{ product.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="row">
        <NuxtPicture src="/img/store34.jpg" class="store" />
        <div>
          <h2>About us</h2>
          <Divider setclass="center" />
          <p>
            Viva’s Poprice is a unique snack concept. The owner, Viva Wu, has
            spent three years to perfect the concept before he was ready to
            share poprice with the world and bring it to the US. Viva doesn’t
            use oil in popping rice.
          </p>
          <p>
            Poprice is made of 100% brown rice, which is considered a
            heart-healthy food and naturally gluten-free. Brown rice is rich in
            fiber and beneficial compounds that may help reduce the risk of
            heart disease.
          </p>
          <p>It’s the perfect fusion of western and eastern food culture.</p>
        </div>
      </div>
    </section>

    <section id="more">
      <div class="row">
        <NuxtPicture src="/img/vivaspopricefarmer.jpg" />
        <NuxtPicture src="/img/instore1.jpg" />
      </div>
    </section>

    <section id="footer">
      <div class="row">
        <NuxtPicture
          src="/img/logo-poprice-purple.png"
          width="300"
          height="32"
        />
      </div>
    </section>
  </main>
</template>

<script>
import { useContext, useAsync } from '@nuxtjs/composition-api'

export default {
  setup() {
    const { $content } = useContext()
    const products = useAsync(() => {
      return $content('products').sortBy('createdAt').fetch()
    })

    return { products }
  },

  computed: {
    metaTitle() {
      return `Viva's Poprice | Game Changer For Snack Foods`
    },
    metaDescription() {
      return `Viva's Poprice is a unique snack concept. The owner, Viva Wu, has spent three years to perfect the concept before he was ready to share poprice with the`
    },
    metaImage() {
      return process.env.baseUrl + '/img/half-half.jpg'
    },
  },
}
</script>

<style lang="scss" scoped>
#hero {
  min-height: 100vh;
  background-image: url('/img/top-image.jpg');
  background-size: cover;
  background-position: center;
  padding-top: 3rem;

  .logo {
    max-width: 300px;
  }

  .tagline {
    text-align: center;
    color: $white;
    margin: 10vmax auto;

    p {
      @include font-minmax(20, 26);
      font-weight: 600;
      font-family: $font-quicksand;
    }

    h1 {
      margin-bottom: calc(2rem + 4vw);
      color: $white;
    }
  }
}

#video {
  text-align: center;

  .video-container {
    position: relative;
    padding-bottom: 56.25%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
  }
}

#flavors {
  text-align: center;

  .products {
    @include grid(250px, 1fr, 2rem);

    p {
      color: $grey;
      font-size: 1.25rem;
    }
  }
}

#about {
  .row {
    @include grid(250px, 1fr, 3rem);

    max-width: 1200px;
    width: 90%;
    background-color: #bde9f2;
    padding: 7vw;

    h2 {
      text-align: center;
    }

    p {
      color: $grey;
    }
  }

  .store {
    ::v-deep img {
      box-shadow: 0px 40px 80px -20px rgba($black, 30%);
    }
  }
}

#more {
  .row {
    @include grid(250px, 1fr, 3rem);
  }

  picture {
    ::v-deep img {
      box-shadow: 0px 40px 80px -20px rgba($black, 30%);
    }
  }
}

#footer {
  text-align: center;
}
</style>
