const redirects = [
  {
    from: '/find-hookup/',
    to: 'https://t.adating.link/5321/3785/0?aff_sub=uff&bo=2753,2754,2755,2756&target=seo&pyt=multi',
  },
  {
    from: '/find-cam-girls/',
    to: 'https://t.aslnk.link/5321/3664/0?aff_sub=uff&bo=2779,2778,2777,2776,3391',
  },
]

export default ({ route, redirect }) => {
  const matchedPath = redirects.find((r) => r.from === route.path)
  if (matchedPath) {
    redirect(302, matchedPath.to)
  }
}
