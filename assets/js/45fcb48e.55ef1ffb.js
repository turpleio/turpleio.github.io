"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[7866],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},27511:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=r(46092),c=["components"],s={title:"NYC taxi meter and options pricing",author:"Tancrede Collard",author_title:"QuestDB Team",author_url:"https://github.com/TheTanc",author_image_url:"https://avatars.githubusercontent.com/TheTanc",description:"An experiment analyzing the NYC taxi dataset through the eyes of an options trader.",image:"/img/blog/2020-10-16/banner.jpg",tags:["demo","story","analytics"]},l={permalink:"/blog/2020/10/16/taxi-drivers-are-options-traders",source:"@site/blog/2020-10-16-taxi-drivers-are-options-traders.md",title:"NYC taxi meter and options pricing",description:"An experiment analyzing the NYC taxi dataset through the eyes of an options trader.",date:"2020-10-16T00:00:00.000Z",formattedDate:"October 16, 2020",tags:[{label:"demo",permalink:"/blog/tags/demo"},{label:"story",permalink:"/blog/tags/story"},{label:"analytics",permalink:"/blog/tags/analytics"}],readingTime:13.415,truncated:!0,prevItem:{title:"Build a monitoring dashboard with QuestDB and Grafana",permalink:"/blog/2020/10/19/grafana-tutorial"},nextItem:{title:"Why performance matters in time-series data",permalink:"/blog/2020/09/24/why-performance-matters"}},p=[],u={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{alt:"Taxis in New York City stuck in traffic",height:600,src:"/img/blog/2020-10-16/banner.jpg",width:400,mdxType:"Banner"},"Photo by ",(0,o.kt)("a",{href:"https://unsplash.com/photos/K9cc-19hBKY"},"Kevin Lee")," on"," ",(0,o.kt)("a",{href:"https://unsplash.com"},"Unsplash")),(0,o.kt)("p",null,"Every cab I have ever ridden has been complaining about how hard it is to make\nends meet as a driver. Using a dataset of over 1.6 billion taxi rides, 700\nmillion FHV rides (Uber, Lyft, etc.), and 10 years of weather and gas prices\ndata, I examine whether the antiquated meter system impacts NYC cabbies'\nlivelihood, rather than competition from the likes of Uber."))}f.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);