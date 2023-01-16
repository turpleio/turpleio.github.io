"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[1221],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(a),p=i,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||s;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<s;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},55548:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=a(83117),i=a(80102),s=(a(67294),a(3905)),r=a(46092),o=a(72525),l=["components"],d={title:"Comparing InfluxDB, TimescaleDB, and QuestDB timeseries databases",author:"Yitaek Hwang",author_title:"Guest",author_url:"https://github.com/Yitaek",author_image_url:"https://avatars.githubusercontent.com/Yitaek",description:"A high-level overview of timeseries databases to compare features, functionality, maturity, and performance.",keywords:["timeseries","influxdb","timescale","questdb","comparison"],tags:["benchmark","influxdb","timescale","questdb","timeseries"],image:"/img/blog/shared/og-influxdb-timescaledb.png"},c={permalink:"/blog/2021/07/05/comparing-questdb-timescaledb-influxdb",source:"@site/blog/2021-07-05-comparing-questdb-timescaledb-influxdb.mdx",title:"Comparing InfluxDB, TimescaleDB, and QuestDB timeseries databases",description:"A high-level overview of timeseries databases to compare features, functionality, maturity, and performance.",date:"2021-07-05T00:00:00.000Z",formattedDate:"July 5, 2021",tags:[{label:"benchmark",permalink:"/blog/tags/benchmark"},{label:"influxdb",permalink:"/blog/tags/influxdb"},{label:"timescale",permalink:"/blog/tags/timescale"},{label:"questdb",permalink:"/blog/tags/questdb"},{label:"timeseries",permalink:"/blog/tags/timeseries"}],readingTime:13.74,truncated:!1,prevItem:{title:"Using Telegraf and QuestDB to store metrics in a time series database",permalink:"/blog/2021/07/09/telegraf-and-questdb-for-storing-metrics-in-a-timeseries-database"},nextItem:{title:"Tracking multiple cryptocurrency exchanges using a time series database",permalink:"/blog/2021/06/18/tracking-multiple-cryptocurrency-exchanges"}},u=[{value:"Why timeseries databases are popular",id:"why-timeseries-databases-are-popular",children:[{value:"Why use a timeseries database?",id:"why-use-a-timeseries-database",children:[]}]},{value:"InfluxDB details",id:"influxdb-details",children:[]},{value:"TimescaleDB details",id:"timescaledb-details",children:[]},{value:"QuestDB details",id:"questdb-details",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],m={toc:u};function p(e){var t=e.components,a=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,{alt:"TimescaleDB logo, QuestDB logo, InfluxDB logo",height:467,src:"/img/blog/2021-07-05/banner.png",width:650,mdxType:"Banner"}),(0,s.kt)("p",null,"This comparison comes from ",(0,s.kt)("a",{parentName:"p",href:"https://yitaek.medium.com/"},"Yitaek Hwang"),", who has\nput together his thoughts on the features and functionality you should look out\nfor when evaluating timeseries databases. This overview takes a look at QuestDB,\nTimescaleDB, and InfluxDB for features, functionality, maturity, and\nperformance."),(0,s.kt)("h2",{id:"why-timeseries-databases-are-popular"},"Why timeseries databases are popular"),(0,s.kt)("p",null,"We're living in\n",(0,s.kt)("a",{parentName:"p",href:"https://www.protocol.com/manuals/the-new-database/golden-age-databases-last"},"the golden age of databases"),",\nas money flows into the industry at historical rates (e.g.,\n",(0,s.kt)("a",{parentName:"p",href:"https://www.snowflake.com/"},"Snowflake"),", ",(0,s.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB"),",\n",(0,s.kt)("a",{parentName:"p",href:"https://www.cockroachlabs.com/"},"Cockroach Labs"),", ",(0,s.kt)("a",{parentName:"p",href:"https://neo4j.com/"},"Neo4j"),").\nIf the debate between relational vs. non-relational or online analytical\nprocessing (OLAP) vs. online transaction processing (OLTP) ruled the past\ndecade, a new type of database has been steadily growing in popularity.\nAccording to ",(0,s.kt)("a",{parentName:"p",href:"https://db-engines.com/en/"},"DB-Engines"),", an initiative to collect\nand present information on database management systems, timeseries databases are\nthe fastest growing sector since 2020:"),(0,s.kt)(o.Z,{alt:"A chart ranking database type by popularity with timeseries databases shown as a clear leader",height:591,src:"/img/blog/2021-07-05/timeseries-popularity.png",width:770,mdxType:"Screenshot"}),(0,s.kt)("h3",{id:"why-use-a-timeseries-database"},"Why use a timeseries database?"),(0,s.kt)("p",null,"Timeseries databases (TSDB) are databases optimized to ingest, process, and\nstore timestamped data. Such data may include metrics from servers and\napplications, readings from IoT sensors, user interaction on a website or an\napp, or trading activity on financial markets."),(0,s.kt)("p",null,"The following properties usually characterize timeseries workloads:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Each data point includes a timestamp used to index, aggregate, and sample.\nThis data can also be multi-dimensional and correlated."),(0,s.kt)("li",{parentName:"ul"},"High write speed (ingestion) is preferred to capture data at high frequencies."),(0,s.kt)("li",{parentName:"ul"},"Summarized view of the data (e.g., downsampled or aggregated view, trend\nlines) may provide more insight than a single data point. For example, given\nnetwork unreliability or outliers in sensor readings, we may set alerts when\nsome average value over time exceeds a threshold rather than doing so on a\nsingle data point."),(0,s.kt)("li",{parentName:"ul"},"Analyzing the data usually requires accessing it over some window of time\n(e.g., give me the click rate data over the past week).")),(0,s.kt)("p",null,"While other databases can also handle time-series data to a certain extent,\nTSDBs are designed with the above properties to handle data ingestion,\ncompression, and aggregation over time more efficiently. So as the demand for\ntime series data continues to explode on the heels of cloud computing, IoT, and\nmachine learning, how should architects go about choosing a TSDB? This article\nwill compare popular TSDBs and new players in the market to help you decide."),(0,s.kt)("h2",{id:"influxdb-details"},"InfluxDB details"),(0,s.kt)("p",null,"First released in 2013, InfluxDB is the market leader in the TSDB space,\novertaking Graphite and OpenTSDB that came before. As with many OSS database\ncompanies, ",(0,s.kt)("a",{parentName:"p",href:"https://www.influxdata.com/"},"InfluxDB")," licensed with MIT License for\na single node, with paid-plans available for InfluxDB Cloud and InfluxDB\nenterprise that provide clustering and other production-ready features."),(0,s.kt)(o.Z,{alt:"A table showing the current popularity of timeseries databases as shown by db-engines.com",height:591,src:"/img/blog/2021-07-05/db-engines-ranking.png",width:770,title:"Image Credit: DB-engines",mdxType:"Screenshot"}),(0,s.kt)("p",null,"Before the InfluxDB 2.x release in 2019, the InfluxDB Platform consisted of the\nTICK stack: Telegraf (agent for collecting and reporting metrics), InfluxDB,\nChronograf (interface to query data from InfluxDB), and Kapacitor (real-time\nstreaming data processing engine). As seen in the diagram below, InfluxDB 1.x\nprimarily focused on time series data from servers and web applications. Before\nPrometheus came along to take market share in this space, InfluxDB had the most\nsignificant community and integrations to collect, store, and view application\nmetrics."),(0,s.kt)(o.Z,{alt:"A diagram describing IndluxDB architecture including Telegraf, Chronograf, and Kapacitor.",height:591,src:"/img/blog/2021-07-05/influx-architecture.png",width:770,title:"Image Credit: Influxdata",mdxType:"Screenshot"}),(0,s.kt)("p",null,"InfluxDB 2.x essentially simplified the architecture to bundle the TICK stack to\na single binary as well as introducing new features to make collecting (e.g.\nnative Prometheus plugin), organizing (e.g., organizations and buckets), and\nvisualizing (e.g., Data Explorer) data with its Flux language."),(0,s.kt)("p",null,"To understand how InfluxDB works, we need to grasp the following key concepts:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Data model (tagset model)"),": Besides the timestamp field, each data element\nconsists of various tags (optional, indexed metadata fields), fields (key and\nvalue), and measurement (container for tags, fields, and timestamps). The\nexample below takes census data from bees and ants, collected in Klamath and\nPortland by scientists Anderson and Mullen. Here location and scientist are\ntags, falling under the census measurement with field/value pair for bees and\nants.")),(0,s.kt)(o.Z,{alt:"An example table created from ingesting data in InfluxDB line protocol",height:591,src:"/img/blog/2021-07-05/influx-schema.png",width:770,title:"Image Credit: Influxdata",mdxType:"Screenshot"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Data schema (TSM & TSI):")," are data elements stored in time-structured merge\ntree (TSM) and time series index (TSI) files. TSM can be thought of a\n",(0,s.kt)("a",{parentName:"li",href:"https://docs.influxdata.com/influxdb/v1.8/concepts/storage_engine/"},"LSM tree with write-ahead log (WAL) and read-only files similar to SSTables"),"\nthat are sorted and compressed. TSI is an index on files on disk that InfluxDB\nmemory maps to take advantage of the\n",(0,s.kt)("a",{parentName:"li",href:"https://docs.influxdata.com/influxdb/v1.8/concepts/time-series-index/"},"Least Recently Used (LRU)"),"\nthe memory of the operating system to help with datasets with high cardinality\n(i.e., large elements in a set)."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Flux scripting language:")," a domain-specific language developed by InfluxDB\nto help with querying data. Flux has an SQL package to help query from SQL\ndata sources as well.")),(0,s.kt)("p",null,"Most notably, InfluxDB does not enforce a schema before ingesting data. Instead,\nthe schema automatically created from the input data, inferred from the tags and\nfields. This NoSQL-like experience is both InfluxDB's strength and weakness. For\ndatasets with relatively low cardinality that naturally fit this tagset model\n(e.g., most infrastructure and application metrics, some IoT data, some\nfinancial data), InfluxDB is extremely easy to get started without worrying\nabout designing schemas or indexes. It also shines in use cases where the goal\nis to create digital models of physical assets. For example, in IoT, one may\nneed to create a digital twin to represent a collection of sensors and ingest\norganized data."),(0,s.kt)(o.Z,{alt:"An illustration showing the indexed and non-indexed parts of an InfluxDB line protocol message",height:591,src:"/img/tutorial/2021-07-05/tagset-model.jpeg",width:770,title:"Image Credit: Influxdata",mdxType:"Screenshot"}),(0,s.kt)("p",null,'On the other hand, being "schemaless" can be a disadvantage when the dataset\nrequires indexes on continuous fields (i.e., numerics are not supported by\nInfluxDB as tags must be strings) or data validation. Also, since tags are\nindexed, if tags are frequently changing (e.g., use cases where metadata may\nchange after initial ingestion), relying on InfluxDB to infer the schema may be\ncostly.'),(0,s.kt)("p",null,"Finally, InfluxDB's decision to create its custom functional data scripting\nlanguage (Flux) presents another layer of complexity to mastering this\necosystem. The team at InfluxDB\n",(0,s.kt)("a",{parentName:"p",href:"https://www.influxdata.com/blog/why-were-building-flux-a-new-data-scripting-and-query-language/"},"points to two motivations"),"\nto move away from SQL-like InfluxQL to Flux:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Timeseries data line up with a flow-based functional processing model where a\nstream of data is transformed from one output to the next. The relational\nalgebra model that SQL supports does not handle such chaining of operations\nand functions as well."),(0,s.kt)("li",{parentName:"ul"},"InfluxDB wanted first-class support for common operations with time series\ndata (e.g., exponential moving average) that is not part of the SQL standard.")),(0,s.kt)("p",null,"Flux syntax requires some effort to adapt, especially if you're looking for\nsimple SQL queries or not looking to learn yet another new language. Still\nconsidering the large community and\n",(0,s.kt)("a",{parentName:"p",href:"https://www.influxdata.com/products/integrations/"},"integrations")," that InfluxDB\nhas assembled, some of the advantages of Flux start to materialize, especially\nwhen combined with built-in dashboards."),(0,s.kt)(o.Z,{alt:"A screenshot showing the InfluxDB data explorer",height:591,src:"/img/blog/2021-07-05/influx-schema-explorer.png",width:770,title:"Image Credit: Influxdata",mdxType:"Screenshot"}),(0,s.kt)("p",null,"Overall, InfluxDB is a great choice if the time series data fit nicely with the\ntagset model. The main use case seems to be geared towards\ninfrastructure/application monitoring, but as the clear market leader in this\nspace, InfluxDB also seamlessly integrates with popular data sources."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Pros:")," schemaless ingestion, huge community, integrations with popular\ntools"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Cons:")," datasets with high-cardinality, custom querying/processing language")),(0,s.kt)("h2",{id:"timescaledb-details"},"TimescaleDB details"),(0,s.kt)("p",null,"Whereas InfluxDB opted to build a new database and custom language from scratch,\non the other end of the spectrum is ",(0,s.kt)("a",{parentName:"p",href:"https://www.timescale.com/"},"TimescaleDB"),".\nTimescaleDB is built on top of PostgreSQL and adds an intermediary layer called\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.timescale.com/timescaledb/latest/overview/core-concepts/hypertables-and-chunks/"},"hypertables"),"\nthat chunks data into multiple underlying tables while abstracting it as a\nsingle, large table for interacting with the data."),(0,s.kt)(o.Z,{alt:"A diagram showing TimescaleDB and InfluxDB on two ends of the SQL vs NoSQL spectrum.",height:591,src:"/img/blog/2021-07-05/sql-v-nosql.jpeg",width:770,title:"Image Credit: TimescaleDB",mdxType:"Screenshot"}),(0,s.kt)("p",null,"PostgreSQL compatibility is TimescaleDB's biggest selling point. TimescaleDB\nfully supports all of the SQL features (e.g., joins, secondary and partial\nindexes) as well as popular extensions like ",(0,s.kt)("a",{parentName:"p",href:"https://postgis.net/"},"PostGIS"),".\nMore importantly, TimescaleDB inherits decades of knowledge from both developers\nrunning SQL queries as well as database and sysadmins running PostgreSQL at\nscale. Since TimescaleDB can be treated as a PostgreSQL extension, cloud-managed\noptions (e.g.\n",(0,s.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/updates/timescaledb-for-azure-database-for-postgresql-to-power-iot-and-time-series-workloads/"},"Azure Database for PostgreSQL"),",\n",(0,s.kt)("a",{parentName:"p",href:"https://help.aiven.io/en/articles/1752157-getting-started-with-timescaledb-in-aiven-for-postgresql"},"Aiven"),")\naside from TimescaleDB's own managed offering are readily available, not to\nmention the myriad of self-managed options on VMs or containers."),(0,s.kt)(o.Z,{alt:"A list of the most popular programming languages as reported by the Stack Overflow Developer Survey 2020",height:591,src:"/img/blog/2021-07-05/popular-languages.png",width:770,title:"Image Credit: Stack Overflow",mdxType:"Screenshot"}),(0,s.kt)("p",null,"Because TimescaleDB began as an IoT platform, where they used InfluxDB at first,\nto store their sensor data, its features bode well for IoT time series data\nwhich is often 'bursty', frequently out of order due to network unreliability,\nand characterized by high cardinality:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Hypertables:")," TimescaleDB\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.timescale.com/timescaledb/latest/overview/core-concepts/hypertables-and-chunks/#partitioning-in-hypertables-with-chunks"},"partitions its hypertables into chunks"),'\nbased on a time column as well as other "spatial" values such as a device uid,\nlocation identifier, or a stock symbol. Users can configure these chunks to\nhold the most recent data in memory, asynchronously compress and re-order data\nby the time column to disk (instead of ingestion time), and replicate or\nmigrate transactionally across nodes.')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Continuous Aggregation:")," TimescaleDB also supports\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.timescale.com/timescaledb/latest/overview/core-concepts/continuous-aggregates/"},"continuous aggregation of data"),"\nto make computing key metrics like hourly average, minimum, and maximum values\nfast. IoT data is often more useful in aggregate (e.g., give me the average\ntemperature between 3 pm and 4 pm vs. what was the exact temperature at 3 pm),\nso not needing to scan a huge amount of data on every aggregate query can help\ncreate performant dashboards or analyses.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Data Retention:")," Large deletes are a costly operation in traditional\nrelational databases. However, since TimescaleDB stores data in chunks, it\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.timescale.com/timescaledb/latest/overview/core-concepts/data-retention/#data-retention"},"provides a ",(0,s.kt)("inlineCode",{parentName:"a"},"drop_chunks")," feature"),"\nto quickly drop old data without the same overhead. Since the relevance of old\ndata diminishes over time, TimescaleDB can be used with a longer-term storage\n(e.g., OLAP or blob storage) to move older data to save disk space and keep\nperformance high on newer data."))),(0,s.kt)("p",null,"As for performance, TimescaleDB has a comprehensive post detailing insert and\nread latency metrics comparing TimescaleDB version 1.7.1 and InfluxDB 1.8.0\n(both OSS versions) using the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/timescale/tsbs"},"Time Series Benchmark Suite")," (TSBS). Both\ndatabases now have 2.x versions, so this analysis may be a bit outdated, but the\nresults show superior performance for TimescaleDB as data cardinality grows\n(~3.5x performance)."),(0,s.kt)(o.Z,{alt:"Benchmark results showing TimescaleDB performance versus InfluxDB on ingestion rates.",height:591,src:"/img/blog/2021-07-05/influx-versus-timescale.png",width:770,title:"Image Credit: TimescaleDB",mdxType:"Screenshot"}),(0,s.kt)("p",null,"TimescaleDB team points to InfluxDB's log-structured merge tree-based system\n(TSI) versus TimescaleDB's B-tree indexing method for the root cause. However,\nthe takeaway here isn't necessarily that TimescaleDB is superior to InfluxDB in\nterms of performance. Performance benchmarks are opinionated and heavily\ninfluenced by the data model, hardware, and configuration. Instead, this result\nshows that TimescaleDB may be better suited for IoT use cases where data\ncardinality is high (e.g., give me average power usage for device X out of the\nfleet of 10 million devices)."),(0,s.kt)("p",null,"For an in-depth comparison between the two DBs, have a look at Timescale's own\n",(0,s.kt)("a",{parentName:"p",href:"https://blog.timescale.com/blog/timescaledb-vs-influxdb-for-time-series-data-timescale-influx-sql-nosql-36489299877/"},"TimescaleDB vs. InfluxDB comparison"),"."),(0,s.kt)("p",null,"Overall, TimescaleDB is an excellent fit for teams looking for a significant\nperformance boost without heavy refactoring to migrate off their existing SQL\ndatabases. Even though TimescaleDB is still relatively new (first release in\n2017), the decision to build on top of PostgreSQL has boosted its adoption\nnumbers to reach the top 5 TSDBs. Anecdotally, my previous IoT startup also used\nTimescaleDB is an intermediate data store to quickly pull aggregate metrics\nspanning several months and move old data to long-term storage. Since we were\nalready running PostgreSQL on our Kubernetes cluster, installing TimescaleDB and\nmigrating our workload was a simple task."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Pros:")," PostgreSQL-compatibility, scales well with data cardinality, various\ndeployment models available"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Cons:")," fixed schema (adds a bit of complexity and data transformation\neffort before ingestion)")),(0,s.kt)("h2",{id:"questdb-details"},"QuestDB details"),(0,s.kt)("p",null,"For those looking to take advantage of the flexibility of InfluxDB line protocol\nand the familiarity of PostgreSQL, a newer time series database may satisfy both\nrequirements without sacrificing performance. QuestDB (YC S20) is an open-source\nTSDB written in Java and C++ that now ranks in the top 15\n",(0,s.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=23975807"},"although it launched less than a year ago"),".\nUnderneath the hood,\n",(0,s.kt)("a",{parentName:"p",href:"/docs/concept/storage-model"},"QuestDB utilizes memory-mapped files")," to support\nfast read and writes before data is committed to disk."),(0,s.kt)(o.Z,{alt:"A diagram showing how QuestDB ingesting schema-agnostic InfluxDB line protocol and relational data",height:591,src:"/img/blog/2021-07-05/questdb-influxdb-postgres-join.png",width:770,mdxType:"Screenshot"}),(0,s.kt)("p",null,"By building the database from scratch with Java and C++, the QuestDB team\nfocused on three things:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Performance:")," Solving the ingestion bottleneck, especially around high\ncardinality datasets. It also supports fast data retrieval by storing\ntime-partitioned data always in order (via shuffling in memory) and only\nanalyzing requested columns/partitions instead of the entire table. Finally,\nQuestDB applies SIMD instructions to parallelize operations."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Compatibility:")," QuestDB supports InfluxDB line protocol, PostgreSQL wire,\nREST API and CSV upload to ingest data. Users accustomed to other TSDBs can\neasily port over their existing applications without a significant rewrite."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Querying via SQL:")," Despite supporting multiple ingestion mechanisms,\nQuestDB uses SQL as the query language, so there's no need to learn a\ndomain-specific language like Flux.")),(0,s.kt)("p",null,"In terms of performance, QuestDB\n",(0,s.kt)("a",{parentName:"p",href:"/blog/2021/05/10/questdb-release-6-0-tsbs-benchmark"},"recently posted a blog post showing benchmark results"),"\nthat achieved write speeds up to 1.4 million rows per second. QuestDB team used\nthe TSBS benchmark with the ",(0,s.kt)("inlineCode",{parentName:"p"},"cpu-only")," use case using up to 14 works on\n",(0,s.kt)("inlineCode",{parentName:"p"},"m5.8xlarge")," instance on AWS (",(0,s.kt)("strong",{parentName:"p"},"NOTE:")," the 1.4 million number is from using AMD\nRyzen5 processor)."),(0,s.kt)("p",null,"For datasets with high cardinality (>10 million), QuestDB also outperformed\nother TSDBs with peak ingestion throughput of 904k rows/sec and sustaining about\n640k row/secs at 10 million devices using four threads on ",(0,s.kt)("inlineCode",{parentName:"p"},"m5.8xlarge")," instance\nwith Intel Xeon CPUs. When QuestDB ran the same benchmark on AMD Ryzen 3970X,\nQuestDB showed over a million rows/sec ingestion throughput."),(0,s.kt)(o.Z,{alt:"A chart showing high-cardinality ingestion performance of InfluxDB, TimescaleDB, and ClickHouse versus QuestDB",height:591,src:"/img/blog/2021-07-05/maximum-throughput.png",width:770,mdxType:"Screenshot"}),(0,s.kt)("p",null,"Again, performance benchmarks can be subjective based on the data model and\ntuning of the DBs, but it nevertheless paints a compelling comparison point for\nQuestDB. It will be interesting to see how the results shake out with DevOps or\niot modes as both InfluxDB and TimescaleDB support those use cases out of the\nbox with TSBS."),(0,s.kt)("p",null,"The other interesting component of QuestDB is support for both InfluxDB inline\nprotocol and PostgreSQL wire for ingestion. For existing InfluxDB users, you can\nconfigure Telegraf to point to QuestDB's address and port. Likewise for\nPostgreSQL users use the existing client library or JDBC to write data into\nQuestDB. Regardless of the ingestion method, data can be queried using standard\nSQL with notable exceptions listed on the API reference page."),(0,s.kt)("p",null,"As a newer entrant in this space, the most apparent downside to QuestDB is the\nlack of features such as replication (this is in the works). It does integrate with some of the most popular tools already\n(e.g., PostgreSQL, Grafana, Kafka, Telegraf, Tableau), but it will need some\ntime to reach the level of the other TSDBs mentioned above."),(0,s.kt)("p",null,"Still, QuestDB is a promising project that can balance the positives of InfluxDB\nand TimescaleDB:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Pros:")," fast ingestion (especially for datasets with high cardinality),\nsupport for both InfluxDB protocol and PostgreSQL wire, querying via standard\nSQL"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Cons:")," smaller community, available integrations, lack of some features")),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"As the demand for time series data continues to grow, TSDBs specialized to deal\nwith this data will see massive adoption and fierce competition. Besides the\nthree open-source TSDBs covered in this article, there are also public cloud\nofferings from AWS (AWS Timestream) and Azure (Azure Series Insights)."),(0,s.kt)("p",null,'As with all databases, choosing the "perfect" TSDB will primarily depend on your\nbusiness needs, data model, and use case. InfluxDB works well if your data fits\nthe tagset model with a rich ecosystem of integrations readily available.\nTimescaleDB is a natural fit for existing PostgreSQL users. Finally, if\nperformance is the primary concern, QuestDB is a promising project that is\ngrowing quickly.'),(0,s.kt)("p",null,"If you like this content, we'd love to know your thoughts! Feel free to share\nyour feedback or come and say hello in the\n",(0,s.kt)("a",{parentName:"p",href:"https://"},"QuestDB Community Slack"),"."))}p.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}a.d(t,{Z:function(){return i}})}}]);