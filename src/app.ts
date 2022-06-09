import { MediaSectionInput } from './components/dialog/input/media-input.js'
import { InputDialog } from './components/dialog/dialog.js'
import Image from './components/view/Image.js'
import StorageAPI from './utils/storageAPI.js'

export default class App {
  constructor(appRoot: HTMLElement) {
    const addBtn = document.querySelector('#add-btn')! as HTMLButtonElement
    addBtn.addEventListener('click', () => {
      const dialog = new InputDialog()
      const mediaInput = new MediaSectionInput()
      dialog.addChild(mediaInput)
      dialog.attachTo(appRoot)
      dialog.setOnCloseListener(() => {
        dialog.removeFrom(appRoot)
      })
      dialog.setOnSubmitListener(() => {
        new Image(mediaInput.title, mediaInput.url).attachTo(appRoot)
        const imageStorage = {
          id: Math.floor(+new Date() / 1000),
          title: mediaInput.title,
          url: mediaInput.url,
          updated: '',
          kind: 'image',
        }
        StorageAPI.saveElement(imageStorage)
        dialog.removeFrom(appRoot)
      })
    })
  }
}
