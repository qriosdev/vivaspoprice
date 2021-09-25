import { useMeta } from '@nuxtjs/composition-api'

export const seoTitle = (setTitle) => {
  const { title } = useMeta()
  title.value = setTitle

  return {
    title,
  }
}
