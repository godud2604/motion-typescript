import { BaseComponent } from '../component.js';
export class InputDialog extends BaseComponent {
    constructor() {
        super(`<section class="dialog">
            <div class="dialog-container">
              <div class="close-btn-wrap">
                <button class="close">&times;</button>
              </div>
              <div id="dialog-body"></div>
              <button class="dialog-submit">ADD</button>
            </div>
          </section>`);
        const closeBtn = this.element.querySelector('.close');
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
        const submitBtn = this.element.querySelector('.dialog-submit');
        submitBtn.onclick = () => {
            this.submitListener && this.submitListener();
        };
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
    setOnSubmitListener(listener) {
        this.submitListener = listener;
    }
    addChild(child) {
        const body = this.element.querySelector('#dialog-body');
        child.attachTo(body);
    }
}
