const ManifestPlugin = require('webpack-manifest-plugin')
const path = require('path')
const webpack = require('webpack')
const WorkboxPlugin = require('workbox-webpack-plugin')

const baseConfig = require('./webpack.base')
const sassConfig = require('./webpack.sass')

const DIST_DIR = '../dist'

module.exports = Object.assign(
  {},
  baseConfig,
  {
    devtool: '#source-map',

    entry: {
      app: [
        'babel-polyfill',
        path.resolve(__dirname, '../src/index.js')
      ],
      register: [path.resolve(__dirname, '../srv/register-sw.js')]
    },

    output: {
      filename: '[name].[chunkhash:8].js',
      chunkFilename: '[name].[chunkhash:8].chunk.js',
      path: path.resolve(__dirname, DIST_DIR),
      publicPath: '/'
    },

    module: { 
      rules: baseConfig.module.rules.concat(sassConfig.extracted) 
    },

    plugins: [
      // new webpack.EnvironmentPlugin([
      //   'NODE_ENV'
      // ]),
      sassConfig.SassPlugin,
      new ManifestPlugin({ fileName: 'asset-manifest.json' }),
      new webpack.LoaderOptionsPlugin({ minimize: true }),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.optimize.ModuleConcatenationPlugin(),

      new webpack.optimize.UglifyJsPlugin({
        compress: { screw_ie8: true },
        mangle: { screw_ie8: true },
        output: {
          comments: false,
          screw_ie8: true
        }
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks(module) {
          const context = module.context
          return context && context.indexOf('node_modules') >= 0
        }
      }),

      new WorkboxPlugin({
        globDirectory: path.resolve(__dirname, DIST_DIR),
        globPatterns: ['**/*.{html,js,css}'],
        swDest: path.join(path.resolve(__dirname, DIST_DIR), 'sw.js')
      })
    ]
  }
)
