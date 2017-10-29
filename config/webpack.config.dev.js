const autoprefixer = require('autoprefixer')
const path = require('path')
const webpack = require('webpack')

const baseConfig = require('./webpack.base')
const sassConfig = require('./webpack.sass')

const DIST_DIR = '../dist'

module.exports = Object.assign(
  {},
  baseConfig,
  {
    devtool: 'eval',

    devServer: {
      contentBase: path.join(__dirname, DIST_DIR),
      compress: true,
      port: 9000
    },

    entry: {
      app: [
        'babel-polyfill',
        path.resolve(__dirname, '../src/index.js')
      ]
    },

    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, DIST_DIR),
      publicPath: '/'
    },

    module: { rules: baseConfig.module.rules.concat(sassConfig.hot) },

    plugins: []
  }
)
