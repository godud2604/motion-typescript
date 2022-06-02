import { InputDialog } from './components/dialog/dialog.js'

export default class App {
  constructor(appRoot: HTMLElement) {
    console.log(appRoot)

    const addBtn = document.querySelector('#add-btn')! as HTMLButtonElement
    addBtn.addEventListener('click', () => {
      // 1. 모달창이 나오게 한다.
      const dialog = new InputDialog()
      dialog.attachTo(appRoot)
      // 2. 모달창 닫기 버튼 클릭 시, 모달창 제거

      // 3. 모달창 Add 버튼 클릭 시, page에 addChild(image)
    })
  }
}
