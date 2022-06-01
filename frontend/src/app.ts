class App {
  constructor(appRoot: HTMLElement) {
    console.log(appRoot)
  }
}

new App(document.querySelector('#app')! as HTMLElement)
