"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[9121],{3905:function(e,I,g){g.d(I,{Zo:function(){return l},kt:function(){return m}});var t=g(7294);function n(e,I,g){return I in e?Object.defineProperty(e,I,{value:g,enumerable:!0,configurable:!0,writable:!0}):e[I]=g,e}function C(e,I){var g=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);I&&(t=t.filter((function(I){return Object.getOwnPropertyDescriptor(e,I).enumerable}))),g.push.apply(g,t)}return g}function A(e){for(var I=1;I<arguments.length;I++){var g=null!=arguments[I]?arguments[I]:{};I%2?C(Object(g),!0).forEach((function(I){n(e,I,g[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(g)):C(Object(g)).forEach((function(I){Object.defineProperty(e,I,Object.getOwnPropertyDescriptor(g,I))}))}return e}function i(e,I){if(null==e)return{};var g,t,n=function(e,I){if(null==e)return{};var g,t,n={},C=Object.keys(e);for(t=0;t<C.length;t++)g=C[t],I.indexOf(g)>=0||(n[g]=e[g]);return n}(e,I);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(e);for(t=0;t<C.length;t++)g=C[t],I.indexOf(g)>=0||Object.prototype.propertyIsEnumerable.call(e,g)&&(n[g]=e[g])}return n}var a=t.createContext({}),r=function(e){var I=t.useContext(a),g=I;return e&&(g="function"==typeof e?e(I):A(A({},I),e)),g},l=function(e){var I=r(e.components);return t.createElement(a.Provider,{value:I},e.children)},o={inlineCode:"code",wrapper:function(e){var I=e.children;return t.createElement(t.Fragment,{},I)}},c=t.forwardRef((function(e,I){var g=e.components,n=e.mdxType,C=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=r(g),m=n,d=c["".concat(a,".").concat(m)]||c[m]||o[m]||C;return g?t.createElement(d,A(A({ref:I},l),{},{components:g})):t.createElement(d,A({ref:I},l))}));function m(e,I){var g=arguments,n=I&&I.mdxType;if("string"==typeof e||n){var C=g.length,A=new Array(C);A[0]=c;var i={};for(var a in I)hasOwnProperty.call(I,a)&&(i[a]=I[a]);i.originalType=e,i.mdxType="string"==typeof e?e:n,A[1]=i;for(var r=2;r<C;r++)A[r]=g[r];return t.createElement.apply(null,A)}return t.createElement.apply(null,g)}c.displayName="MDXCreateElement"},5277:function(e,I,g){g.r(I),g.d(I,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return r},default:function(){return o}});var t=g(3117),n=g(102),C=(g(7294),g(3905)),A=["components"],i={title:"ALTER TABLE RENAME COLUMN",sidebar_label:"RENAME COLUMN",description:"RENAME COLUMN SQL keyword reference documentation."},a={unversionedId:"reference/sql/alter-table-rename-column",id:"reference/sql/alter-table-rename-column",isDocsHomePage:!1,title:"ALTER TABLE RENAME COLUMN",description:"RENAME COLUMN SQL keyword reference documentation.",source:"@site/docs/reference/sql/alter-table-rename-column.md",sourceDirName:"reference/sql",slug:"/reference/sql/alter-table-rename-column",permalink:"/docs/reference/sql/alter-table-rename-column",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/reference/sql/alter-table-rename-column.md",version:"current",sidebar_label:"RENAME COLUMN",frontMatter:{title:"ALTER TABLE RENAME COLUMN",sidebar_label:"RENAME COLUMN",description:"RENAME COLUMN SQL keyword reference documentation."},sidebar:"docs",previous:{title:"ALTER TABLE ADD COLUMN",permalink:"/docs/reference/sql/alter-table-add-column"},next:{title:"ALTER TABLE DROP COLUMN",permalink:"/docs/reference/sql/alter-table-drop-column"}},r=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],l={toc:r};function o(e){var I=e.components,i=(0,n.Z)(e,A);return(0,C.kt)("wrapper",(0,t.Z)({},l,i,{components:I,mdxType:"MDXLayout"}),(0,C.kt)("p",null,"Rename a column in an existing table."),(0,C.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,C.kt)("div",{parentName:"div",className:"admonition-heading"},(0,C.kt)("h5",{parentName:"div"},(0,C.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,C.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,C.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,C.kt)("div",{parentName:"div",className:"admonition-content"},(0,C.kt)("ul",{parentName:"div"},(0,C.kt)("li",{parentName:"ul"},"New column names may only consist of letters, numbers and underscores ",(0,C.kt)("inlineCode",{parentName:"li"},"_"))))),(0,C.kt)("h2",{id:"syntax"},"Syntax"),(0,C.kt)("p",null,(0,C.kt)("img",{alt:"Flow chart showing the syntax of the ALTER TABLE keyword",src:g(4118).Z}),"\n",(0,C.kt)("img",{alt:"Flow chart showing the syntax of the ALTER TABLE RENAME COLUMN keywords",src:g(7953).Z})),(0,C.kt)("h2",{id:"example"},"Example"),(0,C.kt)("p",null,"The following example renames an existing column called ",(0,C.kt)("inlineCode",{parentName:"p"},"sensor")," to\n",(0,C.kt)("inlineCode",{parentName:"p"},"hum_sensor_1")," from the table ",(0,C.kt)("inlineCode",{parentName:"p"},"measurements"),":"),(0,C.kt)("pre",null,(0,C.kt)("code",{parentName:"pre",className:"language-questdb-sql",metastring:'title="Renaming a column"',title:'"Renaming',a:!0,'column"':!0},"ALTER TABLE measurements RENAME COLUMN sensor TO hum_sensor_1;\n")))}o.isMDXComponent=!0},7953:function(e,I){I.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NjEiIGhlaWdodD0iODEiPgogICAgPGRlZnM+CiAgICAgICAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KICAgICAgICAgICAgQG5hbWVzcGFjZSAiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciOwogICAgICAgICAgICAgICAgLmxpbmUgICAgICAgICAgICAgICAgIHtmaWxsOiBub25lOyBzdHJva2U6ICM2MzYyNzM7fQogICAgICAgICAgICAgICAgLmJvbGQtbGluZSAgICAgICAgICAgIHtzdHJva2U6ICM2MzYyNzM7IHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgc3Ryb2tlLXdpZHRoOiAyOyB9CiAgICAgICAgICAgICAgICAudGhpbi1saW5lICAgICAgICAgICAge3N0cm9rZTogIzYzNjI3Mzsgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzfQogICAgICAgICAgICAgICAgLmZpbGxlZCAgICAgICAgICAgICAgIHtmaWxsOiAjNjM2MjczOyBzdHJva2U6IG5vbmU7fQogICAgICAgICAgICAgICAgdGV4dC50ZXJtaW5hbCAgICAgICAgIHtmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAiU2Vnb2UgVUkiLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7CiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7CiAgICAgICAgICAgICAgICBmaWxsOiAjZmZmZmZmOwogICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB0ZXh0Lm5vbnRlcm1pbmFsICAgICAge2ZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsKICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsKICAgICAgICAgICAgICAgIGZpbGw6ICNlMjg5YTQ7CiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgdGV4dC5yZWdleHAgICAgICAgICAgIHtmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAiU2Vnb2UgVUkiLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7CiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7CiAgICAgICAgICAgICAgICBmaWxsOiAjMDAxNDFGOwogICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIHJlY3QsIGNpcmNsZSwgcG9seWdvbiB7ZmlsbDogbm9uZTsgc3Ryb2tlOiBub25lO30KICAgICAgICAgICAgICAgIHJlY3QudGVybWluYWwgICAgICAgICB7ZmlsbDogbm9uZTsgc3Ryb2tlOiAjYmUyZjViO30KICAgICAgICAgICAgICAgIHJlY3Qubm9udGVybWluYWwgICAgICB7ZmlsbDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpOyBzdHJva2U6IG5vbmU7fQogICAgICAgICAgICAgICAgcmVjdC50ZXh0ICAgICAgICAgICAgIHtmaWxsOiBub25lOyBzdHJva2U6IG5vbmU7fQogICAgICAgICAgICAgICAgcG9seWdvbi5yZWdleHAgICAgICAgIHtmaWxsOiAjQzdFQ0ZGOyBzdHJva2U6ICMwMzhjYmM7fQogICAgICAgIDwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICAgPHBvbHlnb24gcG9pbnRzPSI5IDE3IDEgMTMgMSAyMSIvPgogICAgICAgICA8cG9seWdvbiBwb2ludHM9IjE3IDE3IDkgMTMgOSAyMSIvPgogICAgICAgICA8cmVjdCB4PSIzMSIgeT0iMyIgd2lkdGg9Ijc2IiBoZWlnaHQ9IjMyIiByeD0iMTAiLz4KICAgICAgICAgPHJlY3QgeD0iMjkiIHk9IjEiIHdpZHRoPSI3NiIgaGVpZ2h0PSIzMiIgY2xhc3M9InRlcm1pbmFsIiByeD0iMTAiLz4KICAgICAgICAgPHRleHQgY2xhc3M9InRlcm1pbmFsIiB4PSIzOSIgeT0iMjEiPlJFTkFNRTwvdGV4dD4KICAgICAgICAgPHJlY3QgeD0iMTI3IiB5PSIzIiB3aWR0aD0iNzgiIGhlaWdodD0iMzIiIHJ4PSIxMCIvPgogICAgICAgICA8cmVjdCB4PSIxMjUiIHk9IjEiIHdpZHRoPSI3OCIgaGVpZ2h0PSIzMiIgY2xhc3M9InRlcm1pbmFsIiByeD0iMTAiLz4KICAgICAgICAgPHRleHQgY2xhc3M9InRlcm1pbmFsIiB4PSIxMzUiIHk9IjIxIj5DT0xVTU48L3RleHQ+PGEgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhsaW5rOmhyZWY9IiNjb2x1bW5OYW1lIiB4bGluazp0aXRsZT0iY29sdW1uTmFtZSI+CiAgICAgICAgICAgIDxyZWN0IHg9IjIyNSIgeT0iMyIgd2lkdGg9IjEwMiIgaGVpZ2h0PSIzMiIvPgogICAgICAgICAgICA8cmVjdCB4PSIyMjMiIHk9IjEiIHdpZHRoPSIxMDIiIGhlaWdodD0iMzIiIGNsYXNzPSJub250ZXJtaW5hbCIvPgogICAgICAgICAgICA8dGV4dCBjbGFzcz0ibm9udGVybWluYWwiIHg9IjIzMyIgeT0iMjEiPmNvbHVtbk5hbWU8L3RleHQ+PC9hPjxyZWN0IHg9IjM0NyIgeT0iMyIgd2lkdGg9IjM4IiBoZWlnaHQ9IjMyIiByeD0iMTAiLz4KICAgICAgICAgPHJlY3QgeD0iMzQ1IiB5PSIxIiB3aWR0aD0iMzgiIGhlaWdodD0iMzIiIGNsYXNzPSJ0ZXJtaW5hbCIgcng9IjEwIi8+CiAgICAgICAgIDx0ZXh0IGNsYXNzPSJ0ZXJtaW5hbCIgeD0iMzU1IiB5PSIyMSI+VE88L3RleHQ+PGEgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhsaW5rOmhyZWY9IiNuZXdDb2x1bW5OYW1lIiB4bGluazp0aXRsZT0ibmV3Q29sdW1uTmFtZSI+CiAgICAgICAgICAgIDxyZWN0IHg9IjQwNSIgeT0iMyIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIzMiIvPgogICAgICAgICAgICA8cmVjdCB4PSI0MDMiIHk9IjEiIHdpZHRoPSIxMzAiIGhlaWdodD0iMzIiIGNsYXNzPSJub250ZXJtaW5hbCIvPgogICAgICAgICAgICA8dGV4dCBjbGFzcz0ibm9udGVybWluYWwiIHg9IjQxMyIgeT0iMjEiPm5ld0NvbHVtbk5hbWU8L3RleHQ+PC9hPjxwYXRoIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJsaW5lIiBkPSJtMTcgMTcgaDIgbTAgMCBoMTAgbTc2IDAgaDEwIG0wIDAgaDEwIG03OCAwIGgxMCBtMCAwIGgxMCBtMTAyIDAgaDEwIG0wIDAgaDEwIG0zOCAwIGgxMCBtMCAwIGgxMCBtMTMwIDAgaDEwIG0zIDAgaC0zIi8+CiAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iNTUzIDE3IDU2MSAxMyA1NjEgMjEiLz4KICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSI1NTMgMTcgNTQ1IDEzIDU0NSAyMSIvPjwvc3ZnPgoKCiAgICAgICAgIA=="}}]);