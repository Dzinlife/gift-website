const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  outputDir: 'docs',
  indexPath: '200.html',
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config
        .output
        .filename('[name].[hash].js')
        .end()
    }
  }
}
