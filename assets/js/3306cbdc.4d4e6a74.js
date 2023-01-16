"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[9228],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),s=a,f=m["".concat(p,".").concat(s)]||m[s]||d[s]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42552:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],i={title:"Boolean functions",sidebar_label:"Boolean",description:"Boolean function reference documentation."},p={unversionedId:"reference/function/boolean",id:"reference/function/boolean",isDocsHomePage:!1,title:"Boolean functions",description:"Boolean function reference documentation.",source:"@site/docs/reference/function/boolean.md",sourceDirName:"reference/function",slug:"/reference/function/boolean",permalink:"/docs/reference/function/boolean",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/reference/function/boolean.md",version:"current",sidebar_label:"Boolean",frontMatter:{title:"Boolean functions",sidebar_label:"Boolean",description:"Boolean function reference documentation."},sidebar:"docs",previous:{title:"Binary functions",permalink:"/docs/reference/function/binary"},next:{title:"Conditional functions",permalink:"/docs/reference/function/conditional"}},c=[{value:"isOrdered",id:"isordered",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page describes the available functions to assist with performing boolean\ncalculations on numeric and timestamp types."),(0,o.kt)("h2",{id:"isordered"},"isOrdered"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"isOrdered(column)")," return a ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," indicating whether the column values are\nordered in a table."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"column")," is a column name of numeric or timestamp type.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return value:")),(0,o.kt)("p",null,"Return value type is ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("p",null,"Given a table with the following contents:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"numeric_sequence"),(0,o.kt)("th",{parentName:"tr",align:"left"},"ts"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-05-01T11:00:00.000000Z")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-05-01T12:00:00.000000Z")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"3"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-05-01T13:00:00.000000Z")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT isOrdered(numeric_sequence) is_num_ordered,\n       isOrdered(ts) is_ts_ordered\nFROM my_table\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"is_num_ordered"),(0,o.kt)("th",{parentName:"tr",align:"left"},"is_ts_ordered"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"true"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true")))),(0,o.kt)("p",null,"Adding an integer and timestamp rows out-of-order"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"numeric_sequence"),(0,o.kt)("th",{parentName:"tr",align:"left"},"ts"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-05-01T11:00:00.000000Z")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-05-01T12:00:00.000000Z")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"3"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-05-01T13:00:00.000000Z")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-05-01T12:00:00.000000Z")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT isOrdered(numeric_sequence) FROM my_table\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"is_num_ordered"),(0,o.kt)("th",{parentName:"tr",align:"left"},"is_ts_ordered"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false")))))}d.isMDXComponent=!0}}]);