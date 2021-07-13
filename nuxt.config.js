export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DailyChatLine',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },

      // {
      //   rel: 'preconnect',
      //   href: 'https://fonts.gstatic.com/',
      //   crossorigin: 'anonymous',
      // },

      // {
      //   rel: 'stylesheet preload prefetch',
      //   as: 'style',
      //   type: 'text/css',
      //   href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&family=Oswald:wght@300&display=swap',
      //   crossorigin: 'anonymous',
      // },
    ],
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    phone: process.env.PHONE || 'tel:5098765792',
  },

  globals: {
    id: '__app',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/scss/style.scss'],

  styleResources: {
    scss: ['./assets/scss/*.scss'],
    hoistUseStatements: true,
  },

  router: {
    middleware: ['redirects'],
    trailingSlash: true,
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/metas.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@modules/generator',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Oswald: [300],
          'Open+Sans': [300, 700],
        },
        display: 'swap',
        download: true,
        stylePath: 'scss/_fonts.scss',
        inject: false,
        overwriting: true,
      },
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/sitemap',
  ],

  build: {
    publicPath: '/app/',
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
  },

  generate: {
    fallback: true,
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  optimizedImages: {
    optimizeImages: false,
  },

  pwa: {
    icon: {
      fileName: 'favicon.png',
    },
    manifest: {
      theme_color: '#d33',
    },
  },

  sitemap: {
    hostname: process.env.BASE_URL || 'http://localhost:3000',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
    exclude: ['/secret-offer/'],
  },

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        if (type === 'font') {
          const latin = new RegExp('-latin\\d{1,}.+woff2$')
          return latin.test(file)
        }
        return ['script', 'style'].includes(type)
      },
    },
  },
}
