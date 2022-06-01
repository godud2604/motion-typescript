import { InputDialog } from './components/dialog/dialog.js';
export default class App {
    constructor(appRoot) {
        console.log(appRoot);
        const addBtn = document.querySelector('#add-btn');
        addBtn.addEventListener('click', () => {
            console.log('클릭');
            const dialog = new InputDialog();
            dialog.attachTo(appRoot);
        });
    }
}
