"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[5683],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),d=s(a),u=i,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:i,o[1]=m;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6765:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),o=["components"],m={title:"ILP TCP Receiver",sidebar_label:"TCP Receiver",description:"InfluxDB line protocol TCP receiver reference documentation."},l={unversionedId:"reference/api/ilp/tcp-receiver",id:"reference/api/ilp/tcp-receiver",isDocsHomePage:!1,title:"ILP TCP Receiver",description:"InfluxDB line protocol TCP receiver reference documentation.",source:"@site/docs/reference/api/ilp/tcp-receiver.md",sourceDirName:"reference/api/ilp",slug:"/reference/api/ilp/tcp-receiver",permalink:"/docs/reference/api/ilp/tcp-receiver",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/reference/api/ilp/tcp-receiver.md",version:"current",sidebar_label:"TCP Receiver",frontMatter:{title:"ILP TCP Receiver",sidebar_label:"TCP Receiver",description:"InfluxDB line protocol TCP receiver reference documentation."},sidebar:"docs",previous:{title:"ILP Columnset Value Types",permalink:"/docs/reference/api/ilp/columnset-types"},next:{title:"ILP UDP Receiver",permalink:"/docs/reference/api/ilp/udp-receiver"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Insert data",id:"insert-data",children:[]},{value:"Error handling",id:"error-handling",children:[]},{value:"Commit strategy",id:"commit-strategy",children:[{value:"Row-based commit",id:"row-based-commit",children:[]},{value:"Idle table timeout",id:"idle-table-timeout",children:[]},{value:"Interval-based commit",id:"interval-based-commit",children:[]}]},{value:"Capacity planning",id:"capacity-planning",children:[]},{value:"Configuration reference",id:"configuration-reference",children:[]}],p={toc:s};function c(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The TCP receiver is a high-throughput ingestion-only API for QuestDB. Here are\nsome key facts about the service:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ingestion only, there is no query capability"),(0,r.kt)("li",{parentName:"ul"},"accepts plain text input in a form on InfluxDB Line Protocol"),(0,r.kt)("li",{parentName:"ul"},"implicit transactions, batching"),(0,r.kt)("li",{parentName:"ul"},"supports automatic table and column creation"),(0,r.kt)("li",{parentName:"ul"},"multi-threaded, non-blocking"),(0,r.kt)("li",{parentName:"ul"},"supports authentication"),(0,r.kt)("li",{parentName:"ul"},"encryption requires an optional external reverse-proxy")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"By default, QuestDB listens over TCP on ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0:9009"),". The receiver consists of\ntwo thread pools, which is an important design feature to be aware of to\nconfigure the receiver for maximum performance. The ",(0,r.kt)("inlineCode",{parentName:"p"},"io worker")," threads are\nresponsible for parsing text input. The ",(0,r.kt)("inlineCode",{parentName:"p"},"writer")," threads are responsible for\npersisting data in tables. We will talk more about these in\n",(0,r.kt)("a",{parentName:"p",href:"#capacity-planning"},"capacity planning")," section."),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"Although the original protocol does not support it, we have added authentication\nover TCP. This works by using an\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Elliptic-curve_cryptography"},"elliptic curve P-256"),"\nJSON Web Token (JWT) to sign a server challenge. Details of authentication over\nILP can be found in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/api/ilp/authenticate/"},"authentication documentation"),"."),(0,r.kt)("h2",{id:"insert-data"},"Insert data"),(0,r.kt)("p",null,"Follow this link for\n",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/insert-data#influxdb-line-protocol"},"examples of sending data using ILP over TCP"),"."),(0,r.kt)("h2",{id:"error-handling"},"Error handling"),(0,r.kt)("p",null,"It is recommended that sending applications reuse TCP connections. If QuestDB\nreceives an invalid message, it will discard invalid lines, produce an error\nmessage in the logs and forcibly ",(0,r.kt)("em",{parentName:"p"},"disconnect")," the sender to prevent further data\nloss."),(0,r.kt)("p",null,"Data may be discarded because of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"missing new line characters at the end of messages"),(0,r.kt)("li",{parentName:"ul"},"an invalid data format such as unescaped special characters"),(0,r.kt)("li",{parentName:"ul"},"invalid column / table name characters"),(0,r.kt)("li",{parentName:"ul"},"schema mismatch with existing tables"),(0,r.kt)("li",{parentName:"ul"},"message size overflows on the input buffer"),(0,r.kt)("li",{parentName:"ul"},"system errors such as no space left on the disk")),(0,r.kt)("p",null,"Detecting malformed input can be achieved through QuestDB logs by searching for\n",(0,r.kt)("inlineCode",{parentName:"p"},"LineTcpMeasurementScheduler")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LineTcpConnectionContext"),", for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"2022-02-03T11:01:51.007235Z I i.q.c.l.t.LineTcpMeasurementScheduler could not create table [tableName=trades, ex=`column name contains invalid characters [colName=trade_%]`, errno=0]\n")),(0,r.kt)("p",null,"The following input is tolerated by QuestDB:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a column is specified twice or more on the same line, QuestDB will pick the\nfirst occurrence and ignore the rest"),(0,r.kt)("li",{parentName:"ul"},"missing columns, their value will be defaulted to ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"0.0"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"\ndepending on the type of the column"),(0,r.kt)("li",{parentName:"ul"},"missing designated timestamp, the current server time will be used to generate\nthe timestamp"),(0,r.kt)("li",{parentName:"ul"},"the timestamp is specified as a column instead of appending it to the end of\nthe line"),(0,r.kt)("li",{parentName:"ul"},"timestamp appears as a column and is also present at the end of the line, the\nvalue sent as a field will be used")),(0,r.kt)("h2",{id:"commit-strategy"},"Commit strategy"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Deprecated content")),(0,r.kt)("p",{parentName:"div"},"This section applies to QuestDB 6.5.5 and earlier versions. From\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/questdb/questdb/releases/tag/6.6"},"QuestDB 6.6")," onwards, the\ndatabase adjusts relevant settings automatically and provides maximum ingestion\nspeed."))),(0,r.kt)("p",null,"ILP transactions are implicit; the protocol is built to stream data at a high\nrate of speed and to support batching. There are three ways data is committed\nand becomes visible or partially visible. The commit method is chosen based on\nwhichever occurs first."),(0,r.kt)("h3",{id:"row-based-commit"},"Row-based commit"),(0,r.kt)("p",null,"Each table has a max uncommitted rows metadata property. The ILP server will\nissue a commit when the number of uncommitted rows reaches this value. The table\ncommit implementation retains data under max uncommitted rows or newer than the\ncommit lag (whichever is smallest) as uncommitted data. Committed data is\nvisible to table readers."),(0,r.kt)("p",null,"This parameter is set using in the following server configuration property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Commit when this number of uncommitted records is reached"',title:'"Commit',when:!0,this:!0,number:!0,of:!0,uncommitted:!0,records:!0,is:!0,'reached"':!0},"cairo.max.uncommitted.rows=1000\n")),(0,r.kt)("h3",{id:"idle-table-timeout"},"Idle table timeout"),(0,r.kt)("p",null,"When there is no data ingested in the table after a set period, the ingested\nuncommitted data is fully committed, and table data becomes fully visible. The\ntimeout value is server-global and can be set via the following server\nconfiguration property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Minimum amount of idle time (millis) before table writer is released"',title:'"Minimum',amount:!0,of:!0,idle:!0,time:!0,"(millis)":!0,before:!0,table:!0,writer:!0,is:!0,'released"':!0},"line.tcp.min.idle.ms.before.writer.release=500\n")),(0,r.kt)("p",null,"The following server configuration property controls the interval to run idle\ntable checks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Setting maintenance interval (millis)"',title:'"Setting',maintenance:!0,interval:!0,'(millis)"':!0},"line.tcp.maintenance.job.interval=1000\n")),(0,r.kt)("h3",{id:"interval-based-commit"},"Interval-based commit"),(0,r.kt)("p",null,"A table's ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/out-of-order-commit-lag"},"commit lag")," metadata property\ndetermines how much uncommitted data will need to remain uncommitted for\nperformance reasons. This lag value is measured in time units from the table's\ndata. Data older than the lag value will be committed and become visible. ILP\nderives the commit interval as a function of the commit lag value for each\ntable. The difference is that the commit interval is a wall clock."),(0,r.kt)("p",null,"The commit interval is calculated for each table as a fraction of the commit lag"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"I"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"v"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"L"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mo",{parentName:"mrow"},"\u2217"),(0,r.kt)("mi",{parentName:"mrow"},"f"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"commitInterval = commitLag * fraction")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8777699999999999em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))),(0,r.kt)("p",null,"This fraction is ",(0,r.kt)("inlineCode",{parentName:"p"},"0.5")," by default so if the table has a commit lag of ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," minute\nthe commit interval will be ",(0,r.kt)("inlineCode",{parentName:"p"},"30")," seconds. The fraction used to derive the commit\ninterval can be set by the below configuration parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Setting commit interval fraction"',title:'"Setting',commit:!0,interval:!0,'fraction"':!0},"line.tcp.commit.interval.fraction=0.2\n")),(0,r.kt)("p",null,"If the result of commit interval is ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", the default commit interval of ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"\nseconds will be used. This can be changed in the configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Setting the default commit interval in milliseconds"',title:'"Setting',the:!0,default:!0,commit:!0,interval:!0,in:!0,'milliseconds"':!0},"line.tcp.commit.interval.default=5000\n")),(0,r.kt)("p",null,"To ease understanding of how time interval interacts with commit lag, let's look\nat how real-time data stream will become visible. The wall clock is roughly\naligned with time in the data stream in real-time data. Let's assume that table\nhas a commit lag value of 60 seconds and a commit interval of 20 seconds. After\nthe first 60 seconds of ingestion, ILP will attempt to commit 3 times. After\neach attempt, there will be no data visible to the application. This is because\nall the data will fall within the lag interval."),(0,r.kt)("p",null,"On the 4th commit, which would occur, 80 seconds after the data stream begins,\nthe application will see the first 20 seconds of the data, with the remaining 60\nseconds uncommitted. Each subsequent commit will reveal more data in 20-second\nincrements. It should be noted that both commit lag and commit interval should\nbe carefully chosen with both data visibility and ingestion performance in mind."),(0,r.kt)("h2",{id:"capacity-planning"},"Capacity planning"),(0,r.kt)("p",null,"TCP receiver makes use of 3 logical thread pools:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"I/O worker pool - ",(0,r.kt)("inlineCode",{parentName:"li"},"line.tcp.io.worker.count"),", threads responsible for handling\nincoming TCP connections and parsing received ILP messages"),(0,r.kt)("li",{parentName:"ul"},"writer pool - ",(0,r.kt)("inlineCode",{parentName:"li"},"line.tcp.writer.worker.count"),", threads responsible for table\nwrites"),(0,r.kt)("li",{parentName:"ul"},"shared pool - ",(0,r.kt)("inlineCode",{parentName:"li"},"shared.worker.count"),", threads responsible for handling O3 data")),(0,r.kt)("p",null,"Depending on the number of concurrent TCP connections ",(0,r.kt)("inlineCode",{parentName:"p"},"io worker pool")," size\nmight need to be adjusted. The ideal ratio is ",(0,r.kt)("inlineCode",{parentName:"p"},"1:1")," - a thread per connection.\nIn less busy environments it is possible for single ",(0,r.kt)("inlineCode",{parentName:"p"},"io worker")," thread to handle\nmultiple connections simultaneously. We recommend starting with conservative\nration, measure and increase ration up to ",(0,r.kt)("inlineCode",{parentName:"p"},"1:1"),". More threads than connections\nwill be wasting server CPU."),(0,r.kt)("p",null,"Another consideration is the number of tables updates concurrently.\n",(0,r.kt)("inlineCode",{parentName:"p"},"writer pool")," should be tuned to increase concurrency. ",(0,r.kt)("inlineCode",{parentName:"p"},"writer")," threads can also\nhandle multiple tables concurrently. ",(0,r.kt)("inlineCode",{parentName:"p"},"1:1")," ratio is the maximum required ratio\nbetween ",(0,r.kt)("inlineCode",{parentName:"p"},"writer")," threads and tables. If ",(0,r.kt)("inlineCode",{parentName:"p"},"1:1")," ratio is not an option, avoid\nwriting to all tables from each connection. Instead, group connections and\ntables. For example, if there are 10 tables, 8 TCP connections and ",(0,r.kt)("inlineCode",{parentName:"p"},"writer pool"),"\nsize is set to 2, 4 TCP connections may be used to write into tables 1-5, while\n4 connections may write into tables 6-10."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Sending updates for multiple tables from a single TCP connection might be\ninefficient. Consider using multiple connections to improve performance. If a\nsingle connection is unavoidable, keep ",(0,r.kt)("inlineCode",{parentName:"p"},"writer pool")," size set to 1 for optimal\nCPU resource utilization."))),(0,r.kt)("p",null,"When ingesting data out of order (O3) ",(0,r.kt)("inlineCode",{parentName:"p"},"shared pool")," accelerates O3 tasks. It is\nalso responsible for SQL execution. ",(0,r.kt)("inlineCode",{parentName:"p"},"shared pool")," size should be set to use the\nremaining available CPU cores."),(0,r.kt)("h2",{id:"configuration-reference"},"Configuration reference"),(0,r.kt)("p",null,"The TCP receiver configuration can be completely customized using\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/configuration#influxdb-line-protocol"},"configuration keys"),". You\ncan use this to configure the thread pools, buffer and queue sizes, receiver IP\naddress and port, load balancing, etc."))}c.isMDXComponent=!0}}]);