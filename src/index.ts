import { navigateTo, router } from './utils/router.js'

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    let element = e.target! as HTMLAnchorElement

    if (element.matches('[data-link]')) {
      e.preventDefault()
      navigateTo(element.href)
    }
  })
  router()
})
