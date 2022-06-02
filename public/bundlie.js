(()=>{"use strict";class e extends class{constructor(e){const t=document.createElement("template");t.innerHTML=e,this.element=t.content.firstElementChild}attachTo(e,t="afterbegin"){e.insertAdjacentElement(t,this.element)}removeFrom(e){if(e!==this.element.parentElement)throw new Error("Parent mismatch!");e.removeChild(this.element)}}{constructor(){super('<section class="dialog">\n            <div class="dialog-container">\n              <div class="close-btn-wrap">\n                <button class="close">&times;</button>\n              </div>\n              <div id="dialog-body"></div>\n              <button class="dialog-submit">ADD</button>\n            </div>\n          </section>'),this.element.querySelector(".close").onclick=()=>{this.closeListener&&this.closeListener()},this.element.querySelector(".dialog-submit").onclick=()=>{this.submitListener&&this.submitListener()}}setOnCloseListener(e){this.closeListener=e}setOnSubmitListener(e){this.submitListener=e}addChild(e){const t=this.element.querySelector("#dialog-body");e.attachTo(t)}}class t{constructor(t){console.log(t),document.querySelector("#add-btn").addEventListener("click",(()=>{console.log("클릭"),(new e).attachTo(t)}))}}class n{constructor(){}setTitle(e){document.title=e}getHtml(){return e=this,t=void 0,o=function*(){return""},new((n=void 0)||(n=Promise))((function(i,s){function a(e){try{r(o.next(e))}catch(e){s(e)}}function c(e){try{r(o.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}r((o=o.apply(e,t||[])).next())}));var e,t,n,o}onAddDialog(){}}var o=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function a(e){try{r(o.next(e))}catch(e){s(e)}}function c(e){try{r(o.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}r((o=o.apply(e,t||[])).next())}))};const i=[{path:"/",view:class extends n{constructor(){super(),this.setTitle("Image")}getHtml(){return e=this,t=void 0,o=function*(){return'\n      <Button type="button" id="dialog-add-image">Add</Button>\n      <h1>Welcome back, Dom</h1>\n      <p>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, dolorem, labore eaque non ut rem blanditiis odio optio, reiciendis eos veritatis sequi! Aut, obcaecati nemo doloremque eum eius nesciunt, dolores molestiae, totam provident officia cupiditate. Eaque, illum mollitia, nam porro tempore aut, qui rem quo sapiente saepe fugiat esse.\n      </p>\n    '},new((n=void 0)||(n=Promise))((function(i,s){function a(e){try{r(o.next(e))}catch(e){s(e)}}function c(e){try{r(o.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}r((o=o.apply(e,t||[])).next())}));var e,t,n,o}onAddDialog(){}},btn:"Image Add"},{path:"/todo",view:class extends n{constructor(){super(),this.setTitle("Todo")}getHtml(){return e=this,t=void 0,o=function*(){return"\n      <h1>Todo</h1>\n      <p>\n        Todo\n      </p>\n    "},new((n=void 0)||(n=Promise))((function(i,s){function a(e){try{r(o.next(e))}catch(e){s(e)}}function c(e){try{r(o.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}r((o=o.apply(e,t||[])).next())}));var e,t,n,o}},btn:"Todo Add"},{path:"/note",view:class extends n{constructor(){super(),this.setTitle("Note")}getHtml(){return e=this,t=void 0,o=function*(){return"\n      <h1>Note</h1>\n      <p>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, dolorem, labore eaque non ut rem blanditiis odio optio, reiciendis eos veritatis sequi! Aut, obcaecati nemo doloremque eum eius nesciunt, dolores molestiae, totam provident officia cupiditate. Eaque, illum mollitia, nam porro tempore aut, qui rem quo sapiente saepe fugiat esse.\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, dolorem, labore eaque non ut rem blanditiis odio optio, reiciendis eos veritatis sequi! Aut, obcaecati nemo doloremque eum eius nesciunt, dolores molestiae, totam provident officia cupiditate. Eaque, illum mollitia, nam porro tempore aut, qui rem quo sapiente saepe fugiat esse.\n      </p>\n    "},new((n=void 0)||(n=Promise))((function(i,s){function a(e){try{r(o.next(e))}catch(e){s(e)}}function c(e){try{r(o.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}r((o=o.apply(e,t||[])).next())}));var e,t,n,o}},btn:"Note Add"}],s=()=>o(void 0,void 0,void 0,(function*(){const e=i.map((e=>({route:e,isMatch:location.pathname===e.path})));a(e)})),a=e=>o(void 0,void 0,void 0,(function*(){var t;let n=null!==(t=e.find((e=>e.isMatch)))&&void 0!==t?t:{route:i[0],isMatch:!0};const{route:o}=n,s=o&&new o.view;if(null!=s&&null!=o){const e=document.querySelector("#app"),t=document.querySelector("#add-btn");e.innerHTML=yield s.getHtml(),t.innerHTML=o.btn}}));window.addEventListener("popstate",s),document.addEventListener("DOMContentLoaded",(()=>{console.log("7","엥asdasd"),console.log("7","엥asdasd"),console.log("7","엥asdasd"),console.log("7","엥asdasd"),console.log("7","엥asdasd"),console.log("7","엥asdasd"),document.body.addEventListener("click",(e=>{let t=e.target;var n;t.matches("[data-link]")&&(e.preventDefault(),n=t.href,history.pushState({},"",n),s())})),s(),new t(document.querySelector("#app"))}))})();