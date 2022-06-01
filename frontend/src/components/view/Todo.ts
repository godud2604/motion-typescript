import AbstractView from './AbstractView.js'

export default class Todo extends AbstractView {
  constructor() {
    super()
    this.setTitle('Todo')
  }

  async getHtml() {
    return `
      <h1>Todo</h1>
      <p>
        Todo
      </p>
    `
  }
}
