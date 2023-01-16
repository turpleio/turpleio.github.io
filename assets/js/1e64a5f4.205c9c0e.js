"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[1405],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=l(r),f=a,m=g["".concat(u,".").concat(f)]||g[f]||p[f]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},70819:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],c={title:"High frequency finance with Julia and QuestDB",author:"Dean Markwick",author_title:"Guest post",author_url:"https://github.com/dm13450",author_image_url:"https://avatars.githubusercontent.com/dm13450",description:"Learn how to use QuestDB as a time series database for high-frequency trading, calculate the limit order book, price impact, trade sign distribution, and other concepts via the Julia programming language.",keywords:["julia","finance","timeseries","database","algotrading"],image:"/img/blog/2021-09-17/banner.png",tags:["tutorial","finance","crypto","algotrading"]},u={permalink:"/blog/2021/09/17/high-frequency-finance-julia-lang",source:"@site/blog/2021-09-17-high-frequency-finance-julia-lang.md",title:"High frequency finance with Julia and QuestDB",description:"Learn how to use QuestDB as a time series database for high-frequency trading, calculate the limit order book, price impact, trade sign distribution, and other concepts via the Julia programming language.",date:"2021-09-17T00:00:00.000Z",formattedDate:"September 17, 2021",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"finance",permalink:"/blog/tags/finance"},{label:"crypto",permalink:"/blog/tags/crypto"},{label:"algotrading",permalink:"/blog/tags/algotrading"}],readingTime:10.65,truncated:!0,prevItem:{title:"Join Hacktoberfest 2021 and contribute to QuestDB!",permalink:"/blog/2021/10/01/hacktoberfest-questdb"},nextItem:{title:"QuestDB 6.0.5 September release, geospatial support",permalink:"/blog/2021/09/13/release-6-0-5-geospatial-data"}},l=[],s={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This post was written by Dean Markwick, who has put together an excellent\nexample using QuestDB as a time series database for high-frequency trading. This\npost shows how to use QuestDB to calculate the limit order book, price impact,\ntrade sign distribution, and other concepts via the Julia programming language."))}p.isMDXComponent=!0}}]);