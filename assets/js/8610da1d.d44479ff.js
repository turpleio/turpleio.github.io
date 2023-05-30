"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[1276],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5659:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],l={title:"ORDER BY keyword",sidebar_label:"ORDER BY",description:"ORDER BY SQL keyword reference documentation."},c={unversionedId:"reference/sql/order-by",id:"reference/sql/order-by",isDocsHomePage:!1,title:"ORDER BY keyword",description:"ORDER BY SQL keyword reference documentation.",source:"@site/docs/reference/sql/order-by.md",sourceDirName:"reference/sql",slug:"/reference/sql/order-by",permalink:"/docs/reference/sql/order-by",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/reference/sql/order-by.md",version:"current",sidebar_label:"ORDER BY",frontMatter:{title:"ORDER BY keyword",sidebar_label:"ORDER BY",description:"ORDER BY SQL keyword reference documentation."},sidebar:"docs",previous:{title:"LIMIT keyword",permalink:"/docs/reference/sql/limit"},next:{title:"REINDEX",permalink:"/docs/reference/sql/reindex"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Ressources management",id:"ressources-management",children:[]}],d={toc:s};function u(e){var r=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sort the results of a query in ascending or descending order."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Flow chart showing the syntax of the ORDER BY keyword",src:t(45).Z})),(0,a.kt)("p",null,"Default order is ",(0,a.kt)("inlineCode",{parentName:"p"},"ASC"),". You can omit to order in ascending order."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-questdb-sql",metastring:'title="Omitting ASC will default to ascending order"',title:'"Omitting',ASC:!0,will:!0,default:!0,to:!0,ascending:!0,'order"':!0},"ratings ORDER BY userId;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-questdb-sql",metastring:'title="Ordering in descending order"',title:'"Ordering',in:!0,descending:!0,'order"':!0},"ratings ORDER BY userId DESC;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-questdb-sql",metastring:'title="Multi-level ordering"',title:'"Multi-level','ordering"':!0},"ratings ORDER BY userId, rating DESC;\n")),(0,a.kt)("h2",{id:"ressources-management"},"Ressources management"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Ordering data requires holding it in RAM. For large operations, we suggest you\ncheck you have sufficient memory to perform the operation."))))}u.isMDXComponent=!0}}]);