!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc"),u=document.querySelector(".form"),a=(document.querySelector("button"),{}),c=0,d=0,l=0,f=0;u.addEventListener("input",(function(e){a[e.target.name]=e.target.value,c=Number(a.delay),f=Number(a.step),l=Number(a.amount)})),u.addEventListener("submit",(function(n){var t=function(n){setTimeout((function(){var t,o;(t=n+1,o=c+n*f,new Promise((function(e,n){Math.random()>.3?e({position:t,delay:o}):n({position:t,delay:o})}))).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}),d),d+=f};n.preventDefault();for(var o=0;o<l;o++)t(o)}))}();
//# sourceMappingURL=03-promises.e6369711.js.map
