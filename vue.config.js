module.exports = {
  css: { extract: true },
  assetsDir: 'assets',
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()

    svgRule.use('url-loader').loader('url-loader').end()

    config.resolve.alias.set('vue', '@vue/compat')
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2,
              COMPILER_V_BIND_OBJECT_ORDER: false,
            }
          }
        }
      })
  },
}
