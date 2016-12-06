import s from './app.scss'

const App = {
  name: 'App',
  render(h) {
    return (
      <div id="app" >
        <div id="profile">
          <div class={[s.fboxRow]}>
            <div class={s.avatar} />
          </div>
          <div class={[s.fboxRow]}>
            <h1 >Rocky Wu</h1>
          </div>
          <div class={[s.fboxRow, s.email]}>
            <h3 >rwu823.au@gmail.com</h3>
          </div>

          <div class={[s.item]}>
            <div class={[s.fboxRow]}>
              <a target="_blank" href="//docs.google.com/document/d/1cJcYWFbRaV_cOvcUQl900i3sSLg2AjaBuGj9N219oXI/edit?usp=sharing">Resume</a>
            </div>
            <div class={[s.fboxRow]}>
              <a target="_blank" href="//github.com/rwu823">Github</a>
            </div>
            <div class={[s.fboxRow]}>
              <a target="_blank" href="//www.linkedin.com/in/rocky-wu-1091594b">Linkedin</a>
            </div>
            <div class={[s.fboxRow]}>
              <a target="_blank" href="//www.npmjs.com/~rwu823">NPM</a>
            </div>
            <div class={[s.fboxRow]}>
              <a target="_blank" href="//github.com/rwu823/slides">Slides</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = App
