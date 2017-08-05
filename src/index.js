import App from './app'

new window.Vue(Object.assign({
  el: '#app',
}, App))

if (module.hot) {
  module.hot.accept()
}
