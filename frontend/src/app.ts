import Dashboard from './view/Dashboard.js'
import Posts from './view/Posts.js'
import Settings from './view/Settings.js'

const navigateTo = (url: string) => {
  history.pushState({}, '', url)
  router()
}

const router = async () => {
  const routes = [
    { path: '/', view: Dashboard },
    { path: '/posts', view: Posts },
    { path: '/settings', view: Settings },
  ]

  const potentialMatches = routes.map((route) => {
    return {
      route,
      isMatch: location.pathname === route.path,
    }
  })

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.isMatch
  ) ?? { route: routes[0], isMatch: true }

  const view = match.route && new match.route.view()

  if (view != undefined) {
    const app = document.querySelector('#app')! as HTMLDivElement
    app.innerHTML = await view.getHtml()
  }
}

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
