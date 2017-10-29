module.exports = {
  context: __dirname,

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  module: {
    rules: [
      {
        exclude: [
          /\.(js|jsx)$/,
          /\.bmp$/,
          /\.eot$/,
          /\.gif$/,
          /\.html$/,
          /\.jpe?g$/,
          /\.json$/,
          /\.otf$/,
          /\.png$/,
          /\.s?css$/,
          /\.svg$/,
          /\.ttf$/,
          /\.woff$/,
          /\.woff2$/
        ],
        loader: require.resolve('file-loader'),
        options: {
          name: '[name].[hash:8].[ext]'
        }
      },

      {
        test: [
          /\.bmp$/,
          /\.eot$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.otf$/,
          /\.png$/,
          /\.svg$/,
          /\.ttf$/,
          /\.woff$/,
          /\.woff2$/
        ],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: '[name].[hash:8].[ext]'
        }
      },

      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    ]
  }
}
