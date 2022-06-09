import { BaseComponent } from '../../component.js'
import { MediaData } from '../dialog.js'

export class MediaSectionInput
  extends BaseComponent<HTMLElement>
  implements MediaData
{
  constructor() {
    super(`<div>
            <div class="form-container">
              <label for="title">Title</label>
              <input type="text" id="title">
            </div>
          </div>`)
  }

  get title(): string {
    const element = this.element.querySelector('#title')! as HTMLInputElement
    return element.value
  }
  get url(): string {
    return 'https://picsum.photos/600/300'
  }
}
