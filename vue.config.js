module.exports = {
  css: { extract: true },
  assetsDir: 'assets',
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule.use('url-loader').loader('url-loader').end()
  },
}
