const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')

const usersRoutes = [...Array(10).keys()].map(i => `/users/${++i}`)

module.exports = {

  // html: {
  //   inject: 'head',
  //   chunksSortMode: 'dependency'
  // },

  webpack(config) {
    if (process.env.NODE_ENV === 'production') {

      // Prerender
      console.log(` 🚀 Prerendering...`)
      const prerenderPlugin = new PrerenderSpaPlugin(
        // entry
        path.join(__dirname, '/dist'),
        // routes
        ['/', '/about', ...usersRoutes],
        // options
        {
          captureAfterTime: 1000
          // captureAfterDocumentEvent: 'render-done'
        }
      )
      config.plugins.push(prerenderPlugin)

      // Preload
      // const preloadPlugin = new PreloadWebpackPlugin()
      // config.plugins.push(preloadPlugin)
    }
    return config
  }
}
