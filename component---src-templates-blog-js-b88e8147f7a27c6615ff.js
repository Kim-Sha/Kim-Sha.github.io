(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),c=r("ZhPi"),i=r("Bnag");t.exports=function(t){return n(t)||o(t)||c(t)||i()}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},X8hv:function(t,e,r){var n=r("sXyB"),o=r("RIqP"),c=r("lSNA"),i=r("8OQS");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=r("q1tI"),f=r("7ljp").mdx,s=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,c=i(t,["scope","children"]),u=s(e),p=l.useMemo((function(){if(!r)return null;var t=a({React:l,mdx:f},u),e=Object.keys(t),c=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,e]);return l.createElement(p,a({},c))}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},boqk:function(t,e,r){"use strict";e.__esModule=!0,e.default=void 0;var n=function(t,e){void 0===e&&(e="start");var r=document.querySelector(t);return!!r&&(r.scrollIntoView({behavior:"smooth",block:e}),!0)};e.default=n},c851:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return f})),r.d(e,"pageQuery",(function(){return s}));r("q1tI");var n=r("Wbzz"),o=r("3yDT"),c=r("A2+M"),i=r("boqk"),u=r.n(i),a=r("ma3e"),l=r("qKvR");function f(t){var e=t.data,r=e.mdx,i=e.previous,f=e.next;return Object(l.a)(o.a,null,Object(l.a)("div",{className:"lg:w-2/3 lg:pl-8 xl:pl-12"},Object(l.a)("article",{className:"prose mb-6"},Object(l.a)("button",{className:"text-front opacity-25 fixed invisible lg:visible bottom-0 right-0 p-6 focus:outline-none",onClick:function(){return u()("#blog-header")}},Object(l.a)(a.a,{className:"w-10 h-10"})),Object(l.a)("header",{id:"blog-header"},Object(l.a)("h1",null,r.frontmatter.title),Object(l.a)("p",null,r.frontmatter.date)),Object(l.a)(c.MDXRenderer,null,r.body)),Object(l.a)("nav",null,Object(l.a)("ul",{className:"flex justify-between"},Object(l.a)("li",null,i&&Object(l.a)(n.Link,{to:i.fields.slug,rel:"prev"},"← ",i.frontmatter.title)),Object(l.a)("li",null,f&&Object(l.a)(n.Link,{to:f.fields.slug,rel:"next"},f.frontmatter.title," →"))))))}var s="2270890493"},lSNA:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},sXyB:function(t,e,r){var n=r("SksO"),o=r("b48C");function c(e,r,i){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,r){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return r&&n(c,r.prototype),c},c.apply(null,arguments)}t.exports=c}}]);
//# sourceMappingURL=component---src-templates-blog-js-b88e8147f7a27c6615ff.js.map