"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[7759],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,b=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return r?a.createElement(b,i(i({ref:t},p),{},{components:r})):a.createElement(b,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31391:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var a=r(83117),n=r(80102),o=(r(67294),r(3905)),i=["components"],c={title:"How to build a real-time crypto tracker with Redpanda and QuestDB",permalink:"https://redpanda.com/blog/real-time-crypto-tracker-questdb-redpanda/",image:"/img/blog/2022-05-25/banner.png",tags:["tutorial","kafka","data science","redpanda","cryptocurrency","market data"],author:"Yitaek Hwang",author_url:"https://github.com/yitaek",author_image_url:"https://avatars.githubusercontent.com/yitaek"},l={permalink:"/blog/2022/05/25/how-to-build-a-real-time-crypto-tracker-with-redpanda-and-questdb",source:"@site/blog/2022-05-25-how-to-build-a-real-time-crypto-tracker-with-redpanda-and-questdb.md",title:"How to build a real-time crypto tracker with Redpanda and QuestDB",description:"Analyze cryptocurrency price trends in real-time with Redpanda and store for further investigation in QuestDB. Read more",date:"2022-05-25T00:00:00.000Z",formattedDate:"May 25, 2022",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"kafka",permalink:"/blog/tags/kafka"},{label:"data science",permalink:"/blog/tags/data-science"},{label:"redpanda",permalink:"/blog/tags/redpanda"},{label:"cryptocurrency",permalink:"/blog/tags/cryptocurrency"},{label:"market data",permalink:"/blog/tags/market-data"}],readingTime:.085,truncated:!1,prevItem:{title:"4Bn rows/sec query benchmark: Clickhouse vs QuestDB vs Timescale",permalink:"/blog/2022/05/26/query-benchmark-questdb-versus-clickhouse-timescale"},nextItem:{title:"The Landscape of Timeseries Databases",permalink:"/blog/2022/05/09/the-landscape-of-timeseries-databases"}},u=[],p={toc:u};function s(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Analyze cryptocurrency price trends in real-time with Redpanda and store for further investigation in QuestDB. ",(0,o.kt)("a",{parentName:"p",href:"https://redpanda.com/blog/real-time-crypto-tracker-questdb-redpanda/"},"Read more")))}s.isMDXComponent=!0}}]);