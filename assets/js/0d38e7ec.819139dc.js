"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[763],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43668:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=n(46092),l=n(72525),s=["components"],u={title:"QuestDB 6.2 January release, SQL JIT compiler",author:"Andrey Pechkurov",author_title:"QuestDB Engineering",author_url:"https://github.com/puzpuzpuz",author_image_url:"https://avatars.githubusercontent.com/puzpuzpuz",description:"We've released version 6.2 and here are the highlights including SQL JIT compiler, JDK 17 support, SQL and ILP improvements and autocomplete in the Web Console.",keywords:["sql","jit","performance","timeseries","database"],image:"/img/blog/2022-01-27/banner.png",tags:["release","sql"]},p={permalink:"/blog/2022/01/27/release-sql-jit-compiler",source:"@site/blog/2022-01-27-release-sql-jit-compiler.md",title:"QuestDB 6.2 January release, SQL JIT compiler",description:"We've released version 6.2 and here are the highlights including SQL JIT compiler, JDK 17 support, SQL and ILP improvements and autocomplete in the Web Console.",date:"2022-01-27T00:00:00.000Z",formattedDate:"January 27, 2022",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"sql",permalink:"/blog/tags/sql"}],readingTime:5.245,truncated:!0,prevItem:{title:"Order Flow Imbalance - A High Frequency Trading Signal",permalink:"/blog/2022/02/02/order-flow-imbalance"},nextItem:{title:"How we built a SIMD JIT compiler for SQL in QuestDB",permalink:"/blog/2022/01/12/jit-sql-compiler"}},c=[{value:"JDK 17 support",id:"jdk-17-support",children:[]},{value:"Just-in-Time compiler for SQL engine",id:"just-in-time-compiler-for-sql-engine",children:[]},{value:"New LATEST BY syntax and improvements",id:"new-latest-by-syntax-and-improvements",children:[]},{value:"Optimize LIMIT SQL queries",id:"optimize-limit-sql-queries",children:[]},{value:"Reduced ILP commit timeout",id:"reduced-ilp-commit-timeout",children:[]},{value:"Lower memory footprint",id:"lower-memory-footprint",children:[]},{value:"Table autocomplete in Web Console",id:"table-autocomplete-in-web-console",children:[]},{value:"ILP stability improvements",id:"ilp-stability-improvements",children:[]},{value:"Simplified network configuration",id:"simplified-network-configuration",children:[]},{value:"Next up",id:"next-up",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{alt:"Latest features in QuestDB version 6.2 including SQL JIT compiler",height:360,src:"/img/blog/2022-01-27/banner.png",width:650,mdxType:"Banner"}),(0,a.kt)("p",null,"We've just published 6.2 and it includes a lot of changes, such as SQL JIT\ncompiler, JDK 17 support, SQL and ILP improvements, settings to improve the\nmemory footprint when used with Grafana, autocomplete in the Web Console,\nimproved ILP stability, and more. Here's a roundup of changes that have just\nlanded in the latest and greatest version!"),(0,a.kt)("h2",{id:"jdk-17-support"},"JDK 17 support"),(0,a.kt)("p",null,"QuestDB is now compatible with JDK 17, the latest long-term support (LTS) Java\nrelease. We also updated the binary distributions and the Docker image to use\nOpenJDK 17."),(0,a.kt)("h2",{id:"just-in-time-compiler-for-sql-engine"},"Just-in-Time compiler for SQL engine"),(0,a.kt)("p",null,"Release 6.2 brings a brand new JIT (Just-in-Time) compiler as a part of the SQL\nengine. The compiler aims to significantly improve execution times for queries\nwith simple arithmetic expressions used to filter the data."),(0,a.kt)("p",null,"To give you an impression on the performance improvements, let's consider the\nfollowing query on the ",(0,a.kt)("inlineCode",{parentName:"p"},"trips")," table that we use in our\n",(0,a.kt)("a",{parentName:"p",href:"https://demo.questdb.io/"},"live demo"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(), max(total_amount), avg(total_amount)\nFROM trips\nWHERE total_amount > 150 AND passenger_count = 1;\n")),(0,a.kt)("p",null,"The below image shows the execution time for this query with and without enabled\nJIT compiler:"),(0,a.kt)(l.Z,{alt:"A diagram comparing query execution times with JIT enabled and disabled",title:"Query execution times with JIT enabled and disabled",height:598,src:"/img/blog/2022-01-12/cold-v-hot-run-two.png",width:650,mdxType:"Screenshot"}),(0,a.kt)("p",null,"The SQL JIT compiler is a beta feature and is disabled by default. To enable it,\nyou should change the ",(0,a.kt)("inlineCode",{parentName:"p"},"cairo.sql.jit.mode")," setting in your ",(0,a.kt)("inlineCode",{parentName:"p"},"server.conf")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="path/to/server.conf"',title:'"path/to/server.conf"'},"cairo.sql.jit.mode=on\n")),(0,a.kt)("p",null,"When QuestDB starts with the enabled JIT compiler, the server logs contain\nmessages relating to ",(0,a.kt)("inlineCode",{parentName:"p"},"SQL JIT compiler")," like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"2021-12-16T09:25:34.472450Z A server-main SQL JIT compiler mode: on\n2021-12-16T09:25:34.472475Z A server-main Note: JIT compiler mode is a beta feature.\n")),(0,a.kt)("p",null,"JIT compilation won't take place for any query you run. To learn when the\ncompilation took place for a query, you should check the server logs to contain\nsomething similar to this message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"2021-12-16T09:35:01.742777Z I i.q.g.SqlCodeGenerator JIT enabled for (sub)query [tableName=trips, fd=62]\n")),(0,a.kt)("p",null,"For more information on the JIT compiler, refer to this\n",(0,a.kt)("a",{parentName:"p",href:"https://questdb.io/blog/2022/01/12/jit-sql-compiler"},"blog post"),"."),(0,a.kt)("h2",{id:"new-latest-by-syntax-and-improvements"},"New LATEST BY syntax and improvements"),(0,a.kt)("p",null,"The database now supports a new syntax for LATEST BY clause:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM tab WHERE x > 0\nLATEST ON timestamp PARTITION BY y;\n")),(0,a.kt)("p",null,"This syntax makes the LATEST BY clause consistent with the query execution order\nsince LATEST BY now must follow the WHERE clause. Release 6.2 also includes a\nnumber of fixes to make sure that the WHERE always gets applied before the\nLATEST BY. For more details on the new syntax, see the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/sql/latest-on"},"LATEST BY documentation"),"."),(0,a.kt)("h2",{id:"optimize-limit-sql-queries"},"Optimize LIMIT SQL queries"),(0,a.kt)("p",null,"Release 6.2 includes a number of optimizations for queries with the LIMIT\nclause. The first group of optimizations takes place for queries with ORDER BY\nand LIMIT clause combination. As an example, prior to this release, the below\nquery on the ",(0,a.kt)("inlineCode",{parentName:"p"},"trips")," table took around 18 seconds. With version 6.2, it takes\naround 0.2 seconds."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT trip_distance FROM trips\nORDER BY trip_distance DESC LIMIT 20;\n")),(0,a.kt)("p",null,"The second group of optimizations applies to queries that fetch the last N rows\nordered by the designated timestamp. The following query over a table with 100M\nrows took around 105 seconds. With this release, it takes around 1 millisecond."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM my_table\nORDER BY ts DESC LIMIT -100;\n")),(0,a.kt)("h2",{id:"reduced-ilp-commit-timeout"},"Reduced ILP commit timeout"),(0,a.kt)("p",null,"Prior to 6.2, the data ingested through ILP protocol could be committed and thus\navailable to SQL queries after 30 seconds, if the volume of data is small. This\nwas an inconvenient default in a local development environment. From now on, the\ndefault timeout for ILP commit is set to 1 second. For more information on\nsetting this parameter, see the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration"},"server configuration documentation"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="/path/to/server.conf"',title:'"/path/to/server.conf"'},"# Default is 1 sec\nline.tcp.commit.timeout=1000\n")),(0,a.kt)("h2",{id:"lower-memory-footprint"},"Lower memory footprint"),(0,a.kt)("p",null,"QuestDB 6.2 includes a number of improvements in query cache handling. The\ndatabase now makes sure to shrink the internal cached data structures upon query\nexecution. This should help with the problem of the overall memory consumption\ngoing up with time due to query caching."),(0,a.kt)("p",null,"Another problem reported by our users is that Grafana does not use prepared\nstatements when sending the queries and the built-in QuestDB's query cache\nbecomes much less efficient. To avoid unnecessary memory usage, we added new\nsettings that allow disabling the SELECT and INSERT query caches."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="/path/to/server.conf"',title:'"/path/to/server.conf"'},"# Default is true\npg.select.cache.enabled=false\n# Default is true\npg.insert.cache.enabled=false\n")),(0,a.kt)("p",null,"When the database is used in combination with Grafana, it is recommended to\ndisable SELECT query cache by setting the property\n",(0,a.kt)("inlineCode",{parentName:"p"},"pg.select.cache.enabled=false"),"."),(0,a.kt)("h2",{id:"table-autocomplete-in-web-console"},"Table autocomplete in Web Console"),(0,a.kt)("p",null,"Web Console's autocomplete feature now suggests the names of the existing\ntables."),(0,a.kt)(l.Z,{alt:"Query execution time benchmark",title:"Query execution time benchmark",height:191,src:"/img/blog/2022-01-27/table-autocomplete.png",width:650,mdxType:"Screenshot"}),(0,a.kt)("h2",{id:"ilp-stability-improvements"},"ILP stability improvements"),(0,a.kt)("p",null,"We've applied ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fuzzing"},"fuzz testing")," to our\nInflux Line Protocol implementation. As a result, a number of critical issues\naround various edge cases were found and fixed."),(0,a.kt)("p",null,"For instance, one of the edge cases could be seen in a scenario when the ILP\nrows keep adding new columns to the table. When this was happening, table\nreaders could read a mix of metadata values belonging to two subsequent\ntransactions. Our team did a great job to include a fix that makes sure that\ntable readers read the metadata atomically."),(0,a.kt)("h2",{id:"simplified-network-configuration"},"Simplified network configuration"),(0,a.kt)("p",null,"We cleaned up all of the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/operations/capacity-planning#network-configuration"},"network configuration"),"\nsettings and made them more intuitive and consistent. For the sake of backward\ncompatibility, all old setting names are also supported. Still, we recommend our\nusers update the configurations to improve the overall developer experience."),(0,a.kt)("h2",{id:"next-up"},"Next up"),(0,a.kt)("p",null,"The team will be adding ",(0,a.kt)("inlineCode",{parentName:"p"},"UPDATE")," support in the next release, meanwhile, we're\nworking on replication, further JIT-compiled filter performance improvements,\nand more."),(0,a.kt)("p",null,"We hope you enjoyed the features and functionality in version 6.2. See the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/questdb/questdb/releases/tag/6.2"},"release notes on GitHub"),"\nfor the complete list of additions and fixes. We\u2019re eagerly awaiting your\nfeedback, so feel free to reach out and let us know how it's running. You can\nlet us know how we're doing or just come by and say hello\n",(0,a.kt)("a",{parentName:"p",href:"https://"},"in our Slack Community")," or browse the repository\n",(0,a.kt)("a",{parentName:"p",href:"https://"},"on GitHub"),"."))}d.isMDXComponent=!0},86010:function(e,t,n){function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);