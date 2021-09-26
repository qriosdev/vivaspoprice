export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Viva's Poprice",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
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
    baseUrl: process.env.BASE_URL || 'http://localhost:4000',
    // phone: process.env.PHONE || 'tel:5098765798'
  },

  globals: {
    id: '__app',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/scss/style.scss'],

  styleResources: {
    scss: ['./assets/scss/_variables.scss', './assets/scss/_mixins.scss'],
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
    ['@nuxtjs/eslint-module', { fix: true }],
    '@nuxtjs/style-resources',
    '@nuxt/image',
    '@modules/generator',
    '@nuxtjs/composition-api/module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
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

    babel: {
      presets({ isClient }, preset) {
        if (isClient) {
          // https://babeljs.io/docs/en/babel-preset-env
          preset[1].targets = {
            chrome: '60',
            safari: '10',
            firefox: '54',
            edge: '15',
          }
        }
        return [preset]
      },
    },
  },

  generate: {
    fallback: true,
    interval: 2000,
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  pwa: {
    icon: {
      fileName: 'favicon.png',
    },
    manifest: {
      lang: 'en',
      theme_color: '#fe4943',
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
    exclude: [],
  },

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        if (type === 'font') {
          const latin = new RegExp('-latin.+woff')
          return latin.test(file)
        }
        return ['script', 'style', 'font'].includes(type)
      },
    },
  },
}
