!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.Pager=t(require("react")):e.Pager=t(e.react)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function o(){y&&d&&(y=!1,d.length?h=d.concat(h):v=-1,h.length&&u())}function u(){if(!y){var e=i(o);y=!0;for(var t=h.length;t;){for(d=h,h=[];++v<t;)d&&d[v].run();v=-1,t=h.length}d=null,y=!1,a(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,h=[],y=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||y||i(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){return function(){return e}}var i=function(){};i.thatReturns=r,i.thatReturnsFalse=r(!1),i.thatReturnsTrue=r(!0),i.thatReturnsNull=r(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(e){return e},e.exports=i},function(e,t,n){"use strict";(function(t){function n(e,t,n,i,a,o,u,s){if(r(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,i,a,o,u,s],f=0;c=new Error(t.replace(/%s/g,function(){return l[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(0))},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";(function(t){var r=n(1),i=r;"production"!==t.env.NODE_ENV&&function(){var e=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=0,a="Warning: "+e.replace(/%s/g,function(){return n[i++]});"undefined"!=typeof console&&console.error(a);try{throw new Error(a)}catch(e){}};i=function(t,n){if(void 0===n)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==n.indexOf("Failed Composite propType: ")&&!t){for(var r=arguments.length,i=Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];e.apply(void 0,[n].concat(i))}}}(),e.exports=i}).call(t,n(0))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){for(var n=[],r=e;r<t;r++)n.push(r);return n}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(6),l=r(c),f=n(7),p=r(f),d={first:"First",prev:"«",prevSet:"...",nextSet:"...",next:"»",last:"Last"},h=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleFirstPage=n.handleFirstPage.bind(n),n.handlePreviousPage=n.handlePreviousPage.bind(n),n.handleNextPage=n.handleNextPage.bind(n),n.handleLastPage=n.handleLastPage.bind(n),n.handleMorePrevPages=n.handleMorePrevPages.bind(n),n.handleMoreNextPages=n.handleMoreNextPages.bind(n),n.handlePageChanged=n.handlePageChanged.bind(n),n}return o(t,e),s(t,[{key:"getTitles",value:function(e){return this.props.titles[e]||d[e]}},{key:"calcBlocks",value:function(){var e=this.props,t=e.total,n=e.visiblePages,r=e.current+1;return{total:Math.ceil(t/n),current:Math.ceil(r/n)-1,size:n}}},{key:"isPrevDisabled",value:function(){return this.props.current<=0}},{key:"isNextDisabled",value:function(){return this.props.current>=this.props.total-1}},{key:"isPrevMoreHidden",value:function(){var e=this.calcBlocks();return 1===e.total||0===e.current}},{key:"isNextMoreHidden",value:function(){var e=this.calcBlocks();return 1===e.total||e.current===e.total-1}},{key:"visibleRange",value:function(){var e=this.calcBlocks(),t=e.current*e.size,n=this.props.total-t;return[t+1,t+(n>e.size?e.size:n)+1]}},{key:"handleFirstPage",value:function(){this.isPrevDisabled()||this.handlePageChanged(0)}},{key:"handlePreviousPage",value:function(){this.isPrevDisabled()||this.handlePageChanged(this.props.current-1)}},{key:"handleNextPage",value:function(){this.isNextDisabled()||this.handlePageChanged(this.props.current+1)}},{key:"handleLastPage",value:function(){this.isNextDisabled()||this.handlePageChanged(this.props.total-1)}},{key:"handleMorePrevPages",value:function(){var e=this.calcBlocks();this.handlePageChanged(e.current*e.size-1)}},{key:"handleMoreNextPages",value:function(){var e=this.calcBlocks();this.handlePageChanged((e.current+1)*e.size)}},{key:"handlePageChanged",value:function(e){var t=this.props.onPageChanged;t&&t(e)}},{key:"renderPages",value:function(e){var t=this;return u(e[0],e[1]).map(function(e,n){var r=e-1,i=t.handlePageChanged.bind(t,r),a=t.props.current===r;return l.default.createElement(y,{key:n,index:n,isActive:a,className:"page-item",onClick:i},e)})}},{key:"render",value:function(){var e=this.getTitles.bind(this),t="pagination";return this.props.className&&(t+=" "+this.props.className),l.default.createElement("nav",null,l.default.createElement("ul",{className:t},l.default.createElement(y,{className:"page-item",key:"btn-first-page",isDisabled:this.isPrevDisabled(),onClick:this.handleFirstPage},e("first")),l.default.createElement(y,{className:"page-item",key:"btn-prev-more",isHidden:this.isPrevMoreHidden(),onClick:this.handleMorePrevPages},e("prevSet")),this.renderPages(this.visibleRange()),l.default.createElement(y,{className:"page-item",key:"btn-next-more",isHidden:this.isNextMoreHidden(),onClick:this.handleMoreNextPages},e("nextSet")),l.default.createElement(y,{className:"page-item",key:"btn-next-page",isDisabled:this.isNextDisabled(),onClick:this.handleNextPage},e("next")),l.default.createElement(y,{className:"page-item",key:"btn-last-page",isDisabled:this.isNextDisabled(),onClick:this.handleLastPage},e("last"))))}}]),t}(l.default.Component);h.propTypes={current:p.default.number.isRequired,total:p.default.number.isRequired,visiblePages:p.default.number.isRequired,titles:p.default.object,onPageChanged:p.default.func},h.defaultProps={titles:d};var y=function(e){if(e.isHidden)return null;var t=e.className?e.className+" ":"",n=t+(e.isActive?" active":"")+(e.isDisabled?" disabled":"");return l.default.createElement("li",{key:e.index,className:n},l.default.createElement("button",{className:"page-link",onClick:e.onClick},e.children))};y.propTypes={isHidden:p.default.bool,isActive:p.default.bool,isDisabled:p.default.bool,className:p.default.string,onClick:p.default.func},t.default=h},function(t,n){t.exports=e},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,i=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=n(8)(i,!0)}else e.exports=n(10)()}).call(t,n(0))},function(e,t,n){"use strict";(function(t){var r=n(1),i=n(2),a=n(4),o=n(3),u=n(9);e.exports=function(e,n){function s(e){var t=e&&(E&&e[E]||e[T]);if("function"==typeof t)return t}function c(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function l(e){this.message=e,this.stack=""}function f(e){function r(r,c,f,p,d,h,y){if(p=p||O,h=h||f,y!==o)if(n)i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var v=p+":"+f;!u[v]&&s<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",h,p),u[v]=!0,s++)}return null==c[f]?r?new l(null===c[f]?"The "+d+" `"+h+"` is marked as required in `"+p+"`, but its value is `null`.":"The "+d+" `"+h+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:e(c,f,p,d,h)}if("production"!==t.env.NODE_ENV)var u={},s=0;var c=r.bind(null,!1);return c.isRequired=r.bind(null,!0),c}function p(e){function t(t,n,r,i,a,o){var u=t[n];if(x(u)!==e)return new l("Invalid "+i+" `"+a+"` of type `"+k(u)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return f(t)}function d(e){function t(t,n,r,i,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){return new l("Invalid "+i+" `"+a+"` of type `"+x(u)+"` supplied to `"+r+"`, expected an array.")}for(var s=0;s<u.length;s++){var c=e(u,s,r,i,a+"["+s+"]",o);if(c instanceof Error)return c}return null}return f(t)}function h(e){function t(t,n,r,i,a){if(!(t[n]instanceof e)){var o=e.name||O;return new l("Invalid "+i+" `"+a+"` of type `"+w(t[n])+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}return null}return f(t)}function y(e){function n(t,n,r,i,a){for(var o=t[n],u=0;u<e.length;u++)if(c(o,e[u]))return null;return new l("Invalid "+i+" `"+a+"` of value `"+o+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?f(n):("production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function v(e){function t(t,n,r,i,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],s=x(u);if("object"!==s)return new l("Invalid "+i+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var c in u)if(u.hasOwnProperty(c)){var f=e(u,c,r,i,a+"."+c,o);if(f instanceof Error)return f}return null}return f(t)}function g(e){function n(t,n,r,i,a){for(var u=0;u<e.length;u++){if(null==(0,e[u])(t,n,r,i,a,o))return null}return new l("Invalid "+i+" `"+a+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var i=0;i<e.length;i++){var u=e[i];if("function"!=typeof u)return a(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",N(u),i),r.thatReturnsNull}return f(n)}function m(e){function t(t,n,r,i,a){var u=t[n],s=x(u);if("object"!==s)return new l("Invalid "+i+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var f=e[c];if(f){var p=f(u,c,r,i,a+"."+c,o);if(p)return p}}return null}return f(t)}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var n=s(t);if(!n)return!1;var r,i=n.call(t);if(n!==t.entries){for(;!(r=i.next()).done;)if(!b(r.value))return!1}else for(;!(r=i.next()).done;){var a=r.value;if(a&&!b(a[1]))return!1}return!0;default:return!1}}function P(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function x(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":P(t,e)?"symbol":t}function k(e){if(void 0===e||null===e)return""+e;var t=x(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function N(e){var t=k(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function w(e){return e.constructor&&e.constructor.name?e.constructor.name:O}var E="function"==typeof Symbol&&Symbol.iterator,T="@@iterator",O="<<anonymous>>",_={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return f(r.thatReturnsNull)}(),arrayOf:d,element:function(){function t(t,n,r,i,a){var o=t[n];if(!e(o)){return new l("Invalid "+i+" `"+a+"` of type `"+x(o)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return f(t)}(),instanceOf:h,node:function(){function e(e,t,n,r,i){return b(e[t])?null:new l("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")}return f(e)}(),objectOf:v,oneOf:y,oneOfType:g,shape:m};return l.prototype=Error.prototype,_.checkPropTypes=u,_.PropTypes=_,_}}).call(t,n(0))},function(e,t,n){"use strict";(function(t){function r(e,n,r,s,c){if("production"!==t.env.NODE_ENV)for(var l in e)if(e.hasOwnProperty(l)){var f;try{i("function"==typeof e[l],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",s||"React class",r,l),f=e[l](n,l,s,r,null,o)}catch(e){f=e}if(a(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",s||"React class",r,l,typeof f),f instanceof Error&&!(f.message in u)){u[f.message]=!0;var p=c?c():"";a(!1,"Failed %s type: %s%s",r,f.message,null!=p?p:"")}}}if("production"!==t.env.NODE_ENV)var i=n(2),a=n(4),o=n(3),u={};e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";var r=n(1),i=n(2),a=n(3);e.exports=function(){function e(e,t,n,r,o,u){u!==a&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}}])});