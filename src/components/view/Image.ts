import { BaseComponent } from '../component.js'

export default class Image extends BaseComponent<HTMLElement> {
  constructor(title?: string, url?: string) {
    super(`<section class="image wrap">
              <div class="first">
                <img class="image-thumbnail" src=${url} />
              </div>
              <h2 class="image-title second">${title}</h2>
            </section>`)
  }

  async getHtml() {
    // TODO : 로컬 스토리지에 값이 없을 때만 나타나게 (빈 화면 방지)
    return `
      <Button type="button" id="dialog-add-image">Add</Button>
      <h1>Welcome back, Dom</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, dolorem, labore eaque non ut rem blanditiis odio optio, reiciendis eos veritatis sequi! Aut, obcaecati nemo doloremque eum eius nesciunt, dolores molestiae, totam provident officia cupiditate. Eaque, illum mollitia, nam porro tempore aut, qui rem quo sapiente saepe fugiat esse.
      </p>
    `
  }

  onAddDialog(): void {}
}
