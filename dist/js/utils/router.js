var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Image from '../components/view/Image.js';
import Todo from '../components/view/Todo.js';
import Note from '../components/view/Note.js';
export const navigateTo = (url) => {
    history.pushState({}, '', url);
    router();
};
const routes = [
    { path: '/', view: Image, btn: 'Image Add' },
    { path: '/todo', view: Todo, btn: 'Todo Add' },
    { path: '/note', view: Note, btn: 'Note Add' },
];
export const router = () => __awaiter(void 0, void 0, void 0, function* () {
    const potentialMatches = routes.map((route) => {
        return {
            route,
            isMatch: location.pathname === route.path,
        };
    });
    routerView(potentialMatches);
});
const routerView = (potentialMatches) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let match = (_a = potentialMatches.find((potentialMatch) => potentialMatch.isMatch)) !== null && _a !== void 0 ? _a : { route: routes[0], isMatch: true };
    const { route } = match;
    const view = route && new route.view();
    if (view != undefined && route != undefined) {
        const app = document.querySelector('#app');
        const addBtn = document.querySelector('#add-btn');
        app.innerHTML = yield view.getHtml();
        addBtn.innerHTML = route.btn;
    }
});
