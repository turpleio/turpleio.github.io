"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[2617],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,f=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5974:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],s={title:"Designated timestamp",sidebar_label:"Designated timestamp",description:"How designated timestamps are implemented and why it is an important functionality for time series."},l={unversionedId:"concept/designated-timestamp",id:"concept/designated-timestamp",isDocsHomePage:!1,title:"Designated timestamp",description:"How designated timestamps are implemented and why it is an important functionality for time series.",source:"@site/docs/concept/designated-timestamp.md",sourceDirName:"concept",slug:"/concept/designated-timestamp",permalink:"/docs/concept/designated-timestamp",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/concept/designated-timestamp.md",version:"current",sidebar_label:"Designated timestamp",frontMatter:{title:"Designated timestamp",sidebar_label:"Designated timestamp",description:"How designated timestamps are implemented and why it is an important functionality for time series."},sidebar:"docs",previous:{title:"Storage model",permalink:"/docs/concept/storage-model"},next:{title:"SQL extensions",permalink:"/docs/concept/sql-extensions"}},c=[{value:"Properties",id:"properties",children:[]},{value:"Out-of-order policy",id:"out-of-order-policy",children:[]},{value:"Advantages",id:"advantages",children:[]}],m={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"QuestDB offers the option to elect a column as a ",(0,r.kt)("em",{parentName:"p"},"designated timestamp"),". This\nallows you to specify which column the tables will be indexed by in order to\nleverage time-oriented language features and high-performance functionalities."),(0,r.kt)("p",null,"A designated timestamp is elected by using the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/function/timestamp"},(0,r.kt)("inlineCode",{parentName:"a"},"timestamp(columnName)"))," function:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"during a ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/sql/create-table#timestamp"},"CREATE TABLE")," operation"),(0,r.kt)("li",{parentName:"ul"},"during a ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/sql/select#timestamp"},"SELECT")," operation\n(",(0,r.kt)("inlineCode",{parentName:"li"},"dynamic timestamp"),")"),(0,r.kt)("li",{parentName:"ul"},"when ingesting data via ILP, for tables that do not already exist in QuestDB,\npartitions are applied automatically by day by default with a ",(0,r.kt)("inlineCode",{parentName:"li"},"timestamp"),"\ncolumn")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Checking if tables contain a designated timestamp column can be done via the\n",(0,r.kt)("inlineCode",{parentName:"p"},"tables()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"table_columns()")," functions which are described in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/function/meta"},"meta functions")," documentation page."))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only a column of type ",(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," can be elected as a designated timestamp."),(0,r.kt)("li",{parentName:"ul"},"Only one column can be elected for a given table.")),(0,r.kt)("h2",{id:"out-of-order-policy"},"Out-of-order policy"),(0,r.kt)("p",null,"As of version 6.0.0, QuestDB supports the ingestion of records that are\nout-of-order (O3) by time. QuestDB detects and adjusts data ingestion for O3\ndata automatically and no manual configuration is required."),(0,r.kt)("h2",{id:"advantages"},"Advantages"),(0,r.kt)("p",null,"Electing a designated timestamp allows you to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Partition tables by time range. For more information, see the\n",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/partitions"},"partitions reference"),"."),(0,r.kt)("li",{parentName:"ul"},"Use time series joins such as ",(0,r.kt)("inlineCode",{parentName:"li"},"ASOF JOIN"),". For more information, see the\n",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/sql/join"},"JOIN reference"),".")))}p.isMDXComponent=!0}}]);