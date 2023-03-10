"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[165],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5048:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],c={title:"Binary functions",sidebar_label:"Binary",description:"Binary function reference documentation."},l={unversionedId:"reference/function/binary",id:"reference/function/binary",isDocsHomePage:!1,title:"Binary functions",description:"Binary function reference documentation.",source:"@site/docs/reference/function/binary.md",sourceDirName:"reference/function",slug:"/reference/function/binary",permalink:"/docs/reference/function/binary",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/reference/function/binary.md",version:"current",sidebar_label:"Binary",frontMatter:{title:"Binary functions",sidebar_label:"Binary",description:"Binary function reference documentation."},sidebar:"docs",previous:{title:"Analytic functions",permalink:"/docs/reference/function/analytic"},next:{title:"Boolean functions",permalink:"/docs/reference/function/boolean"}},u=[{value:"base64",id:"base64",children:[]}],p={toc:u};function s(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page describes the available functions to assist with working with binary data."),(0,i.kt)("h2",{id:"base64"},"base64"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"base64(data, maxLength)")," encodes raw binary data using the base64 encoding into\na string with a maximum length defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"maxLength"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data")," is the binary data to be encoded."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maxLength")," is the intended maximum length of the encoded string.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value:")),(0,i.kt)("p",null,"Return value type is ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"/docs/reference/function/random-value-generator/#rnd_bin"},(0,i.kt)("inlineCode",{parentName:"a"},"rnd_bin"))," can be used to generate random binary data."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT base64(rnd_bin(), 20);\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"base64"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"q7QDHliR4V1OsAEUVCFwDDTerbI=")))))}s.isMDXComponent=!0}}]);