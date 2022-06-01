import Image from '../components/view/Image.js'
import Todo from '../components/view/Todo.js'
import Note from '../components/view/Note.js'

export type ConstructorFunctionType = {
  new (): void
}

type PotentialMatchesType = {
  route: {
    path: string
    view: ConstructorFunctionType
    btn: string
  }
  isMatch: boolean
}[]

export const navigateTo = (url: string) => {
  history.pushState({}, '', url)
  router()
}

const routes = [
  { path: '/', view: Image, btn: 'Image Add' },
  { path: '/todo', view: Todo, btn: 'Todo Add' },
  { path: '/note', view: Note, btn: 'Note Add' },
]

export const router = async () => {
  const potentialMatches: PotentialMatchesType = routes.map((route) => {
    return {
      route,
      isMatch: location.pathname === route.path,
    }
  })

  routerView(potentialMatches)
}

const routerView = async (potentialMatches: PotentialMatchesType) => {
  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.isMatch
  ) ?? { route: routes[0], isMatch: true }

  const { route } = match
  const view = route && new route.view()

  if (view != undefined && route != undefined) {
    const app = document.querySelector('#app')! as HTMLElement
    const addBtn = document.querySelector('#add-btn')! as HTMLButtonElement
    app.innerHTML = await view.getHtml()
    addBtn.innerHTML = route.btn
  }
}
