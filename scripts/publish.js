require('shelljs/global')
const { version, repository } = require('../package.json')

cd('gh-pages')
exec('git init')
exec('git add .')
exec(`git commit -anm "v${version}"`)
exec(`git push ${repository} master:gh-pages -f`)
