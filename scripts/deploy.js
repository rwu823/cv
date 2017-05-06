const { version, repository, author } = require('../package.json')
require('shelljs/global')
const { TRAVIS_BRANCH, TRAVIS_MATRIX, TRAVIS_PULL_REQUEST_BRANCH,
  GH_TOKEN, NPM_TOKEN, SLACK_TOKEN } = process.env

const tokenRepo = repository.replace(/(github.com)/, `${GH_TOKEN}@$1`)
const tag = `v${version}`

console.log({ TRAVIS_BRANCH, TRAVIS_MATRIX, TRAVIS_PULL_REQUEST_BRANCH })


if (TRAVIS_BRANCH === 'master') {
  const targetMatrix = {
    'build'() {
      exec(`git config --global user.email "auto_deploy@travis-ci.org"`)
      exec(`git config --global user.name "TravisCI"`)

      // Add Tag
      exec(`git tag ${tag}`)
      exec(`git push ${tokenRepo} ${tag}`, {
        silent: true,
      })

      // Publish to gh-pages
      cd('gh-pages')
      exec('git init')
      exec('git add .')
      exec(`git commit -anm '${version}'`)
      exec(`git push ${tokenRepo} master:gh-pages -f`)
    }
  }[TRAVIS_MATRIX]

  if (targetMatrix) {
    targetMatrix()
  }
}
