(self.webpackChunkduhstin_com=self.webpackChunkduhstin_com||[]).push([[293],{1547:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=f;var i=u(n(6540)),r=n(4794),o=u(n(5556)),c=n(5642);function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){var t=e.to,n=e.title,o=e.children,u=e.className,l=e.stripHash,s=void 0!==l&&l,f=e.gatsbyLinkProps,M=void 0===f?{}:f,m=e.onAnchorLinkClick,d=s?c.handleStrippedLinkClick:c.handleLinkClick,p=a(a({},M),{},{to:s?(0,c.stripHashedLocation)(t):t,onClick:function(e){return d(t,e,m)}});return n&&(p.title=n),u&&(p.className=u),i.default.createElement(r.Link,p,o||n)}f.propTypes={to:o.default.string.isRequired,title:o.default.string,className:o.default.string,stripHash:o.default.bool,gatsbyLinkProps:o.default.object,onAnchorLinkClick:o.default.func,children:o.default.node}},952:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.INVALID_HASH=t.IMPROPPER_FORMATTING=void 0;t.IMPROPPER_FORMATTING="Anchor path should contain an absolute root path `/` and selector `#` Ex: `/about#team`";t.INVALID_HASH="Anchor Links plugin attempted to scroll to an invalid hash on route change."},1087:function(e,t,n){"use strict";Object.defineProperty(t,"M",{enumerable:!0,get:function(){return i.AnchorLink}});var i=n(1547)},5642:function(e,t,n){"use strict";function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.logWarning=m,t.scroller=d,t.handleLinkClick=function(e,t,n){e.includes("/")&&e.includes("#")||m(u.IMPROPPER_FORMATTING);if(f&&e.includes("#")){var i=a(e.split("#"),2),r=i[0],o=i[1];window.location.pathname===(0,c.withPrefix)(r)&&(t.preventDefault(),d("#".concat(o),window.gatsby_scroll_offset,window.gatsby_scroll_duration))}n&&n()},t.handleStrippedLinkClick=function(e,t,n){e.includes("/")&&e.includes("#")||m(u.IMPROPPER_FORMATTING);var i=a(e.split("#"),2),r=i[0],o=i[1],c=f&&window.location.pathname===r,l=f&&window.location.pathname!==r;c&&(t.preventDefault(),d("#".concat(o),window.gatsby_scroll_offset,window.gatsby_scroll_duration));l&&(window.gatsby_scroll_hash="#".concat(o));n&&n()},t.stripHashedLocation=function(e){return e.split("#")[0]},t.checkHash=function(e,t){var n=e.hash,i=n?n.substr(1):null,r=i?document.getElementById(i):null;n&&Boolean(r)?d(n,t):n&&i&&!r&&m(u.INVALID_HASH)},t.isDevelopment=t.isBrowser=void 0;var r,o=(r=n(4055))&&r.__esModule?r:{default:r},c=n(4794),u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var c=r?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(952));function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],i=!0,r=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(i=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);i=!0);}catch(l){r=!0,o=l}finally{try{i||null==u.return||u.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var f="undefined"!=typeof window;t.isBrowser=f;var M=!1;function m(e){M&&console.warn(e)}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;(0,o.default)(e,{duration:n,offset:t})}t.isDevelopment=M},9716:function(){setTimeout((function(){if(console.log("window.innerWidth "+window.innerWidth),window.innerWidth>480){let n=600,i=document.querySelector("#ability"),r=document.querySelectorAll(".col-3.ability");function e(e,t,i){let r=i.getBoundingClientRect();return"perspective(100px)    rotateX("+-(t-r.y-r.height/2)/n+"deg)    rotateY("+(e-r.x-r.width/2)/n+"deg) "}function t(t,n){t.style.transform=e.apply(null,n)}i.onmousemove=function(e){r.forEach((function(n){let i=[e.clientX,e.clientY].concat([n]);window.requestAnimationFrame((function(){t(n,i)}))}))}}}),1e3)},1638:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return H},default:function(){return W}});var i,r=n(6540),o=n(6815),c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u={},l={get exports(){return u},set exports(e){u=e}},a={};l.exports=function(){if(i)return a;i=1;var e=r,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,i){var r,l={},a=null,s=null;for(r in void 0!==i&&(a=""+i),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(s=n.ref),n)o.call(n,r)&&!u.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:t,type:e,key:a,ref:s,props:l,_owner:c.current}}return a.Fragment=n,a.jsx=l,a.jsxs=l,a}();const s=u.jsx;var f=NaN,M="[object Symbol]",m=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,y=/^0o[0-7]+$/i,h=parseInt,g="object"==typeof c&&c&&c.Object===Object&&c,N="object"==typeof self&&self&&self.Object===Object&&self,I=g||N||Function("return this")(),j=Object.prototype.toString,b=Math.max,D=Math.min,E=function(){return I.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&j.call(e)==M}(e))return f;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(m,"");var n=p.test(e);return n||y.test(e)?h(e.slice(2),n?2:8):d.test(e)?f:+e}var O=function(e,t,n){var i,r,o,c,u,l,a=0,s=!1,f=!1,M=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=i,o=r;return i=r=void 0,a=t,c=e.apply(o,n)}function d(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-a>=o}function p(){var e=E();if(d(e))return y(e);u=setTimeout(p,function(e){var n=t-(e-l);return f?D(n,o-(e-a)):n}(e))}function y(e){return u=void 0,M&&i?m(e):(i=r=void 0,c)}function h(){var e=E(),n=d(e);if(i=arguments,r=this,l=e,n){if(void 0===u)return function(e){return a=e,u=setTimeout(p,t),s?m(e):c}(l);if(f)return u=setTimeout(p,t),m(l)}return void 0===u&&(u=setTimeout(p,t)),c}return t=w(t)||0,v(n)&&(s=!!n.leading,o=(f="maxWait"in n)?b(w(n.maxWait)||0,t):o,M="trailing"in n?!!n.trailing:M),h.cancel=function(){void 0!==u&&clearTimeout(u),a=0,i=l=r=u=void 0},h.flush=function(){return void 0===u?c:y(E())},h};function z(e){return t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}}const A=[],T={width:"100%",height:"100%"},k=(0,r.forwardRef)((function({className:e,children:t,debounceTime:n=300,ignoreDimensions:i=A,parentSizeStyles:o,enableDebounceLeadingCall:c=!0,resizeObserverPolyfill:u,...l},a){const f=(0,r.useRef)(null),M=(0,r.useRef)(0),[m,d]=(0,r.useState)({width:0,height:0,top:0,left:0}),p=(0,r.useMemo)((()=>{const e=Array.isArray(i)?i:[i];return O((t=>{d((n=>Object.keys(n).filter((e=>n[e]!==t[e])).every((t=>e.includes(t)))?n:t))}),n,{leading:c})}),[n,c,i]);return(0,r.useEffect)((()=>{const e=new(u||window.ResizeObserver)((e=>{e.forEach((e=>{const{left:t,top:n,width:i,height:r}=(null==e?void 0:e.contentRect)??{};M.current=window.requestAnimationFrame((()=>{p({width:i,height:r,top:n,left:t})}))}))}));return f.current&&e.observe(f.current),()=>{window.cancelAnimationFrame(M.current),e.disconnect(),p.cancel()}}),[p,u]),s("div",{style:{...T,...o},ref:z([a,f]),className:e,...l,children:t({...m,ref:f.current,resize:p})})})),L=(0,r.forwardRef)((({scene:e,style:t,onMouseDown:n,onMouseUp:i,onMouseHover:c,onKeyDown:u,onKeyUp:l,onStart:a,onLookAt:f,onFollow:M,onWheel:m,onLoad:d,renderOnDemand:p=!0,...y},h)=>{const g=(0,r.useRef)(null),[N,I]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{let t;I(!0);const r=[{name:"mouseDown",cb:n},{name:"mouseUp",cb:i},{name:"mouseHover",cb:c},{name:"keyDown",cb:u},{name:"keyUp",cb:l},{name:"start",cb:a},{name:"lookAt",cb:f},{name:"follow",cb:M},{name:"scroll",cb:m}];if(g.current){async function s(){await t.load(e);for(let e of r)e.cb&&t.addEventListener(e.name,e.cb);I(!1),null==d||d(t)}t=new o.l(g.current,{renderOnDemand:p}),s()}return()=>{for(let e of r)e.cb&&t.removeEventListener(e.name,e.cb);t.dispose()}}),[e]),s(k,{ref:h,parentSizeStyles:t,debounceTime:50,...y,children:()=>s("canvas",{ref:g,style:{display:N?"none":"block"}})})}));var x=n(4679),S=n(4794),Q=n(457),C=n(1087);var _=function(){const{0:e,1:t}=(0,r.useState)(!1),{0:n,1:i}=(0,r.useState)(!1),{0:o,1:c}=(0,r.useState)(0),u=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const e=window.innerHeight,n=u.current.getBoundingClientRect().height;u.current&&c(n);const r=()=>{if(u.current){const r=u.current.getBoundingClientRect().top;t(r<=0||window.scrollY>=r),i(r<=0||window.scrollY>=r),console.log(e-n),window.scrollY<=e-n&&i(!1)}};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}}),[]),r.createElement("header",{ref:u,className:n?"sticky":""},r.createElement(S.Link,{to:"/"},r.createElement("img",{class:"logo",src:Q.A})),r.createElement("nav",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(C.M,{to:"#about"},"About")),r.createElement("li",null,r.createElement(C.M,{to:"#ability"},"Ability")),r.createElement("li",null,r.createElement(C.M,{to:"#contact"},"Contact")))))},P=n(8154),Y=n.p+"static/dustin_portrait-26d2dc458eada76f012e51c926135c9c.jpg",U=n.p+"static/favicon-8bbcb4a2fb7d95a03b089d15190ba96f.png",R=n(5890);n(9716);var W=()=>r.createElement(x.A,null,r.createElement(P.m,null,r.createElement("body",{className:"home"}),r.createElement("link",{rel:"icon",type:"image/svg+xml",href:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zNTguOTQ4IDM4Ny43MDVWMTMzSDQwNy44OTlWMjA5LjY4OUw0MDUuMjg4IDI2MC40MzRMNDA2Ljc1NiAyNzQuNzkzTDQwNS4xMjUgMjYzLjIwOEM0MDYuNDMgMjUzLjQxOCA0MDguOTg2IDI0NC4xNzIgNDEyLjc5NCAyMzUuNDY5QzQxNi43MSAyMjYuNjU4IDQyMi40NzUgMjE5LjUzMyA0MzAuMDg5IDIxNC4wOTRDNDM3LjcwNCAyMDguNjU1IDQ0Ny42MDMgMjA1LjkzNiA0NTkuNzg2IDIwNS45MzZDNDc1LjM0MSAyMDUuOTM2IDQ4Ny45MDUgMjExLjIxMiA0OTcuNDc4IDIyMS43NjNDNTA3LjE1OSAyMzIuMjA2IDUxMiAyNDguMTk2IDUxMiAyNjkuNzM0VjM4Ny43MDVINDYxLjU4MVYyODguNjYyQzQ2MS41ODEgMjczLjc1OSA0NTkuNzg2IDI2My4xNTMgNDU2LjE5NiAyNTYuODQ0QzQ1Mi43MTUgMjUwLjUzNSA0NDYuNzg3IDI0Ny4zODEgNDM4LjQxMSAyNDcuMzgxQzQzMi40MjggMjQ3LjM4MSA0MjYuODggMjQ5LjUwMiA0MjEuNzY4IDI1My43NDRDNDE2LjY1NSAyNTcuODc4IDQxMi41MjIgMjYzLjMxNyA0MDkuMzY3IDI3MC4wNjFWMzg3LjcwNUgzNTguOTQ4WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE5Nl8xMDc5OSkiLz4KPHBhdGggZD0iTTIzOC4xODYgMzkxLjI5NEMyMjIuMDg3IDM5MS4yOTQgMjA5Ljc0MSAzODUuOTY0IDIwMS4xNDcgMzc1LjMwNEMxOTIuNTU0IDM2NC41MzUgMTg4LjI1NyAzNDguMzI3IDE4OC4yNTcgMzI2LjY4VjIwOS41MjZIMjM4LjUxMlYzMTkuNTAxQzIzOC41MTIgMzMyLjQ0NSAyNDAuMzYyIDM0MC43NjcgMjQ0LjA2IDM0NC40NjVDMjQ3Ljg2NyAzNDguMDU1IDI1Mi44NzEgMzQ5Ljg1IDI1OS4wNzIgMzQ5Ljg1QzI2Ni4xNDIgMzQ5Ljg1IDI3Mi4yMzQgMzQ3LjY3NCAyNzcuMzQ2IDM0My4zMjNDMjgyLjQ1OSAzMzguOTcyIDI4Ni40MjkgMzMzLjc1MSAyODkuMjU4IDMyNy42NTlWMjA5LjUyNkgzMzkuNTEzVjM4Ny43MDVIMjk0Ljk2OEwyOTAuNTYzIDMyMC40OEwyOTIuMzU4IDMzNC4wMjNDMjkwLjgzNSAzNDYuNDIzIDI4Ny43MzUgMzU2LjkyMSAyODMuMDU3IDM2NS41MTRDMjc4LjQ4OSAzNzMuOTk5IDI3Mi40NTEgMzgwLjQxNyAyNjQuOTQ2IDM4NC43NjhDMjU3LjU0OSAzODkuMTE5IDI0OC42MjkgMzkxLjI5NCAyMzguMTg2IDM5MS4yOTRaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfMTk2XzEwNzk5KSIvPgo8cGF0aCBkPSJNNTEuMzk3OCAzODcuNzA1TDM3LjIwMjIgMzQxLjIwMkg2MS4xODc5Qzc0LjEzMjUgMzQxLjIwMiA4NC43OTI4IDMzOC44MDkgOTMuMTY4OCAzMzQuMDIzQzEwMS42NTMgMzI5LjIzNiAxMDcuOTYzIDMyMS40MDQgMTEyLjA5NiAzMTAuNTI3QzExNi4zMzkgMjk5LjY0OSAxMTguNDYgMjg1LjEyNyAxMTguNDYgMjY2Ljk2MUMxMTguNDYgMjQ5LjAxMiAxMTYuNTU2IDIzNC45OCAxMTIuNzQ5IDIyNC44NjRDMTA4Ljk0MiAyMTQuNzQ3IDEwMi41NzggMjA3LjYyMiA5My42NTgzIDIwMy40ODlDODQuODQ3MiAxOTkuMzU1IDcyLjg4MTYgMTk3LjI4OCA1Ny43NjE0IDE5Ny4yODhIMzYuMjIzMkw1MS4zOTc4IDE1MC40NTlINjQuNjE0NEM5OS44NTg2IDE1MC40NTkgMTI2LjQ1NSAxNjAuMTQgMTQ0LjQwMyAxNzkuNTAzQzE2Mi40NjEgMTk4Ljc1NyAxNzEuNDg5IDIyNy42OTIgMTcxLjQ4OSAyNjYuMzA4QzE3MS40ODkgMjkyLjMwNiAxNjcuMzAxIDMxNC4zMzQgMTU4LjkyNSAzMzIuMzkxQzE1MC42NTggMzUwLjQ0OCAxMzguNTI5IDM2NC4yMDkgMTIyLjUzOSAzNzMuNjcyQzEwNi42NTcgMzgzLjAyNyA4Ny4yOTQ3IDM4Ny43MDUgNjQuNDUxMiAzODcuNzA1SDUxLjM5NzhaTTAgMzg3LjcwNVYxNTAuNDU5SDUxLjM5NzhWMzg3LjcwNUgwWiIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyXzE5Nl8xMDc5OSkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xOTZfMTA3OTkiIHgxPSI0MzUuNDc0IiB5MT0iMTMzIiB4Mj0iNDM1LjQ3NCIgeTI9IjM4Ny43MDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRDYwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFOTg0MTQiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzE5Nl8xMDc5OSIgeDE9IjI2My44ODUiIHkxPSIyMDkuNTI2IiB4Mj0iMjYzLjg4NSIgeTI9IjM5MS4yOTQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRDYwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFOTg0MTQiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzE5Nl8xMDc5OSIgeDE9Ijg1Ljc0NDYiIHkxPSIxNTAuNDU5IiB4Mj0iODUuNzQ0NiIgeTI9IjM4Ny43MDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRDYwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFOTg0MTQiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"}),r.createElement("link",{rel:"icon",type:"image/png",href:U})),r.createElement("main",null,r.createElement("section",{className:R.Jo},r.createElement("div",{class:"hero"},r.createElement(L,{scene:"https://prod.spline.design/xRvQgZSl6VwHLvFQ/scene.splinecode"}),r.createElement("img",{alt:"duh logo",class:"logo",src:Q.A}),r.createElement("h1",null,"Hey friend, 👋 Welcome to duhstin.com ")),r.createElement(_,null)),r.createElement("section",{className:R.Jo,id:"about"},r.createElement("div",{className:R.FG},r.createElement("div",{class:"row"},r.createElement("div",{className:R.a2},r.createElement("h2",null,"About"))),r.createElement("div",{class:"row"},r.createElement("div",{className:R.MX},r.createElement("img",{class:"portrait",src:Y})),r.createElement("div",{className:`${R.MX} text`},r.createElement("p",null,"My name is Dustin Davis"),r.createElement("p",null,"I’m a Web Designer and Developer"),r.createElement("p",null,"I have 0ver 20 years of experience in graphic and web design and 8 years in Web development."),r.createElement("p",null,"I'm bilingual. I like cities and the woods."),r.createElement("p",null,"I see latent improvements everywhere."))))),r.createElement("section",{className:R.Jo,id:"ability"},r.createElement("div",{className:R.FG},r.createElement("h2",null,"Ability"),r.createElement("div",{class:"row abilities cards"},r.createElement("div",{class:"col-3 ability"},r.createElement("div",{class:"emoji"}),r.createElement("h3",null,r.createElement("span",null,"39"),"Years of ",r.createElement("br",null),"thinking deeply")),r.createElement("div",{class:"col-3 ability"},r.createElement("div",{class:"emoji"}),r.createElement("h3",null,r.createElement("span",null,"26"),"Years Practicing ",r.createElement("br",null),"Design")),r.createElement("div",{class:"col-3 ability"},r.createElement("div",{class:"emoji"}),r.createElement("h3",null,r.createElement("span",null,"8"),"Years Practicing ",r.createElement("br",null),"Web Development"))),r.createElement("div",{class:"row abilities text"},r.createElement("div",{class:"col-3 ability-text"},r.createElement("h4",null,"Software"),r.createElement("ul",{class:"no-bullet"},r.createElement("li",null,r.createElement("img",{src:"",alt:""}),"Adobe Creative Suite"),r.createElement("li",null,r.createElement("img",{src:"",alt:""}),"Figma"),r.createElement("li",null,r.createElement("img",{src:"",alt:""}),"Spline 3D Design"),r.createElement("li",null,r.createElement("img",{src:"",alt:""}),"Visual Studio Code"))),r.createElement("div",{class:"col-3 ability-text"},r.createElement("h4",null,"Design Practices"),r.createElement("ul",{class:"no-bullet"},r.createElement("li",null,"Solid Concepts > Fancy Fillers"),r.createElement("li",null,"Systems = Consistency = Joyful UX"),r.createElement("li",null,"Empathy for Visitors Always"))),r.createElement("div",{class:"col-3 ability-text"},r.createElement("h4",null,"Development Practices"),r.createElement("ul",{class:"no-bullet"},r.createElement("li",null,"WordPress / PHP"),r.createElement("li",null,"React / Javascript / Node"),r.createElement("li",null,"CSS / Sass / CSS Modules")))))),r.createElement("section",{className:R.Jo,id:"contact"},r.createElement("div",{className:R.FG},r.createElement("div",{class:"row"},r.createElement("div",{className:R.a2},r.createElement("h2",null,"Contact"))),r.createElement("div",{class:"row"},r.createElement("div",{className:`${R.MX} text`},r.createElement("p",null,"Reach out anytime and I'll get right back to ya :)"),r.createElement("p",null,r.createElement(S.Link,{to:"/cv/"},"Curriculum Vitae")),r.createElement("p",null,"Portfolio upon request ;)"),r.createElement("p",null,r.createElement("a",{href:"mailto:hiitsdustindavis@gmail.com"},r.createElement("span",null,"💌")," hiitsdustindavis@gmail.com"))),r.createElement("div",{className:R.MX},r.createElement("div",null,r.createElement("iframe",{src:"https://giphy.com/embed/QWkuGmMgphvmE",width:"100%",height:"100%",className:"giphy-embed"}))))))));function H(){return r.createElement(r.Fragment,null,r.createElement("title",null,"Home Page"),r.createElement("script",{type:"module",src:"https://unpkg.com/@splinetool/viewer@0.9.506/build/spline-viewer.js"}))}},3491:function(e){(function(){var t,n,i,r,o,c;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-o)/1e6},n=process.hrtime,r=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),c=1e9*process.uptime(),o=r-c):Date.now?(e.exports=function(){return Date.now()-i},i=Date.now()):(e.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)},3146:function(e,t,n){for(var i=n(3491),r="undefined"==typeof window?n.g:window,o=["moz","webkit"],c="AnimationFrame",u=r["request"+c],l=r["cancel"+c]||r["cancelRequest"+c],a=0;!u&&a<o.length;a++)u=r[o[a]+"Request"+c],l=r[o[a]+"Cancel"+c]||r[o[a]+"CancelRequest"+c];if(!u||!l){var s=0,f=0,M=[],m=1e3/60;u=function(e){if(0===M.length){var t=i(),n=Math.max(0,m-(t-s));s=n+t,setTimeout((function(){var e=M.slice(0);M.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(s)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return M.push({handle:++f,callback:e,cancelled:!1}),f},l=function(e){for(var t=0;t<M.length;t++)M[t].handle===e&&(M[t].cancelled=!0)}}e.exports=function(e){return u.call(r,e)},e.exports.cancel=function(){l.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=u,e.cancelAnimationFrame=l}},8257:function(e,t){t.linear=function(e){return e},t.inQuad=function(e){return e*e},t.outQuad=function(e){return e*(2-e)},t.inOutQuad=function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)},t.inCube=function(e){return e*e*e},t.outCube=function(e){return--e*e*e+1},t.inOutCube=function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},t.inQuart=function(e){return e*e*e*e},t.outQuart=function(e){return 1- --e*e*e*e},t.inOutQuart=function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)},t.inQuint=function(e){return e*e*e*e*e},t.outQuint=function(e){return--e*e*e*e*e+1},t.inOutQuint=function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)},t.inSine=function(e){return 1-Math.cos(e*Math.PI/2)},t.outSine=function(e){return Math.sin(e*Math.PI/2)},t.inOutSine=function(e){return.5*(1-Math.cos(Math.PI*e))},t.inExpo=function(e){return 0==e?0:Math.pow(1024,e-1)},t.outExpo=function(e){return 1==e?e:1-Math.pow(2,-10*e)},t.inOutExpo=function(e){return 0==e?0:1==e?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(2-Math.pow(2,-10*(e-1)))},t.inCirc=function(e){return 1-Math.sqrt(1-e*e)},t.outCirc=function(e){return Math.sqrt(1- --e*e)},t.inOutCirc=function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},t.inBack=function(e){var t=1.70158;return e*e*((t+1)*e-t)},t.outBack=function(e){var t=1.70158;return--e*e*((t+1)*e+t)+1},t.inOutBack=function(e){var t=2.5949095;return(e*=2)<1?e*e*((t+1)*e-t)*.5:.5*((e-=2)*e*((t+1)*e+t)+2)},t.inBounce=function(e){return 1-t.outBounce(1-e)},t.outBounce=function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},t.inOutBounce=function(e){return e<.5?.5*t.inBounce(2*e):.5*t.outBounce(2*e-1)+.5},t.inElastic=function(e){var t,n=.1;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/.4))},t.outElastic=function(e){var t,n=.1;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*e)*Math.sin((e-t)*(2*Math.PI)/.4)+1)},t.inOutElastic=function(e){var t,n=.1,i=.4;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=i*Math.asin(1/n)/(2*Math.PI),(e*=2)<1?n*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/i)*-.5:n*Math.pow(2,-10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/i)*.5+1)},t["in-quad"]=t.inQuad,t["out-quad"]=t.outQuad,t["in-out-quad"]=t.inOutQuad,t["in-cube"]=t.inCube,t["out-cube"]=t.outCube,t["in-out-cube"]=t.inOutCube,t["in-quart"]=t.inQuart,t["out-quart"]=t.outQuart,t["in-out-quart"]=t.inOutQuart,t["in-quint"]=t.inQuint,t["out-quint"]=t.outQuint,t["in-out-quint"]=t.inOutQuint,t["in-sine"]=t.inSine,t["out-sine"]=t.outSine,t["in-out-sine"]=t.inOutSine,t["in-expo"]=t.inExpo,t["out-expo"]=t.outExpo,t["in-out-expo"]=t.inOutExpo,t["in-circ"]=t.inCirc,t["out-circ"]=t.outCirc,t["in-out-circ"]=t.inOutCirc,t["in-back"]=t.inBack,t["out-back"]=t.outBack,t["in-out-back"]=t.inOutBack,t["in-bounce"]=t.inBounce,t["out-bounce"]=t.outBounce,t["in-out-bounce"]=t.inOutBounce,t["in-elastic"]=t.inElastic,t["out-elastic"]=t.outElastic,t["in-out-elastic"]=t.inOutElastic},797:function(e){function t(e){if(e)return function(e){for(var n in t.prototype)e[n]=t.prototype[n];return e}(e)}t.prototype.on=t.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},t.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},t.prototype.off=t.prototype.removeListener=t.prototype.removeAllListeners=t.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,i=this._callbacks["$"+e];if(!i)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var r=0;r<i.length;r++)if((n=i[r])===t||n.fn===t){i.splice(r,1);break}return 0===i.length&&delete this._callbacks["$"+e],this},t.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),n=this._callbacks["$"+e];if(n)for(var i=0,r=(n=n.slice(0)).length;i<r;++i)n[i].apply(this,t);return this},t.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},t.prototype.hasListeners=function(e){return!!this.listeners(e).length},e.exports=t},4055:function(e,t,n){var i=n(5282);e.exports=function(e,t){if(t=t||{},"string"==typeof e&&(e=document.querySelector(e)),e)return i(0,function(e,t,n){var i,r=document.body,o=document.documentElement,c=e.getBoundingClientRect(),u=o.clientHeight,l=Math.max(r.scrollHeight,r.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight);t=t||0,i="bottom"===n?c.bottom-u:"middle"===n?c.bottom-u/2-c.height/2:c.top;var a=l-u;return Math.min(i+t+window.pageYOffset,a)}(e,t.offset,t.align),t)}},5282:function(e,t,n){var i=n(7552),r=n(3146);e.exports=function(e,t,n){n=n||{};var o={top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft},c=i(o).ease(n.ease||"out-circ").to({top:t,left:e}).duration(n.duration||1e3);function u(){r(u),c.update()}return c.update((function(e){window.scrollTo(0|e.left,0|e.top)})),c.on("end",(function(){u=function(){}})),u(),c}},7552:function(e,t,n){var i=n(8257);function r(e){if(!(this instanceof r))return new r(e);this._from=e,this.ease("linear"),this.duration(500)}n(797)(r.prototype),r.prototype.reset=function(){return this.isArray="[object Array]"===Object.prototype.toString.call(this._from),this._curr=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}({},this._from),this._done=!1,this._start=Date.now(),this},r.prototype.to=function(e){return this.reset(),this._to=e,this},r.prototype.duration=function(e){return this._duration=e,this},r.prototype.ease=function(e){if(!(e="function"==typeof e?e:i[e]))throw new TypeError("invalid easing function");return this._ease=e,this},r.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},r.prototype.step=function(){if(!this._done){var e=this._duration,t=Date.now();if(t-this._start>=e)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,i=this._to,r=this._curr,o=(0,this._ease)((t-this._start)/e);if(this.isArray){for(var c=0;c<n.length;++c)r[c]=n[c]+(i[c]-n[c])*o;return this._update(r),this}for(var u in n)r[u]=n[u]+(i[u]-n[u])*o;return this._update(r),this}},r.prototype.update=function(e){return 0==arguments.length?this.step():(this._update=e,this)},e.exports=r}}]);
//# sourceMappingURL=component---src-pages-index-js-76c46d38800fae60beae.js.map