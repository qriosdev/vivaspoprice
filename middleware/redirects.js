const crakSmart =
  'https://t.adating.link/5321/3785/22397?aff_sub=clm&bo=2753,2754,2755,2756'

const redirects = [
  {
    from: '/secret-offer/',
    to: crakSmart,
  },
]

export default ({ route, redirect }) => {
  const matchedPath = redirects.find((r) => r.from === route.path)
  if (matchedPath) {
    redirect(301, matchedPath.to)
  }
}
