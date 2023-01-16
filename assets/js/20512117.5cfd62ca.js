"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[7240],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=o(a),k=r,g=d["".concat(m,".").concat(k)]||d[k]||u[k]||l;return a?n.createElement(g,i(i({ref:e},s),{},{components:a})):n.createElement(g,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5663:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},metadata:function(){return m},toc:function(){return o},default:function(){return u}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],p={title:"Aggregate functions",sidebar_label:"Aggregate",description:"Aggregate functions reference documentation."},m={unversionedId:"reference/function/aggregation",id:"reference/function/aggregation",isDocsHomePage:!1,title:"Aggregate functions",description:"Aggregate functions reference documentation.",source:"@site/docs/reference/function/aggregation.md",sourceDirName:"reference/function",slug:"/reference/function/aggregation",permalink:"/docs/reference/function/aggregation",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/reference/function/aggregation.md",version:"current",sidebar_label:"Aggregate",frontMatter:{title:"Aggregate functions",sidebar_label:"Aggregate",description:"Aggregate functions reference documentation."},sidebar:"docs",previous:{title:"Data types",permalink:"/docs/reference/sql/datatypes"},next:{title:"Analytic functions",permalink:"/docs/reference/function/analytic"}},o=[{value:"avg",id:"avg",children:[]},{value:"count",id:"count",children:[]},{value:"count_distinct",id:"count_distinct",children:[]},{value:"first/last",id:"firstlast",children:[]},{value:"haversine_dist_deg",id:"haversine_dist_deg",children:[]},{value:"ksum",id:"ksum",children:[]},{value:"max",id:"max",children:[]},{value:"min",id:"min",children:[]},{value:"nsum",id:"nsum",children:[]},{value:"stddev_samp",id:"stddev_samp",children:[]},{value:"sum",id:"sum",children:[{value:"Overflow",id:"overflow",children:[]}]}],s={toc:o};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page describes the available functions to assist with performing aggregate\ncalculations."),(0,l.kt)("h2",{id:"avg"},"avg"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"avg(value)")," calculates simple average of values ignoring missing data (e.g\n",(0,l.kt)("inlineCode",{parentName:"p"},"null")," values)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," is any numeric value.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,"Return value type is ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql",metastring:'title="Average transaction amount"',title:'"Average',transaction:!0,'amount"':!0},"SELECT avg(amount) FROM transactions;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"avg"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"22.4")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql",metastring:'title="Average transaction amount by payment_type"',title:'"Average',transaction:!0,amount:!0,by:!0,'payment_type"':!0},"SELECT payment_type, avg(amount) FROM transactions;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"cash_or_card"),(0,l.kt)("th",{parentName:"tr",align:"left"},"avg"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cash"),(0,l.kt)("td",{parentName:"tr",align:"left"},"22.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"card"),(0,l.kt)("td",{parentName:"tr",align:"left"},"27.4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:"left"},"18.02")))),(0,l.kt)("h2",{id:"count"},"count"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"count()")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"count(*)")," - counts rows irrespective of underlying data."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"count")," does not require arguments.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,"Return value type is ",(0,l.kt)("inlineCode",{parentName:"p"},"long"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Count of rows in the transactions table.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT count() FROM transactions;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"count"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"100")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Count of rows in the transactions table aggregated by ",(0,l.kt)("inlineCode",{parentName:"li"},"payment_type")," value.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT payment_type, count() FROM transactions;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"cash_or_card"),(0,l.kt)("th",{parentName:"tr",align:"left"},"count"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cash"),(0,l.kt)("td",{parentName:"tr",align:"left"},"25")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"card"),(0,l.kt)("td",{parentName:"tr",align:"left"},"70")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:"left"},"5")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"null")," values are aggregated with ",(0,l.kt)("inlineCode",{parentName:"p"},"count()"),"."))),(0,l.kt)("h2",{id:"count_distinct"},"count_distinct"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"count_distinct(column_name)")," - counts distinct values in ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"symbol"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"long256"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"long"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"int")," columns."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,"Return value type is ",(0,l.kt)("inlineCode",{parentName:"p"},"long"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Count of distinct sides in the transactions table. Side column can either be\n",(0,l.kt)("inlineCode",{parentName:"li"},"BUY")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"SELL")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"null"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT count_distinct(side) FROM transactions;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"count_distinct"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Count of distinct counterparties in the transactions table aggregated by\n",(0,l.kt)("inlineCode",{parentName:"li"},"payment_type")," value.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT payment_type, count_distinct(counterparty) FROM transactions;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"cash_or_card"),(0,l.kt)("th",{parentName:"tr",align:"left"},"count_distinct"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cash"),(0,l.kt)("td",{parentName:"tr",align:"left"},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"card"),(0,l.kt)("td",{parentName:"tr",align:"left"},"23")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:"left"},"5")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"null")," values are not counted in the ",(0,l.kt)("inlineCode",{parentName:"p"},"count_distinct")," function."))),(0,l.kt)("h2",{id:"firstlast"},"first/last"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"first(column_name)")," - returns the first value of a column."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"last(column_name)")," - returns the last value of a column.")),(0,l.kt)("p",null,"Supported column datatype: ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"integer"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"character"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"short"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"byte"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"date"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"long"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"geohash"),"."),(0,l.kt)("p",null,"If a table has a ",(0,l.kt)("a",{parentName:"p",href:"/docs/concept/designated-timestamp"},"designated timestamp"),",\nthen the first row is always the row with the lowest timestamp (oldest) and the\nlast row is always the one with the highest (latest) timestamp. For a table\nwithout a designated timestamp column, ",(0,l.kt)("inlineCode",{parentName:"p"},"first")," returns the first row and ",(0,l.kt)("inlineCode",{parentName:"p"},"last"),"\nreturns the last inserted row, regardless of any timestamp column."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,"Return value type is ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("p",null,"Given a table ",(0,l.kt)("inlineCode",{parentName:"p"},"sensors"),", which has a designated timestamp column:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"device_id"),(0,l.kt)("th",{parentName:"tr",align:"left"},"temperature"),(0,l.kt)("th",{parentName:"tr",align:"left"},"ts"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"arduino-01"),(0,l.kt)("td",{parentName:"tr",align:"left"},"12"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-06-02T14:33:19.970258Z")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"arduino-02"),(0,l.kt)("td",{parentName:"tr",align:"left"},"10"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-06-02T14:33:21.703934Z")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"arduino-03"),(0,l.kt)("td",{parentName:"tr",align:"left"},"18"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-06-02T14:33:23.707013Z")))),(0,l.kt)("p",null,"The following query returns oldest value for the ",(0,l.kt)("inlineCode",{parentName:"p"},"device_id")," column:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT first(device_id) FROM sensors;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"first"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"arduino-01")))),(0,l.kt)("p",null,"The following query returns the latest symbol value for the ",(0,l.kt)("inlineCode",{parentName:"p"},"device_id")," column:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT last(device_id) FROM sensors;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"last"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"arduino-03")))),(0,l.kt)("p",null,"Without selecting a designated timestamp column, the table may be unordered and\nthe query may return different result. Given an unordered table\n",(0,l.kt)("inlineCode",{parentName:"p"},"sensors_unordered"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"device_id"),(0,l.kt)("th",{parentName:"tr",align:"left"},"temperature"),(0,l.kt)("th",{parentName:"tr",align:"left"},"ts"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"arduino-01"),(0,l.kt)("td",{parentName:"tr",align:"left"},"12"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-06-02T14:33:19.970258Z")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"arduino-03"),(0,l.kt)("td",{parentName:"tr",align:"left"},"18"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-06-02T14:33:23.707013Z")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"arduino-02"),(0,l.kt)("td",{parentName:"tr",align:"left"},"10"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-06-02T14:33:21.703934Z")))),(0,l.kt)("p",null,"The following query returns the first record for the ",(0,l.kt)("inlineCode",{parentName:"p"},"device_id")," column:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT first(device_id) FROM sensors_unordered;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"first"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"arduino-01")))),(0,l.kt)("p",null,"The following query returns the last record for the ",(0,l.kt)("inlineCode",{parentName:"p"},"device_id")," column:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT last(device_id) FROM sensors_unordered;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"last"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"arduino-02")))),(0,l.kt)("h2",{id:"haversine_dist_deg"},"haversine_dist_deg"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"haversine_dist_deg(lat, lon, ts)")," - calculates the traveled distance for a\nseries of latitude and longitude points."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lat")," is the latitude expressed as degrees in decimal format (",(0,l.kt)("inlineCode",{parentName:"li"},"double"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lon")," is the longitude expressed as degrees in decimal format (",(0,l.kt)("inlineCode",{parentName:"li"},"double"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ts")," is the ",(0,l.kt)("inlineCode",{parentName:"li"},"timestamp")," for the data point")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,"Return value type is ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql",metastring:'title="Calculate the aggregate traveled distance for each car_id"',title:'"Calculate',the:!0,aggregate:!0,traveled:!0,distance:!0,for:!0,each:!0,'car_id"':!0},"SELECT car_id, haversine_dist_deg(lat, lon, k)\n  FROM table rides\n")),(0,l.kt)("h2",{id:"ksum"},"ksum"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ksum(value)")," - adds values ignoring missing data (e.g ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," values). Values\nare added using the"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Kahan_summation_algorithm"},"Kahan compensated sum algorithm"),".\nThis is only beneficial for floating-point values such as ",(0,l.kt)("inlineCode",{parentName:"p"},"float")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," is any numeric value.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,"Return value type is the same as the type of the argument."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT ksum(a)\nFROM (SELECT rnd_double() a FROM long_sequence(100));\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"ksum"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"52.79143968514029")))),(0,l.kt)("h2",{id:"max"},"max"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"max(value)")," - returns the highest value ignoring missing data (e.g ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\nvalues)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," is any numeric value")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,"Return value type is the same as the type of the argument."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql",metastring:'title="Highest transaction amount"',title:'"Highest',transaction:!0,'amount"':!0},"SELECT max(amount) FROM transactions;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"max"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"55.3")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql",metastring:'title="Highest transaction amount by payment_type"',title:'"Highest',transaction:!0,amount:!0,by:!0,'payment_type"':!0},"SELECT payment_type, max(amount) FROM transactions;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"cash_or_card"),(0,l.kt)("th",{parentName:"tr",align:"left"},"amount"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cash"),(0,l.kt)("td",{parentName:"tr",align:"left"},"31.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"card"),(0,l.kt)("td",{parentName:"tr",align:"left"},"55.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:"left"},"29.2")))),(0,l.kt)("h2",{id:"min"},"min"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"min(value)")," - returns the lowest value ignoring missing data (e.g ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\nvalues)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," is any numeric value")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,"Return value type is the same as the type of the argument."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql",metastring:'title="Lowest transaction amount"',title:'"Lowest',transaction:!0,'amount"':!0},"SELECT min(amount) FROM transactions;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"min"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"12.5")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql",metastring:'title="Lowest transaction amount, by payment_type"',title:'"Lowest',transaction:!0,"amount,":!0,by:!0,'payment_type"':!0},"SELECT payment_type, min(amount) FROM transactions;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"cash_or_card"),(0,l.kt)("th",{parentName:"tr",align:"left"},"min"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cash"),(0,l.kt)("td",{parentName:"tr",align:"left"},"12.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"card"),(0,l.kt)("td",{parentName:"tr",align:"left"},"15.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:"left"},"22.2")))),(0,l.kt)("h2",{id:"nsum"},"nsum"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"nsum(value)")," - adds values ignoring missing data (e.g ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," values). Values\nare added using the\n",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Kahan_summation_algorithm#Further_enhancements"},"Neumaier sum algorithm"),".\nThis is only beneficial for floating-point values such as ",(0,l.kt)("inlineCode",{parentName:"p"},"float")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," is any numeric value.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,"Return value type is ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT nsum(a)\nFROM (SELECT rnd_double() a FROM long_sequence(100));\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"nsum"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"49.5442334742831")))),(0,l.kt)("h2",{id:"stddev_samp"},"stddev_samp"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"stddev_samp(value)")," - calculates the sample standard deviation of values\nignoring missing data (e.g ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," values)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," is any numeric value.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,"Return value type is ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT stddev_samp(x)\nFROM (SELECT x FROM long_sequence(100));\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"stddev_samp"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"29.011491975882")))),(0,l.kt)("h2",{id:"sum"},"sum"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sum(value)")," - adds values ignoring missing data (e.g ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," values)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," is any numeric value.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,"Return value type is the same as the type of the argument."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql",metastring:'title="Sum all quantities in the transactions table"',title:'"Sum',all:!0,quantities:!0,in:!0,the:!0,transactions:!0,'table"':!0},"SELECT sum(quantity) FROM transactions;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"sum"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"100")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql",metastring:'title="Sum all quantities in the transactions table, aggregated by item"',title:'"Sum',all:!0,quantities:!0,in:!0,the:!0,transactions:!0,"table,":!0,aggregated:!0,by:!0,'item"':!0},"SELECT item, sum(quantity) FROM transactions;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"item"),(0,l.kt)("th",{parentName:"tr",align:"left"},"count"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"apple"),(0,l.kt)("td",{parentName:"tr",align:"left"},"53")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"orange"),(0,l.kt)("td",{parentName:"tr",align:"left"},"47")))),(0,l.kt)("h3",{id:"overflow"},"Overflow"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sum")," does not perform overflow check. To avoid overflow, you can cast the\nargument to wider type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql",metastring:'title="Cast as long to avoid overflow"',title:'"Cast',as:!0,long:!0,to:!0,avoid:!0,'overflow"':!0},"SELECT sum(cast(a AS LONG)) FROM table;\n")))}u.isMDXComponent=!0}}]);