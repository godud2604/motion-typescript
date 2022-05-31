import AbstractView from './AbstractView.js'

export default class Dashboard extends AbstractView {
  constructor() {
    super()
    this.setTitle('Dashboard')
  }

  async getHtml() {
    return `
      <h1>Welcome back, Dom</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, dolorem, labore eaque non ut rem blanditiis odio optio, reiciendis eos veritatis sequi! Aut, obcaecati nemo doloremque eum eius nesciunt, dolores molestiae, totam provident officia cupiditate. Eaque, illum mollitia, nam porro tempore aut, qui rem quo sapiente saepe fugiat esse.
      </p>
      <p>
        <a href="/posts" data-link>View recent posts</a>
      </p>
    `
  }
}
