const generator = function () {
  this.nuxt.hook('generate:done', (context) => {
    const routesToExclude = this.nuxt.options.sitemap.exclude
    const allRoutes = Array.from(context.generatedRoutes)
    const routes = allRoutes.filter((route) => !routesToExclude.includes(route))
    this.nuxt.options.sitemap.routes = [...routes]
  })
}

export default generator
