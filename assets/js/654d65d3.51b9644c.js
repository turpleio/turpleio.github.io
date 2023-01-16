"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[7081],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26454:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],s={title:"Why performance matters in time-series data",author:"Nicolas Hourcard",author_title:"Co-founder & CEO, QuestDB",author_url:"https://github.com/tris0laris",author_image_url:"https://avatars.githubusercontent.com/tris0laris",description:"Thoughts on why speed and performance are crucial to time series database ingestion and analytics.",tags:["company","startup","performance"],image:"/img/blog/placeholder.png"},c={permalink:"/blog/2020/09/24/why-performance-matters",source:"@site/blog/2020-09-24-why-performance-matters.md",title:"Why performance matters in time-series data",description:"Thoughts on why speed and performance are crucial to time series database ingestion and analytics.",date:"2020-09-24T00:00:00.000Z",formattedDate:"September 24, 2020",tags:[{label:"company",permalink:"/blog/tags/company"},{label:"startup",permalink:"/blog/tags/startup"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:4.34,truncated:!0,prevItem:{title:"NYC taxi meter and options pricing",permalink:"/blog/2020/10/16/taxi-drivers-are-options-traders"},nextItem:{title:"A Lightweight, blazing fast stack for your IoT application",permalink:"/blog/2020/08/25/fast-iot-stack-with-questdb-mqtt"}},p=[],l={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Good data from the past helps us make better decisions in the present. Most of\ntoday's data were created within the past ten years, and human data output will\nonly grow exponentially from here on. This sudden pervasiveness of data means\nthat we need new ways to store and process information focusing on efficiency\nand sustainability. This article describes why speed and performance in a\ntime-series database is the key to staying afloat in a sea of data."))}u.isMDXComponent=!0}}]);