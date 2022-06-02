import App from './app.js'
import { navigateTo, router } from './utils/router.js'
import '../style.css'

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
  console.log('index', 'sadsadsad')
  document.body.addEventListener('click', (e) => {
    let element = e.target! as HTMLAnchorElement

    if (element.matches('[data-link]')) {
      e.preventDefault()
      navigateTo(element.href)
    }
  })
  router()
  new App(document.querySelector('#app')! as HTMLElement)
})
