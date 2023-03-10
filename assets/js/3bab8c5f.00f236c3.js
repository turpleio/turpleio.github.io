"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[8003],{3905:function(e,I,t){t.d(I,{Zo:function(){return c},kt:function(){return s}});var g=t(7294);function n(e,I,t){return I in e?Object.defineProperty(e,I,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[I]=t,e}function i(e,I){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);I&&(g=g.filter((function(I){return Object.getOwnPropertyDescriptor(e,I).enumerable}))),t.push.apply(t,g)}return t}function C(e){for(var I=1;I<arguments.length;I++){var t=null!=arguments[I]?arguments[I]:{};I%2?i(Object(t),!0).forEach((function(I){n(e,I,t[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(I){Object.defineProperty(e,I,Object.getOwnPropertyDescriptor(t,I))}))}return e}function A(e,I){if(null==e)return{};var t,g,n=function(e,I){if(null==e)return{};var t,g,n={},i=Object.keys(e);for(g=0;g<i.length;g++)t=i[g],I.indexOf(t)>=0||(n[t]=e[t]);return n}(e,I);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(g=0;g<i.length;g++)t=i[g],I.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var r=g.createContext({}),a=function(e){var I=g.useContext(r),t=I;return e&&(t="function"==typeof e?e(I):C(C({},I),e)),t},c=function(e){var I=a(e.components);return g.createElement(r.Provider,{value:I},e.children)},o={inlineCode:"code",wrapper:function(e){var I=e.children;return g.createElement(g.Fragment,{},I)}},l=g.forwardRef((function(e,I){var t=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=A(e,["components","mdxType","originalType","parentName"]),l=a(t),s=n,d=l["".concat(r,".").concat(s)]||l[s]||o[s]||i;return t?g.createElement(d,C(C({ref:I},c),{},{components:t})):g.createElement(d,C({ref:I},c))}));function s(e,I){var t=arguments,n=I&&I.mdxType;if("string"==typeof e||n){var i=t.length,C=new Array(i);C[0]=l;var A={};for(var r in I)hasOwnProperty.call(I,r)&&(A[r]=I[r]);A.originalType=e,A.mdxType="string"==typeof e?e:n,C[1]=A;for(var a=2;a<i;a++)C[a]=t[a];return g.createElement.apply(null,C)}return g.createElement.apply(null,t)}l.displayName="MDXCreateElement"},9059:function(e,I,t){t.r(I),t.d(I,{frontMatter:function(){return A},metadata:function(){return r},toc:function(){return a},default:function(){return o}});var g=t(3117),n=t(102),i=(t(7294),t(3905)),C=["components"],A={title:"VACUUM TABLE",sidebar_label:"VACUUM TABLE",description:"VACUUM TABLE SQL keyword reference documentation"},r={unversionedId:"reference/sql/vacuum-table",id:"reference/sql/vacuum-table",isDocsHomePage:!1,title:"VACUUM TABLE",description:"VACUUM TABLE SQL keyword reference documentation",source:"@site/docs/reference/sql/vacuum-table.md",sourceDirName:"reference/sql",slug:"/reference/sql/vacuum-table",permalink:"/docs/reference/sql/vacuum-table",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/reference/sql/vacuum-table.md",version:"current",sidebar_label:"VACUUM TABLE",frontMatter:{title:"VACUUM TABLE",sidebar_label:"VACUUM TABLE",description:"VACUUM TABLE SQL keyword reference documentation"},sidebar:"docs",previous:{title:"UPDATE keyword",permalink:"/docs/reference/sql/update"},next:{title:"WHERE keyword",permalink:"/docs/reference/sql/where"}},a=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],c={toc:a};function o(e){var I=e.components,A=(0,n.Z)(e,C);return(0,i.kt)("wrapper",(0,g.Z)({},c,A,{components:I,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"VACUUM TABLE")," command triggers partition and column version cleanup."),(0,i.kt)("p",null,"When a table is appended in an out-of-order manner, the ",(0,i.kt)("inlineCode",{parentName:"p"},"VACUUM TABLE")," command\nwrites a new partition version to the disk. The old partition version directory\nis deleted once it is not read by ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," queries. In the event of file system\nerrors, physical deletion of old files may be interrupted and an outdated\npartition version may be left behind consuming the disk space."),(0,i.kt)("p",null,"When an ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE")," SQL statement is run, it copies column files of the selected\ntable. The old column files are automatically deleted but in certain\ncircumstances, they can be left behind. In this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"VACUUM TABLE")," can be used\nto re-trigger the deletion process of the old column files."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"VACUUM TABLE")," command starts a new scan over table partition directories\nand column files. It detects redundant, unused files consuming the disk\nspace and deletes them. ",(0,i.kt)("inlineCode",{parentName:"p"},"VACUUM TABLE")," executes asynchronously, i.e. it may keep\nscanning and deleting files after their response is returned to the SQL client."),(0,i.kt)("p",null,"This command provides a manual mechanism to reclaim the disk space. The\nimplementation scans file system to detect duplicate directories and files and\nfrequent usage of the command can be relatively expensive. Thus, ",(0,i.kt)("inlineCode",{parentName:"p"},"VACUUM TABLE"),"\nhas to be executed sparingly."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Flow chart showing Vacuum Table syntax",src:t(2337).Z})),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"VACUUM TABLE trades\n")))}o.isMDXComponent=!0},2337:function(e,I){I.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NDciIGhlaWdodD0iNTAiPgogICAgPGRlZnM+CiAgICAgICAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KICAgICAgICAgICAgQG5hbWVzcGFjZSAiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciOwogICAgICAgICAgICAgICAgLmxpbmUgICAgICAgICAgICAgICAgIHtmaWxsOiBub25lOyBzdHJva2U6ICM2MzYyNzM7fQogICAgICAgICAgICAgICAgLmJvbGQtbGluZSAgICAgICAgICAgIHtzdHJva2U6ICM2MzYyNzM7IHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgc3Ryb2tlLXdpZHRoOiAyOyB9CiAgICAgICAgICAgICAgICAudGhpbi1saW5lICAgICAgICAgICAge3N0cm9rZTogIzYzNjI3Mzsgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzfQogICAgICAgICAgICAgICAgLmZpbGxlZCAgICAgICAgICAgICAgIHtmaWxsOiAjNjM2MjczOyBzdHJva2U6IG5vbmU7fQogICAgICAgICAgICAgICAgdGV4dC50ZXJtaW5hbCAgICAgICAgIHtmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAiU2Vnb2UgVUkiLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7CiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7CiAgICAgICAgICAgICAgICBmaWxsOiAjZmZmZmZmOwogICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB0ZXh0Lm5vbnRlcm1pbmFsICAgICAge2ZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsKICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsKICAgICAgICAgICAgICAgIGZpbGw6ICNlMjg5YTQ7CiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgdGV4dC5yZWdleHAgICAgICAgICAgIHtmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAiU2Vnb2UgVUkiLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7CiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7CiAgICAgICAgICAgICAgICBmaWxsOiAjMDAxNDFGOwogICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIHJlY3QsIGNpcmNsZSwgcG9seWdvbiB7ZmlsbDogbm9uZTsgc3Ryb2tlOiBub25lO30KICAgICAgICAgICAgICAgIHJlY3QudGVybWluYWwgICAgICAgICB7ZmlsbDogbm9uZTsgc3Ryb2tlOiAjYmUyZjViO30KICAgICAgICAgICAgICAgIHJlY3Qubm9udGVybWluYWwgICAgICB7ZmlsbDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpOyBzdHJva2U6IG5vbmU7fQogICAgICAgICAgICAgICAgcmVjdC50ZXh0ICAgICAgICAgICAgIHtmaWxsOiBub25lOyBzdHJva2U6IG5vbmU7fQogICAgICAgICAgICAgICAgcG9seWdvbi5yZWdleHAgICAgICAgIHtmaWxsOiAjQzdFQ0ZGOyBzdHJva2U6ICMwMzhjYmM7fQogICAgICAgIDwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8cG9seWdvbiBwb2ludHM9IjkgMTcgMSAxMyAxIDIxIi8+CiAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iOSAxNyAxIDEzIDEgMjEiLz4KICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSIxNyAxNyA5IDEzIDkgMjEiLz4KICAgICAgICAgPHJlY3QgeD0iMzEiIHk9IjMiIHdpZHRoPSI3OCIgaGVpZ2h0PSIzMiIgcng9IjEwIi8+CiAgICAgICAgIDxyZWN0IHg9IjI5IiB5PSIxIiB3aWR0aD0iNzgiIGhlaWdodD0iMzIiIGNsYXNzPSJ0ZXJtaW5hbCIgcng9IjEwIi8+CiAgICAgICAgIDx0ZXh0IGNsYXNzPSJ0ZXJtaW5hbCIgeD0iMzkiIHk9IjIxIj5WQUNVVU08L3RleHQ+CiAgICAgICAgIDxyZWN0IHg9IjEyOSIgeT0iMyIgd2lkdGg9IjYyIiBoZWlnaHQ9IjMyIiByeD0iMTAiLz4KICAgICAgICAgPHJlY3QgeD0iMTI3IiB5PSIxIiB3aWR0aD0iNjIiIGhlaWdodD0iMzIiIGNsYXNzPSJ0ZXJtaW5hbCIgcng9IjEwIi8+CiAgICAgICAgIDx0ZXh0IGNsYXNzPSJ0ZXJtaW5hbCIgeD0iMTM3IiB5PSIyMSI+VEFCTEU8L3RleHQ+PGEgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhsaW5rOmhyZWY9IiN0YWJsZU5hbWUiIHhsaW5rOnRpdGxlPSJ0YWJsZU5hbWUiPgogICAgICAgICAgICA8cmVjdCB4PSIyMTEiIHk9IjMiIHdpZHRoPSI4OCIgaGVpZ2h0PSIzMiIvPgogICAgICAgICAgICA8cmVjdCB4PSIyMDkiIHk9IjEiIHdpZHRoPSI4OCIgaGVpZ2h0PSIzMiIgY2xhc3M9Im5vbnRlcm1pbmFsIi8+CiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPSJub250ZXJtaW5hbCIgeD0iMjE5IiB5PSIyMSI+dGFibGVOYW1lPC90ZXh0PjwvYT48cGF0aCB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ibGluZSIgZD0ibTE3IDE3IGgyIG0wIDAgaDEwIG03OCAwIGgxMCBtMCAwIGgxMCBtNjIgMCBoMTAgbTAgMCBoMTAgbTg4IDAgaDEwIG0zIDAgaC0zIi8+CiAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMzE3IDE3IDMyNSAxMyAzMjUgMjEiLz4KICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSIzMTcgMTcgMzA5IDEzIDMwOSAyMSIvPjwvc3ZnPg=="}}]);