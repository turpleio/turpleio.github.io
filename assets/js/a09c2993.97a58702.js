"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[4128],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9518:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),l=["components"],o={title:"Introduction",slug:"/",description:"QuestDB is a relational column-oriented database designed for real-time analytics on time series data."},s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"QuestDB is a relational column-oriented database designed for real-time analytics on time series data.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/introduction.md",version:"current",frontMatter:{title:"Introduction",slug:"/",description:"QuestDB is a relational column-oriented database designed for real-time analytics on time series data."},sidebar:"docs",next:{title:"Get started with QuestDB via Docker",permalink:"/docs/get-started/docker"}},c=[{value:"Get Started",id:"get-started",children:[]},{value:"Develop",id:"develop",children:[]},{value:"Guides",id:"guides",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Operations",id:"operations",children:[]},{value:"Third-party tools",id:"third-party-tools",children:[]},{value:"Concepts",id:"concepts",children:[]},{value:"Reference",id:"reference",children:[{value:"APIs",id:"apis",children:[]},{value:"Command-line options",id:"command-line-options",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"ILP Client libraries",id:"ilp-client-libraries",children:[]},{value:"Data Types",id:"data-types",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Operators",id:"operators",children:[]},{value:"SQL",id:"sql",children:[]}]},{value:"Support",id:"support",children:[]}],p={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"QuestDB is a relational column-oriented database designed for time series and\nevent data. It uses SQL with extensions for time series to assist with real-time\nanalytics. These pages cover core concepts of QuestDB, including setup steps,\nusage guides, and reference documentation for syntax, APIs and configuration."),(0,i.kt)("h2",{id:"get-started"},"Get Started"),(0,i.kt)("p",null,"This section explains how to install and run QuestDB using one of the following\nmethods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/get-started/docker/"},"Docker")," for repeatable, portable and scalable\ninstallations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/get-started/binaries/"},"Binaries")," for direct downloads to run on Linux,\nmacOS or Windows"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/get-started/homebrew/"},"Homebrew")," for running QuestDB on macOS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/get-started/first-database/"},"Create your first database")," provides a\nguide once QuestDB is running"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/get-started/learn-more/"},"Learn more")," is a selection of useful concepts\nand guides for new QuestDB users")),(0,i.kt)("h2",{id:"develop"},"Develop"),(0,i.kt)("p",null,"This section describes how to connect to QuestDB using a variety of tools and\nprogramming languages through our various network endpoints."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/develop/connect"},"Connect")," to the database through our various\nendpoints. Learn which protocol is best for different use cases")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/develop/insert-data"},"Insert data")," using the InfluxDB Line Protocol,\nPostgreSQL wire protocol or our HTTP REST API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/develop/query-data"},"Query data")," with SQL queries via the PostgreSQL\nWire Protocol or exported to JSON or CSV via our HTTP REST API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/develop/web-console"},"Web Console")," for quick SQL queries, charting and\nCSV upload/export functionality"))),(0,i.kt)("h2",{id:"guides"},"Guides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides/importing-data"},"Large CSV import (COPY SQL)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides/importing-data-rest"},"Small CSV import (REST API)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides/modifying-data"},"Modifying Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides/working-with-timestamps-timezones"},"Timestamps and time zones")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/guides/out-of-order-commit-lag"},"Out-of-order commit lag"))),(0,i.kt)("h2",{id:"deployment"},"Deployment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/deployment/aws-official-ami"},"AWS Marketplace AMI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/deployment/kubernetes"},"Kubernetes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/deployment/google-cloud-platform"},"Google Cloud Platform")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/deployment/digitalocean"},"DigitalOcean Droplet"))),(0,i.kt)("h2",{id:"operations"},"Operations"),(0,i.kt)("p",null,"This section contains resources for managing QuestDB instances and has dedicated\npages for the following topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/operations/design-for-performance"},"Design for performance")," for\nconfiguring table settings to improve performance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/operations/capacity-planning"},"Capacity planning")," for configuring server\nsettings and system resources"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/operations/data-retention"},"Data retention")," strategy to delete old data\nand save disk space"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/operations/health-monitoring"},"Health monitoring")," endpoint for\ndetermining the status of the instance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/operations/backup"},"Backup and restore")," using filesystem and\npoint-in-time backup functionality. Notes for cloud providers.")),(0,i.kt)("h2",{id:"third-party-tools"},"Third-party tools"),(0,i.kt)("p",null,"This section describes how to integrate QuestDB with third-party tools and\nutilities for collecting metrics and visualizing data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/third-party-tools/prometheus"},"Prometheus")," monitoring and alerting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/third-party-tools/grafana"},"Grafana")," instructions for connecting QuestDB\nas a datasource for building visualizations and dashboards"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/third-party-tools/kafka/overview"},"Kafka")," guide for ingesting data from\nKafka topics into QuestDB"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/third-party-tools/telegraf"},"Telegraf")," guide for collecting system\nmetrics, specifying QuestDB as an output and visualizing the results")),(0,i.kt)("h2",{id:"concepts"},"Concepts"),(0,i.kt)("p",null,"This section describes the architecture of QuestDB, how it stores and queries\ndata, and introduces features and capabilities unique to the system."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concept/storage-model"},"Storage model")," describes how QuestDB stores\nrecords and partitions within tables"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concept/designated-timestamp"},"Designated timestamp")," is a core feature\nthat enables time-oriented language capabilities and partitioning"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concept/sql-extensions"},"SQL extensions")," allow performant time series\nanalysis with a concise syntax"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concept/jit-compiler"},"JIT compiler")," to speed up ",(0,i.kt)("inlineCode",{parentName:"li"},"WHERE")," clauses"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concept/partitions"},"Partitions")," can be used to perform time-based queries more efficiently"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concept/symbol"},"Symbol")," type makes storing and retrieving repetitive\nstrings efficient"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concept/indexes"},"Indexes")," can be used for faster read access on\nspecific columns"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concept/geohashes"},"Geospatial data")," with geohashes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concept/root-directory-structure"},"Root directory")," describes the\ndirectory contents of QuestDB for storage and configuration")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("p",null,"This section contains the reference documentation for the following categories:"),(0,i.kt)("h3",{id:"apis"},"APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/api/rest"},"REST")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/api/postgres"},"Postgres")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/api/ilp/overview"},"InfluxDB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/api/java-embedded"},"Java (embedded)"))),(0,i.kt)("h3",{id:"command-line-options"},"Command-line options"),(0,i.kt)("p",null,"The following resource provides info on options that may be passed to QuestDB\nwhen starting services:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/command-line-options"},"Command-line options")," for starting and\nrunning QuestDB from an executable")),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/configuration"},"configuration")," page shows all the properties\nthat can be used to customize QuestDB."),(0,i.kt)("h3",{id:"ilp-client-libraries"},"ILP Client libraries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/clients/overview"},"Clients overview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/clients/java_ilp"},"Java ILP client"))),(0,i.kt)("h3",{id:"data-types"},"Data Types"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/sql/datatypes"},"data types")," page lists the datatypes that\ncan be used in QuestDB."),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/function/aggregation"},"Aggregate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/function/analytic"},"Analytic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/function/binary"},"Binary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/function/boolean"},"Boolean")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/function/conditional"},"Conditional")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/function/date-time"},"Date and time")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/function/meta"},"Meta")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/function/numeric"},"Numeric")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/function/random-value-generator"},"Random value generator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/function/row-generator"},"Row generator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/function/spatial"},"Spatial")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/function/text"},"Text")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/function/timestamp-generator"},"Timestamp generator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/function/timestamp"},"Timestamp"))),(0,i.kt)("h3",{id:"operators"},"Operators"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/operators/bitwise"},"Bitwise")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/operators/pattern-matching"},"Pattern matching")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/operators/spatial"},"Spatial"))),(0,i.kt)("h3",{id:"sql"},"SQL"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/datatypes"},"SQL Execution order")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/datatypes"},"Data types")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/alter-table-add-column"},"ALTER TABLE ADD COLUMN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/alter-table-rename-column"},"ALTER TABLE RENAME COLUMN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/alter-table-drop-column"},"ALTER TABLE DROP COLUMN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/alter-table-attach-partition"},"ALTER TABLE ATTACH PARTITION")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/alter-table-detach-partition"},"ALTER TABLE DETACH PARTITION")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/alter-table-drop-partition"},"ALTER TABLE DROP PARTITION")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/alter-table-set-param"},"ALTER TABLE SET PARAM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/alter-table-alter-column-add-index"},"ALTER TABLE ALTER COLUMN ADD INDEX")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/alter-table-alter-column-drop-index"},"ALTER TABLE ALTER COLUMN DROP INDEX")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/alter-table-alter-column-cache"},"ALTER TABLE ALTER COLUMN CACHE | NOCACHE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/backup"},"BACKUP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/case"},"CASE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/cast"},"CAST")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/copy"},"COPY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/create-table"},"CREATE TABLE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/distinct"},"DISTINCT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/fill"},"FILL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/drop"},"DROP TABLE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/group-by"},"GROUP BY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/insert"},"INSERT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/join"},"JOIN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/latest-on"},"LATEST ON")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/limit"},"LIMIT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/order-by"},"ORDER BY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/reindex"},"REINDEX")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/rename"},"RENAME TABLE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/sample-by"},"SAMPLE BY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/select"},"SELECT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/show"},"SHOW")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/snapshot"},"SNAPSHOT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/truncate"},"TRUNCATE TABLE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/union-except-intersect"},"UNION EXCEPT INTERSECT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/vacuum-table"},"VACUUM TABLE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/where"},"WHERE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/sql/with"},"WITH"))),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"For hints on diagnosing common configuration issues, see the following\nresources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/troubleshooting/faq"},"Troubleshooting FAQ")," guide with solutions for\nvarious HW & SW configuration issues"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/troubleshooting/os-error-codes"},"List of OS error codes")," page with the\nlist of Operating System error codes")),(0,i.kt)("p",null,"We are happy to help with any question you may have, particularly to help you\noptimize the performance of your application. Feel free to reach out using the\nfollowing channels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https:///issues"},"Raise an issue on GitHub")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://"},"Join the Community Slack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://"},"QuestDB on Stack Overflow")),(0,i.kt)("li",{parentName:"ul"},"or email us at ",(0,i.kt)("a",{parentName:"li",href:"mailto:hello@questdb.io"},"hello@questdb.io"))))}u.isMDXComponent=!0}}]);