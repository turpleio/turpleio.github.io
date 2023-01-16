"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[1808],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11578:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={title:"Geospatial functions",sidebar_label:"Spatial",description:"Geospatial functions reference documentation."},p={unversionedId:"reference/function/spatial",id:"reference/function/spatial",isDocsHomePage:!1,title:"Geospatial functions",description:"Geospatial functions reference documentation.",source:"@site/docs/reference/function/spatial.md",sourceDirName:"reference/function",slug:"/reference/function/spatial",permalink:"/docs/reference/function/spatial",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/reference/function/spatial.md",version:"current",sidebar_label:"Spatial",frontMatter:{title:"Geospatial functions",sidebar_label:"Spatial",description:"Geospatial functions reference documentation."},sidebar:"docs",previous:{title:"Row generator",permalink:"/docs/reference/function/row-generator"},next:{title:"Text functions",permalink:"/docs/reference/function/text"}},s=[{value:"rnd_geohash",id:"rnd_geohash",children:[]},{value:"make_geohash",id:"make_geohash",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Spatial functions allow for operations relating to the geohash types which\nprovide geospatial data support. For more information on this type of data, see\nthe ",(0,l.kt)("a",{parentName:"p",href:"/docs/concept/geohashes"},"geohashes documentation")," and the\n",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/operators/spatial"},"operators")," which help with filtering data."),(0,l.kt)("h2",{id:"rnd_geohash"},"rnd_geohash"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rnd_geohash(bits)")," returns a random geohash of variable precision."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments:")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bits")," - an integer between ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"60")," which determines the precision of the\ngenerated geohash."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"geohash")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT rnd_geohash(7) g7,\n      rnd_geohash(10) g10,\n      rnd_geohash(30) g30,\n      rnd_geohash(29) g29,\n      rnd_geohash(60) g60\nFROM long_sequence(5);\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"g7"),(0,l.kt)("th",{parentName:"tr",align:null},"g10"),(0,l.kt)("th",{parentName:"tr",align:null},"g30"),(0,l.kt)("th",{parentName:"tr",align:null},"g29"),(0,l.kt)("th",{parentName:"tr",align:null},"g60"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1101100"),(0,l.kt)("td",{parentName:"tr",align:null},"4h"),(0,l.kt)("td",{parentName:"tr",align:null},"hsmmq8"),(0,l.kt)("td",{parentName:"tr",align:null},"01110101011001101111110111011"),(0,l.kt)("td",{parentName:"tr",align:null},"rjtwedd0z72p")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0010011"),(0,l.kt)("td",{parentName:"tr",align:null},"vf"),(0,l.kt)("td",{parentName:"tr",align:null},"f9jc1q"),(0,l.kt)("td",{parentName:"tr",align:null},"10101111100101111111101101101"),(0,l.kt)("td",{parentName:"tr",align:null},"fzj09w97tj1h")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0101011"),(0,l.kt)("td",{parentName:"tr",align:null},"kx"),(0,l.kt)("td",{parentName:"tr",align:null},"fkhked"),(0,l.kt)("td",{parentName:"tr",align:null},"01110110010001001000110001100"),(0,l.kt)("td",{parentName:"tr",align:null},"v4cs8qsnjkeh")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0000001"),(0,l.kt)("td",{parentName:"tr",align:null},"07"),(0,l.kt)("td",{parentName:"tr",align:null},"qm99sm"),(0,l.kt)("td",{parentName:"tr",align:null},"11001010011011000010101100101"),(0,l.kt)("td",{parentName:"tr",align:null},"hrz9gq171nc5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0101011"),(0,l.kt)("td",{parentName:"tr",align:null},"6t"),(0,l.kt)("td",{parentName:"tr",align:null},"3r8jb5"),(0,l.kt)("td",{parentName:"tr",align:null},"11011101010111001010010001010"),(0,l.kt)("td",{parentName:"tr",align:null},"fm521tq86j2c")))),(0,l.kt)("h2",{id:"make_geohash"},"make_geohash"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"make_geohash(lon, lat, bits)")," returns a geohash equivalent of latitude and\nlongitude, with precision specified in bits."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"make_geohash()")," is intended to be used via SQL over HTTP / PostgreSQL wire\nprotocol, for use within Java (embedded) scenario, see the\n",(0,l.kt)("a",{parentName:"p",href:"/docs/concept/geohashes#java-embedded-usage"},"Java embedded documentation for geohashes"),"."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lon")," - longitude coordinate as a floating point value with up to eight\ndecimal places"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lat")," - latitude coordinate as a floating point value with up to eight decimal\nplaces"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bits")," - an integer between ",(0,l.kt)("inlineCode",{parentName:"li"},"1")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"60")," which determines the precision of the\ngenerated geohash.")),(0,l.kt)("p",null,"The latitude and longitude arguments may be constants, column values or the\nresults of a function which produces them."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"geohash"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If latitude and longitude comes from constants and is incorrect, an error is\nthrown"),(0,l.kt)("li",{parentName:"ul"},"If column values have invalid lat / long coordinates, this produces ",(0,l.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT make_geohash(142.89124148, -12.90604153, 40)\n")))}d.isMDXComponent=!0}}]);