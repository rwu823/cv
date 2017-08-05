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
            <h3 >Coding, Software & Live with JavaScript</h3>
          </div>

          <div class={[s.item]}>
            <div class={[s.fboxRow]}>
              <a target="_blank" href="//docs.google.com/document/d/1cJcYWFbRaV_cOvcUQl900i3sSLg2AjaBuGj9N219oXI/edit?usp=sharing">Resume</a>
            </div>
            <div class={[s.fboxRow]}>
              <a target="_blank" href="//github.com/rwu823">GitHub</a>
            </div>
            <div class={[s.fboxRow]}>
              <a target="_blank" href="//www.linkedin.com/in/rocky-wu">Linkedin</a>
            </div>
            <div class={[s.fboxRow]}>
              <a target="_blank" href="//www.npmjs.com/~rwu823">NPM</a>
            </div>
            <div class={[s.fboxRow]}>
              <a target="_blank" href="//drive.google.com/drive/folders/0ByZcdLkUkv8sZUh1R0M2QnJlUDQ">Slides</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
