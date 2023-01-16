"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[1005],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),b=o,d=m["".concat(u,".").concat(b)]||m[b]||p[b]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44526:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],l={title:"4Bn rows/sec query benchmark: Clickhouse vs QuestDB vs Timescale",author:"Andrey Pechkurov",author_title:"QuestDB Engineering",author_url:"https://github.com/puzpuzpuz",author_image_url:"https://avatars.githubusercontent.com/puzpuzpuz",description:"QuestDB 6.3 brings parallel filter execution optimization to our SQL engine allowing us to reduce both cold and hot query execution times quite dramatically.",keywords:["sql","multi-threading","performance","timeseries","database","engineering"],image:"/img/blog/2022-05-26/banner.png",tags:["benchmark","engineering","release","story","performance"]},u={permalink:"/blog/2022/05/26/query-benchmark-questdb-versus-clickhouse-timescale",source:"@site/blog/2022-05-26-query-benchmark-questdb-versus-clickhouse-timescale.md",title:"4Bn rows/sec query benchmark: Clickhouse vs QuestDB vs Timescale",description:"QuestDB 6.3 brings parallel filter execution optimization to our SQL engine allowing us to reduce both cold and hot query execution times quite dramatically.",date:"2022-05-26T00:00:00.000Z",formattedDate:"May 26, 2022",tags:[{label:"benchmark",permalink:"/blog/tags/benchmark"},{label:"engineering",permalink:"/blog/tags/engineering"},{label:"release",permalink:"/blog/tags/release"},{label:"story",permalink:"/blog/tags/story"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:12.395,truncated:!0,prevItem:{title:"QuestDB 6.4 Release Highlights",permalink:"/blog/2022/05/31/questdb-release-6-4"},nextItem:{title:"How to build a real-time crypto tracker with Redpanda and QuestDB",permalink:"/blog/2022/05/25/how-to-build-a-real-time-crypto-tracker-with-redpanda-and-questdb"}},c=[],s={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"QuestDB 6.2, our previous minor version release,\n",(0,a.kt)("a",{parentName:"p",href:"https://questdb.io/blog/2022/01/12/jit-sql-compiler"},"introduced")," JIT\n(Just-in-Time) compiler for SQL filters. As we mentioned last time, the next\nstep would be to parallelize the query execution when suitable to improve the\nexecution time even further and that's what we're going to discuss and benchmark\ntoday. QuestDB 6.3 enables JIT compiled filters by default and, what's even more\nnoticeable, includes parallel SQL filter execution optimization allowing us to\nreduce both cold and hot query execution times quite dramatically."))}p.isMDXComponent=!0}}]);