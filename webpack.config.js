const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const pkg = require('./package.json')
const { NODE_ENV } = process.env

const isDev = !NODE_ENV
const isProd = (NODE_ENV === 'production')

module.exports = {
  watch: isDev,
  devtool: isDev ? 'eval' : '',
  entry: {
    libs: ['vue'],
    app: ['./src']
  },
  output: {
    path: `${__dirname}/gh-pages/`,
    filename: 'static/[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },

      {
        test: /\.(png|jpg)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'url'
      },

      {
        test: /\.scss/,
        exclude: /(node_modules|bower_components)/,
        loader: isProd ?
          ExtractTextPlugin.extract({
            fallbackLoader: 'style',
            loader: 'css?&modules&localIdentName=[hash:base64:7]!sass'
          }) : [
          'style',
          'css?sourceMap&modules&localIdentName=[local]--[hash:base64:5]',
          'sass'
        ].join('!')
      },

    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'libs',
      filename: 'static/[name].js',
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      title: pkg.description,
      template: './src/index.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    ...isProd ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new ExtractTextPlugin('static/app.css'),
    ] : []
  ]
}
