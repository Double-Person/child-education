module.exports = {
    chainWebpack: (config) => {
      const imagesRule = config.module.rule("images")
      imagesRule
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 1000000 }))
    },

    publicPath: process.env.NODE_ENV=='production'?'./':'/'

  }