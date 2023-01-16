"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[9111],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),g=i,f=m["".concat(c,".").concat(g)]||m[g]||p[g]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85058:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=(n(72525),["components"]),s={title:"Importing 300k rows/sec with io_uring",author:"Andrey Pechkurov",author_title:"QuestDB Engineering",author_url:"https://github.com/puzpuzpuz",author_image_url:"https://avatars.githubusercontent.com/puzpuzpuz",description:"QuestDB 6.5 introduces a new `COPY` commands allowing importing large CSV files. This article reveals the story behind it and highlights the exciting benchmark results using this new SQL command.",keywords:["io_uring","benchmark","questdb","time series"],tags:["benchmark","engineering","release","performance","clickhouse"],image:"/img/blog/2022-09-12/cover.png"},c={permalink:"/blog/2022/09/12/importing-300k-rows-with-io-uring",source:"@site/blog/2022-09-12-importing-300k-rows-with-io-uring.md",title:"Importing 300k rows/sec with io_uring",description:"QuestDB 6.5 introduces a new `COPY` commands allowing importing large CSV files. This article reveals the story behind it and highlights the exciting benchmark results using this new SQL command.",date:"2022-09-12T00:00:00.000Z",formattedDate:"September 12, 2022",tags:[{label:"benchmark",permalink:"/blog/tags/benchmark"},{label:"engineering",permalink:"/blog/tags/engineering"},{label:"release",permalink:"/blog/tags/release"},{label:"performance",permalink:"/blog/tags/performance"},{label:"clickhouse",permalink:"/blog/tags/clickhouse"}],readingTime:12.745,truncated:!0,prevItem:{title:"Join Hacktoberfest 2022 and contribute to QuestDB!",permalink:"/blog/2022/09/30/hacktoberfest-questdb"},nextItem:{title:"Using BIRCH for anomaly detection with QuestDB",permalink:"/blog/2022/08/22/using-birch-anomaly-detection-questdb"}},u=[],l={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this blog post, QuestDB\u2019s very own\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/puzpuzpuz"},"Andrei Pechkurov")," presents how to ingest large\nCSV files a lot more efficiently using the SQL\n",(0,o.kt)("a",{parentName:"p",href:"https://questdb.io/docs/reference/sql/copy"},(0,o.kt)("inlineCode",{parentName:"a"},"COPY"))," statement, and takes us\nthrough the journey of benchmarking. Andrei also shares insights about how the\nnew improvement is made possible by\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"io_uring")," and compares QuestDB's import\nversus several well-known OLAP and time-series databases in Clickhouse's\nClickBench benchmark."))}p.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);