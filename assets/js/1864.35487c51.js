"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[1864],{830:function(e,n,t){t.d(n,{W:function(){return a}});var r=t(7294);function a(){return r.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},6742:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(102),a=t(7294),o=t(3727),i=t(3919),c=t(412),u=(0,a.createContext)({collectLink:function(){}}),l=t(4996),s=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var n,t,f,d=e.isNavLink,m=e.to,v=e.href,h=e.activeClassName,p=e.isActive,b=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,E=void 0===g||g,w=(0,r.Z)(e,s),C=(0,l.C)().withBaseUrl,k=(0,a.useContext)(u),y=m||v,Z=(0,i.Z)(y),A=null==y?void 0:y.replace("pathname://",""),N=void 0!==A?(t=A,E&&function(e){return e.startsWith("/")}(t)?C(t):t):void 0,S=(0,a.useRef)(!1),L=d?o.OL:o.rU,D=c.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!D&&Z&&null!=N&&window.docusaurus.prefetch(N),function(){D&&f&&f.disconnect()}}),[N,D,Z]);var B=null!==(n=null==N?void 0:N.startsWith("#"))&&void 0!==n&&n,I=!N||!Z||B;return N&&Z&&!B&&!b&&k.collectLink(N),I?a.createElement("a",Object.assign({href:N},y&&!Z&&{target:"_blank",rel:"noopener noreferrer"},w)):a.createElement(L,Object.assign({},w,{onMouseEnter:function(){S.current||null==N||(window.docusaurus.preload(N),S.current=!0)},innerRef:function(e){var n,t;D&&e&&Z&&(n=e,t=function(){null!=N&&window.docusaurus.prefetch(N)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(n),f.disconnect(),t())}))}))).observe(n))},to:N||""},d&&{isActive:p,activeClassName:h}))}},4973:function(e,n,t){t.d(n,{Z:function(){return f},I:function(){return s}});var r=t(7294),a=/{\w+}/g,o="{}";function i(e,n){var t=[],i=e.replace(a,(function(e){var a=e.substr(1,e.length-2),i=null==n?void 0:n[a];if(void 0!==i){var c=r.isValidElement(i)?i:String(i);return t.push(c),o}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?i.split(o).reduce((function(e,n,r){var a;return e.concat(n).concat(null!==(a=t[r])&&void 0!==a?a:"")}),""):i.split(o).reduce((function(e,n,a){return[].concat(e,[r.createElement(r.Fragment,{key:a},n,t[a])])}),[])}function c(e){return i(e.children,e.values)}var u=t(7529);function l(e){var n,t=e.id,r=e.message;return null!==(n=u[null!=t?t:r])&&void 0!==n?n:r}function s(e,n){var t,r=e.message;return i(null!==(t=l({message:r,id:e.id}))&&void 0!==t?t:r,n)}function f(e){var n,t=e.children,a=e.id,o=e.values,i=null!==(n=l({message:t,id:a}))&&void 0!==n?n:t;return r.createElement(c,{values:o},i)}},3919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return a}})},4996:function(e,n,t){t.d(n,{C:function(){return o},Z:function(){return i}});var r=t(2263),a=t(3919);function o(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,u=o.absolute,l=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(c)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+s:s}(o,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},9678:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(7294),a=t(412),o=t(6700),i=(0,o.WA)("theme"),c="light",u="dark",l=function(e){return e===u?u:c},s=function(e){(0,o.WA)("theme").set(l(e))},f=function(){var e=(0,o.LU)().colorMode,n=e.defaultMode,t=e.disableSwitch,f=e.respectPrefersColorScheme,d=(0,r.useState)(function(e){return a.Z.canUseDOM?l(document.documentElement.getAttribute("data-theme")):l(e)}(n)),m=d[0],v=d[1],h=(0,r.useCallback)((function(){v(c),s(c)}),[]),p=(0,r.useCallback)((function(){v(u),s(u)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",l(m))}),[m]),(0,r.useEffect)((function(){if(!t)try{var e=i.get();null!==e&&v(l(e))}catch(n){console.error(n)}}),[v]),(0,r.useEffect)((function(){t&&!f||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var n=e.matches;v(n?u:c)}))}),[]),{isDarkTheme:m===u,setLightTheme:h,setDarkTheme:p}},d=t(2924);var m=function(e){var n=f(),t=n.isDarkTheme,a=n.setLightTheme,o=n.setDarkTheme;return r.createElement(d.Z.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:o}},e.children)};function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function h(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return v(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?v(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var p="docusaurus.tab.",b=function(){var e=(0,r.useState)({}),n=e[0],t=e[1],a=(0,r.useCallback)((function(e,n){(0,o.WA)("docusaurus.tab."+e).set(n)}),[]);return(0,r.useEffect)((function(){try{for(var e,n={},r=h((0,o._f)());!(e=r()).done;){var a=e.value;if(a.startsWith(p))n[a.substring(p.length)]=(0,o.WA)(a).get()}t(n)}catch(i){console.error(i)}}),[]),{tabGroupChoices:n,setTabGroupChoices:function(e,n){t((function(t){var r;return Object.assign({},t,((r={})[e]=n,r))})),a(e,n)}}},g=(0,o.WA)("docusaurus.announcement.dismiss"),E=(0,o.WA)("docusaurus.announcement.id"),w=function(){var e=(0,o.LU)().announcementBar,n=(0,r.useState)(!0),t=n[0],a=n[1],i=(0,r.useCallback)((function(){g.set("true"),a(!0)}),[]);return(0,r.useEffect)((function(){if(e){var n=e.id,t=E.get();"annoucement-bar"===t&&(t="announcement-bar");var r=n!==t;E.set(n),r&&g.set("false"),(r||"false"===g.get())&&a(!1)}}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:i}},C=t(9443);var k=function(e){var n=b(),t=n.tabGroupChoices,a=n.setTabGroupChoices,o=w(),i=o.isAnnouncementBarClosed,c=o.closeAnnouncementBar;return r.createElement(C.Z.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a,isAnnouncementBarClosed:i,closeAnnouncementBar:c}},e.children)};function y(e){var n=e.children;return r.createElement(m,null,r.createElement(k,null,r.createElement(o.L5,null,n)))}},5525:function(e,n,t){var r=t(3117),a=t(102),o=t(7294),i=t(6010),c=t(6742),u=t(4996),l=t(5977),s=t(6700),f=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["items","position","className"],m=["className"],v=["items","className","position"],h=["className"],p=["mobile"];function b(e){var n=e.activeBasePath,t=e.activeBaseRegex,i=e.to,l=e.href,s=e.label,d=e.activeClassName,m=void 0===d?"navbar__link--active":d,v=e.prependBaseUrlToHref,h=(0,a.Z)(e,f),p=(0,u.Z)(i),b=(0,u.Z)(n),g=(0,u.Z)(l,{forcePrependBaseUrl:!0});return o.createElement(c.Z,(0,r.Z)({},l?{href:v?g:l}:Object.assign({isNavLink:!0,activeClassName:m,to:p},n||t?{isActive:function(e,n){return t?new RegExp(t).test(n.pathname):n.pathname.startsWith(b)}}:null),h),s)}function g(e){var n,t=e.items,c=e.position,u=e.className,l=(0,a.Z)(e,d),s=(0,o.useRef)(null),f=(0,o.useRef)(null),v=(0,o.useState)(!1),h=v[0],p=v[1];(0,o.useEffect)((function(){var e=function(e){s.current&&!s.current.contains(e.target)&&p(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[s]);var g=function(e,n){return void 0===n&&(n=!1),(0,i.Z)({"navbar__item navbar__link":!n,dropdown__link:n},e)};return t?o.createElement("div",{ref:s,className:(0,i.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===c,"dropdown--right":"right"===c,"dropdown--show":h})},o.createElement(b,(0,r.Z)({className:g(u)},l,{onClick:l.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),p(!h))}}),null!=(n=l.children)?n:l.label),o.createElement("ul",{ref:f,className:"dropdown__menu"},t.map((function(e,n){var i=e.className,c=(0,a.Z)(e,m);return o.createElement("li",{key:n},o.createElement(b,(0,r.Z)({onKeyDown:function(e){if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),p(!1);var r=s.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active",className:g(i,!0)},c)))})))):o.createElement(b,(0,r.Z)({className:g(u)},l))}function E(e){var n,t,c,u=e.items,f=e.className,d=(e.position,(0,a.Z)(e,v)),m=(0,o.useRef)(null),p=(0,l.TH)().pathname,g=(0,o.useState)((function(){var e;return null==(e=!(null!=u&&u.some((function(e){return(0,s.Mg)(e.to,p)}))))||e})),E=g[0],w=g[1],C=function(e,n){return void 0===n&&(n=!1),(0,i.Z)("menu__link",{"menu__link--sublist":n},e)};if(!u)return o.createElement("li",{className:"menu__list-item"},o.createElement(b,(0,r.Z)({className:C(f)},d)));var k=null!=(n=m.current)&&n.scrollHeight?(null==(t=m.current)?void 0:t.scrollHeight)+"px":void 0;return o.createElement("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":E})},o.createElement(b,(0,r.Z)({role:"button",className:C(f,!0)},d,{onClick:function(e){e.preventDefault(),w((function(e){return!e}))}}),null!=(c=d.children)?c:d.label),o.createElement("ul",{className:"menu__list",ref:m,style:{height:E?void 0:k}},u.map((function(e,n){var t=e.className,i=(0,a.Z)(e,h);return o.createElement("li",{className:"menu__list-item",key:n},o.createElement(b,(0,r.Z)({activeClassName:"menu__link--active",className:C(t)},i,{onClick:d.onClick})))}))))}n.Z=function(e){var n=e.mobile,t=void 0!==n&&n,r=(0,a.Z)(e,p),i=t?E:g;return o.createElement(i,r)}},6400:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(3117),a=t(102),o=t(7294),i=t(5525),c=t(907),u=t(6010),l=t(6700),s=["docId","activeSidebarClassName","label","docsPluginId"];function f(e){var n,t,f=e.docId,d=e.activeSidebarClassName,m=e.label,v=e.docsPluginId,h=(0,a.Z)(e,s),p=(0,c.useActiveDocContext)(v),b=p.activeVersion,g=p.activeDoc,E=(0,l.J)(v).preferredVersion,w=(0,c.useLatestVersion)(v),C=null!=(n=null!=b?b:E)?n:w,k=C.docs.find((function(e){return e.id===f}));if(!k){var y=C.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+f+" in version "+C.name+".\nAvailable docIds=\n- "+y)}return o.createElement(i.Z,(0,r.Z)({exact:!0},h,{className:(0,u.Z)(h.className,(t={},t[d]=g&&g.sidebar===k.sidebar,t)),label:null!=m?m:k.id,to:k.path}))}},9308:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(3117),a=t(102),o=t(7294),i=t(5525),c=t(907),u=t(6700),l=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],s=function(e){return e.docs.find((function(n){return n.id===e.mainDocId}))};function f(e){var n,t,f=e.mobile,d=e.docsPluginId,m=e.dropdownActiveClassDisabled,v=e.dropdownItemsBefore,h=e.dropdownItemsAfter,p=(0,a.Z)(e,l),b=(0,c.useActiveDocContext)(d),g=(0,c.useVersions)(d),E=(0,c.useLatestVersion)(d),w=(0,u.J)(d),C=w.preferredVersion,k=w.savePreferredVersionName;var y=null!=(n=null!=(t=b.activeVersion)?t:C)?n:E,Z=f?"Versions":y.label,A=f?void 0:s(y).path;return o.createElement(i.Z,(0,r.Z)({},p,{mobile:f,label:Z,to:A,items:function(){var e=g.map((function(e){var n=(null==b?void 0:b.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:n.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){k(e.name)}}})),n=[].concat(v,e,h);if(!(n.length<=1))return n}(),isActive:m?function(){return!1}:void 0}))}},7250:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(3117),a=t(102),o=t(7294),i=t(5525),c=t(907),u=t(6700),l=["label","to","docsPluginId"];function s(e){var n,t=e.label,s=e.to,f=e.docsPluginId,d=(0,a.Z)(e,l),m=(0,c.useActiveVersion)(f),v=(0,u.J)(f).preferredVersion,h=(0,c.useLatestVersion)(f),p=null!=(n=null!=m?m:v)?n:h,b=null!=t?t:p.label,g=null!=s?s:function(e){return e.docs.find((function(n){return n.id===e.mainDocId}))}(p).path;return o.createElement(i.Z,(0,r.Z)({},d,{label:b,to:g}))}},2349:function(e,n,t){t.d(n,{Z:function(){return R}});var r=t(102),a=t(7294),o=t(5525),i=t(3117),c=["width","height"],u=function(e){var n=e.width,t=void 0===n?20:n,o=e.height,u=void 0===o?20:o,l=(0,r.Z)(e,c);return a.createElement("svg",(0,i.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:t,height:u},l),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},l=t(2263),s=t(6700),f=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function d(e){var n=e.mobile,t=e.dropdownItemsBefore,c=e.dropdownItemsAfter,d=(0,r.Z)(e,f),m=(0,l.default)().i18n,v=m.currentLocale,h=m.locales,p=m.localeConfigs,b=(0,s.l5)();function g(e){return p[e].label}var E=h.map((function(e){var n="pathname://"+b.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:g(e),to:n,target:"_self",autoAddBaseUrl:!1,className:e===v?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),w=[].concat(t,E,c),C=n?"Languages":g(v);return a.createElement(o.Z,(0,i.Z)({},d,{href:"#",mobile:n,label:a.createElement("span",null,a.createElement(u,{style:{verticalAlign:"text-bottom",marginRight:5}}),a.createElement("span",null,C)),items:w}))}var m=t(3935),v=t(5977),h=t(4996),p=t(6742),b=t(9105),g=t(6397);function E(){return a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var w=t(830),C=["translations"];function k(){return k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},k.apply(this,arguments)}function y(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Z="Ctrl";var A=a.forwardRef((function(e,n){var t=e.translations,r=void 0===t?{}:t,o=y(e,C),i=r.buttonText,c=void 0===i?"Search":i,u=r.buttonAriaLabel,l=void 0===u?"Search":u,s=(0,a.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":Z:null}),[]);return a.createElement("button",k({type:"button",className:"DocSearch DocSearch-Button","aria-label":l},o,{ref:n}),a.createElement("span",{className:"DocSearch-Button-Container"},a.createElement(w.W,null),a.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),a.createElement("span",{className:"DocSearch-Button-Keys"},null!==s&&a.createElement(a.Fragment,null,a.createElement("span",{className:"DocSearch-Button-Key"},s===Z?a.createElement(E,null):s),a.createElement("span",{className:"DocSearch-Button-Key"},"K"))))})),N=t(907);function S(){var e=function(){var e=(0,l.default)().i18n,n=(0,N.useAllDocsData)(),t=(0,N.useActivePluginAndVersion)(),r=(0,s.Oh)(),a=[s.HX].concat(Object.keys(n).map((function(e){var a,o,i=(null==t||null==(a=t.activePlugin)?void 0:a.pluginId)===e?t.activeVersion:void 0,c=r[e],u=n[e].versions.find((function(e){return e.isLast})),l=null!=(o=null!=i?i:c)?o:u;return(0,s.os)(e,l.name)})));return{locale:e.currentLocale,tags:a}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var L=t(4973),D=["contextualSearch"],B=null;function I(e){var n=e.hit,t=e.children;return a.createElement(p.Z,{to:n.url},t)}function _(e){var n=e.state,t=e.onClose,r=(0,g.Z)().generateSearchPageLink;return a.createElement(p.Z,{to:r(n.query),onClick:t},"See all ",n.context.nbHits," results")}function P(e){var n,o,c=e.contextualSearch,u=(0,r.Z)(e,D),s=(0,l.default)().siteMetadata,f=S(),d=null!=(n=null==(o=u.searchParameters)?void 0:o.facetFilters)?n:[],p=c?[].concat(f,d):d,g=Object.assign({},u.searchParameters,{facetFilters:p}),E=(0,h.C)().withBaseUrl,w=(0,v.k6)(),C=(0,a.useRef)(null),k=(0,a.useRef)(null),y=(0,a.useState)(!1),Z=y[0],N=y[1],P=(0,a.useState)(null),O=P[0],U=P[1],x=(0,a.useCallback)((function(){return B?Promise.resolve():Promise.all([t.e(9598).then(t.bind(t,9598)),Promise.all([t.e(532),t.e(6945)]).then(t.bind(t,6945)),Promise.all([t.e(532),t.e(5256)]).then(t.bind(t,5256))]).then((function(e){var n=e[0].DocSearchModal;B=n}))}),[]),T=(0,a.useCallback)((function(){x().then((function(){C.current=document.createElement("div"),document.body.insertBefore(C.current,document.body.firstChild),N(!0)}))}),[x,N]),M=(0,a.useCallback)((function(){N(!1),C.current.remove()}),[N]),R=(0,a.useCallback)((function(e){x().then((function(){N(!0),U(e.key)}))}),[x,N,U]),V=(0,a.useRef)({navigate:function(e){var n=e.itemUrl;w.push(n)}}).current,j=(0,a.useRef)((function(e){return e.map((function(e){var n=document.createElement("a");return n.href=e.url,Object.assign({},e,{url:E(""+n.pathname+n.hash)})}))})).current,W=(0,a.useMemo)((function(){return function(e){return a.createElement(_,(0,i.Z)({},e,{onClose:M}))}}),[M]),z=(0,a.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",s.docusaurusVersion),e}),[s.docusaurusVersion]);!function(e){var n=e.isOpen,t=e.onOpen,r=e.onClose,o=e.onInput,i=e.searchButtonRef;a.useEffect((function(){function e(e){(27===e.keyCode&&n||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var n=e.target,t=n.tagName;return n.isContentEditable||"INPUT"===t||"SELECT"===t||"TEXTAREA"===t}(e)&&"/"===e.key&&!n)&&(e.preventDefault(),n?r():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||t()),i&&i.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n,t,r,o,i])}({isOpen:Z,onOpen:T,onClose:M,onInput:R,searchButtonRef:k});var H=(0,L.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return a.createElement(a.Fragment,null,a.createElement(b.Z,null,a.createElement("link",{rel:"preconnect",href:"https://"+u.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),a.createElement(A,{onTouchStart:x,onFocus:x,onMouseOver:x,onClick:T,ref:k,translations:{buttonText:H,buttonAriaLabel:H}}),Z&&(0,m.createPortal)(a.createElement(B,(0,i.Z)({onClose:M,initialScrollY:window.scrollY,initialQuery:O,navigator:V,transformItems:j,hitComponent:I,resultsFooterComponent:W,transformSearchClient:z},u,{searchParameters:g})),C.current))}var O=function(){var e=(0,l.default)().siteConfig;return a.createElement(P,e.themeConfig.algolia)},U="searchWrapper_f8aU";function x(e){return e.mobile?null:a.createElement("div",{className:U},a.createElement(O,null))}var T=["type"],M={default:function(){return o.Z},localeDropdown:function(){return d},search:function(){return x},docsVersion:function(){return t(7250).Z},docsVersionDropdown:function(){return t(9308).Z},doc:function(){return t(6400).Z}};function R(e){var n=e.type,t=(0,r.Z)(e,T),o=function(e){void 0===e&&(e="default");var n=M[e];if(!n)throw new Error("No NavbarItem component found for type="+e+".");return n()}(n);return a.createElement(o,t)}},2924:function(e,n,t){var r=t(7294).createContext(void 0);n.Z=r},9443:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},1839:function(e,n,t){var r=t(7294);n.Z=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},944:function(e,n,t){var r=t(7294),a=t(9443);n.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},3783:function(e,n,t){t.d(n,{D:function(){return o}});var r=t(7294),a=t(412),o={desktop:"desktop",mobile:"mobile"};n.Z=function(){var e=a.Z.canUseDOM;function n(){if(e)return window.innerWidth>996?o.desktop:o.mobile}var t=(0,r.useState)(n),i=t[0],c=t[1];return(0,r.useEffect)((function(){if(e)return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)};function t(){c(n())}}),[]),i}},6397:function(e,n,t){var r=t(5977),a=t(412),o=t(2263);n.Z=function(){var e=(0,r.k6)(),n=(0,r.TH)(),t=(0,o.default)().siteConfig,i=(t=void 0===t?{}:t).baseUrl;return{searchValue:a.Z.canUseDOM&&new URLSearchParams(n.search).get("q")||"",updateSearchPath:function(t){var r=new URLSearchParams(n.search);t?r.set("q",t):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return i+"search?q="+encodeURIComponent(e)}}}},6010:function(e,n,t){function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);