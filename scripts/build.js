const { rm } = require('shelljs')
const webpack = require('webpack')
const webpackConf = require('../webpack.config')

rm('-rf', 'gh-pages')

webpack(webpackConf, (err, stats) => {
  console.log(stats.toString({
    colors: true,
  }))
})
