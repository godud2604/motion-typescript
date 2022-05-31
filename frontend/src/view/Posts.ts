import AbstractView from './AbstractView.js'

export default class Posts extends AbstractView {
  constructor() {
    super()
    this.setTitle('Posts')
  }

  async getHtml() {
    return `
      <h1>Posts</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, dolorem, labore eaque non ut rem blanditiis odio optio, reiciendis eos veritatis sequi! Aut, obcaecati nemo doloremque eum eius nesciunt, dolores molestiae, totam provident officia cupiditate. Eaque, illum mollitia, nam porro tempore aut, qui rem quo sapiente saepe fugiat esse.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, dolorem, labore eaque non ut rem blanditiis odio optio, reiciendis eos veritatis sequi! Aut, obcaecati nemo doloremque eum eius nesciunt, dolores molestiae, totam provident officia cupiditate. Eaque, illum mollitia, nam porro tempore aut, qui rem quo sapiente saepe fugiat esse.
      </p>
    `
  }
}
