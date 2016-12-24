import { rm } from 'shelljs'
import webpack from 'webpack'
import webpackConf from '../webpack.config'

rm('-rf', 'gh-pages')

webpack(webpackConf, (err, stats) => {
  console.log(stats.toString({
    colors: true,
  }))
})
