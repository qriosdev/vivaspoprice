import { useMeta } from '@nuxtjs/composition-api'

export const seoMetas = (seoTitle, seoDesc, seoImg) => {
  const { title, meta } = useMeta()
  title.value = seoTitle
  meta.value = [
    {
      hid: 'description',
      name: 'description',
      content: seoDesc,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: seoTitle,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: seoDesc,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: process.env.baseUrl + seoImg,
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: seoTitle,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: seoTitle,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: seoDesc,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: process.env.baseUrl + seoImg,
    },
    {
      hid: 'og:image:secure_url',
      property: 'og:image:secure_url',
      content: process.env.baseUrl + seoImg,
    },
    {
      hid: 'og:image:alt',
      property: 'og:image:alt',
      content: seoTitle,
    },
  ]

  return {
    title,
    meta,
  }
}
