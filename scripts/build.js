import webpack from 'webpack'
import webpackConf from '../webpack.config'

import del from 'del'

del.sync('gh-pages')

webpack(webpackConf, (err, stats) => {
  console.log(stats.toString({
    colors: true,
  }))
})
