(self.webpackChunkCrypto_Unicorns_Admin=self.webpackChunkCrypto_Unicorns_Admin||[]).push([[3854],{12335:function(r,e,t){"use strict";var n=t(47313),o=t(45788),a=t(63830),i=t(72686),c=t(93019),s=t(46417);function u(r){var e=r.background,t=r.children,u=(0,o.I0)(),l=(0,a.TH)().pathname;return(0,n.useEffect)((function(){u(c.Z.doLayout("page"))}),[l]),(0,s.jsx)(i.Z,{width:"100vw",height:"100%",minHeight:"100vh",bgcolor:e,sx:{overflowX:"hidden"},children:t})}u.defaultProps={background:"default"},e.Z=u},76340:function(r,e,t){"use strict";var n=t(9019),o=t(72686),a=t(12335),i=t(46417);function c(r){var e=r.coverHeight,t=r.image,c=r.children;return(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(o.Z,{width:"calc(100% - 2rem)",minHeight:e,borderRadius:"xl",mx:2,my:2,pt:6,pb:28,sx:{backgroundImage:function(r){var e=r.functions,n=e.linearGradient,o=e.rgba,a=r.palette.gradients;return t&&"".concat(n(o(a.dark.main,.1),o(a.dark.state,.1)),", url(").concat(t,")")},backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),(0,i.jsx)(o.Z,{mt:{xs:-20,lg:-18},px:1,width:"calc(100% - 2rem)",mx:"auto",children:(0,i.jsx)(n.ZP,{container:!0,spacing:1,justifyContent:"center",children:(0,i.jsx)(n.ZP,{item:!0,xs:11,sm:9,md:5,lg:4,xl:3,children:c})})})]})}c.defaultProps={coverHeight:"35vh"},e.Z=c},13854:function(r,e,t){"use strict";t.r(e);var n=t(74165),o=t(15861),a=t(73428),i=t(10499),c=t(28769),s=t(3538),u=t(31172),l=t(47313),f=t(45788),d=t(61567),p=t(10546),v=t(926),m=t(63830),y=t(86495),h=t(72686),g=t(68090),x=t(53649),b=t(76340),j=t(28303),k=t(64760),Z=t(46417);e.default=function(){var r=(0,f.I0)(),e=(0,m.TH)(),t=(0,f.v9)(y.Z.selectBackgroundImageUrl),w=(0,f.v9)(p.Z.selectLoading),S=(0,f.v9)(p.Z.selectWarningMessage),C=u.parse(e.search).token;(0,l.useEffect)((function(){r(c.Z.doAcceptFromAuth(C))}),[r,C]);var F=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(v.Z.doSignout());case 2:(0,s.s1)().push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,Z.jsx)(b.Z,{image:t||"/images/invitation.jpg",children:(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(h.Z,{variant:"gradient",bgcolor:"info",borderRadius:"lg",coloredShadow:"success",mx:2,mt:-3,py:2,mb:1,textAlign:"center",children:(0,Z.jsx)(h.Z,{display:"flex",justifyContent:"center",py:2,children:(0,Z.jsx)(g.O,{width:"80%"})})}),(0,Z.jsxs)(h.Z,{pt:4,pb:3,px:3,children:[w&&(0,Z.jsx)(d.Z,{}),Boolean(S)&&(0,Z.jsx)(x.Z,{variant:"h6",align:"center",children:S}),(0,Z.jsxs)(h.Z,{mt:3,display:"flex",justifyContent:"center",children:[Boolean(S)&&(0,Z.jsx)(k.Z,{variant:"gradient",color:"info",type:"button",fullWidth:!0,onClick:function(){r(c.Z.doAcceptFromAuth(C,!0))},children:(0,i.ag)("tenant.invitation.acceptWrongEmail")}),!w&&(0,Z.jsx)(x.Z,{variant:"button",color:"info",component:j.rU,to:"#",onClick:F,fontWeight:"medium",textGradient:!0,children:(0,i.ag)("auth.signout")})]})]})]})})}},61567:function(r,e,t){"use strict";t(47313);var n=t(85281),o=t(60357),a=t(46417);function i(r){var e=r.size,t=(0,o.Q)().sidenavColor;return(0,a.jsx)("div",{style:{width:"100%",marginTop:e/2+"px",marginBottom:e/2+"px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,a.jsx)(n.Z,{color:t,size:e})})}i.defaultProps={size:40},e.Z=i},85281:function(r,e,t){"use strict";t.d(e,{Z:function(){return O}});var n=t(30168),o=t(63366),a=t(87462),i=t(47313),c=t(83061),s=t(50317),u=t(30686),l=t(91615),f=t(29394),d=t(88564),p=t(22131);function v(r){return(0,p.Z)("MuiCircularProgress",r)}(0,t(655).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var m,y,h,g,x,b,j,k,Z=t(46417),w=["className","color","disableShrink","size","style","thickness","value","variant"],S=44,C=(0,u.F4)(x||(x=m||(m=(0,n.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),F=(0,u.F4)(b||(b=y||(y=(0,n.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),A=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(r,e){var t=r.ownerState;return[e.root,e[t.variant],e["color".concat((0,l.Z)(t.color))]]}})((function(r){var e=r.ownerState,t=r.theme;return(0,a.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:t.palette[e.color].main})}),(function(r){return"indeterminate"===r.ownerState.variant&&(0,u.iv)(j||(j=h||(h=(0,n.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),C)})),_=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(r,e){return e.svg}})({display:"block"}),I=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(r,e){var t=r.ownerState;return[e.circle,e["circle".concat((0,l.Z)(t.variant))],t.disableShrink&&e.circleDisableShrink]}})((function(r){var e=r.ownerState,t=r.theme;return(0,a.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(r){var e=r.ownerState;return"indeterminate"===e.variant&&!e.disableShrink&&(0,u.iv)(k||(k=g||(g=(0,n.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),F)})),O=i.forwardRef((function(r,e){var t=(0,f.Z)({props:r,name:"MuiCircularProgress"}),n=t.className,i=t.color,u=void 0===i?"primary":i,d=t.disableShrink,p=void 0!==d&&d,m=t.size,y=void 0===m?40:m,h=t.style,g=t.thickness,x=void 0===g?3.6:g,b=t.value,j=void 0===b?0:b,k=t.variant,C=void 0===k?"indeterminate":k,F=(0,o.Z)(t,w),O=(0,a.Z)({},t,{color:u,disableShrink:p,size:y,thickness:x,value:j,variant:C}),M=function(r){var e=r.classes,t=r.variant,n=r.color,o=r.disableShrink,a={root:["root",t,"color".concat((0,l.Z)(n))],svg:["svg"],circle:["circle","circle".concat((0,l.Z)(t)),o&&"circleDisableShrink"]};return(0,s.Z)(a,v,e)}(O),E={},N={},R={};if("determinate"===C){var P=2*Math.PI*((S-x)/2);E.strokeDasharray=P.toFixed(3),R["aria-valuenow"]=Math.round(j),E.strokeDashoffset="".concat(((100-j)/100*P).toFixed(3),"px"),N.transform="rotate(-90deg)"}return(0,Z.jsx)(A,(0,a.Z)({className:(0,c.Z)(M.root,n),style:(0,a.Z)({width:y,height:y},N,h),ownerState:O,ref:e,role:"progressbar"},R,F,{children:(0,Z.jsx)(_,{className:M.svg,ownerState:O,viewBox:"".concat(22," ").concat(22," ").concat(S," ").concat(S),children:(0,Z.jsx)(I,{className:M.circle,style:E,ownerState:O,cx:S,cy:S,r:(S-x)/2,fill:"none",strokeWidth:x})})}))}))},8271:function(r){"use strict";var e="%[a-f0-9]{2}",t=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function o(r,e){try{return decodeURIComponent(r.join(""))}catch(a){}if(1===r.length)return r;e=e||1;var t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],o(t),o(n))}function a(r){try{return decodeURIComponent(r)}catch(a){for(var e=r.match(t),n=1;n<e.length;n++)e=(r=o(e,n).join("")).match(t);return r}}r.exports=function(r){if("string"!==typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(e){return function(r){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},o=n.exec(r);o;){try{t[o[0]]=decodeURIComponent(o[0])}catch(e){var i=a(o[0]);i!==o[0]&&(t[o[0]]=i)}o=n.exec(r)}t["%C2"]="\ufffd";for(var c=Object.keys(t),s=0;s<c.length;s++){var u=c[s];r=r.replace(new RegExp(u,"g"),t[u])}return r}(r)}}},31172:function(r,e,t){"use strict";var n=t(27424).default,o=t(74704).default,a=t(861).default,i=t(82376),c=t(8271),s=t(94266);function u(r){if("string"!==typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(r,e){return e.encode?e.strict?i(r):encodeURIComponent(r):r}function f(r,e){return e.decode?c(r):r}function d(r){return Array.isArray(r)?r.sort():"object"===typeof r?d(Object.keys(r)).sort((function(r,e){return Number(r)-Number(e)})).map((function(e){return r[e]})):r}function p(r){var e=r.indexOf("#");return-1!==e&&(r=r.slice(0,e)),r}function v(r){var e=(r=p(r)).indexOf("?");return-1===e?"":r.slice(e+1)}function m(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&"string"===typeof r&&""!==r.trim()?r=Number(r):!e.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function y(r,e){u((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var t=function(r){var e;switch(r.arrayFormat){case"index":return function(r,t,n){e=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),e?(void 0===n[r]&&(n[r]={}),n[r][e[1]]=t):n[r]=t};case"bracket":return function(r,t,n){e=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"comma":case"separator":return function(e,t,n){var o="string"===typeof t&&t.includes(r.arrayFormatSeparator),a="string"===typeof t&&!o&&f(t,r).includes(r.arrayFormatSeparator);t=a?f(t,r):t;var i=o||a?t.split(r.arrayFormatSeparator).map((function(e){return f(e,r)})):null===t?t:f(t,r);n[e]=i};default:return function(r,e,t){void 0!==t[r]?t[r]=[].concat(t[r],e):t[r]=e}}}(e),a=Object.create(null);if("string"!==typeof r)return a;if(!(r=r.trim().replace(/^[?#&]/,"")))return a;var i,c=o(r.split("&"));try{for(c.s();!(i=c.n()).done;){var l=i.value,p=s(e.decode?l.replace(/\+/g," "):l,"="),v=n(p,2),y=v[0],h=v[1];h=void 0===h?null:["comma","separator"].includes(e.arrayFormat)?h:f(h,e),t(f(y,e),h,a)}}catch(S){c.e(S)}finally{c.f()}for(var g=0,x=Object.keys(a);g<x.length;g++){var b=x[g],j=a[b];if("object"===typeof j&&null!==j)for(var k=0,Z=Object.keys(j);k<Z.length;k++){var w=Z[k];j[w]=m(j[w],e)}else a[b]=m(j,e)}return!1===e.sort?a:(!0===e.sort?Object.keys(a).sort():Object.keys(a).sort(e.sort)).reduce((function(r,e){var t=a[e];return Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?r[e]=d(t):r[e]=t,r}),Object.create(null))}e.extract=v,e.parse=y,e.stringify=function(r,e){if(!r)return"";u((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var t=function(t){return e.skipNull&&(null===(n=r[t])||void 0===n)||e.skipEmptyString&&""===r[t];var n},n=function(r){switch(r.arrayFormat){case"index":return function(e){return function(t,n){var o=t.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(a(t),null===n?[[l(e,r),"[",o,"]"].join("")]:[[l(e,r),"[",l(o,r),"]=",l(n,r)].join("")])}};case"bracket":return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(a(t),null===n?[[l(e,r),"[]"].join("")]:[[l(e,r),"[]=",l(n,r)].join("")])}};case"comma":case"separator":return function(e){return function(t,n){return null===n||void 0===n||0===n.length?t:0===t.length?[[l(e,r),"=",l(n,r)].join("")]:[[t,l(n,r)].join(r.arrayFormatSeparator)]}};default:return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(a(t),null===n?[l(e,r)]:[[l(e,r),"=",l(n,r)].join("")])}}}}(e),o={},i=0,c=Object.keys(r);i<c.length;i++){var s=c[i];t(s)||(o[s]=r[s])}var f=Object.keys(o);return!1!==e.sort&&f.sort(e.sort),f.map((function(t){var o=r[t];return void 0===o?"":null===o?l(t,e):Array.isArray(o)?o.reduce(n(t),[]).join("&"):l(t,e)+"="+l(o,e)})).filter((function(r){return r.length>0})).join("&")},e.parseUrl=function(r,e){e=Object.assign({decode:!0},e);var t=s(r,"#"),o=n(t,2),a=o[0],i=o[1];return Object.assign({url:a.split("?")[0]||"",query:y(v(r),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:f(i,e)}:{})},e.stringifyUrl=function(r,t){t=Object.assign({encode:!0,strict:!0},t);var n=p(r.url).split("?")[0]||"",o=e.extract(r.url),a=e.parse(o,{sort:!1}),i=Object.assign(a,r.query),c=e.stringify(i,t);c&&(c="?".concat(c));var s=function(r){var e="",t=r.indexOf("#");return-1!==t&&(e=r.slice(t)),e}(r.url);return r.fragmentIdentifier&&(s="#".concat(l(r.fragmentIdentifier,t))),"".concat(n).concat(c).concat(s)}},94266:function(r){"use strict";r.exports=function(r,e){if("string"!==typeof r||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[r];var t=r.indexOf(e);return-1===t?[r]:[r.slice(0,t),r.slice(t+e.length)]}},82376:function(r){"use strict";r.exports=function(r){return encodeURIComponent(r).replace(/[!'()*]/g,(function(r){return"%".concat(r.charCodeAt(0).toString(16).toUpperCase())}))}},73897:function(r){r.exports=function(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n},r.exports.__esModule=!0,r.exports.default=r.exports},85372:function(r){r.exports=function(r){if(Array.isArray(r))return r},r.exports.__esModule=!0,r.exports.default=r.exports},63405:function(r,e,t){var n=t(73897);r.exports=function(r){if(Array.isArray(r))return n(r)},r.exports.__esModule=!0,r.exports.default=r.exports},74704:function(r,e,t){var n=t(86116);r.exports=function(r,e){var t="undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=n(r))||e&&r&&"number"===typeof r.length){t&&(r=t);var o=0,a=function(){};return{s:a,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return c=r.done,r},e:function(r){s=!0,i=r},f:function(){try{c||null==t.return||t.return()}finally{if(s)throw i}}}},r.exports.__esModule=!0,r.exports.default=r.exports},79498:function(r){r.exports=function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)},r.exports.__esModule=!0,r.exports.default=r.exports},68872:function(r){r.exports=function(r,e){var t=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var n,o,a=[],i=!0,c=!1;try{for(t=t.call(r);!(i=(n=t.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}},r.exports.__esModule=!0,r.exports.default=r.exports},12218:function(r){r.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},r.exports.__esModule=!0,r.exports.default=r.exports},42281:function(r){r.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},r.exports.__esModule=!0,r.exports.default=r.exports},27424:function(r,e,t){var n=t(85372),o=t(68872),a=t(86116),i=t(12218);r.exports=function(r,e){return n(r)||o(r,e)||a(r,e)||i()},r.exports.__esModule=!0,r.exports.default=r.exports},861:function(r,e,t){var n=t(63405),o=t(79498),a=t(86116),i=t(42281);r.exports=function(r){return n(r)||o(r)||a(r)||i()},r.exports.__esModule=!0,r.exports.default=r.exports},86116:function(r,e,t){var n=t(73897);r.exports=function(r,e){if(r){if("string"===typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}},r.exports.__esModule=!0,r.exports.default=r.exports}}]);