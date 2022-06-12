import App from './app.js'
import '../style.css'


document.addEventListener('DOMContentLoaded', () => {
  new App(document.querySelector('#app')! as HTMLElement, document.body)
})
