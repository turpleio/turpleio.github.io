"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[6782],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),N=p(n),s=r,u=N["".concat(o,".").concat(s)]||N[s]||k[s]||l;return n?a.createElement(u,i(i({ref:e},m),{},{components:n})):a.createElement(u,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},49783:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},metadata:function(){return o},toc:function(){return p},default:function(){return k}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],d={title:"Data types",sidebar_label:"Data types",description:"Data types reference documentation."},o={unversionedId:"reference/sql/datatypes",id:"reference/sql/datatypes",isDocsHomePage:!1,title:"Data types",description:"Data types reference documentation.",source:"@site/docs/reference/sql/datatypes.md",sourceDirName:"reference/sql",slug:"/reference/sql/datatypes",permalink:"/docs/reference/sql/datatypes",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/reference/sql/datatypes.md",version:"current",sidebar_label:"Data types",frontMatter:{title:"Data types",sidebar_label:"Data types",description:"Data types reference documentation."},sidebar:"docs",previous:{title:"Java ILP client",permalink:"/docs/reference/clients/java_ilp"},next:{title:"Aggregate functions",permalink:"/docs/reference/function/aggregation"}},p=[{value:"Variable-sized type limitations",id:"variable-sized-type-limitations",children:[]},{value:"Type nullability",id:"type-nullability",children:[]}],m={toc:p};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The type system is derived from Java types."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Storage bits"),(0,l.kt)("th",{parentName:"tr",align:null},"Nullable"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"byte")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"8")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Signed integer ",(0,l.kt)("inlineCode",{parentName:"td"},"-128")," to ",(0,l.kt)("inlineCode",{parentName:"td"},"127"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"short")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"16")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Signed integer ",(0,l.kt)("inlineCode",{parentName:"td"},"-32768")," to ",(0,l.kt)("inlineCode",{parentName:"td"},"32767"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"char")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"16")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"unicode")," character.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"32")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Signed integer ",(0,l.kt)("inlineCode",{parentName:"td"},"0x80000000")," to ",(0,l.kt)("inlineCode",{parentName:"td"},"0x7fffffff"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"float")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"32")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Single precision IEEE 754 floating point value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"symbol")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"32")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Symbols are stored as 32-bit signed indexes from symbol table. Each index will have a corresponding ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," value. Translation from index to string value is done automatically when data is being written or read. Symbol table is stored separately from column.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"32+n*16")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Length-prefixed sequence of UTF-16 encoded characters whose length is stored as signed 32-bit integer with maximum value of ",(0,l.kt)("inlineCode",{parentName:"td"},"0x7fffffff"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"long")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"64")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Signed integer ",(0,l.kt)("inlineCode",{parentName:"td"},"0x8000000000000000L")," to ",(0,l.kt)("inlineCode",{parentName:"td"},"0x7fffffffffffffffL"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"64")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Signed offset in ",(0,l.kt)("strong",{parentName:"td"},"milliseconds")," from ",(0,l.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Unix_time"},"Unix Epoch"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"64")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Signed offset in ",(0,l.kt)("strong",{parentName:"td"},"microseconds")," from ",(0,l.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Unix_time"},"Unix Epoch"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"double")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"64")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Double precision IEEE 754 floating point value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"binary")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"64+n*8")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Length-prefixed sequence of bytes whose length is stored as signed 64-bit integer with maximum value of ",(0,l.kt)("inlineCode",{parentName:"td"},"0x7fffffffffffffffL"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"long256")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"256")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Unsigned 256-bit integer. Does not support arbitrary arithmetic operations, but only equality checks. Suitable for storing hash code, such as crypto public addresses.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"geohash(<size>)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"8"),"-",(0,l.kt)("inlineCode",{parentName:"td"},"64")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Geohash with precision specified as a number followed by ",(0,l.kt)("inlineCode",{parentName:"td"},"b")," for bits, ",(0,l.kt)("inlineCode",{parentName:"td"},"c")," for chars. See ",(0,l.kt)("a",{parentName:"td",href:"/docs/concept/geohashes"},"the geohashes documentation")," for details on use and storage.")))),(0,l.kt)("h2",{id:"variable-sized-type-limitations"},"Variable-sized type limitations"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"BINARY")," field size is limited either by 64-Bit signed int (8388608 peta bytes)\nor disk size, whichever is smaller."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"STRING")," field size is limited by either 32-bit signed int (1073741824\ncharacters) or disk size, whichever is smaller."),(0,l.kt)("h2",{id:"type-nullability"},"Type nullability"),(0,l.kt)("p",null,"Nullable types use a specific value to mark ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," values: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Null value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"float")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NaN")),(0,l.kt)("td",{parentName:"tr",align:null},"As defined by IEEE 754 (",(0,l.kt)("inlineCode",{parentName:"td"},"java.lang.Float.NaN"),").")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"double")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NaN")),(0,l.kt)("td",{parentName:"tr",align:null},"As defined by IEEE 754 (",(0,l.kt)("inlineCode",{parentName:"td"},"java.lang.Double.NaN"),").")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"long256")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x8000000000000000L")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"x4"),", ",(0,l.kt)("em",{parentName:"td"},"four consecutive long null values"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"long")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x8000000000000000L")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum possible value a ",(0,l.kt)("inlineCode",{parentName:"td"},"long")," can take -2^63.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x8000000000000000L")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum possible value a ",(0,l.kt)("inlineCode",{parentName:"td"},"long")," can take -2^63.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x8000000000000000L")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum possible value a ",(0,l.kt)("inlineCode",{parentName:"td"},"long")," can take -2^63.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x80000000")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum possible value an ",(0,l.kt)("inlineCode",{parentName:"td"},"int")," can take, -2^31.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"char")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x0000")),(0,l.kt)("td",{parentName:"tr",align:null},"0.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"geohash(byte)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0xff")),(0,l.kt)("td",{parentName:"tr",align:null},"Geohashes ",(0,l.kt)("inlineCode",{parentName:"td"},"from 1 up to included 7 bits"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"geohash(short)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0xffff")),(0,l.kt)("td",{parentName:"tr",align:null},"Geohashes ",(0,l.kt)("inlineCode",{parentName:"td"},"from 8 up to included 15 bits"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"geohash(int)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0xffffffff")),(0,l.kt)("td",{parentName:"tr",align:null},"Geohashes ",(0,l.kt)("inlineCode",{parentName:"td"},"from 16 up to included 31 bits"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"geohash(long)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0xffffffffffffffff")),(0,l.kt)("td",{parentName:"tr",align:null},"Geohashes ",(0,l.kt)("inlineCode",{parentName:"td"},"from 32 up to included 60 bits"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"symbol")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x80000000")),(0,l.kt)("td",{parentName:"tr",align:null},"Symbols are stored as ",(0,l.kt)("inlineCode",{parentName:"td"},"int")," offsets in a lookup file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0xffffffff")),(0,l.kt)("td",{parentName:"tr",align:null},"Strings are length prefixed, the length is an ",(0,l.kt)("inlineCode",{parentName:"td"},"int")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"-1")," marks it ",(0,l.kt)("inlineCode",{parentName:"td"},"NULL")," (no further storage is used).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"binary")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0xffffffffffffffff")),(0,l.kt)("td",{parentName:"tr",align:null},"Binary columns are also length prefixed, the length is a ",(0,l.kt)("inlineCode",{parentName:"td"},"long")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"-1")," marks it ",(0,l.kt)("inlineCode",{parentName:"td"},"NULL")," (no further storage is used).")))),(0,l.kt)("p",null,"To filter columns that contain, or don't contain, ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," values use a filter like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT * FROM <table> WHERE <column> = NULL;\nSELECT * FROM <table> WHERE <column> != NULL;\n")),(0,l.kt)("p",null,"Alternatively, from version 6.3 use the NULL equality operator aliases: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT * FROM <table> WHERE <column> IS NULL;\nSELECT * FROM <table> WHERE <column> IS NOT NULL;\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," values still occupy disk space."))))}k.isMDXComponent=!0}}]);