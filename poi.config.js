const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

// const usersRoutes = [...Array(10).keys()].map(i => `/users/${++i}`)

module.exports = {
  html: {
    title: 'Vue Prerender SPA Demo',
    template: path.join(__dirname, '/src/layout.ejs')
  },
  // webpack(config) {
  //   const plugin = new PrerenderSpaPlugin(
  //     // entry
  //     path.join(__dirname, '/dist'),
  //     // routes
  //     ['/', '/about', ...usersRoutes],
  //     // options
  //     { captureAfterTime: 1000 }
  //   )
  //   config.plugins.push(plugin)
  //   return config
  // }
}
