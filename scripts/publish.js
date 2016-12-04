import 'shelljs/global'
import { version, repository } from '../package.json'

cd('gh-pages')
exec('git init')
exec(`git remote add origin ${repository}`)
exec('git add .')
exec(`git commit -anm "v${version}"`)
exec('git checkout -b gh-pages')
exec('git push origin gh-pages -f')
