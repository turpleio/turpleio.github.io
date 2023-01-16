"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[9905],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,f=m["".concat(u,".").concat(b)]||m[b]||c[b]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54803:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=(n(72525),["components"]),l={title:"QuestDB 6.5.4 Release - Hacktoberfest",author:"Pei-Shan Wu",author_title:"QuestDB Team",author_url:"https://github.com/pswu11",author_image_url:"https://avatars.githubusercontent.com/pswu11",description:"QuestDB 6.5.4 release notes",keywords:["questdb","release","database","hacktoberfest","opensource"],tags:["release","product","hacktoberfest","event","community"],image:"/img/blog/2022-10-25/banner.png",permalink:"https://github.com/questdb/questdb/releases/tag/6.5.4"},u={permalink:"/blog/2022/10/25/questdb-release-6.5.4",source:"@site/blog/2022-10-25-questdb-release-6.5.4.mdx",title:"QuestDB 6.5.4 Release - Hacktoberfest",description:"QuestDB 6.5.4 release notes",date:"2022-10-25T00:00:00.000Z",formattedDate:"October 25, 2022",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"product",permalink:"/blog/tags/product"},{label:"hacktoberfest",permalink:"/blog/tags/hacktoberfest"},{label:"event",permalink:"/blog/tags/event"},{label:"community",permalink:"/blog/tags/community"}],readingTime:.635,truncated:!0,prevItem:{title:"Data Lifecycle with QuestDB",permalink:"/blog/2022/11/02/data-lifecycle-questdb"},nextItem:{title:"QuestDB at Big Data LDN 2022",permalink:"/blog/2022/10/20/questdb-big-data-ldn"}},p=[],s={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Thanks to our amazing Hacktoberfest contributors, this release includes new SQL\nfeatures with a focus on string and math functions, as well as performance and\nstability improvements brought by our core engineers."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/questdb/questdb/releases/tag/6.5.4"},"Version 6.5.4")," release\nhighlights:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add SQL string functions: ",(0,i.kt)("inlineCode",{parentName:"li"},"lower()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"upper()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"start_with()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"lpad()"),",\n",(0,i.kt)("inlineCode",{parentName:"li"},"rpad()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"split_part()")),(0,i.kt)("li",{parentName:"ul"},"Add SQL numeric functions: ",(0,i.kt)("inlineCode",{parentName:"li"},"log10()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ln()")),(0,i.kt)("li",{parentName:"ul"},"Support ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE TABLE LIKE")," syntax to reuse schema of an existing table"),(0,i.kt)("li",{parentName:"ul"},"Add active SQL highlight for web console"),(0,i.kt)("li",{parentName:"ul"},"Support using ",(0,i.kt)("inlineCode",{parentName:"li"},"row_number()")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"ORDER BY")),(0,i.kt)("li",{parentName:"ul"},"Allow ",(0,i.kt)("inlineCode",{parentName:"li"},"ALTER DROP")," on the latest active partition"),(0,i.kt)("li",{parentName:"ul"},"Improve performance for ILP and ",(0,i.kt)("inlineCode",{parentName:"li"},"GROUP BY")," aggregations")),(0,i.kt)("p",null,"Special thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ArjunSharda"},"@ArjunSharda"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TheZal"},"@TheZal"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Ln11211"},"@Ln11211"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ShubhamPalriwala"},"@ShubhamPalriwala"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/blackstar-baba"},"@blackstar-baba"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/akki1306"},"@akki1306"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DarthBenro008"},"@DarthBenro008"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bsnxsourav"},"@bsnxsourav"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sklarsa"},"@sklarsa"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Twilight-Shuxin"},"@Twilight-Shuxin"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eigengravy"},"@eigengravy")," for code contributions!"),(0,i.kt)("p",null,"Read the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/questdb/questdb/releases/tag/6.5.4"},"full release notes"),"."))}c.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);