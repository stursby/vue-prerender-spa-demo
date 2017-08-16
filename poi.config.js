const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

const usersRoutes = [...Array(10).keys()].map(i => `/users/${++i}`)

module.exports = {
  webpack(config) {
    if (process.env.NODE_ENV === 'production') {
      console.log('🚀 Building...')
      const plugin = new PrerenderSpaPlugin(
        // entry
        path.join(__dirname, '/dist'),
        // routes
        ['/', '/about', ...usersRoutes],
        // options
        { captureAfterTime: 2000 }
      )
      config.plugins.push(plugin)
    }
    return config
  }
}
