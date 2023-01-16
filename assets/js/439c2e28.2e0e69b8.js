"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[420],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),c=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),f=c(a),m=r,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||o;return a?n.createElement(d,i(i({ref:e},p),{},{components:a})):n.createElement(d,i({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},93180:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],l={title:"Building a Data Pipeline using QuestDB and Confluent Kafka",author:"Sooter Saalu",author_title:"Guest post",author_url:"https://github.com/soot3",author_image_url:"https://avatars.githubusercontent.com/soot3",description:"How to collate data with Kafka and implement a data pipeline that collects real-time ETH market data and stores data to QuestDB through Kafka connections.",keywords:["tutorial","python","ethereum","market data","crypto","kafka confluent"],image:"/img/blog/2022-06-07/banner.png",tags:["tutorial","python","kafka","cryptocurrency","eth","data science","market data"]},u={permalink:"/blog/2022/06/07/data-pipeline-with-kafka-and-questdb",source:"@site/blog/2022-06-07-data-pipeline-with-kafka-and-questdb.md",title:"Building a Data Pipeline using QuestDB and Confluent Kafka",description:"How to collate data with Kafka and implement a data pipeline that collects real-time ETH market data and stores data to QuestDB through Kafka connections.",date:"2022-06-07T00:00:00.000Z",formattedDate:"June 7, 2022",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"python",permalink:"/blog/tags/python"},{label:"kafka",permalink:"/blog/tags/kafka"},{label:"cryptocurrency",permalink:"/blog/tags/cryptocurrency"},{label:"eth",permalink:"/blog/tags/eth"},{label:"data science",permalink:"/blog/tags/data-science"},{label:"market data",permalink:"/blog/tags/market-data"}],readingTime:9.665,truncated:!0,prevItem:{title:"Time Series Forecasting with TensorFlow and QuestDB",permalink:"/blog/2022/06/20/forecasting-with-questdb-and-tensorflow"},nextItem:{title:"QuestDB 6.4 Release Highlights",permalink:"/blog/2022/05/31/questdb-release-6-4"}},c=[],p={toc:c};function s(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This tutorial is a guest post contributed by\n",(0,o.kt)("a",{parentName:"em",href:"https://github.com/soot3"},"Sooter Saalu"),", who put together a tutorial to show\nyou how to build a data pipeline using Confluent Kafka, QuestDB, and Python. If\nyou like this content or have any feedback, feel free to reach out to the author\nor to us on ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/questdb/questdb"},"GitHub")," or on\n",(0,o.kt)("a",{parentName:"em",href:"https://"},"Slack"),".")))}s.isMDXComponent=!0}}]);