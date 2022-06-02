(()=>{"use strict";var n={902:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([n.id,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type='search'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n* {\n  margin: 0;\n  font-family: 'Noto Sans KR', sans-serif;\n  font-family: 'Noto Sans KR', sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: 'Noto Sans KR', sans-serif;\n  font-family: 'Noto Sans KR', sans-serif;\n  font-size: 16px;\n}\n\nbody {\n  font-family: 'Noto Sans KR', sans-serif;\n  font-family: 'Noto Sans KR', sans-serif;\n  color: #3f4150;\n}\n\nh1 {\n  margin: 0;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  background-color: transparent;\n  border: 0;\n}\nbutton:focus,\ninput:focus,\nselect:focus,\ntextarea:focus {\n  outline: none;\n  box-shadow: none;\n}\n\na,\nbutton {\n  cursor: pointer;\n}\n\nbutton {\n  padding: 0;\n}\n\nul,\nol {\n  padding-left: 0;\n  list-style: none;\n}\n\naddress {\n  font-style: normal;\n}\n\ndialog {\n  border: 0;\n}\n\n.visually-hidden {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n}\n\n@media screen and (min-width: 768px) {\n  .sm-only {\n    display: none !important;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .md-only {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .md-only {\n    display: none !important;\n  }\n}\n\n@media screen and (max-width: 1199px) {\n  .lg-only {\n    display: none !important;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .sm-hidden {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 768px) and (max-width: 1199px) {\n  .md-hidden {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .lg-hidden {\n    display: none !important;\n  }\n}\n\n.image .image-thumbnail {\n  width: 100%;\n  height: 100%;\n}\n\n.dialog {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  z-index: 1;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  font-size: 1.2rem;\n  background-color: #3186c4;\n}\n.dialog-container {\n  max-width: 400px;\n  border: 1px solid #f7f8fa;\n  border-radius: 3px;\n  background-color: #f7f8fa;\n}\n.dialog .close-btn-wrap {\n  width: 100%;\n  text-align: right;\n}\n.dialog .close {\n  padding: 10px;\n}\n\n.form-container {\n  padding: 10px;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: -0.01em;\n  color: #000;\n  font-weight: 900;\n}\n\n.dialog-submit {\n  margin-top: 10px;\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: -0.01em;\n  color: #000;\n  font-weight: 900;\n  background-color: #3186c4;\n}\n\n.page-item {\n  display: flex;\n  border: 1px solid #e0e2e7;\n  background-color: #79c1f88c;\n  border-radius: 15px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.page-item-body {\n  width: 100%;\n  height: 200px;\n  flex: 1;\n}\n.page-item .wrap {\n  display: flex;\n  height: 200px;\n}\n.page-item .wrap .first {\n  flex: 5;\n  margin-right: 20px;\n}\n.page-item .wrap .second {\n  flex: 5;\n}\n.page-item .wrap iframe {\n  width: 100%;\n  height: 200px;\n}\n.page-item .note-title,\n.page-item .todo-title,\n.page-item .second {\n  font-size: 18px;\n  line-height: 28px;\n  letter-spacing: -0.02em;\n  color: #000;\n}\n.page-item .note-title,\n.page-item .todo-title {\n  margin-bottom: 15px;\n}\n.page-item .note-body,\n.page-item .todo-checkbox {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: -0.01em;\n  color: #000;\n}\n.page-item .todo-checkbox {\n  margin-right: 10px;\n}\n\n.app {\n  min-height: 100vh;\n  background-color: #cbe1f3;\n}\n\n.container {\n  width: 100%;\n  padding: 0 5px;\n  margin: 0 auto;\n}\n.container .row {\n  display: flex;\n  flex-wrap: wrap;\n}\n.container [class^='col-'] {\n  padding: 0 10px;\n}\n.container .col-sm-1 {\n  width: 25%;\n}\n.container .col-sm-2 {\n  width: 50%;\n}\n.container .col-sm-3 {\n  width: 75%;\n}\n.container .col-sm-4 {\n  width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .container {\n    max-width: 1020px;\n    padding: 0 30px;\n  }\n  .container .col-md-1 {\n    width: 8.33333%;\n  }\n  .container .col-md-2 {\n    width: 16.66667%;\n  }\n  .container .col-md-3 {\n    width: 25%;\n  }\n  .container .col-md-4 {\n    width: 33.33333%;\n  }\n  .container .col-md-5 {\n    width: 41.66667%;\n  }\n  .container .col-md-6 {\n    width: 50%;\n  }\n  .container .col-md-7 {\n    width: 58.33333%;\n  }\n  .container .col-md-8 {\n    width: 66.66667%;\n  }\n  .container .col-md-9 {\n    width: 75%;\n  }\n  .container .col-md-10 {\n    width: 83.33333%;\n  }\n  .container .col-md-11 {\n    width: 91.66667%;\n  }\n  .container .col-md-12 {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .container {\n    max-width: 1140px;\n    padding: 0;\n  }\n  .container .col-lg-1 {\n    width: 95px;\n  }\n  .container .col-lg-2 {\n    width: 190px;\n  }\n  .container .col-lg-3 {\n    width: 285px;\n  }\n  .container .col-lg-4 {\n    width: 380px;\n  }\n  .container .col-lg-5 {\n    width: 475px;\n  }\n  .container .col-lg-6 {\n    width: 570px;\n  }\n  .container .col-lg-7 {\n    width: 665px;\n  }\n  .container .col-lg-8 {\n    width: 760px;\n  }\n  .container .col-lg-9 {\n    width: 855px;\n  }\n  .container .col-lg-10 {\n    width: 950px;\n  }\n  .container .col-lg-11 {\n    width: 1045px;\n  }\n  .container .col-lg-12 {\n    width: 1140px;\n  }\n}\n\n.gnb {\n  margin-bottom: 40px;\n}\n.gnb-nav {\n  padding: 40px 10px 20px;\n}\n.gnb-nav-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.gnb-nav-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px;\n  background-color: #b1d5ff;\n  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.1),\n    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);\n  border-radius: 50px;\n  border: 3px solid #f7f8fa;\n}\n.gnb-nav-item button {\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: -0.01em;\n  color: #b2b3b9;\n  font-weight: 900;\n}\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);i&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},a=[],s=0;s<n.length;s++){var c=n[s],d=i.base?c[0]+i.base:c[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var h=o(u,i);i.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=t(r[a]);e[s].references--}for(var c=i(n,o),d=0;d<r.length;d++){var l=t(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{class n extends class{constructor(n){const e=document.createElement("template");e.innerHTML=n,this.element=e.content.firstElementChild}attachTo(n,e="afterbegin"){n.insertAdjacentElement(e,this.element)}removeFrom(n){if(n!==this.element.parentElement)throw new Error("Parent mismatch!");n.removeChild(this.element)}}{constructor(){super('<section class="dialog">\n            <div class="dialog-container">\n              <div class="close-btn-wrap">\n                <button class="close">&times;</button>\n              </div>\n              <div id="dialog-body"></div>\n              <button class="dialog-submit">ADD</button>\n            </div>\n          </section>'),this.element.querySelector(".close").onclick=()=>{this.closeListener&&this.closeListener()},this.element.querySelector(".dialog-submit").onclick=()=>{this.submitListener&&this.submitListener()}}setOnCloseListener(n){this.closeListener=n}setOnSubmitListener(n){this.submitListener=n}addChild(n){const e=this.element.querySelector("#dialog-body");n.attachTo(e)}}class e{constructor(e){console.log(e),document.querySelector("#add-btn").addEventListener("click",(()=>{(new n).attachTo(e)}))}}class i{constructor(){}setTitle(n){document.title=n}getHtml(){return n=this,e=void 0,i=function*(){return""},new((t=void 0)||(t=Promise))((function(o,r){function a(n){try{c(i.next(n))}catch(n){r(n)}}function s(n){try{c(i.throw(n))}catch(n){r(n)}}function c(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}c((i=i.apply(n,e||[])).next())}));var n,e,t,i}onAddDialog(){}}var o=function(n,e,t,i){return new(t||(t=Promise))((function(o,r){function a(n){try{c(i.next(n))}catch(n){r(n)}}function s(n){try{c(i.throw(n))}catch(n){r(n)}}function c(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}c((i=i.apply(n,e||[])).next())}))};const r=[{path:"/",view:class extends i{constructor(){super(),this.setTitle("Image")}getHtml(){return n=this,e=void 0,i=function*(){return'\n      <Button type="button" id="dialog-add-image">Add</Button>\n      <h1>Welcome back, Dom</h1>\n      <p>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, dolorem, labore eaque non ut rem blanditiis odio optio, reiciendis eos veritatis sequi! Aut, obcaecati nemo doloremque eum eius nesciunt, dolores molestiae, totam provident officia cupiditate. Eaque, illum mollitia, nam porro tempore aut, qui rem quo sapiente saepe fugiat esse.\n      </p>\n    '},new((t=void 0)||(t=Promise))((function(o,r){function a(n){try{c(i.next(n))}catch(n){r(n)}}function s(n){try{c(i.throw(n))}catch(n){r(n)}}function c(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}c((i=i.apply(n,e||[])).next())}));var n,e,t,i}onAddDialog(){}},btn:"Image Add"},{path:"/todo",view:class extends i{constructor(){super(),this.setTitle("Todo")}getHtml(){return n=this,e=void 0,i=function*(){return"\n      <h1>Todo</h1>\n      <p>\n        Todo\n      </p>\n    "},new((t=void 0)||(t=Promise))((function(o,r){function a(n){try{c(i.next(n))}catch(n){r(n)}}function s(n){try{c(i.throw(n))}catch(n){r(n)}}function c(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}c((i=i.apply(n,e||[])).next())}));var n,e,t,i}},btn:"Todo Add"},{path:"/note",view:class extends i{constructor(){super(),this.setTitle("Note")}getHtml(){return n=this,e=void 0,i=function*(){return"\n      <h1>Note</h1>\n      <p>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, dolorem, labore eaque non ut rem blanditiis odio optio, reiciendis eos veritatis sequi! Aut, obcaecati nemo doloremque eum eius nesciunt, dolores molestiae, totam provident officia cupiditate. Eaque, illum mollitia, nam porro tempore aut, qui rem quo sapiente saepe fugiat esse.\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, dolorem, labore eaque non ut rem blanditiis odio optio, reiciendis eos veritatis sequi! Aut, obcaecati nemo doloremque eum eius nesciunt, dolores molestiae, totam provident officia cupiditate. Eaque, illum mollitia, nam porro tempore aut, qui rem quo sapiente saepe fugiat esse.\n      </p>\n    "},new((t=void 0)||(t=Promise))((function(o,r){function a(n){try{c(i.next(n))}catch(n){r(n)}}function s(n){try{c(i.throw(n))}catch(n){r(n)}}function c(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}c((i=i.apply(n,e||[])).next())}));var n,e,t,i}},btn:"Note Add"}],a=()=>o(void 0,void 0,void 0,(function*(){const n=r.map((n=>({route:n,isMatch:location.pathname===n.path})));s(n)})),s=n=>o(void 0,void 0,void 0,(function*(){var e;let t=null!==(e=n.find((n=>n.isMatch)))&&void 0!==e?e:{route:r[0],isMatch:!0};const{route:i}=t,o=i&&new i.view;if(null!=o&&null!=i){const n=document.querySelector("#app"),e=document.querySelector("#add-btn");n.innerHTML=yield o.getHtml(),e.innerHTML=i.btn}}));var c=t(379),d=t.n(c),l=t(795),p=t.n(l),m=t(569),u=t.n(m),h=t(565),f=t.n(h),g=t(216),b=t.n(g),x=t(589),v=t.n(x),w=t(902),y={};y.styleTagTransform=v(),y.setAttributes=f(),y.insert=u().bind(null,"head"),y.domAPI=p(),y.insertStyleElement=b(),d()(w.Z,y),w.Z&&w.Z.locals&&w.Z.locals,window.addEventListener("popstate",a),document.addEventListener("DOMContentLoaded",(()=>{console.log("index333","asdksadsalkndsklnd"),document.body.addEventListener("click",(n=>{let e=n.target;var t;e.matches("[data-link]")&&(n.preventDefault(),t=e.href,history.pushState({},"",t),a())})),a(),new e(document.querySelector("#app"))}))})()})();