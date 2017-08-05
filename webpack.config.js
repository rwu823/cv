const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const pkg = require('./package.json')
const { NODE_ENV } = process.env

const isDev = !NODE_ENV
const isProd = NODE_ENV === 'production'

module.exports = {
  watch: isDev,
  devtool: isDev ? 'cheap-eval-source-map' : false,
  performance: {
    hints: 'warning',
  },
  entry: './src',
  output: {
    path: `${__dirname}/gh-pages/`,
    filename: 'static/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },

      {
        test: /\.(png|jpg)$/,
        exclude: /(node_modules|bower_components)/,
        loader: ['url-loader'],
      },

      {
        test: /\.scss/,
        exclude: /(node_modules|bower_components)/,
        use: isProd
          ? ExtractTextPlugin.extract({
              fallback: ['style-loader'],
              use: [
                'css-loader?&modules&localIdentName=[hash:base64:7]',
                'sass-loader',
              ],
            })
          : [
              'style-loader',
              'css-loader?sourceMap&modules&localIdentName=[local]--[hash:base64:5]',
              'sass-loader',
            ],
      },
    ],
  },

  resolve: {
    alias: {},
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: pkg.description,
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    ...(isProd
      ? [
          new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false,
            },
          }),
          new ExtractTextPlugin('static/app.css'),
        ]
      : []),
  ],
}
