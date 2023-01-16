"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[4475],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,b=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13824:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=(r(72525),r(46092)),s=["components"],u={title:"Using Prometheus, Loki, and Grafana to monitor QuestDB in Kubernetes",author:"Steve Sklar",author_title:"QuestDB Team",author_url:"https://github.com/sklarsa",author_image_url:"https://avatars.githubusercontent.com/sklarsa",description:"How to monitor a QuestDB instance using Loki and Prometheus",keywords:["kubernetes","database","open source","tutorial","monitoring","observability","grafana","loki","prometheus"],image:"/img/blog/2022-12-13/banner.png",tags:["kubernetes","database","monitoring","tutorial","observability","grafana","loki","prometheus"]},l={permalink:"/blog/2022/12/13/using-prometheus-loki-grafana-monitor-questdb-kubernetes",source:"@site/blog/2022-12-13-using-prometheus-loki-grafana-monitor-questdb-kubernetes.mdx",title:"Using Prometheus, Loki, and Grafana to monitor QuestDB in Kubernetes",description:"How to monitor a QuestDB instance using Loki and Prometheus",date:"2022-12-13T00:00:00.000Z",formattedDate:"December 13, 2022",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"database",permalink:"/blog/tags/database"},{label:"monitoring",permalink:"/blog/tags/monitoring"},{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"observability",permalink:"/blog/tags/observability"},{label:"grafana",permalink:"/blog/tags/grafana"},{label:"loki",permalink:"/blog/tags/loki"},{label:"prometheus",permalink:"/blog/tags/prometheus"}],readingTime:9.495,truncated:!0,prevItem:{title:"Merry Questmas! Here are your gifts for 2023...",permalink:"/blog/2022/12/19/merry-questmas-gifts-2023"},nextItem:{title:"Listen to Your CPU - Full-table Scans Are Fast",permalink:"/blog/2022/11/30/full-table-scan-are-fast"}},c=[],p={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{alt:"A High-level diagram of the components used to monitor QuestDB.",height:467,src:"/img/blog/2022-12-13/banner.png",width:650,mdxType:"Banner"},"Photo by ",(0,a.kt)("a",{href:"https://unsplash.com/@chrisliverani"},"Chris Liverani")," via"," ",(0,a.kt)("a",{href:"https://unsplash.com"},"Unsplash")),(0,a.kt)("p",null,"One of our Cloud engineers, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sklarsa"},"Steve Sklar"),", shares\nwith us how to use some of the most popular tools in the Kubernetes ecosystem to\nbuild monitoring infrastructure for your QuestDB instances."))}m.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})}}]);