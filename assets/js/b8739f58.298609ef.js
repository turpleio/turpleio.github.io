"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[1017],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25111:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),s=n(46092),o=["components"],l={title:"Listen to Your CPU - Full-table Scans Are Fast",author:"Jaromir Hamala",author_title:"QuestDB Team",author_url:"https://twitter.com/jerrinot",author_image_url:"https://avatars.githubusercontent.com/jerrinot",description:"Demonstrating the raw speed of modern hardware",keywords:["mechanical sympathy","performance","full table scans","database","open source"],image:"/img/blog/2022-11-30/scan.png",tags:["performance","database","mechanical_sympathy"]},u={permalink:"/blog/2022/11/30/full-table-scan-are-fast",source:"@site/blog/2022-11-30-full-table-scan-are-fast.mdx",title:"Listen to Your CPU - Full-table Scans Are Fast",description:"Demonstrating the raw speed of modern hardware",date:"2022-11-30T00:00:00.000Z",formattedDate:"November 30, 2022",tags:[{label:"performance",permalink:"/blog/tags/performance"},{label:"database",permalink:"/blog/tags/database"},{label:"mechanical_sympathy",permalink:"/blog/tags/mechanical-sympathy"}],readingTime:5.765,truncated:!0,prevItem:{title:"Using Prometheus, Loki, and Grafana to monitor QuestDB in Kubernetes",permalink:"/blog/2022/12/13/using-prometheus-loki-grafana-monitor-questdb-kubernetes"},nextItem:{title:"QuestDB 6.6.1 - Dynamic Commits",permalink:"/blog/2022/11/25/questdb-6.6.1-dynamic-commits"}},c=[{value:"A Hacker News article: index merges and composite indexes",id:"a-hacker-news-article-index-merges-and-composite-indexes",children:[]},{value:"To index or not index, that is the question",id:"to-index-or-not-index-that-is-the-question",children:[]},{value:"Testing time",id:"testing-time",children:[]},{value:"Are indexes useless?",id:"are-indexes-useless",children:[]},{value:"Further experiments",id:"further-experiments",children:[]}],d={toc:c};function p(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{alt:"A magnifying glass placed on a piece of paper with table printed on it.",height:467,src:"/img/blog/2022-11-30/scan.png",width:650,mdxType:"Banner"}),(0,i.kt)("p",null,"One of our core engineers, ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/jerrinot"},"Jaromir Hamala"),", was\ninspired by an article comparing performance between index merging and composite\nindexes. He conducted a similar test on QuestDB's table scanning strategy. In\nthis article, Jaromir explains the benefit of table scanning and shows the\nsuperior query performance it brings."),(0,i.kt)("h2",{id:"a-hacker-news-article-index-merges-and-composite-indexes"},"A Hacker News article: index merges and composite indexes"),(0,i.kt)("p",null,"While browsing Hacker News, I stumbled upon an excellent article written by\nSimon H\xf8rup Eskildsen:\n",(0,i.kt)("a",{parentName:"p",href:"https://sirupsen.com/index-merges"},'"Index Merges vs Composite Indexes in Postgres and MySQL"'),".\nSimon compares index performance for queries using a conjunction of two\nattributes. This is a fancy way to say that an SQL query contains a predicate\nsimilar to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"WHERE attribute1 = 'foo' AND attribute2 = 'bar;\n")),(0,i.kt)("p",null,"The article does multiple things exceptionally well:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It describes different strategies a database engine can use to evaluate the\nquery: composite indexes v.s. merging results from individual indexes."),(0,i.kt)("li",{parentName:"ul"},"It shows systematic thinking about performance. It tries to estimate expected\nperformance results based on the capabilities of modern hardware in\ncombination with educated guesses about how a database likely works. I found\nthis part incredibly fascinating. Reasoning about performance from first\nprinciples is more than just cool. It helps to build a better intuition and\ndeeper understanding of our tools."),(0,i.kt)("li",{parentName:"ul"},"It shows the actual results from MySQL and PostgreSQL, discusses how they\ndiffer from the expected results, and tries to explain the reasons. Again,\nvery enlightening!")),(0,i.kt)("p",null,"While reading the article, I wondered: how would QuestDB perform in this\nscenario? My curiosity increased after reading a\n",(0,i.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=33765570"},"discussion")," on Hacker News -\nsomeone posted results from a similar query running on ClickHouse. So I thought\nthat it'd be interesting to do a similar one on QuestDB!"),(0,i.kt)("h2",{id:"to-index-or-not-index-that-is-the-question"},"To index or not index, that is the question"),(0,i.kt)("p",null,"QuestDB - as many other analytical/OLAP databases - tends to rely on table scans\nrather than index lookups. This is due to the nature of analytical queries: they\nare typically more complex than OLTP queries and often touch a lot of data."),(0,i.kt)("p",null,"Table scanning also plays nicely with modern hardware: our hardware is\nincredibly fast in everything sequential. Sequential memory access is MUCH\nfaster than random access. Sequential disk access allows deeper IO queues\nresulting in better performance than random access. Sequential access also\noffers optimization opportunities, such as using\n",(0,i.kt)("a",{parentName:"p",href:"/blog/2020/04/02/using-simd-to-aggregate-billions-of-rows-per-second/"},"SIMD instructions"),"\nto evaluate filters. Table scanning also means that there is no index to\nmaintain, and therefore the concurrency model is simpler. This allows the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.p99conf.io/session/building-efficient-multi-threaded-filters-for-faster-sql-queries/"},"utilization of multiple threads"),"\nwith very little inter-thread communication, which is costly. The simplicity\nalso translates into another advantage: a straightforward query plan can be\n",(0,i.kt)("a",{parentName:"p",href:"/blog/2022/01/12/jit-sql-compiler/"},"Just-In-Time compiled into a native code"),",\nincreasing performance further."),(0,i.kt)("h2",{id:"testing-time"},"Testing time"),(0,i.kt)("p",null,"I did what every curious software engineer would do: I started an EC2 instance,\nunpacked QuestDB, and started poking it. Specifically, I created an\n",(0,i.kt)("inlineCode",{parentName:"p"},"m6a.8xlarge")," instance with 32 vCPU and 128GB of RAM. That is not a bad machine,\nit's probably better than most development workstations. On the other hand, it's\nnot a super beefy machine for a database server. I also asked AWS to use GP3 as\nblock storage, but that was it. No further tuning; even all GP3 parameters were\nleft on defaults."),(0,i.kt)("p",null,"QuestDB installation is effortless. ",(0,i.kt)("a",{parentName:"p",href:"https://questdb.io/get-questdb/"},"Download"),"\na tarball, unzip, and start it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ wget https://github.com/questdb/questdb/releases/download/6.6.1/questdb-6.6.1-rt-linux-amd64.tar.gz\n$ tar xzvf ./questdb-6.6.1-rt-linux-amd64.tar.gz\n$ cd ./questdb-6.6.1-rt-linux-amd64/bin/\n$ ./questdb.sh start\n")),(0,i.kt)("p",null,"Then I used the builtin Web Console to create a table and populate it with data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"CREATE TABLE test_table (\n  id long,\n  text1 String,\n  text2 String,\n  int1000 long,\n  int100 long,\n  int10 long,\n  int10_2 long\n);\n\nINSERT INTO test_table\n  SELECT\n  rnd_long(),\n  rnd_str(1, 1024, 1024, 0),\n  rnd_str(1, 255, 255, 0),\n  rnd_long(0, 999, 0),\n  rnd_long(0, 99, 0),\n  rnd_long(0, 9, 0),\n  rnd_long(0, 9, 0)\n\nFROM long_sequence(10000000);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," query generates 10 million rows with random data roughly matching\nthe shape of the table and data from the original article."),(0,i.kt)("p",null,"And finally, the moment of truth: how fast will QuestDB run the aggregation with\nthe same filter? Will it be faster than PostgreSQL's composite index? Or at\nleast faster than MySQL's index merge? Will raw performance and mechanical\nsympathy outperform smart indexes? Here is the result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT count(*)\n  FROM test_table\n  WHERE int100 = 1 AND int1000 = 1;\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot showing result time of 4.95 milliseconds",src:n(81747).Z})),(0,i.kt)("p",null,"It shows the query execution time was just under 5 milliseconds! That is on par\nwith the best result in the ",(0,i.kt)("a",{parentName:"p",href:"https://sirupsen.com/index-merges"},"original blog"),",\nwhere PostgreSQL uses a composite index specialized for this shape of queries,\nand it's better than all other results in the original post! Once again, QuestDB\ndoes a full table scan. It does not use any fancy data structure to minimize the\nnumber of reads. It's just raw power and algorithms written to use the best out\nof your hardware."),(0,i.kt)("p",null,"The main advantage of this approach is clear: I did not have to prepare indexes\nupfront and specialized them for a given shape of a query. I could run a query\nfiltering on a different combination of columns and the result would be very\nsimilar. This is a huge advantage for ad-hoc queries, which are very common in\nanalytics."),(0,i.kt)("h2",{id:"are-indexes-useless"},"Are indexes useless?"),(0,i.kt)("p",null,"This is not a serious comparison, as I do not know the hardware specs used in\nthe original post. Perhaps even more importantly, MySQL and PostgreSQL are very\ndifferent beasts from time-series/analytical databases. They make different\ndesign and implementation trade-offs because they aim at different typical use\ncases. So what is the point of this article? It's simple:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"I wanted to satisfy my own curiosity \ud83d\ude04"),(0,i.kt)("li",{parentName:"ol"},"I wanted to show how amazingly fast modern hardware is when we - the\ndevelopers - are not sabotaging its inner working. Once again, The database\nscanned 10M rows in less than 5 ms, and I still find it incredible!")),(0,i.kt)("p",null,"This is not to say indexes have no place in analytical databases. They still do:\nan index with great selectivity (think of a unique index) will outperform full\ntable scans. Sparse indexes can be cheaper to maintain and help avoid scanning\nchunks of data. This can be very relevant in architectures where hot data is\nkept on fast local SSDs while cold data is kept on cheaper storages such as AWS\nS3. If an index can be used to avoid copying data from a cold storage then it's\na performance (and cost!) win, too."),(0,i.kt)("h2",{id:"further-experiments"},"Further experiments"),(0,i.kt)("p",null,"QuestDB is running a ",(0,i.kt)("a",{parentName:"p",href:"https://demo.questdb.io/"},"public demo")," where you can\nexplore various datasets. My favorite example of a raw sequential performance is\nthis super simple aggregation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT avg(trip_distance) FROM trips;\n")),(0,i.kt)("p",null,"It aggregates 1.6B rows in under 0.5s! When I saw it for the first time, I\nassumed it must have been cached. Well, it's not. It's mechanical sympathy in\npractice!"))}p.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},81747:function(e,t,n){t.Z=n.p+"assets/images/result-9b32866a64e710275ccf89246d3e8113.png"}}]);