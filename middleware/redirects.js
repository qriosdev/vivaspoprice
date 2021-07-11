const crakSmart =
  'https://t.adating.link/5321/3785/22397?aff_sub=dcl&bo=2753,2754,2755,2756'

const redirects = [
  {
    from: '/secret-offer/',
    to: crakSmart,
  },
  {
    from: '/2016/03/01/finding-real-continuing-love-in-our-dating-app-culture/',
    to: '/blog/finding-real-continuing-love-in-our-dating-app-culture/',
  },
  {
    from: '/2016/03/01/what-you-should-know-about-dating-someone-with-sensory-processing-disorder/',
    to: '/blog/what-you-should-know-about-dating-someone-with-sensory-processing-disorder/',
  },
]

export default ({ route, redirect }) => {
  const matchedPath = redirects.find((r) => r.from === route.path)
  if (matchedPath) {
    redirect(301, matchedPath.to)
  }
}
