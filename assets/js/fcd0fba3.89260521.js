"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[4800],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52133:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=n(46092),s=n(72525),l=["components"],u={title:"QuestDB at Devoxx Belgium 2022",author:"Amy Wang",author_title:"QuestDB team",author_url:"https://github.com/amyshwang",author_image_url:"https://avatars.githubusercontent.com/u/107401731?v=4",description:"An overview of QuestDB's participation at Devoxx Belgium this year.",keywords:["devoxx","event","java","questdb","timeseries"],image:"/img/blog/2022-11-08/devoxx.png",tags:["devoxx","questdb","timeseries","event","java"]},c={permalink:"/blog/2022/11/08/questdb-devoxx-belgium-2022",source:"@site/blog/2022-11-8-questdb-devoxx-belgium-2022.md",title:"QuestDB at Devoxx Belgium 2022",description:"An overview of QuestDB's participation at Devoxx Belgium this year.",date:"2022-11-08T00:00:00.000Z",formattedDate:"November 8, 2022",tags:[{label:"devoxx",permalink:"/blog/tags/devoxx"},{label:"questdb",permalink:"/blog/tags/questdb"},{label:"timeseries",permalink:"/blog/tags/timeseries"},{label:"event",permalink:"/blog/tags/event"},{label:"java",permalink:"/blog/tags/java"}],readingTime:2.465,truncated:!0,prevItem:{title:"QuestDB 6.5.5 Release",permalink:"/blog/2022/11/14/questdb-release-6.5.5"},nextItem:{title:"Data Lifecycle with QuestDB",permalink:"/blog/2022/11/02/data-lifecycle-questdb"}},p=[{value:"About Devoxx",id:"about-devoxx",children:[]},{value:"QuestDB at Devoxx",id:"questdb-at-devoxx",children:[]},{value:"Vlad&#39;s talk",id:"vlads-talk",children:[]}],d={toc:p};function m(e){var t=e.components,u=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As a member of the Java community, QuestDB sponsored this year's Devoxx Belgium\nas a Silver partner. Our CTO, Vlad, delivered a talk and we spoke to many\nattendees!"),(0,a.kt)(i.Z,{alt:"Photo ",height:467,src:"/img/blog/2022-11-08/devoxx.png",width:650,mdxType:"Banner"}),(0,a.kt)("h2",{id:"about-devoxx"},"About Devoxx"),(0,a.kt)("p",null,"Devoxx is a series of tech events organized by local community groups.\xa0Devoxx\nBelgium is one of the Devoxx events where community members explore the latest\ntechnology advancements with some of the most inspiring speakers in the tech\nsector. Diverse, local, and global talent introduce the newest and most vital\ncontent from the developer community. Devoxx has a strong Java community\npresence, with sessions covering cloud, big data, security, architecture,\nartificial intelligence, machine learning, robotics, programming languages,\nmethodologies, and developer culture. This year, the event took place in\nAntwerp, 10-14 October 2022."),(0,a.kt)("h2",{id:"questdb-at-devoxx"},"QuestDB at Devoxx"),(0,a.kt)("p",null,"As a member of the Java community, QuestDB sponsored this year's Devoxx Belgium\nas a Silver partner, together with open-source databases such as Neo4j, Redis,\nMongoDB, and many other tech companies."),(0,a.kt)(s.Z,{alt:"Photo showing the QeusteDB booth is set to go",title:"Getting ready for Devoxx: The calm before the storm",height:360,src:"/img/blog/2022-11-08/booth.png",width:650,mdxType:"Screenshot"}),(0,a.kt)("p",null,"We wanted to make the most of meeting the community, and we thought nearly a\nfifth of our company should be enough, but the attendees were eager to learn\nmore about QuestDB and we wished we had more people!"),(0,a.kt)("p",null,"Our ability to ingest over 1.5 million records per second caught a lot of\nattention and people were interested to learn the fact that we are a fully open\nsource, Apache 2.0 licensed project: participants appreciated the opportunity to\nsee the source code and use it in any way they see fit. They were also excited\nabout our managed cloud offering. All in all, we spoke to over 100 attendees\nfrom every type of company and use case: public sector organizations, financial\nindustry, industrial IoT companies, fleet tracking, energy providers, telcos,\nand of course some geeks thinking of using QuestDB for their personal projects."),(0,a.kt)("p",null,"In addition, attendees could get their hands dirty and run interactive queries\non our demo datasets, so techies experienced firsthand the flexibility and\nperformance of QuestDB. For us, it was essential to learn about different\ncommunity use cases, understand users' pain points, and investigate ways to make\nQuestDB even more relevant for users."),(0,a.kt)("h2",{id:"vlads-talk"},"Vlad's talk"),(0,a.kt)("p",null,'Our CTO, Vlad, delivered a talk entitled "Database Hacking 101: Building fast\nbulk import in Java + C". The talk is part of the Server Side Java track, which\ncovers presentations about server-side frameworks and libraries.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Photo showing Vlad taking to the audience",src:n(65921).Z})),(0,a.kt)("p",null,"Vlad showcased how the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/importing-data/"},"CSV import")," speed is\nimproved thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Io_uring"},(0,a.kt)("inlineCode",{parentName:"a"},"io_uring")),"."),(0,a.kt)("p",null,"You can catch up on the talk here:"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/qiAHP9YSUog",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("p",null,"Want to know more about QuestDB? Join our community on\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/questdb/questdb"},"GitHub")," and reach out to us on\n",(0,a.kt)("a",{parentName:"p",href:"https://slack.questdb.io/"},"Slack"),"!"))}m.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})},65921:function(e,t,n){t.Z=n.p+"assets/images/talk-f68abc1b63fd51c2bb267336211f050c.png"}}]);