"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[8811],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68554:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),l=["components"],o={title:"LIMIT keyword",sidebar_label:"LIMIT",description:"LIMIT SQL keyword reference documentation."},s={unversionedId:"reference/sql/limit",id:"reference/sql/limit",isDocsHomePage:!1,title:"LIMIT keyword",description:"LIMIT SQL keyword reference documentation.",source:"@site/docs/reference/sql/limit.md",sourceDirName:"reference/sql",slug:"/reference/sql/limit",permalink:"/docs/reference/sql/limit",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/reference/sql/limit.md",version:"current",sidebar_label:"LIMIT",frontMatter:{title:"LIMIT keyword",sidebar_label:"LIMIT",description:"LIMIT SQL keyword reference documentation."},sidebar:"docs",previous:{title:"LATEST ON keyword",permalink:"/docs/reference/sql/latest-on"},next:{title:"ORDER BY keyword",permalink:"/docs/reference/sql/order-by"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:u};function p(e){var t=e.components,o=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Specify the number and position of records returned by a\n",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/sql/select"},"SELECT statement"),"."),(0,a.kt)("p",null,"In other implementations of SQL, this is sometimes replaced by statements such\nas ",(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ROWNUM")," Our implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT")," encompasses both in one\nstatement."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Flow chart showing the syntax of the LIMIT keyword",src:n(61601).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"numberOfRecords")," is the number of records to return."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"upperBound")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"lowerBound")," is the return range. ",(0,a.kt)("inlineCode",{parentName:"li"},"lowerBound")," is\n",(0,a.kt)("strong",{parentName:"li"},"exclusive")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"upperBound")," is ",(0,a.kt)("strong",{parentName:"li"},"inclusive"),".")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"positive")," number will return the ",(0,a.kt)("inlineCode",{parentName:"p"},"first")," n records. A ",(0,a.kt)("inlineCode",{parentName:"p"},"negative")," number will\nreturn the ",(0,a.kt)("inlineCode",{parentName:"p"},"last")," n records."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",5:!0,className:"language-questdb-sql",metastring:'title="First 5 results"',title:'"First','results"':!0},"SELECT * FROM ratings LIMIT 5;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",5:!0,className:"language-questdb-sql",metastring:'title="Last 5 results"',title:'"Last','results"':!0},"SELECT * FROM ratings LIMIT -5;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",4:!0,className:"language-questdb-sql",metastring:'title="Range results - this will return records 3, 4 and 5"',title:'"Range',results:!0,"-":!0,this:!0,will:!0,return:!0,records:!0,"3,":!0,and:!0,'5"':!0},"SELECT * FROM ratings LIMIT 2,5;\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"negative")," range parameters will return results from the bottom of the table.\nAssuming a table with ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," records, the following will return records between n-7\n(exclusive) and n-3 (inclusive), i.e {n-6, n-5, n-4, n-3}. Both ",(0,a.kt)("inlineCode",{parentName:"p"},"upperBound")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"lowerBound")," must be negative numbers, in this case:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-questdb-sql",metastring:'title="Range results (negative)"',title:'"Range',results:!0,'(negative)"':!0},"SELECT * FROM ratings LIMIT -7, -3;\n")))}p.isMDXComponent=!0}}]);