"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[7033],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,k=p["".concat(o,".").concat(d)]||p[d]||u[d]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},55667:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],c={title:"SQL code blocks"},o={unversionedId:"__guidelines/sql-code-blocks",id:"__guidelines/sql-code-blocks",isDocsHomePage:!1,title:"SQL code blocks",description:"Checklist",source:"@site/docs/__guidelines/sql-code-blocks.md",sourceDirName:"__guidelines",slug:"/__guidelines/sql-code-blocks",permalink:"/docs/__guidelines/sql-code-blocks",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/__guidelines/sql-code-blocks.md",version:"current",frontMatter:{title:"SQL code blocks"}},s=[{value:"Checklist",id:"checklist",children:[]},{value:"Formatting",id:"formatting",children:[]},{value:"Examples",id:"examples",children:[]}],m={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"checklist"},"Checklist"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"questdb-sql")," language"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Keywords are uppercase"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Types are uppercase"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Column names are camelCase"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Table names are camelCase"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Function names are lowercase"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Statements finish with ",(0,l.kt)("inlineCode",{parentName:"li"},";"))),(0,l.kt)("h3",{id:"formatting"},"Formatting"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Always write explicit ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT * FROM table")," instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," with the\nexception of pages describing the shorthand expression."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamp")," is not a valid column name. Neither are any type or function\nnames."),(0,l.kt)("li",{parentName:"ul"},"Char returns are allowed either (1) after a ",(0,l.kt)("inlineCode",{parentName:"li"},",")," (2) after a ",(0,l.kt)("inlineCode",{parentName:"li"},"SQL keyword")," (3)\nafter opening or closing a bracket ",(0,l.kt)("inlineCode",{parentName:"li"},"("),",",(0,l.kt)("inlineCode",{parentName:"li"},")"))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT * FROM tableName;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT columnName, min(columnName) FROM tableName;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"CREATE TABLE tableName(columnName TYPE, columnName TYPE) timestamp(columnName) PARTITION BY DAY;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT cast(columnName AS INT) FROM tableName;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT columnName, min(columnName)\nFROM tableName\nWHERE columnName > 3;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT\ncolumnName,\nmin(columnName),\nmax(columnName)\nFROM table WHERE columnName > 3;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"CREATE TABLE tableName AS(\n...\n);\n")))}u.isMDXComponent=!0}}]);