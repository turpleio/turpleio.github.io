"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[1835],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},394:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(83117),o=a(80102),r=(a(67294),a(3905)),i=a(46092),s=a(72525),l=["components"],c={title:"Realtime crypto tracker with Kafka and QuestDB",author:"Yitaek Hwang",author_title:"Guest",author_url:"https://github.com/Yitaek",author_image_url:"https://avatars.githubusercontent.com/Yitaek",description:"Use Python to send real-time cryptocurrency metrics to Kafka topics, ingest to QuestDB, and calculate moving averages with Pandas.",keywords:["timeseries","crypto","kafka","pandas","python"],tags:["tutorial","python","pandas","kafka","crypto"],image:"/img/blog/shared/og-kafka-bitcoin.png"},p={permalink:"/blog/2021/02/18/realtime-crypto-tracker-with-kafka-and-questdb",source:"@site/blog/2021-02-18-realtime-crypto-tracker-with-kafka-and-questdb.mdx",title:"Realtime crypto tracker with Kafka and QuestDB",description:"Use Python to send real-time cryptocurrency metrics to Kafka topics, ingest to QuestDB, and calculate moving averages with Pandas.",date:"2021-02-18T00:00:00.000Z",formattedDate:"February 18, 2021",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"python",permalink:"/blog/tags/python"},{label:"pandas",permalink:"/blog/tags/pandas"},{label:"kafka",permalink:"/blog/tags/kafka"},{label:"crypto",permalink:"/blog/tags/crypto"}],readingTime:8.69,truncated:!1,prevItem:{title:"Real-time stock price alerts using Python, Grafana and QuestDB",permalink:"/blog/2021/03/09/realtime-stock-alerts-python-grafana-questdb"},nextItem:{title:"QuestDB 5.0.6 Release Highlights, January 2021",permalink:"/blog/2021/02/05/questdb-release-5-0-6-postgres-wire"}},u=[{value:"Background",id:"background",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Project setup",id:"project-setup",children:[]},{value:"Setting up Kafka &amp; QuestDB",id:"setting-up-kafka--questdb",children:[]},{value:"Postgres sink",id:"postgres-sink",children:[]},{value:"Polling Coinbase",id:"polling-coinbase",children:[]},{value:"Querying QuestDB",id:"querying-questdb",children:[]},{value:"Calculate moving average",id:"calculate-moving-average",children:[]},{value:"Wrapping up",id:"wrapping-up",children:[]}],m={toc:u};function d(e){var t=e.components,a=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{alt:"A photograph of a laptop displaying candle charts of stock market data",height:433,src:"/img/blog/2021-02-18/banner.jpg",width:650,mdxType:"Banner"},"Photo by ",(0,r.kt)("a",{href:"https://unsplash.com/photos/ZzOa5G8hSPI"},"M. B. M.")," via"," ",(0,r.kt)("a",{href:"https://unsplash.com"},"Unsplash")),(0,r.kt)("p",null,"This submission comes from one of our community contributors\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Yitaek"},"Yitaek Hwang")," who has put together an excellent\ntutorial that shows how to use Python to send real-time cryptocurrency metrics\ninto Kafka topics, store these records in QuestDB, and perform moving average\ncalculations on this time series data with Pandas."),(0,r.kt)("p",null,"Thanks for your contribution, Yitaek!"),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Bitcoin soars past 50,000 USD for the first time \u2014\n",(0,r.kt)("a",{parentName:"p",href:"https://edition.cnn.com/2021/02/16/investing/bitcoin-50000-price-record/index.html"},"CNN"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tesla invests 1.5 billion USD in bitcoin, will start accepting it as payment \u2014\n",(0,r.kt)("a",{parentName:"p",href:"https://www.washingtonpost.com/business/2021/02/08/tesla-bitcoin-musk-dogecoin/"},"Washington Post"))),(0,r.kt)("p",null,"Not a day goes by without some crypto news stealing the headlines these days.\nFrom institutional support of Bitcoin to central banks around the world\nexploring some form of digital currency, interest in cryptocurrency has never\nbeen higher. This is also reflected in the daily exchange volume:"),(0,r.kt)(s.Z,{alt:"A chart showing cryptocurrency exchange volumes from 2017 to present",height:398,src:"/img/blog/2021-02-18/cryptocompare.png",width:650,mdxType:"Screenshot"}),(0,r.kt)("p",null,"As someone interested in the future of DeFi\n(",(0,r.kt)("a",{parentName:"p",href:"https://yitaek.medium.com/intro-to-defi-b4ab2ec0f156"},"decentralized finance"),"),\nI wanted to better track the price of different cryptocurrencies and store them\ninto a timeseries database for further analysis. I found an interesting talk by\nLudvig Sandman and Bruce Zulu at Kafka Summit London 2019,\n",(0,r.kt)("a",{parentName:"p",href:"https://www.confluent.io/kafka-summit-lon19/using-kafka-streams-analyze-trading-crypto-exchanges/"},"Using Kafka Streams to Analyze Live Trading Activity for Crypto Exchanges"),",\nso I decided to leverage Kafka and modify it for my own use."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," with at least 4GB memory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Python 3.7+")," and\n",(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/project/pip/"},"pip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Yitaek/kafka-crypto-questdb"},"GitHub repository")," which\ncontains the source for the examples below")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Memory can be increased on Docker Desktop in ",(0,r.kt)("strong",{parentName:"p"},"Settings -> Resources\n-> Memory")," and increasing the default limit from ",(0,r.kt)("inlineCode",{parentName:"p"},"2GB")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"4GB"),"."),(0,r.kt)("h2",{id:"project-setup"},"Project setup"),(0,r.kt)("p",null,"At a high level, this project polls the public Coinbase API for the price of\nBitcoin, Ethereum, and Chainlink. This information is then published onto\nindividual topics on Kafka (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"topic_BTC"),"). The raw price information is sent\nto a QuestDB via Kafka Connect to populate the timeseries database. At the same\ntime, a separate consumer also pulls that data and calculates a moving average\nfor a quick trend analysis."),(0,r.kt)(s.Z,{alt:"A diagram showing the flow of information in this tutorial from Coinbase to Kafka and finally to QuestDB",height:92,src:"/img/blog/2021-02-18/stack.png",width:650,mdxType:"Screenshot"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:Yitaek/kafka-crypto-questdb.git\n")),(0,r.kt)("p",null,"The codebase is organized into three parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"./docker-compose"),": holds docker-compose file to start QuestDB, Kafka\n(zookeeper, broker & kafka connect), and a JSON file to initialize Kafka\nConnect"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"./docker"),": Dockerfile to build Kafka Connect image (pre-built image is\navailable via docker-compose)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*.py"),": Python files to grab latest pricing information from Coinbase,\npublishes information to Kafka, and calculates a moving average")),(0,r.kt)("p",null,"If you would like to analyze different cryptocurrencies or extend the simple\nmoving average example with a more complicated algorithm like relative strength\nindex analysis, feel free to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Yitaek/kafka-crypto-questdb"},"fork the repo on GitHub"),"."),(0,r.kt)("h2",{id:"setting-up-kafka--questdb"},"Setting up Kafka & QuestDB"),(0,r.kt)("p",null,"Before pulling data from Coinbase, we need a running instance of a Kafka cluster\nand QuestDB. In the repo, I have a working docker-compose file with Confluent\nKafka components (i.e. Zookeeper, Kafka Connect, Kafka Broker) and QuestDB. If\nyou would like to run this on the cloud or run it locally, follow the\ninstructions on the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/quickstart/index.html"},"Confluent website"),".\nOtherwise simply run the docker-compose file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd docker-compose\ndocker-compose up\n")),(0,r.kt)("p",null,"The docker-compose file runs the following services:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"QuestDB"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/display/ZOOKEEPER"},"Zookeeper")," for Kafka\nconfig information, distributed sync, and group services"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kafka.apache.org/documentation/#intro_nutshell"},"Kafka Broker")," for\nreceiving and storing messages and for consumers to fetch messages by topic"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kafka.apache.org/documentation/#connect"},"Kafka Connect")," with JDBC\ndriver for streaming data between Apache Kafka and other systems")),(0,r.kt)("p",null,"The Kafka Connect image is based on ",(0,r.kt)("inlineCode",{parentName:"p"},"confluentinc/cp-kafka-connect-base:6.1.0"),".\nIf you wish to modify this image (e.g. add a new connector or modify the bootup\nprocess), you can override the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Yitaek/kafka-crypto/blob/main/docker/Dockerfile"},"Dockerfile"),"\nand build it locally."),(0,r.kt)("p",null,"Wait for the Kafka cluster to come up and check the logs in the ",(0,r.kt)("inlineCode",{parentName:"p"},"connect"),"\ncontainer until you see the following messages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"[2021-02-...] INFO [Worker clientId=connect-1 ... ] Starting connectors and tasks using config offset -1 (org.apache.kafka.connect.runtime.distributed.DistributedHerder)\n[2021-02-...] INFO [Worker clientId=connect-1 ... ] Finished starting connectors and tasks (org.apache.kafka.connect.runtime.distributed.DistributedHerder)\n[2021-02-...] INFO [Worker clientId=connect-1 ... ] Session key updated (org.apache.kafka.connect.runtime.distributed.DistributedHerder)\n")),(0,r.kt)("h2",{id:"postgres-sink"},"Postgres sink"),(0,r.kt)("p",null,"At this point, we have a healthy Kafka cluster and a running instance of\nQuestDB, but they are not connected. Since QuestDB supports the Kafka Connect\nJDBC driver, we can leverage the Postgres sink to populate our database\nautomatically. Post this connector definition to our Kafka Connect container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="From ./docker-compose directory"',title:'"From',"./docker-compose":!0,'directory"':!0},'curl -X POST -H "Accept:application/json" -H "Content-Type:application/json" \\\n--data @postgres-sink-btc.json http://localhost:8083/connectors\n')),(0,r.kt)("p",null,"The contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres-sink-btc.json")," we are sending holds the following\nconfiguration settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "postgres-sink-btc",\n  "config": {\n    "connector.class": "io.confluent.connect.jdbc.JdbcSinkConnector",\n    "tasks.max": "1",\n    "topics": "topic_BTC",\n    "key.converter": "org.apache.kafka.connect.storage.StringConverter",\n    "value.converter": "org.apache.kafka.connect.json.JsonConverter",\n    "connection.url": "jdbc:postgresql://questdb:8812/qdb?useSSL=false",\n    "connection.user": "admin",\n    "connection.password": "quest",\n    "key.converter.schemas.enable": "false",\n    "value.converter.schemas.enable": "true",\n    "auto.create": "true",\n    "insert.mode": "insert",\n    "pk.mode": "none"\n  }\n}\n')),(0,r.kt)("p",null,"Some important fields to note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"topics:")," Kafka topic to consume and convert into Postgres format"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"connection:")," Using default credentials for QuestDB (",(0,r.kt)("inlineCode",{parentName:"li"},"admin"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"quest"),") on\nport ",(0,r.kt)("inlineCode",{parentName:"li"},"8812")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value.converter:")," This example uses JSON with schema, but you can also use\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/database/nosql-12.1.3.0/GettingStartedGuide/avroschemas.html"},"Avro"),"\nor raw JSON. If you would like to override the default configuration, you can\nrefer to\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/kafka-connector/v1.3/kafka-sink-data-formats/"},"the Kafka sink connector guide"),"\nfrom MongoDB")),(0,r.kt)("h2",{id:"polling-coinbase"},"Polling Coinbase"),(0,r.kt)("p",null,"Now our that our Kafka-QuestDB connection is made, we can start pulling data\nfrom Coinbase. The Python code requires ",(0,r.kt)("inlineCode",{parentName:"p"},"numpy"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka-python"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"pandas")," to\nrun. Using pip, install those packages and run the ",(0,r.kt)("inlineCode",{parentName:"p"},"getData.py")," script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\npython getData.py\n")),(0,r.kt)("p",null,"It will now print out debug message with pricing information as well as the\nschema we\u2019re using to populate QuestDB:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Initializing Kafka producer at 2021-02-17 14:38:18.655069\nInitialized Kafka producer at 2021-02-17 14:38:18.812354\nAPI request at time 2021-02-17 14:38:19.170623Record: {'schema': {'type': 'struct', 'fields': [{'type': 'string', 'optional': False, 'field': 'currency'}, {'type': 'float', 'optional': False, 'field': 'amount'}, {'type': 'string', 'optional': False, 'field': 'timestamp'}], 'optional': False, 'name': 'coinbase'}, 'payload': {'timestamp': datetime.datetime(2021, 2, 17, 14, 38, 19, 170617), 'currency': 'BTC', 'amount': 50884.75}}API request at time 2021-02-17 14:38:19.313046\nRecord: {'schema': {'type': 'struct', 'fields': [{'type': 'string', 'optional': False, 'field': 'currency'}, {'type': 'float', 'optional': False, 'field': 'amount'}, {'type': 'string', 'optional': False, 'field': 'timestamp'}], 'optional': False, 'name': 'coinbase'}, 'payload': {'timestamp': datetime.datetime(2021, 2, 17, 14, 38, 19, 313041), 'currency': 'ETH', 'amount': 1809.76}}API request at time 2021-02-17 14:38:19.471573\nRecord: {'schema': {'type': 'struct', 'fields': [{'type': 'string', 'optional': False, 'field': 'currency'}, {'type': 'float', 'optional': False, 'field': 'amount'}, {'type': 'string', 'optional': False, 'field': 'timestamp'}], 'optional': False, 'name': 'coinbase'}, 'payload': {'timestamp': datetime.datetime(2021, 2, 17, 14, 38, 19, 471566), 'currency': 'LINK', 'amount': 31.68216}}API request at time 2021-02-17 14:38:23.978928\nRecord: {'schema': {'type': 'struct', 'fields': [{'type': 'string', 'optional': False, 'field': 'currency'}, {'type': 'float', 'optional': False, 'field': 'amount'}, {'type': 'string', 'optional': False, 'field': 'timestamp'}], 'optional': False, 'name': 'coinbase'}, 'payload': {'timestamp': datetime.datetime(2021, 2, 17, 14, 38, 23, 978918), 'currency': 'BTC', 'amount': 50884.75}}...\n")),(0,r.kt)("h2",{id:"querying-questdb"},"Querying QuestDB"),(0,r.kt)("p",null,"QuestDB is a fast, open-source, timeseries database with SQL support. This makes\nit a great candidate to store financial market data for further historical trend\nanalysis and generating trade signals. By default, QuestDB ships with a console\nUI exposed on port 9000. Navigate to localhost:9000 and query Bitcoin tracking\ntopic ",(0,r.kt)("inlineCode",{parentName:"p"},"topic_BTC")," to see price data stream in:"),(0,r.kt)(s.Z,{alt:"The Web Console in QuestDB showing results from a table of Bitcoin records",height:420,src:"/img/blog/2021-02-18/questdb.png",width:650,mdxType:"Screenshot"}),(0,r.kt)("p",null,"You can repeat this process for the other topics as well. If you prefer to run\nwithout a UI, you can also use the REST API to check:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -G \\\n--data-urlencode "query=select * from topic_BTC" \\\nhttp://localhost:9000/exp\n')),(0,r.kt)("p",null,"The QuestDB console UI also provides the ability to generate basic graphs:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Chart")," tab underneath the Tables"),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"line")," as the chart type, ",(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," as the label"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Draw"))),(0,r.kt)(s.Z,{alt:"The Web Console in QuestDB showing how to visualize results from a table of Bitcoin records on a graph",height:261,src:"/img/blog/2021-02-18/questdb-chart.png",width:650,mdxType:"Screenshot"}),(0,r.kt)("p",null,"The QuestDB native charting capabilities are limited to a few graph types, so\nfor more advanced visualization, check out my previous guide on streaming heart\nrate data to QuestDB under the\n",(0,r.kt)("a",{parentName:"p",href:"/blog/2021/02/05/streaming-heart-rate-data-with-iot-core-and-questdb#visualizing-data-with-grafana"},"Visualizing data with Grafana"),"\nsection."),(0,r.kt)("h2",{id:"calculate-moving-average"},"Calculate moving average"),(0,r.kt)("p",null,"While we store the raw data on QuestDB for more sophisticated analysis, we can\nalso consume from the same topics to calculate a quick moving average. This may\nbe useful if you want to also post these records to another Kafka topic that you\nmay use on a dashboard or to set alerts on pricing trends."),(0,r.kt)("p",null,"On a separate terminal, run the moving average script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python movingAverage.py\n")),(0,r.kt)("p",null,"It will print out the moving average of 25 data points and post it to\n",(0,r.kt)("inlineCode",{parentName:"p"},"topic_<crypto>_ma_25")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"Starting Apache Kafka consumers and producer\nInitializing Kafka producer at 2021-02-17 16:28:33.584649\nInitialized Kafka producer at 2021-02-17 16:28:33.699208Consume record from topic 'topic_BTC' at time 2021-02-17 16:28:34.933318\nProduce record to topic 'topic_BTC_ma_25' at time 2021-02-17 16:28:35.072581\nProduce record to topic 'topic_BTC_ma_25' at time 2021-02-17 16:28:35.075352\nProduce record to topic 'topic_BTC_ma_25' at time 2021-02-17 16:28:35.077106\nProduce record to topic 'topic_BTC_ma_25' at time 2021-02-17 16:28:35.088821\nProduce record to topic 'topic_BTC_ma_25' at time 2021-02-17 16:28:35.091865\nProduce record to topic 'topic_BTC_ma_25' at time 2021-02-17 16:28:35.094458\nProduce record to topic 'topic_BTC_ma_25' at time 2021-02-17 16:28:35.096814\nProduce record to topic 'topic_BTC_ma_25' at time 2021-02-17 16:28:35.098512\nProduce record to topic 'topic_BTC_ma_25' at time 2021-02-17 16:28:35.100150\nProduce record to topic 'topic_BTC_ma_25' at time 2021-02-17 16:28:35.103512\n")),(0,r.kt)("p",null,"If you wish to also populate these data points into QuestDB, supplement the JSON\ndata with schema information in ",(0,r.kt)("inlineCode",{parentName:"p"},"movingAverage.py")," similar to the way it is\ndefined in the new data JSON block in ",(0,r.kt)("inlineCode",{parentName:"p"},"getData.py"),". Then create another Postgres\nsink via curl with topic set as ",(0,r.kt)("inlineCode",{parentName:"p"},"topic<crypto>_ma_25"),"."),(0,r.kt)("h2",{id:"wrapping-up"},"Wrapping up"),(0,r.kt)("p",null,"To stop streaming data, simply stop the Python scripts. To stop and remove the\nKafka cluster / QuestDB services, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose down\n")),(0,r.kt)("p",null,"While this is a simple example, you can extend this to optimize the data format\nwith Avro, connect it with your Coinbase account to execute trades based on\ntrading signals, or test out different statistical methods on the raw data. Feel\nfree to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Yitaek/kafka-crypto-questdb"},"submit a PR")," if you\nhave a suggestion or improvements to make!"),(0,r.kt)("p",null,"If you like this content, we'd love to know your thoughts! Feel free to share\nyour feedback or just come and say hello in the\n",(0,r.kt)("a",{parentName:"p",href:"https://"},"QuestDB Community Slack"),"."))}d.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}a.d(t,{Z:function(){return o}})}}]);