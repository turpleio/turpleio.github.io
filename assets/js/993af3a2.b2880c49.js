"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[4775],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),g=o,f=m["".concat(u,".").concat(g)]||m[g]||l[g]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58618:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=r(46092),s=["components"],u={title:"My journey making QuestDB",author:"Vlad Ilyushchenko",author_title:"QuestDB Team",author_url:"https://github.com/bluestreak01",author_image_url:"https://avatars.githubusercontent.com/bluestreak01",description:"The detailed story of how the open source time series database QuestDB came to life.",keywords:["hackernews","story","startup","founder","cto","timeseries","database","ycombinator","open source"],image:"/img/blog/2020-08-06/banner.jpg",tags:["company","entrepreneurship","engineering","hackernews","startup"]},p={permalink:"/blog/2020/08/06/my-journey-writing-questdb",source:"@site/blog/2020-08-06-my-journey-writing-questdb.md",title:"My journey making QuestDB",description:"The detailed story of how the open source time series database QuestDB came to life.",date:"2020-08-06T00:00:00.000Z",formattedDate:"August 6, 2020",tags:[{label:"company",permalink:"/blog/tags/company"},{label:"entrepreneurship",permalink:"/blog/tags/entrepreneurship"},{label:"engineering",permalink:"/blog/tags/engineering"},{label:"hackernews",permalink:"/blog/tags/hackernews"},{label:"startup",permalink:"/blog/tags/startup"}],readingTime:5.51,truncated:!0,prevItem:{title:"Re-examining our approach to memory mapping",permalink:"/blog/2020/08/19/memory-mapping-deep-dive"},nextItem:{title:"QuestDB swag for our community members!",permalink:"/blog/2020/07/24/use-questdb-for-swag"}},c=[],l={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{alt:"A path going into the morning mist",height:393,src:"/img/blog/2020-08-06/banner.jpg",width:650,mdxType:"Banner"}," ","Photo by",(0,a.kt)("a",{href:"https://unsplash.com/photos/ptSJZoEjp3M"},"Wesley Tingey"),"on",(0,a.kt)("a",{href:"https://unsplash.com"},"Unsplash")," "),(0,a.kt)("p",null,"A few weeks ago, I posted\n",(0,a.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=23975807"},"the story of how I started QuestDB on Hacker News"),".\nSeveral people found the story interesting, so I thought I would post it here\nand describe the passage from working at a large energy trading company,\ndiscovering memory-mapping approaches in Java, the beginnings of building the\nsystem as a side-project, and how we got to where we are today with companies\nrelying on production instances of our time-series database."))}m.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})}}]);