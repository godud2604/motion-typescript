var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import AbstractView from './AbstractView.js';
export default class Image extends AbstractView {
    constructor() {
        super();
        this.setTitle('Image');
    }
    getHtml() {
        return __awaiter(this, void 0, void 0, function* () {
            return `
      <Button type="button" id="dialog-add-image">Add</Button>
      <h1>Welcome back, Dom</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, dolorem, labore eaque non ut rem blanditiis odio optio, reiciendis eos veritatis sequi! Aut, obcaecati nemo doloremque eum eius nesciunt, dolores molestiae, totam provident officia cupiditate. Eaque, illum mollitia, nam porro tempore aut, qui rem quo sapiente saepe fugiat esse.
      </p>
    `;
        });
    }
    onAddDialog() { }
}
