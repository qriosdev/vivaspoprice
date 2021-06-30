import Vue from 'vue'

if (!Vue.metas) {
  Vue.metas = true
  Vue.mixin({
    head() {
      return {
        title: this.metaTitle,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.metaDescription,
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: this.metaTitle,
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: this.metaDescription,
          },
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: this.metaImage,
          },
          {
            hid: 'twitter:image:alt',
            name: 'twitter:image:alt',
            content: this.metaTitle,
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.metaTitle,
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.metaDescription,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.metaImage,
          },
          {
            hid: 'og:image:secure_url',
            property: 'og:image:secure_url',
            content: this.metaImage,
          },
          {
            hid: 'og:image:alt',
            property: 'og:image:alt',
            content: this.metaTitle,
          },
        ],
      }
    },
  })
}
