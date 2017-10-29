const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const _sassRules = {
  use: [
    require.resolve('style-loader'),

    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1
      }
    },

    {
      loader: require.resolve('postcss-loader'),
      options: {
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),

          autoprefixer({
            browsers: [ 'last 2 versions' ],
            flexbox: 'no-2009'
          })
        ]
      }
    },

    require.resolve('sass-loader'),

    require.resolve('import-glob-loader')
  ]
}

const Plugin = new ExtractTextPlugin({
  filename: 'styles.[chunkhash:8].css'
})

module.exports = {
  hot: Object.assign(
    {},
    { test: /\.s?css$/ },
    _sassRules
  ),

  extracted: {
    test: /\.s?css$/,
    use: Plugin.extract(_sassRules)
  },

  SassPlugin: Plugin
}
