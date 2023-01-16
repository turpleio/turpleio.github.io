"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[7229],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,g=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},52672:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=r(46092),l=["components"],s={title:"QuestDB version 6.0 alpha",author:"Brian Smith",author_title:"QuestDB Team",author_url:"https://github.com/bsmth",author_image_url:"https://avatars.githubusercontent.com/bsmth",description:"An alpha version for QuestDB version 6.0 is available now to test with highlights such as out-of-order support, improved InfluxDB Line Protocol ingestion and multiple fixes and improvements",keywords:["postgres","grafana","timeseries","database"],image:"/img/blog/2021-04-20/og.png",tags:["release","engineering","docker"]},u={permalink:"/blog/2021/04/20/questdb-release-6-0-alpha",source:"@site/blog/2021-04-20-questdb-release-6-0-alpha.md",title:"QuestDB version 6.0 alpha",description:"An alpha version for QuestDB version 6.0 is available now to test with highlights such as out-of-order support, improved InfluxDB Line Protocol ingestion and multiple fixes and improvements",date:"2021-04-20T00:00:00.000Z",formattedDate:"April 20, 2021",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"engineering",permalink:"/blog/tags/engineering"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:3.065,truncated:!0,prevItem:{title:"How we achieved write speeds of 1.4 million rows per second",permalink:"/blog/2021/05/10/questdb-release-6-0-tsbs-benchmark"},nextItem:{title:"Streaming on-chain Ethereum data to QuestDB",permalink:"/blog/2021/04/12/stream-ethereum-data"}},c=[],p={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{alt:"Announcement for QuestDB 6.0 alpha with out-of-order inserts and compatibility with the Time Series Benchmarking Suite",height:362,src:"/img/blog/2021-04-20/og.png",width:650,mdxType:"Banner"}),(0,a.kt)("p",null,"We've just published an alpha version for the upcoming 6.0 major release and it\nincludes long-awaited support for ingesting out-of-order records on-the-fly, a\ncomplete overhaul of the InfluxDB Line Protocol subsystem, and multiple fixes\nwhich provide stability improvements. Here's a roundup of changes that have just\nlanded in the latest and greatest version!"))}f.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})}}]);