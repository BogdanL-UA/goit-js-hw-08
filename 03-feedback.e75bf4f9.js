!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return m.Date.now()};function p(e,t,n){var o,r,a,u,l,f,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,l=setTimeout(h,t),s?p(e):u}function E(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-c>=a}function h(){var e=b();if(E(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return m?g(n,a-(e-c)):n}(e))}function w(e){return l=void 0,d&&o?p(e):(o=r=void 0,u)}function T(){var e=b(),n=E(e);if(o=arguments,r=this,f=e,n){if(void 0===l)return j(f);if(m)return l=setTimeout(h,t),p(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=r=l=void 0},T.flush=function(){return void 0===l?u:w(b())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||l.test(t)?f(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};var j,E,h={form:document.querySelector(".feedback-form"),email:document.querySelector("input"),message:document.querySelector("textarea"),submit:document.querySelector("button")},w="feedback-form-state",T={};j=localStorage.getItem(w),E=localStorage.getItem("MESSAGE"),function(e){void 0!==e?(h.email.value=e,T.email=h.email.value):h.email.value=""}(j),function(e){void 0!==e?(h.message.value=e,T.message=h.message.value):h.message.value=""}(E),h.form.addEventListener("input",e(t)((function(e){if(""!==e.target.value.trim()){T[e.target.name]=e.target.value;var t=T.email,n=T.message;t&&localStorage.setItem(w,t),n&&localStorage.setItem("MESSAGE",n)}}),500)),h.submit.addEventListener("click",(function(e){e.preventDefault(),""===h.email.value||""===h.message.value?alert("All filds of the form must be filled!"):(localStorage.removeItem(w),localStorage.removeItem("MESSAGE"),console.log(T),h.form.reset())}))}();
//# sourceMappingURL=03-feedback.e75bf4f9.js.map