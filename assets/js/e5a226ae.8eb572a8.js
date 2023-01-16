"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[7196],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),p=s(r),d=a,g=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(g,i(i({ref:e},c),{},{components:r})):n.createElement(g,i({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=p;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},54360:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=r(46092),u=["components"],l={title:"Build a monitoring dashboard with QuestDB and Grafana",author:"Joan Augsburger",author_title:"QuestDB Team",author_url:"https://github.com/jaugsburger",author_image_url:"https://avatars.githubusercontent.com/jaugsburger",description:"Use Grafana with QuestDB to build a monitoring dashboard for visualization of time series data.",keywords:["timeseries","questdb","grafana"],tags:["tutorial","grafana"],image:"/img/blog/shared/og-grafana.png"},s={permalink:"/blog/2020/10/19/grafana-tutorial",source:"@site/blog/2020-10-19-grafana-tutorial.mdx",title:"Build a monitoring dashboard with QuestDB and Grafana",description:"Use Grafana with QuestDB to build a monitoring dashboard for visualization of time series data.",date:"2020-10-19T00:00:00.000Z",formattedDate:"October 19, 2020",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"grafana",permalink:"/blog/tags/grafana"}],readingTime:7.455,truncated:!0,prevItem:{title:"Authentication for InfluxDB line protocol",permalink:"/blog/2020/10/20/authentication-for-influx-line-protocol"},nextItem:{title:"NYC taxi meter and options pricing",permalink:"/blog/2020/10/16/taxi-drivers-are-options-traders"}},c=[],f={toc:c};function p(t){var e=t.components,r=(0,a.Z)(t,u);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{alt:"A dashboard showing several graphs with operationnal data",height:433,src:"/img/blog/2020-10-19/banner.jpg",width:650,mdxType:"Banner"},"Photo by ",(0,o.kt)("a",{href:"https://unsplash.com/photos/JKUTrJ4vK00"},"Luke Chesser")," ","via ",(0,o.kt)("a",{href:"https://unsplash.com"},"Unsplash")),(0,o.kt)("p",null,"In this tutorial, we will cover how to load demo data from ",(0,o.kt)("inlineCode",{parentName:"p"},".CSV")," files into\nQuestDB and to use this as a data source for a Grafana dashboard. The dashboard\nwill have line charts as data visualizations that make use of aggregate SQL\nfunctions and Grafana global variables for sampling data based on dashboard\nsettings."))}p.isMDXComponent=!0},86010:function(t,e,r){function n(t){var e,r,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=n(t[e]))&&(a&&(a+=" "),a+=r);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,r=0,a="";r<arguments.length;)(t=arguments[r++])&&(e=n(t))&&(a&&(a+=" "),a+=e);return a}r.d(e,{Z:function(){return a}})}}]);