"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[4028],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),N=u(n),k=r,s=N["".concat(o,".").concat(k)]||N[k]||d[k]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},67259:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],p={title:"UNION EXCEPT INTERSECT keywords",sidebar_label:"UNION EXCEPT INTERSECT",description:"UNION, EXCEPT, and INTERSECT  SQL keyword reference documentation."},o={unversionedId:"reference/sql/union-except-intersect",id:"reference/sql/union-except-intersect",isDocsHomePage:!1,title:"UNION EXCEPT INTERSECT keywords",description:"UNION, EXCEPT, and INTERSECT  SQL keyword reference documentation.",source:"@site/docs/reference/sql/union-except-intersect.md",sourceDirName:"reference/sql",slug:"/reference/sql/union-except-intersect",permalink:"/docs/reference/sql/union-except-intersect",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/reference/sql/union-except-intersect.md",version:"current",sidebar_label:"UNION EXCEPT INTERSECT",frontMatter:{title:"UNION EXCEPT INTERSECT keywords",sidebar_label:"UNION EXCEPT INTERSECT",description:"UNION, EXCEPT, and INTERSECT  SQL keyword reference documentation."},sidebar:"docs",previous:{title:"TRUNCATE TABLE keyword",permalink:"/docs/reference/sql/truncate"},next:{title:"UPDATE keyword",permalink:"/docs/reference/sql/update"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Syntax",id:"syntax",children:[{value:"UNION",id:"union",children:[]}]},{value:"Examples",id:"examples",children:[{value:"UNION",id:"union-1",children:[]},{value:"EXCEPT",id:"except",children:[]},{value:"INTERSECT",id:"intersect",children:[]}]},{value:"Keyword execution priority",id:"keyword-execution-priority",children:[]},{value:"Clauses",id:"clauses",children:[]},{value:"Alias",id:"alias",children:[]}],m={toc:u};function d(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UNION"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"EXCEPT"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"INTERSECT")," perform set operations."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UNION")," is used to combine the results of two or more queries."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"EXCEPT")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"INTERSECT")," return distinct rows by comparing the results of two queries."),(0,l.kt)("p",null,"To work properly, all of the following must be true:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Each query statement should return the same number of column."),(0,l.kt)("li",{parentName:"ul"},"Each column to be combined should have data types that are either the same, or supported by ",(0,l.kt)("inlineCode",{parentName:"li"},"implicit cast"),". See ",(0,l.kt)("a",{parentName:"li",href:"/docs/reference/sql/cast"},"CAST")," for more information."),(0,l.kt)("li",{parentName:"ul"},"Columns in each query statement should be in the same order.")),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("h3",{id:"union"},"UNION"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Flow chart showing the syntax of the UNION, EXCEPT &amp; INTERSECT keyword",src:n(24384).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UNION")," returns distinct results."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UNION ALL")," returns all results including duplicates."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EXCEPT")," returns distinct rows from the left input query that are not returned by\nthe right input query."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INTERSECT")," returns rows that are returned by both input queries.")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"The examples for the set operations use the following tables:"),(0,l.kt)("p",null,"sensor_1:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"make"),(0,l.kt)("th",{parentName:"tr",align:null},"city"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Honeywell"),(0,l.kt)("td",{parentName:"tr",align:null},"New York")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"United Automation"),(0,l.kt)("td",{parentName:"tr",align:null},"Miami")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Omron"),(0,l.kt)("td",{parentName:"tr",align:null},"Miami")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Honeywell"),(0,l.kt)("td",{parentName:"tr",align:null},"San Francisco")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Omron"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"RS Pro"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Honeywell"),(0,l.kt)("td",{parentName:"tr",align:null},"New York")))),(0,l.kt)("p",null,"sensor_2:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"make"),(0,l.kt)("th",{parentName:"tr",align:null},"city"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Honeywell"),(0,l.kt)("td",{parentName:"tr",align:null},"San Francisco")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"United Automation"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Eberle"),(0,l.kt)("td",{parentName:"tr",align:null},"New York")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Honeywell"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Omron"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"RS Pro"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")))),(0,l.kt)("h3",{id:"union-1"},"UNION"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"sensor_1 UNION sensor_2\n")),(0,l.kt)("p",null,"returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"make"),(0,l.kt)("th",{parentName:"tr",align:null},"city"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Honeywell"),(0,l.kt)("td",{parentName:"tr",align:null},"New York")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"United Automation"),(0,l.kt)("td",{parentName:"tr",align:null},"Miami")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Omron"),(0,l.kt)("td",{parentName:"tr",align:null},"Miami")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Honeywell"),(0,l.kt)("td",{parentName:"tr",align:null},"San Francisco")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Omron"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"RS Pro"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Honeywell"),(0,l.kt)("td",{parentName:"tr",align:null},"San Francisco")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"United Automation"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Eberle"),(0,l.kt)("td",{parentName:"tr",align:null},"New York")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Honeywell"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UNION")," eliminates duplication even when one of the queries returns nothing."),(0,l.kt)("p",null,"For instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"sensor_1\nUNION\nsensor_2 WHERE ID>10;\n")),(0,l.kt)("p",null,"returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"make"),(0,l.kt)("th",{parentName:"tr",align:null},"city"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Honeywell"),(0,l.kt)("td",{parentName:"tr",align:null},"New York")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"United Automation"),(0,l.kt)("td",{parentName:"tr",align:null},"Miami")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Omron"),(0,l.kt)("td",{parentName:"tr",align:null},"Miami")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Honeywell"),(0,l.kt)("td",{parentName:"tr",align:null},"San Francisco")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Omron"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"RS Pro"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")))),(0,l.kt)("p",null,"The duplicate row in ",(0,l.kt)("inlineCode",{parentName:"p"},"sensor_1")," is not returned as a result."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"sensor_1 UNION ALL sensor_2\n")),(0,l.kt)("p",null,"returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"make"),(0,l.kt)("th",{parentName:"tr",align:null},"city"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Honeywell"),(0,l.kt)("td",{parentName:"tr",align:null},"New York")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"United Automation"),(0,l.kt)("td",{parentName:"tr",align:null},"Miami")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Omron"),(0,l.kt)("td",{parentName:"tr",align:null},"Miami")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Honeywell"),(0,l.kt)("td",{parentName:"tr",align:null},"San Francisco")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Omron"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"RS Pro"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Honeywell"),(0,l.kt)("td",{parentName:"tr",align:null},"San Francisco")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"United Automation"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Eberle"),(0,l.kt)("td",{parentName:"tr",align:null},"New York")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Honeywell"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Omron"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"RS Pro"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")))),(0,l.kt)("h3",{id:"except"},"EXCEPT"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"sensor_1 EXCEPT sensor_2\n")),(0,l.kt)("p",null,"returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"make"),(0,l.kt)("th",{parentName:"tr",align:null},"city"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Honeywell"),(0,l.kt)("td",{parentName:"tr",align:null},"New York")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"United Automation"),(0,l.kt)("td",{parentName:"tr",align:null},"Miami")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Omron"),(0,l.kt)("td",{parentName:"tr",align:null},"Miami")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Honeywell"),(0,l.kt)("td",{parentName:"tr",align:null},"San Francisco")))),(0,l.kt)("h3",{id:"intersect"},"INTERSECT"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"sensor_1 INTERSECT sensor_2\n")),(0,l.kt)("p",null,"returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"make"),(0,l.kt)("th",{parentName:"tr",align:null},"city"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Omron"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"RS Pro"),(0,l.kt)("td",{parentName:"tr",align:null},"Boston")))),(0,l.kt)("h2",{id:"keyword-execution-priority"},"Keyword execution priority"),(0,l.kt)("p",null,"The QuestDB's engine processes the keywords from left to right, unless the priority is defined by parenthesis."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"\nquery_1 UNION query_2 EXCEPT query_3\n\n")),(0,l.kt)("p",null,"is executed as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"(query_1 UNION query_2) EXCEPT query_3\n\n")),(0,l.kt)("p",null,"Similarly, the following syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"\nquery_1 UNION query_2 INTERSECT query_3\n\n")),(0,l.kt)("p",null,"is executed as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"(query_1 UNION query_2) INTERSECT query_3\n\n")),(0,l.kt)("h2",{id:"clauses"},"Clauses"),(0,l.kt)("p",null,"The set operations can be used with clauses such as ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE"),". However, when the clause keywords are added after the set operations, the execution order for different clauses varies."),(0,l.kt)("p",null,"For ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY"),", the clauses are applied after the set operations."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"query_1 UNION query_2\nLIMIT 3;\n\n")),(0,l.kt)("p",null,"is executed as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"(query_1 UNION query_2)\nLIMIT 3;\n\n")),(0,l.kt)("p",null,"For ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE"),", the clause is applied first to the query immediate prior to it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"query_1 UNION query_2\nWHERE value = 1;\n\n")),(0,l.kt)("p",null,"is executed as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"query_1 UNION (query_2\nWHERE value = 1);\n\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"QuestDB applies ",(0,l.kt)("inlineCode",{parentName:"li"},"GROUP BY")," implicitly. See ",(0,l.kt)("a",{parentName:"li",href:"/docs/reference/sql/group-by"},"GROUP BY reference")," for more information."),(0,l.kt)("li",{parentName:"ul"},"Quest does not support the clause ",(0,l.kt)("inlineCode",{parentName:"li"},"HAVING")," yet.")))),(0,l.kt)("h2",{id:"alias"},"Alias"),(0,l.kt)("p",null,"When different aliases are used with set operations, the execution follows a left-right order and the output uses the first alias."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT alias_1 FROM table_1\nUNION\nSELECT alias_2 FROM table_2;\n\n")),(0,l.kt)("p",null,"The output shows ",(0,l.kt)("inlineCode",{parentName:"p"},"alias_1"),"."))}d.isMDXComponent=!0}}]);