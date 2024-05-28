"use strict";(self.webpackChunkrestoran_app=self.webpackChunkrestoran_app||[]).push([[730],{730:(n,t,e)=>{e.r(t),e.d(t,{Workbox:()=>d,WorkboxEvent:()=>f,messageSW:()=>r});try{self["workbox:window:7.0.0"]&&_()}catch(r){}function r(n,t){return new Promise((function(e){var r=new MessageChannel;r.port1.onmessage=function(n){e(n.data)},n.postMessage(t,[r.port2])}))}function o(n){var t=function(n,t){if("object"!=typeof n||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==typeof t?t:t+""}function i(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,o(r.key),r)}}function a(n,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},a(n,t)}function s(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}try{self["workbox:core:7.0.0"]&&_()}catch(r){}var c=function(){var n=this;this.promise=new Promise((function(t,e){n.resolve=t,n.reject=e}))};function u(n,t){var e=location.href;return new URL(n,e).href===new URL(t,e).href}var f=function(n,t){this.type=n,Object.assign(this,t)};function v(n,t,e){return e?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function l(){}var h={type:"SKIP_WAITING"};function p(n,t){if(!t)return n&&n.then?n.then(l):Promise.resolve()}var d=function(n){function t(t,e){var r,o;return void 0===e&&(e={}),(r=n.call(this)||this).nn={},r.tn=0,r.rn=new c,r.en=new c,r.on=new c,r.un=0,r.an=new Set,r.cn=function(){var n=r.fn,t=n.installing;r.tn>0||!u(t.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=t,n.removeEventListener("updatefound",r.cn)):(r.hn=t,r.an.add(t),r.rn.resolve(t)),++r.tn,t.addEventListener("statechange",r.ln)},r.ln=function(n){var t=r.fn,e=n.target,o=e.state,i=e===r.vn,a={sw:e,isExternal:i,originalEvent:n};!i&&r.mn&&(a.isUpdate=!0),r.dispatchEvent(new f(o,a)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&t.waiting===e&&r.dispatchEvent(new f("waiting",a))}),200):"activating"===o&&(clearTimeout(r.wn),i||r.en.resolve(e))},r.yn=function(n){var t=r.hn,e=t!==navigator.serviceWorker.controller;r.dispatchEvent(new f("controlling",{isExternal:e,originalEvent:n,sw:t,isUpdate:r.mn})),e||r.on.resolve(t)},r.gn=(o=function(n){var t=n.data,e=n.ports,o=n.source;return v(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new f("message",{data:t,originalEvent:n,ports:e,sw:o}))}))},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(o.apply(this,n))}catch(n){return Promise.reject(n)}}),r.sn=t,r.nn=e,navigator.serviceWorker.addEventListener("message",r.gn),r}var e,o;o=n,(e=t).prototype=Object.create(o.prototype),e.prototype.constructor=e,a(e,o);var s,l,d=t.prototype;return d.register=function(n){var t=(void 0===n?{}:n).immediate,e=void 0!==t&&t;try{var r=this;return v(function(n,t){var e=n();return e&&e.then?e.then(t):t()}((function(){if(!e&&"complete"!==document.readyState)return p(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.dn=r.pn(),v(r.bn(),(function(n){r.fn=n,r.dn&&(r.hn=r.dn,r.en.resolve(r.dn),r.on.resolve(r.dn),r.dn.addEventListener("statechange",r.ln,{once:!0}));var t=r.fn.waiting;return t&&u(t.scriptURL,r.sn.toString())&&(r.hn=t,Promise.resolve().then((function(){r.dispatchEvent(new f("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.yn),r.fn}))})))}catch(n){return Promise.reject(n)}},d.update=function(){try{return this.fn?v(p(this.fn.update())):v()}catch(n){return Promise.reject(n)}},d.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},d.messageSW=function(n){try{return v(this.getSW(),(function(t){return r(t,n)}))}catch(n){return Promise.reject(n)}},d.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&r(this.fn.waiting,h)},d.pn=function(){var n=navigator.serviceWorker.controller;return n&&u(n.scriptURL,this.sn.toString())?n:void 0},d.bn=function(){try{var n=this;return v(function(n,t){try{var e=n()}catch(n){return t(n)}return e&&e.then?e.then(void 0,t):e}((function(){return v(navigator.serviceWorker.register(n.sn,n.nn),(function(t){return n.un=performance.now(),t}))}),(function(n){throw n})))}catch(n){return Promise.reject(n)}},s=t,(l=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&i(s.prototype,l),Object.defineProperty(s,"prototype",{writable:!1}),s}(function(){function n(){this.Pn=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this.jn(n).add(t)},t.removeEventListener=function(n,t){this.jn(n).delete(t)},t.dispatchEvent=function(n){n.target=this;for(var t,e=function(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(e)return(e=e.call(n)).next.bind(e);if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return s(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(this.jn(n.type));!(t=e()).done;)(0,t.value)(n)},t.jn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}())}}]);
//# sourceMappingURL=730.bundle.js.map