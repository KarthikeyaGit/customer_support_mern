const path = require('path')
module.exports = {

  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'build.js',
    }
  },

  css: {
    extract: false,
  },

  transpileDependencies: []
}