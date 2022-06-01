import App from './app.js';
import { navigateTo, router } from './utils/router.js';
window.addEventListener('popstate', router);
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        let element = e.target;
        if (element.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(element.href);
        }
    });
    router();
    new App(document.querySelector('#app'));
});
