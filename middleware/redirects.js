const redirects = [
  // {
  //   from: '',
  //   to: '',
  // },
]

export default ({ route, redirect }) => {
  const matchedPath = redirects.find((r) => r.from === route.path)
  if (matchedPath) {
    redirect(302, matchedPath.to)
  }
}
