"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[4197],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},973:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=["components"],s={title:"Grafana",description:"Guide for time series data visualization with QuestDB and Grafana"},l={unversionedId:"third-party-tools/grafana",id:"third-party-tools/grafana",isDocsHomePage:!1,title:"Grafana",description:"Guide for time series data visualization with QuestDB and Grafana",source:"@site/docs/third-party-tools/grafana.md",sourceDirName:"third-party-tools",slug:"/third-party-tools/grafana",permalink:"/docs/third-party-tools/grafana",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/third-party-tools/grafana.md",version:"current",frontMatter:{title:"Grafana",description:"Guide for time series data visualization with QuestDB and Grafana"},sidebar:"docs",previous:{title:"Prometheus monitoring and alerting",permalink:"/docs/third-party-tools/prometheus"},next:{title:"Ingestion from Kafka Overview",permalink:"/docs/third-party-tools/kafka/overview"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Configure database",id:"configure-database",children:[]},{value:"Add a data source",id:"add-a-data-source",children:[]},{value:"Global variables",id:"global-variables",children:[{value:"<code>$__timeFilter(timestamp)</code>",id:"__timefiltertimestamp",children:[]},{value:"<code>$__interval</code>",id:"__interval",children:[]}]},{value:"Example query",id:"example-query",children:[]},{value:"Known issues",id:"known-issues",children:[]}],p={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," is a popular observability and monitoring\napplication used to visualize data and has an extensive ecosystem of widgets and\nplugins. QuestDB supports connecting to Grafana via the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/api/postgres"},"Postgres")," endpoint. There's also a\n",(0,i.kt)("a",{parentName:"p",href:"/"},"complete tutorial")," that shows you how to use\nQuestDB with Grafana step by step."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://grafana.com/grafana/download"},"Grafana")," should be installed and\nrunning."),(0,i.kt)("li",{parentName:"ul"},"QuestDB should be installed and running via\n",(0,i.kt)("a",{parentName:"li",href:"/docs/get-started/docker"},"Docker"),", the\n",(0,i.kt)("a",{parentName:"li",href:"/docs/get-started/binaries"},"binaries")," or\n",(0,i.kt)("a",{parentName:"li",href:"/docs/get-started/homebrew"},"Homebrew")," for macOS users.")),(0,i.kt)("h2",{id:"configure-database"},"Configure database"),(0,i.kt)("p",null,"To avoid unnecessary memory usage, it is recommended to disable QuestDB's SELECT\nquery cache by setting the property ",(0,i.kt)("inlineCode",{parentName:"p"},"pg.select.cache.enabled=false")," in your\n",(0,i.kt)("inlineCode",{parentName:"p"},"server.conf"),". That's because Grafana does not use prepared statements when\nsending the queries and the query cache becomes much less efficient."),(0,i.kt)("h2",{id:"add-a-data-source"},"Add a data source"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Grafana's UI (by default available at ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000"),")"),(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Configuration")," section and click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Data sources")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Add data source")),(0,i.kt)("li",{parentName:"ol"},"Choose the ",(0,i.kt)("inlineCode",{parentName:"li"},"PostgreSQL")," plugin and configure it with the following settings:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"host: localhost:8812\ndatabase: qdb\nuser: admin\npassword: quest\nSSL mode: disable\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},'When adding a panel, use the "text edit mode" by clicking the pencil icon and\nadding a query')),(0,i.kt)("h2",{id:"global-variables"},"Global variables"),(0,i.kt)("p",null,"To simplify queries which have dynamic elements such as date range filters, the\nquery can contain global variables which are documented in the\n",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/variables/variable-types/global-variables/#global-variables"},"Grafana reference documentation"),"."),(0,i.kt)("h3",{id:"__timefiltertimestamp"},(0,i.kt)("inlineCode",{parentName:"h3"},"$__timeFilter(timestamp)")),(0,i.kt)("p",null,"This variable allows filtering results by sending a start-time and end-time to\nQuestDB. This expression evaluates to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"timestamp BETWEEN\n    '2018-02-01T00:00:00Z' AND '2018-02-28T23:59:59Z'\n")),(0,i.kt)("h3",{id:"__interval"},(0,i.kt)("inlineCode",{parentName:"h3"},"$__interval")),(0,i.kt)("p",null,"This variable calculates a dynamic interval based on the time range applied to\nthe dashboard. By using this function, the sampling interval changes\nautomatically as the user zooms in and out of the panel."),(0,i.kt)("h2",{id:"example-query"},"Example query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT\n  pickup_datetime AS time,\n  avg(trip_distance) AS distance\nFROM taxi_trips\nWHERE $__timeFilter(pickup_datetime)\nSAMPLE BY $__interval;\n")),(0,i.kt)("h2",{id:"known-issues"},"Known issues"),(0,i.kt)("p",null,"For alert queries generated by certain Grafana versions, the macro ",(0,i.kt)("inlineCode",{parentName:"p"},"$__timeFilter(timestamp)")," produces timestamps with nanosecond precision, while the expected precision is millisecond precision. As a result, the alert queries are not compatible with QuestDB and lead to an ",(0,i.kt)("inlineCode",{parentName:"p"},"Invalid date")," error. To resolve this, we recommend the following workaround:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT \n  pickup_datetime AS time, \n  avg(trip_distance) AS distance \nFROM taxi_trips \nWHERE pickup_datetime BETWEEN cast($__unixEpochFrom()*1000000L as timestamp) and cast($__unixEpochTo()*1000000L as timestamp)\n\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/grafana/grafana/issues/51611"},"Grafana issues")," for more information."))}u.isMDXComponent=!0}}]);