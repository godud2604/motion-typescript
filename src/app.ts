import { TextSectionInput } from './components/dialog/input/text-input';
import { Composable, PageComponent, PageItemComponent } from './components/page/page';
import { ImageComponent } from './components/page/item/Image'
import { NoteComponent } from './components/page/item/Note';
import { TodoComponent } from './components/page/item/Todo';
import { Component } from './components/component';
import { InputDialog, MediaData, TextData } from './components/dialog/dialog';
import { MediaSectionInput } from './components/dialog/input/media-input';

type InputComponentConstructor<T extends (MediaData | TextData) & Component> = {
  new (): T;
}

export default class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent)
    this.page.attachTo(appRoot, 'beforeend')

    const image = new ImageComponent('Image Title', 'http://newsimg.hankookilbo.com/2018/07/15/201807152043786973_1.jpg');
    this.page.addChild(image)

    const note = new NoteComponent('Note22 Title', 'Note Body')
    this.page.addChild(note)

    const todo = new TodoComponent('Todo Title', 'Todo Item')
    this.page.addChild(todo)

    this.bindElementToDialog<MediaSectionInput>(
      '#new-image', 
      MediaSectionInput,
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    );

    this.bindElementToDialog<TextSectionInput>(
      '#new-note', 
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.body)
    );

    this.bindElementToDialog<TextSectionInput>(
      '#new-todo', 
      TextSectionInput,
      (input: TextSectionInput) => new TodoComponent(input.title, input.body)
    );
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string, 
    InputComponent: InputComponentConstructor<T>, 
    makeSection: (input: T) => Component
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener('click', () => {
      const dialog = new InputDialog();
      const input = new InputComponent()
      dialog.addChild(input)
      dialog.attachTo(this.dialogRoot)

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot)
      })
      dialog.setOnSubmitListener(() => {
        const image = makeSection(input)
        this.page.addChild(image)
        dialog.removeFrom(this.dialogRoot)
      })
    })
  }
}
