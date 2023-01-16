"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[460],{3905:function(e,t,s){s.d(t,{Zo:function(){return c},kt:function(){return d}});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(s),d=a,p=m["".concat(u,".").concat(d)]||m[d]||h[d]||r;return s?n.createElement(p,i(i({ref:t},c),{},{components:s})):n.createElement(p,i({ref:t},c))}));function d(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,i=new Array(r);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<r;l++)i[l]=s[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,s)}m.displayName="MDXCreateElement"},37549:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=s(83117),a=s(80102),r=(s(67294),s(3905)),i=s(72525),o=["components"],u={title:"Time Series Benchmark Suite",description:"Measure time series database performance in high-throughput ingestion scenarios using the time series benchmark suite",wrapperClassName:"supplemental",keywords:["clickhouse","influxdb","timescaledb","tsbs","benchmark"],image:"/img/pages/tsbs/banner.png"},l={type:"mdx",permalink:"/time-series-benchmark-suite",source:"@site/src/pages/time-series-benchmark-suite.mdx"},c=[{value:"How is database performance measured?",id:"how-is-database-performance-measured",children:[{value:"How to use the time series benchmark suite",id:"how-to-use-the-time-series-benchmark-suite",children:[]}]},{value:"Time Series Benchmark Suite results",id:"time-series-benchmark-suite-results",children:[]},{value:"Measuring database performance with high-cardinality data",id:"measuring-database-performance-with-high-cardinality-data",children:[]},{value:"Why QuestDB can easily ingest time series data with high-cardinality",id:"why-questdb-can-easily-ingest-time-series-data-with-high-cardinality",children:[]},{value:"Contributing to the Time Series Benchmark Suite",id:"contributing-to-the-time-series-benchmark-suite",children:[]}],h={toc:c};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"benchmarking-database-performance-with-time-series-workloads"},"Benchmarking database performance with time series workloads"),(0,r.kt)(i.Z,{alt:"A chart comparing the maximum throughput of four database systems, showing QuestDB hitting ingestion limits with less resources than other systems",height:385,src:"/img/pages/tsbs/banner.png",width:850,mdxType:"Screenshot"}),(0,r.kt)("p",null,"When looking at multiple solutions for storing and analyzing large amounts of\ntime series data, it's common to see many open source systems claim to be the\neasiest to maintain or are the fastest and most efficient at storing and writing\ndata. Reliable comparisons are one of the best ways for users to make the\ndecision which system fits their needs in terms of resource usage, speed, ease\nof use and other requirements."),(0,r.kt)("p",null,"We decided to make it more transparent for developers to choose the right time\nseries database by providing support for testing and measuring database\nperformance that anyone can replicate."),(0,r.kt)("h2",{id:"how-is-database-performance-measured"},"How is database performance measured?"),(0,r.kt)("p",null,"While there are many ways to measure database performance, we saw the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/timescale/tsbs"},"Time Series Benchmark Suite")," (TSBS)\nregularly coming up in discussions about time series databases and decided we\nshould provide the ability to benchmark QuestDB along with other systems."),(0,r.kt)("p",null,"The TSBS is a collection of Go programs to generate datasets and then benchmark\nread and write performance. It was initially released by InfluxDB engineers and\ncontinuously improved by the TimescaleDB team. The suite is extensible so that\ndifferent types of data and query types can be included and compared across\nsystems."),(0,r.kt)("h3",{id:"how-to-use-the-time-series-benchmark-suite"},"How to use the time series benchmark suite"),(0,r.kt)("p",null,"Data for the QuestDB benchmarks is generated in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/api/ilp/overview"},"InfluxDB line protocol")," format where each\nreading is composed of the table name, several comma-separated tags, several\ncomma-separated fields, and a timestamp for the record. An example reading looks\nlike the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"diagnostics,name=truck_3985,fleet=West,driver=Seth,model=H-2,device_version=v1.5 load_capacity=1500,fuel_capacity=150,nominal_fuel_consumption=12,fuel_state=0.8,current_load=482,status=4i 1451609990000000000\n")),(0,r.kt)("p",null,"The data generation tool is configurable so that the number of simulated devices\ncan be increased using ",(0,r.kt)("inlineCode",{parentName:"p"},"scale"),", and the overall timespan that devices are\ngenerating test data can be specified by a start and end timestamp:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'tsbs_generate_data \\\n--use-case="cpu-only" --seed=123 --scale=4000 \\\n--timestamp-start="2016-01-01T00:00:00Z" --timestamp-end="2016-01-02T00:00:00Z" \\\n--log-interval="10s" --format="influx" > /tmp/data\n')),(0,r.kt)("p",null,"This will create a data set approximately 12GB in size with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"24 hours worth of data"),(0,r.kt)("li",{parentName:"ul"},"4000 simulated host machines"),(0,r.kt)("li",{parentName:"ul"},"each simulated host reports system metrics every 10 seconds"),(0,r.kt)("li",{parentName:"ul"},"records are in InfluxDB line protocol format with 10 tags and 10 fields per\nrow")),(0,r.kt)("p",null,"The Time Series Benchmark Suite provides a separate tool for loading the\ngenerated data set into different databases. Users can test ingestion\nperformance using the ",(0,r.kt)("inlineCode",{parentName:"p"},"tsbs_load")," and specify which system to send the test data\nto:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tsbs_load_questdb --file /tmp/data --workers 4\n")),(0,r.kt)("h2",{id:"time-series-benchmark-suite-results"},"Time Series Benchmark Suite results"),(0,r.kt)("p",null,"Here are our results of the benchmark with the ",(0,r.kt)("inlineCode",{parentName:"p"},"cpu-only")," use case using up to\nfourteen workers on an AWS EC2 ",(0,r.kt)("inlineCode",{parentName:"p"},"m5.8xlarge")," instance with sixteen cores."),(0,r.kt)(i.Z,{alt:"Time series benchmark suite results showing QuestDB outperforming ClickHouse, TimescaleDB and InfluxDB when using four workers",height:377,src:"/img/blog/2021-05-10/max-throughput-comparison.png",title:"TSBS results comparing the maximum ingestion throughput of QuestDB, InfluxDB, ClickHouse, and TimescaleDB",width:850,mdxType:"Screenshot"}),(0,r.kt)("p",null,"We reach maximum ingestion performance using four threads, whereas the other\nsystems require more CPU resources to hit maximum throughput. QuestDB achieves\n959k rows/sec with 4 threads. We find that InfluxDB needs 14 threads to reach\nits max ingestion rate (334k rows/sec), while TimescaleDB reaches 145k rows/sec\nwith 4 threads. ClickHouse hits 914k rows/sec with twice as many threads as\nQuestDB."),(0,r.kt)("p",null,"When running on 4 threads, QuestDB is 1.7x faster than ClickHouse, 6.4x faster\nthan InfluxDB and 6.5x faster than TimescaleDB."),(0,r.kt)(i.Z,{alt:"A chart comparing the maximum throughput of four database systems, showing QuestDB hitting ingestion limits with less resources than other systems",height:324,src:"/img/blog/2021-05-10/tsbs-benchmark-results.png",title:"TSBS benchmark results using 4 threads: rows ingested per second by QuestDB, InfluxDB, ClickHouse, and TimescaleDB.",width:850,mdxType:"Screenshot"}),(0,r.kt)("p",null,"Because our ingestion format (ILP) repeats tag values per row, ClickHouse and\nTimescaleDB parse around two-thirds of the total volume of data as QuestDB does\nin the same benchmark run. We chose to stick with ILP because of its widespread\nuse in time series, but we may use a more efficient format to improve ingestion\nperformance in the future."),(0,r.kt)("h2",{id:"measuring-database-performance-with-high-cardinality-data"},"Measuring database performance with high-cardinality data"),(0,r.kt)("p",null,"If we want to influence cardinality, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"scale")," flag of the\nbenchmark tool during data generation time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'tsbs_generate_data --scale=100 \\\n  --timestamp-start="2016-01-01T00:00:00Z" --timestamp-end="2016-01-15T00:00:00Z" \\\n  --use-case="cpu-only" --seed=123 --log-interval="10s" --format="influx"\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scale")," parameter provides a value for the number of unique devices we want\nthe test data set to contain. As the number of devices increases, so does the\nnumber of unique identifiers values per data set, and we can control cardinality\ndirectly. Here's some example output from the Time Series Benchmark Suite test\ndata with three different devices:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'"hostname","region","datacenter","rack","os","arch","team","service","service_version","service_environment","usage_user","usage_system","usage_idle","usage_nice","usage_iowait","usage_irq","usage_softirq","usage_steal","usage_guest","usage_guest_nice","timestamp"\n"host_0","eu-central-1","eu-central-1a","6","Ubuntu15.10","x86","SF","19","1","test",58,2,24,61,22,63,6,44,80,38,"2016-01-01T00:00:00.000000Z"\n"host_1","us-west-1","us-west-1a","41","Ubuntu15.10","x64","NYC","9","1","staging",84,11,53,87,29,20,54,77,53,74,"2016-01-01T00:00:00.000000Z"\n"host_2","sa-east-1","sa-east-1a","89","Ubuntu16.04LTS","x86","LON","13","0","staging",29,48,5,63,17,52,60,49,93,1,"2016-01-01T00:00:00.000000Z"\n')),(0,r.kt)("p",null,"The table that we create on ingestion then stores ",(0,r.kt)("strong",{parentName:"p"},"tags")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol")," types.\nThis ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol")," type is used to efficiently store repeating string values so that\nsimilar records may be grouped together. Columns of this type are indexed so\nthat queries across tables by symbol are faster and more efficient to execute."),(0,r.kt)("p",null,"We tested each database with different scale values using 4, 6, and 16 threads\non two different hosts which have the following specifications:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"AWS EC2 m5.8xlarge instance, Intel(R) Xeon(R) Platinum 8259CL CPU @ 2.50GHz"),(0,r.kt)("li",{parentName:"ol"},"AMD Ryzen 3970X 32-Core, GIGABYTE NVME HD")),(0,r.kt)("p",null,"The following chart compares ingestion performance from lowest to highest\ncardinality running on the AWS EC2 instance with four threads:"),(0,r.kt)(i.Z,{alt:"High-cardinality time series benchmark results showing QuestDB outperforming ClickHouse, TimescaleDB and InfluxDB when using six workers",height:415,src:"/img/blog/2021-06-16/maximum-throughput-by-device-4-threads.png",title:"TSBS results using 4 threads on AWS EC2 m5.8xlarge",width:850,mdxType:"Screenshot"}),(0,r.kt)("p",null,"Using a dataset with low cardinality of 100 devices, we hit maximum ingestion\nthroughput of 904k rows/sec, with ClickHouse performing closest at 548k\nrows/sec. However, when increasing cardinality to 10 million devices, QuestDB\nsustains 640k rows/sec, and ClickHouse ingestion decreases at a similar rate\nrelative to the device count with 345k rows/sec."),(0,r.kt)("p",null,"The other systems under test struggled with higher unique device count, with\nInfluxDB ingestion dropping to 38k rows/sec and TimescaleDB at 50k rows/sec with\n10M devices. We reran the benchmark suite on the same AWS EC2 instance and\nincreased the worker count (16 threads) to the systems under test:"),(0,r.kt)(i.Z,{alt:"High-cardinality time series benchmark results showing QuestDB outperforming ClickHouse, TimescaleDB and InfluxDB when using sixteen workers",height:415,src:"/img/blog/2021-06-16/maximum-throughput-by-device-16-threads.png",title:"TSBS results using 16 threads on AWS EC2 m5.8xlarge",width:850,mdxType:"Screenshot"}),(0,r.kt)("p",null,"QuestDB showed a mostly constant ingestion rate of 815k rows/sec with all\ndegrees of cardinality. ClickHouse could ingest 900k rows/sec but requires four\ntimes as many workers as QuestDB to achieve this rate. ClickHouse ingestion\ndrops to 409k rows/sec on the largest data set. There was no significant change\nin performance between four and sixteen workers for TimescaleDB. InfluxDB\nstruggled the most, failing to finish successfully on the largest data set."),(0,r.kt)("p",null,"We ran the same benchmarks on a separate system using the AMD Ryzen 3970X, using\n4, 6, and 16 threads to see if we could observe any changes in ingestion rates:"),(0,r.kt)(i.Z,{alt:"High-cardinality time series benchmark results showing QuestDB, ClickHouse, TimescaleDB and InfluxDB when using six workers",height:415,src:"/img/blog/2021-06-16/maximum-throughput-by-device-scale-6-threads-ryzen.png",title:"TSBS results using 6 threads on AMD Ryzen 3970X",width:850,mdxType:"Screenshot"}),(0,r.kt)("p",null,"QuestDB hits maximum throughput with 1M devices during this run, with other\nsystems performing better than on the AWS instance. We can assume that\nTimescaleDB is disk-bound as results change dramatically based on the difference\nbetween the tests run on the EC2 instance. QuestDB performance peaks when using\nfour workers and slows down at 16 workers."),(0,r.kt)("h2",{id:"why-questdb-can-easily-ingest-time-series-data-with-high-cardinality"},"Why QuestDB can easily ingest time series data with high-cardinality"),(0,r.kt)("p",null,"There are several reasons why QuestDB can quickly ingest data of this type; one\nfactor is the data model that we use to store and index data. High-cardinality\ndata has not been a pain point for our users due to our choices when designing\nthe system architecture from day one. This storage model was chosen for\narchitectural simplicity and quick read and write operations."),(0,r.kt)("p",null,"When we are ingesting InfluxDB line protocol, the message 'tags' are stored as\nsymbol types. This symbol type is used to efficiently store repeating string\nvalues so that similar records may be grouped together. Columns of this type are\nindexed so that queries across tables by symbol are faster and more efficient to\nexecute. In addition, we massively parallelize hashmap operations on indexed\ncolumns and use SIMD to do a lot of heavy lifting across the entire SQL engine\nso we can execute procedures relating to indexes and hashmap lookup in parallel\nwhere possible."),(0,r.kt)("h2",{id:"contributing-to-the-time-series-benchmark-suite"},"Contributing to the Time Series Benchmark Suite"),(0,r.kt)("p",null,"We have opened a pull request\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/timescale/tsbs/issues/157"},"#157 - Questdb benchmark support"),")\nin TimescaleDB's TSBS GitHub repository which adds the ability to run the\nbenchmark against QuestDB. In the meantime, readers may clone\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/questdb/tsbs"},"our fork of the benchmark suite")," and run the\ntests to see the results for themselves."),(0,r.kt)("p",null,"We're happy to provide compatibility with the Time Series Benchmark Suite, which\nis a reproducible way to compare query and ingestion performance across multiple\nsystems. With this compatibility, we hope to make it easier to assess which time\nseries database is the proper tool for a particular use case."),(0,r.kt)("p",null,"If you would like to know more about QuestDB and how it can solve problems that\narise when dealing with large amounts of time series data, feel free to\n",(0,r.kt)("a",{parentName:"p",href:"https://slack.questdb.io/"},"Join the Community Slack")," or view our\n",(0,r.kt)("a",{parentName:"p",href:"/enterprise"},"enterprise page")," for an overview of the solutions we offer."))}m.isMDXComponent=!0},86010:function(e,t,s){function n(e){var t,s,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(s=n(e[t]))&&(a&&(a+=" "),a+=s);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,s=0,a="";s<arguments.length;)(e=arguments[s++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}s.d(t,{Z:function(){return a}})}}]);