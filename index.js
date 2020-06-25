const path = require('path')
const c = require('chalk')
const image = require('terminal-image')
const link = require('terminal-link')

const CFonts = require('cfonts')

;(async () => {
  const avatar = path.join(__dirname, 'src/public/my-avatar-square.png')
  console.log(await image.file(avatar, { width: 20, height: 0 }))

  CFonts.say('Rocky Wu', {
    font: 'chrome',
    align: 'left',
    colors: ['green'],
    background: 'transparent',
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: '0',
    gradient: false,
    independentGradient: false,
    transitionGradient: false,
    env: 'node',
  })

  console.log(`
${c.cyan('Coding, Software & Live with JavaScript')}

Hello I am Rocky, thank you for taking the time to read my experience, you can get more about me through the links below:

📝 ${link(
    'Resume',
    'https://docs.google.com/document/d/1cJcYWFbRaV_cOvcUQl900i3sSLg2AjaBuGj9N219oXI/edit?usp=sharing',
  )}
⭐ ${link('Github', 'https://github.com/rwu823')}
📖 ${link('Linkedin', 'https://www.linkedin.com/in/rocky-wu')}
✨ ${link('NPM', 'https://www.npmjs.com/~rwu823')}
  `)
})()
