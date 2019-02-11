const isProd = process.env.NODE_ENV === 'production'
const WebpackShellPlugin = require('webpack-shell-plugin')
const path = require('path')

module.exports = {
  outputDir: 'docs',
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config
        .output
        .filename('[name].[hash].js')
        .end()
    } else {
    }
    config.plugin('200.html').use(WebpackShellPlugin, [
      {
        onBuildExit: [
          'echo "copying index.html to 200.html"',
          'cp docs/index.html docs/200.html'
        ]
      }
    ])
  }
}
