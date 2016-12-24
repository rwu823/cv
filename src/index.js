import Vue from 'vue'
import App from './app'

new Vue(Object.assign({
  el: '#app',
}, App))

if (module.hot) {
  module.hot.accept()
}
