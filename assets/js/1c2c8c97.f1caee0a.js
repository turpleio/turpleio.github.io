"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[9230],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(r),g=a,d=f["".concat(l,".").concat(g)]||f[g]||c[g]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},52724:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],s={title:"QuestDB 6.0.5 September release, geospatial support",author:"Brian Smith",author_title:"QuestDB Team",author_url:"https://github.com/bsmth",author_image_url:"https://avatars.githubusercontent.com/bsmth",description:"QuestDB 6.0.5 is available now and includes support for geospatial data with the introduction of geohash support for fast and efficient geodata queries and storage.",keywords:["postgres","geohash","timeseries","database"],image:"/img/blog/2021-09-13/banner.png",tags:["release","geospatial","influxdb"]},l={permalink:"/blog/2021/09/13/release-6-0-5-geospatial-data",source:"@site/blog/2021-09-13-release-6-0-5-geospatial-data.md",title:"QuestDB 6.0.5 September release, geospatial support",description:"QuestDB 6.0.5 is available now and includes support for geospatial data with the introduction of geohash support for fast and efficient geodata queries and storage.",date:"2021-09-13T00:00:00.000Z",formattedDate:"September 13, 2021",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"geospatial",permalink:"/blog/tags/geospatial"},{label:"influxdb",permalink:"/blog/tags/influxdb"}],readingTime:4.14,truncated:!0,prevItem:{title:"High frequency finance with Julia and QuestDB",permalink:"/blog/2021/09/17/high-frequency-finance-julia-lang"},nextItem:{title:"Launch a QuestDB droplet in 1-click via the DigitalOcean marketplace",permalink:"/blog/2021/08/24/digitalocean-droplet"}},u=[],p={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The latest QuestDB release introduces support for geospatial data via the\naddition of geohash types. Geohashes encode geographic areas as base-32 strings,\nand native support for this type allows for fast and efficient querying and\nstorage of geodata. Also included are helper functions for rounding timestamps,\nperformance improvements for existing functions, alongside other fixes and\nfeatures. Here's the full roundup of changes that have just landed!"))}c.isMDXComponent=!0}}]);