(()=>{"use strict";function t(t){var n=document.createElement("div");return n.innerHTML=t.trim(),n.firstElementChild}var n,e=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),o=function(t){function n(n){var e=t.call(this,n.title.toUpperCase(),{class:["no-full","no-min"],url:n.url,x:"center",y:"center",icon:n.icon,bottom:document.getElementById("taskbar").offsetHeight})||this;return e.addControl({index:1,class:"wb-max",image:"./img/controls/min.svg",click:function(t,n){n.hide(!0)}}),setTimeout((function(){e.maximize(!0)}),500),e.app=n,e}return e(n,t),n}(WinBox),i=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),r=function(){function t(t){this.dom=t}return t.prototype.render=function(t){t.appendChild(this.dom)},t}(),a=function(n){function e(e){var o=n.call(this,t('<div class="dropdown-center"></div>'))||this;return o.widget=e,o.widget.setAttribute("data-bs-toggle","dropdown"),o.dom.appendChild(o.widget),o.menu=t('<ul class="dropdown-menu"></ul>'),o.dom.appendChild(o.menu),o}return i(e,n),e.prototype.addMenuItem=function(n,e){var o=t('<li class="dropdown-item"></li>');o.addEventListener("click",(function(){return e()})),o.appendChild(n),this.menu.appendChild(o)},e}(r),s=(function(n){function e(e,o){return void 0===o&&(o=void 0),n.call(this,t('<button class="btn border-0" type="button"><i class="bi '.concat(e,'"></i>').concat(void 0!==o?" "+o:"","</button>")))||this}i(e,n)}(a),function(n){function e(e,o,i){void 0===o&&(o=void 0);var r=n.call(this,t('<button class="btn border-0" type="button"><i class="bi '.concat(e,'"></i>').concat(void 0!==o?" "+o:"","</button>")))||this;return r.dom.addEventListener("click",i),r}return i(e,n),e}(r)),c=[];["files","camera","calculator","music","notepad","settings","terminal"].forEach((function(t){c.push({id:"".concat(t),title:"".concat(t),url:"/apps/".concat(t,"/index.html"),icon:"/apps/".concat(t,"/icon.svg")})}));var d=[{name:"resume",icon:"./img/icons/pdf-file.svg",type:"file",url:"/files/resume.html"}],l=function(){return"./img/wallpapers/background.jpeg"},u=function(){return c},p=function(){return d},f=function(){return c.filter((function(t){return void 0!==["Files","Camera","Settings","Terminal","MediaPlayer"].find((function(n){return t.title===n}))}))},h=function(){function t(){this.handlers=[]}return t.prototype.handle=function(t){for(var n=0,e=this.handlers;n<e.length;n++){(0,e[n])(t)}},t.prototype.register=function(t){this.handlers.push(t)},t}(),v=function(){function t(){this.running=new Map,this.processes=0,this.newTaskDispatcher=new h,this.removeTaskDispatcher=new h}return t.prototype.addTask=function(t){var n={id:++this.processes,data:t};return this.running.set(n.id,n),this.newTaskDispatcher.handle(n),n},t.prototype.removeTask=function(t){var n=this.running.get(t);void 0!==n&&(this.running.delete(t),this.removeTaskDispatcher.handle(n))},t.prototype.onNewTask=function(t){this.newTaskDispatcher.register(t)},t.prototype.onRemoveTask=function(t){this.removeTaskDispatcher.register(t)},t}(),m=function(){function t(){this.services=new Map}return t.prototype.register=function(t,n){this.services.set(t,n)},t.prototype.call=function(t,n){var e=this.services.get(t);return null==e?new Error("unknown service ".concat(t)):e(n)},t}(),y=new v,g=(new m,function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}()),b=function(n){function e(){var e=n.call(this,t('<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#appGridModal"><i class="bi bi-grid"></i></button>'))||this;e.isVisible=!1;var i=t('\n<div class="modal" id="appGridModal" tabindex="-1" aria-labelledby="appGridModalLabel" aria-hidden="true">\n    <div class="modal-dialog modal-dialog-centered modal-xl">\n        <div class="modal-content bg-transparent border-0">\n            <div class="row row-cols-2 row-cols-md-5 g-2 g-sm-1" id="appGrid">\n            </div>\n        </div>\n    </div>\n</div>\n');document.body.appendChild(i);var r=document.getElementById("appGrid");return null!=r&&u().map((function(n){var e=t('\n<button class="card d-block mx-auto bg-transparent border-0" style="width: 10rem;" data-bs-dismiss="modal">\n    <img src="'.concat(n.icon,'" alt="').concat(n.title,'" style="width: 5rem;" class="card-img-top d-block mx-auto">\n    <div class="card-body">\n        <div class="card-title text-light text-wrap">').concat(n.title,"</div>\n    </div>\n</button>"));e.addEventListener("click",(function(){var t=new o(n),e=y.addTask(t);t.onclose=function(t){return y.removeTask(e.id),!1}}));var i=t('<div class="col"></div>');i.appendChild(e),r.appendChild(i)})),e}return g(e,n),e}(r),w=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),k=function(n){function e(){var e=n.call(this,t('<p class="align-middle pb-0 mb-0 fw-semibold"></p>'))||this;return setInterval((function(){return e.updateTime()}),1e3),e}return w(e,n),e.prototype.updateTime=function(){var t=new Date,n=["Sun","Mon","Tues","Wed","Fri","Sat"][t.getDay()],e=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][t.getMonth()],o=t.getDate(),i=t.getHours(),r=t.getMinutes();this.widget.innerText="".concat(n,", ").concat(e," ").concat(o,"  ").concat(i,":").concat(r)},e}(a),C=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),_=function(t){function n(){var n=t.call(this,"bi-fullscreen",void 0,(function(){n.isFullscreen?document.exitFullscreen().then((function(){n.isFullscreen=!1})):document.documentElement.requestFullscreen().then((function(){n.isFullscreen=!0}))}))||this;return n.isFullscreen=!1,n}return C(n,t),n}(s),T=function(){function n(n){n.icon;this.dom=t('\n<button type="button" style="height: 100%;" class="btn btn-transparent position-relative p-0 mx-1">\n<img style="height: 100%; width: auto" src="'.concat(n.icon,'" alt="">\n</button>')),this.count=t('<span style="display: none;" class="position-absolute top-0 start-100 translate-middle badge rounded-pill">0</span>'),this.dom.appendChild(this.count),this.isPinned=!1}return n.prototype.setCount=function(t){this.count.innerText=t.toString(),this.count.style.display=0===t?"none":"block"},n}(),x=function(){function n(){var n=this;this.dom=t('<div id="taskbar" class="fixed-bottom p-1 text-bg-light bg-opacity-75"></div>');var e=t('<div class="row"></div>');this.dom.appendChild(e),this.startContainer=t('<div align="left" class="col align-self-start d-inline-flex my-auto"></div>'),this.endContainer=t('<div align="right" class="col align-self-end justify-content-end d-inline-flex align-items-center my-auto"></div>'),e.appendChild(this.startContainer),e.appendChild(this.endContainer),this.appMenu=new b,this.appMenu.render(this.startContainer),(new k).render(this.endContainer),(new _).render(this.endContainer),this.taskContainer=t('<div class="col" style="height: 42px;"></div>'),this.startContainer.appendChild(this.taskContainer),this.taskIcons=new Map,this.tasks=new Map,f().map((function(t){var e=new T(t);e.isPinned=!0,n.addTaskEntry(t,e)})),y.onNewTask((function(t){var e,o=t.data,i=n.tasks.get(o.app.id);"string"==typeof o.id&&(void 0!==i?(i.push(t),void 0!==(e=n.taskIcons.get(o.app.id))&&e.setCount(i.length)):(n.tasks.set(o.app.id,new Array(t)),void 0===(e=n.taskIcons.get(o.app.id))&&(e=new T(o.app)),e.isPinned||n.addTaskEntry(o.app,e),e.setCount(1)))})),y.onRemoveTask((function(t){var e=t.data,o=n.tasks.get(e.app.id);if(void 0!==o){o=o.filter((function(n){return n.id!==t.id}));var i=n.taskIcons.get(e.app.id);void 0!==i&&i.setCount(o.length),0===o.length?(void 0!==i&&(i.isPinned||n.removeTaskEntry(i)),n.tasks.delete(e.app.id)):n.tasks.set(e.app.id,o)}}))}return n.prototype.addTaskEntry=function(t,n){var e=this;return this.taskIcons.set(t.id,n),this.taskContainer.appendChild(n.dom),n.dom.addEventListener("click",(function(){var i=e.tasks.get(t.id);if(void 0!==i){var r=i[0].data.hidden;i.forEach((function(t){t.data.hide(!r)}))}else if(n.isPinned){n.setCount(1);var a=new o(t),s=y.addTask(a);a.onclose=function(t){return y.removeTask(s.id),!1}}})),n},n.prototype.removeTaskEntry=function(t){this.taskContainer.removeChild(t.dom)},n.prototype.render=function(t){t.appendChild(this.dom)},n}(),E=function(){function n(){var n=this;this.dom=t('\n<div class="row row-cols-auto bg-transparent pt-2 ps-3" style="flex: 1;">\n</div>'),p().map((function(t){n.addIcon(t)}))}return n.prototype.addIcon=function(n){var e=t('\n<div class="col rounded-2 m-2 desktop-entry">\n    <img src="'.concat(n.icon,'" class="mx-auto d-block" style="height: 45px; width: auto;" alt="').concat(n.name,'"/>\n    <p class="bg-light rounded-2 px-1 mt-1 text-center">').concat(n.name,"</p>\n</div>\n"));e.addEventListener("click",(function(){var t=new o({title:n.name,id:n.name,icon:n.icon,url:n.url}),e=y.addTask(t);t.onclose=function(t){return y.removeTask(e.id),!1}})),this.dom.appendChild(e)},n.prototype.render=function(n){var e=t('\n        <div class="container-fluid"></div>\n        ');e.appendChild(this.dom),n.appendChild(e)},n}();document.oncontextmenu=function(t){return!1};var O=document.getElementById("root");null!==O&&document.addEventListener("DOMContentLoaded",(function(){var t=["Initializing System","Starting System Services","Starting Storage Services","Starting Application Services","Hacking ISRO servers","Doing Something Secret","Starting Desktop Interface"],n=document.getElementById("progress-bar"),e=document.getElementById("progress-message"),o=0,i=setInterval((function(){if(o>=t.length){clearInterval(i);var r=document.getElementById("progress-container");null!=r&&O.removeChild(r),document.body.style.background="",document.body.style.backgroundImage="url('".concat(l(),"')"),(new x).render(O),(new E).render(O)}null!=n&&(n.style.width=o/t.length*100+"%"),null!=e&&(e.innerText=t[o]),o++}),500)}))})();
//# sourceMappingURL=bundle.js.map