"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[7959],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),g=a,m=f["".concat(l,".").concat(g)]||f[g]||p[g]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2701:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=r(46092),s=["components"],l={title:"Building a garbage-free network stack for Kafka streams",author:"Vlad Ilyushchenko",author_title:"QuestDB Team",author_url:"https://github.com/bluestreak01",author_image_url:"https://avatars.githubusercontent.com/bluestreak01",description:"Our database's network stack handles multiple TCP connections on a single thread without garbage collection for reliably ingesting time series data.",keywords:["jdbc","postgres","tcp","kafka","garbage","java","timeseries","database"],image:"/img/blog/2020-12-10/banner.jpg",tags:["kafka","postgres","architecture","engineering"]},c={permalink:"/blog/2020/12/10/garbage-free-stack-for-kafka-streams",source:"@site/blog/2020-12-10-garbage-free-stack-for-kafka-streams.md",title:"Building a garbage-free network stack for Kafka streams",description:"Our database's network stack handles multiple TCP connections on a single thread without garbage collection for reliably ingesting time series data.",date:"2020-12-10T00:00:00.000Z",formattedDate:"December 10, 2020",tags:[{label:"kafka",permalink:"/blog/tags/kafka"},{label:"postgres",permalink:"/blog/tags/postgres"},{label:"architecture",permalink:"/blog/tags/architecture"},{label:"engineering",permalink:"/blog/tags/engineering"}],readingTime:11.635,truncated:!0,prevItem:{title:"SQL Extensions for Time-Series Data in QuestDB",permalink:"/blog/2021/01/11/sql-extensions-for-timeseries-data"},nextItem:{title:"What is time-series data, and why are we building a time-series database (TSDB)?",permalink:"/blog/2020/11/26/why-timeseries-data"}},u=[],p={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{alt:"Steam network of a Pennsylvania coal power plant",height:433,src:"/img/blog/2020-12-10/banner.jpg",width:650,mdxType:"Banner"}," ","Photo by",(0,o.kt)("a",{href:"https://unsplash.com/photos/a_PDPUPuNZ8"},"Martin Adams")," on"," ",(0,o.kt)("a",{href:"https://unsplash.com"},"Unsplash")," "),(0,o.kt)("p",null,"Garbage collection is a type of automatic memory management that's used in many\nmodern programming languages. The point of the garbage collector is to free up\nmemory used by objects which are no longer being used by a program. Although\nit's convenient for developers not to think about manually deallocating memory,\nit can be a poisoned chalice that comes with several hard-to-predict downsides."))}f.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);