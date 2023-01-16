"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[4231],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},17687:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],i={title:"QuestDB Kafka connector",description:"QuestDB ships a QuestDB Kafka connector for ingesting messages from Kafka via the ILP protocol."},s={unversionedId:"third-party-tools/kafka/questdb-kafka",id:"third-party-tools/kafka/questdb-kafka",isDocsHomePage:!1,title:"QuestDB Kafka connector",description:"QuestDB ships a QuestDB Kafka connector for ingesting messages from Kafka via the ILP protocol.",source:"@site/docs/third-party-tools/kafka/questdb-kafka.md",sourceDirName:"third-party-tools/kafka",slug:"/third-party-tools/kafka/questdb-kafka",permalink:"/docs/third-party-tools/kafka/questdb-kafka",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/third-party-tools/kafka/questdb-kafka.md",version:"current",frontMatter:{title:"QuestDB Kafka connector",description:"QuestDB ships a QuestDB Kafka connector for ingesting messages from Kafka via the ILP protocol."},sidebar:"docs",previous:{title:"Ingestion from Kafka Overview",permalink:"/docs/third-party-tools/kafka/overview"},next:{title:"JDBC connector",permalink:"/docs/third-party-tools/kafka/jdbc"}},p=[{value:"Integration guide",id:"integration-guide",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Configure Kafka",id:"configure-kafka",children:[]},{value:"Start Kafka",id:"start-kafka",children:[]},{value:"Publish messages",id:"publish-messages",children:[]},{value:"Verify the integration",id:"verify-the-integration",children:[]},{value:"Additional sample projects",id:"additional-sample-projects",children:[]}]},{value:"Configuration manual",id:"configuration-manual",children:[{value:"Configuration Options",id:"configuration-options",children:[]},{value:"How does the connector work?",id:"how-does-the-connector-work",children:[]},{value:"Supported serialization formats",id:"supported-serialization-formats",children:[]},{value:"Designated timestamps",id:"designated-timestamps",children:[]},{value:"Symbol",id:"symbol",children:[]},{value:"Numeric type inference for floating point type",id:"numeric-type-inference-for-floating-point-type",children:[]},{value:"Target table considerations",id:"target-table-considerations",children:[]}]},{value:"FAQ",id:"faq",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"QuestDB ships a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/questdb/kafka-questdb-connector"},"QuestDB Kafka connector"),"\nfor fast ingestion from Kafka into QuestDB."),(0,o.kt)("p",null,"This page has the following main sections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A QuestDB Kafka connector integration guide"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"#configuration-manual"},"configuration manual")," for the connector"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#faq"},"FAQ"))),(0,o.kt)("h2",{id:"integration-guide"},"Integration guide"),(0,o.kt)("p",null,"This guide shows the steps to use the QuestDB Kafka connector to read JSON data\nfrom Kafka topics and write them as rows into a QuestDB table."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You will need the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kafka"),(0,o.kt)("li",{parentName:"ul"},"A running QuestDB instance")),(0,o.kt)("h3",{id:"configure-kafka"},"Configure Kafka"),(0,o.kt)("p",null,"Before starting Kafka, the following steps must be completed:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the connector file.")),(0,o.kt)("p",null,"The Apache Kafka distribution contains the Kafka Connect framework, but the\nQuestDB-specific components need to be downloaded from\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/questdb/kafka-questdb-connector/releases/latest"},"the QuestDB Kafka connector GH page"),",\nunder the zip archive named ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka-questdb-connector-<version>-bin.zip"),"."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Copy the file to the Kafka ",(0,o.kt)("inlineCode",{parentName:"li"},"libs")," directory.")),(0,o.kt)("p",null,"Once downloaded, unzip the contents of the archive and copy the required ",(0,o.kt)("inlineCode",{parentName:"p"},".jar"),"\nfiles to the Kafka ",(0,o.kt)("inlineCode",{parentName:"p"},"libs")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"unzip kafka-questdb-connector-*-bin.zip\ncd kafka-questdb-connector\ncp ./*.jar /path/to/kafka_2.13-2.6.0/libs\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can automate downloading the latest connector package by running this\ncommand:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -s https://api.github.com/repos/questdb/kafka-questdb-connector/releases/latest |\njq -r '.assets[]|select(.content_type == \"application/zip\")|.browser_download_url'|\nwget -qi -\n")))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Set the configuration file.")),(0,o.kt)("p",null,"A configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"/path/to/kafka/config/questdb-connector.properties")," must\nbe created for Kafka Connect in the standalone mode. The host and port of the\nrunning QuestDB server must be defined. A topic can be specified under the\n",(0,o.kt)("inlineCode",{parentName:"p"},"topics={mytopic}")," key."),(0,o.kt)("p",null,"The example below creates a configuration file. It assumes a running QuestDB\nserver on the ILP default port, ",(0,o.kt)("inlineCode",{parentName:"p"},"9009"),", creates a reader from a Kafka topic,\n",(0,o.kt)("inlineCode",{parentName:"p"},"example-topic"),", and writes into a QuestDB table, ",(0,o.kt)("inlineCode",{parentName:"p"},"example_table"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Create a configuration file"',title:'"Create',a:!0,configuration:!0,'file"':!0},"name=questdb-sink\nconnector.class=io.questdb.kafka.QuestDBSinkConnector\nhost=localhost:9009\ntopics=example-topic\ntable=example_table\ninclude.key=false\nvalue.converter=org.apache.kafka.connect.json.JsonConverter\nvalue.converter.schemas.enable=false\nkey.converter=org.apache.kafka.connect.storage.StringConverter\n")),(0,o.kt)("h3",{id:"start-kafka"},"Start Kafka"),(0,o.kt)("p",null,"The commands listed in this section must be run from the Kafka home directory\nand in the order shown below."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start the Kafka Zookeeper used to coordinate the server:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"bin/zookeeper-server-start.sh  config/zookeeper.properties\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Start a Kafka server:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"bin/kafka-server-start.sh  config/server.properties\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Start the QuestDB Kafka connector:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"bin/connect-standalone.sh config/connect-standalone.properties config/questdb-connector.properties\n")),(0,o.kt)("h3",{id:"publish-messages"},"Publish messages"),(0,o.kt)("p",null,"Messages can be published via the console producer script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"bin/kafka-console-producer.sh --topic example-topic --bootstrap-server localhost:9092\n")),(0,o.kt)("p",null,"A greater-than symbol, ",(0,o.kt)("inlineCode",{parentName:"p"},">"),", indicates that a message can be published to the\nexample topic from the interactive session. Paste the following minified JSON as\na single line to publish the message and create the table ",(0,o.kt)("inlineCode",{parentName:"p"},"example-topic")," in the\nQuestDB instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"firstname": "Arthur", "lastname": "Dent", "age": 42}\n')),(0,o.kt)("h3",{id:"verify-the-integration"},"Verify the integration"),(0,o.kt)("p",null,"To verify that the data has been ingested into the ",(0,o.kt)("inlineCode",{parentName:"p"},"example-topic")," table, the\nfollowing request to QuestDB's ",(0,o.kt)("inlineCode",{parentName:"p"},"/exp")," REST API endpoint can be made to export\nthe table contents via the curl command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -G \\\n  --data-urlencode \"query=select * from 'example_table'\" \\\n  http://localhost:9000/exp\n")),(0,o.kt)("p",null,"The expected response based on the example JSON message published above will be\nsimilar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},'"firstname","age","lastname","timestamp"\n"Arthur",42,"Dent","2022-11-01T13:11:55.558108Z"\n')),(0,o.kt)("p",null,"If you can see the expected result then congratulations, you have successfully\ncreated and executed your first Kafka to QuestDB pipeline! \ud83c\udf89"),(0,o.kt)("h3",{id:"additional-sample-projects"},"Additional sample projects"),(0,o.kt)("p",null,"You can find additional sample projects on the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/questdb/kafka-questdb-connector/tree/main/kafka-questdb-connector-samples"},"QuestDB Kafka connector"),"\nGithub project page. It includes a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/questdb/kafka-questdb-connector/tree/main/kafka-questdb-connector-samples/stocks"},"sample integration"),"\nwith ",(0,o.kt)("a",{parentName:"p",href:"https://debezium.io/"},"Debezium")," for\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Change_data_capture"},"Change Data Capture")," from\nPostgreSQL."),(0,o.kt)("h2",{id:"configuration-manual"},"Configuration manual"),(0,o.kt)("p",null,"This section lists configuration options as well as further information about\nthe Kafka Connect connector."),(0,o.kt)("h3",{id:"configuration-options"},"Configuration Options"),(0,o.kt)("p",null,"The connector supports the following configuration options:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"topics"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"orders"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A"),(0,o.kt)("td",{parentName:"tr",align:null},"Topics to read from")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"key.converter"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("sub",null,"org.apache.kafka.connect.storage.StringConverter")),(0,o.kt)("td",{parentName:"tr",align:null},"N/A"),(0,o.kt)("td",{parentName:"tr",align:null},"Converter for keys stored in Kafka")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"value.converter"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("sub",null,"org.apache.kafka.connect.json.JsonConverter")),(0,o.kt)("td",{parentName:"tr",align:null},"N/A"),(0,o.kt)("td",{parentName:"tr",align:null},"Converter for values stored in Kafka")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"host"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"localhost:9009"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A"),(0,o.kt)("td",{parentName:"tr",align:null},"Host and port where QuestDB server is running")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"table"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"my_table"),(0,o.kt)("td",{parentName:"tr",align:null},"Same as Topic name"),(0,o.kt)("td",{parentName:"tr",align:null},"Target table in QuestDB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"key.prefix"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"from_key"),(0,o.kt)("td",{parentName:"tr",align:null},"key"),(0,o.kt)("td",{parentName:"tr",align:null},"Prefix for key fields")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"value.prefix"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"from_value"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A"),(0,o.kt)("td",{parentName:"tr",align:null},"Prefix for value fields")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("sub",null,"skip.unsupported.types")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"Skip unsupported types")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("sub",null,"timestamp.field.name")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"pickup_time"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A"),(0,o.kt)("td",{parentName:"tr",align:null},"Designated timestamp field name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"timestamp.units"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"micros"),(0,o.kt)("td",{parentName:"tr",align:null},"auto"),(0,o.kt)("td",{parentName:"tr",align:null},"Designated timestamp field units")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"include.key"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"Include message key in target table")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"symbols"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"instrument,stock"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A"),(0,o.kt)("td",{parentName:"tr",align:null},"Comma separated list of columns that should be symbol type")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"doubles"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"volume,price"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A"),(0,o.kt)("td",{parentName:"tr",align:null},"Comma separated list of columns that should be double type")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"username"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"user1"),(0,o.kt)("td",{parentName:"tr",align:null},"admin"),(0,o.kt)("td",{parentName:"tr",align:null},"User name for QuestDB. Used only when token is non-empty")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"token"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("sub",null,"QgHCOyq35D5HocCMrUGJinEsjEscJlC")),(0,o.kt)("td",{parentName:"tr",align:null},"N/A"),(0,o.kt)("td",{parentName:"tr",align:null},"Token for QuestDB authentication")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"tls"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"Use TLS for QuestDB connection")))),(0,o.kt)("h3",{id:"how-does-the-connector-work"},"How does the connector work?"),(0,o.kt)("p",null,"The connector reads data from Kafka topics and writes it to QuestDB tables via\nILP. The connector converts each field in the Kafka message to a column in the\nQuestDB table. Structures and maps are flatted into columns."),(0,o.kt)("p",null,"Example: Consider the following Kafka message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "firstname": "John",\n  "lastname": "Doe",\n  "age": 30,\n  "address": {\n    "street": "Main Street",\n    "city": "New York"\n  }\n}\n')),(0,o.kt)("p",null,"The connector will create a table with the following columns:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"firstname ",(0,o.kt)("sub",null,"string")),(0,o.kt)("th",{parentName:"tr",align:null},"lastname ",(0,o.kt)("sub",null,"string")),(0,o.kt)("th",{parentName:"tr",align:null},"age ",(0,o.kt)("sub",null,"long")),(0,o.kt)("th",{parentName:"tr",align:null},"address_street ",(0,o.kt)("sub",null,"string")),(0,o.kt)("th",{parentName:"tr",align:null},"address_city ",(0,o.kt)("sub",null,"string")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"John"),(0,o.kt)("td",{parentName:"tr",align:null},"Doe"),(0,o.kt)("td",{parentName:"tr",align:null},"30"),(0,o.kt)("td",{parentName:"tr",align:null},"Main Street"),(0,o.kt)("td",{parentName:"tr",align:null},"New York")))),(0,o.kt)("h3",{id:"supported-serialization-formats"},"Supported serialization formats"),(0,o.kt)("p",null,"The connector does not deserialize data independently. It relies on Kafka\nConnect converters. The connector has been tested predominantly with JSON, but\nit should work with any converter, including Avro. Converters can be configured\nusing ",(0,o.kt)("inlineCode",{parentName:"p"},"key.converter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"value.converter")," options, both are included in the\n",(0,o.kt)("a",{parentName:"p",href:"#configuration-options"},"Configuration options")," table above."),(0,o.kt)("h3",{id:"designated-timestamps"},"Designated timestamps"),(0,o.kt)("p",null,"The connector supports\n",(0,o.kt)("a",{parentName:"p",href:"https://questdb.io/docs/concept/designated-timestamp/"},"designated timestamps"),".\nIf the message contains a timestamp field, the connector can use it as a\ntimestamp for the row. The field name must be configured using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp.field.name")," option. The field must either be an integer or a\ntimestamp. When the field is set to an integer, the connector will autodetect\nits units. This works for timestamps after 04/26/1970, 5:46:40 PM. The units can\nalso be configured explicitly using the ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp.units")," configuration, which\nsupports the following values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nanos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"micros")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"millis")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auto")," (default)")),(0,o.kt)("h3",{id:"symbol"},"Symbol"),(0,o.kt)("p",null,"QuestDB supports a special type called\n",(0,o.kt)("a",{parentName:"p",href:"https://questdb.io/docs/concept/symbol/"},"symbol"),". Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"symbols"),"\nconfiguration option to specify which columns should be created as the ",(0,o.kt)("inlineCode",{parentName:"p"},"symbol"),"\ntype."),(0,o.kt)("h3",{id:"numeric-type-inference-for-floating-point-type"},"Numeric type inference for floating point type"),(0,o.kt)("p",null,"When a configured Kafka Connect deserializer provides a schema, the connector\nuses it to determine column types. If a schema is unavailable, the connector\ninfers the type from the value. This might produce unexpected results for\nfloating point numbers, which may be interpreted as ",(0,o.kt)("inlineCode",{parentName:"p"},"long")," initially and\ngenerates an error."),(0,o.kt)("p",null,"Consider this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "instrument": "BTC-USD",\n  "volume": 42\n}\n')),(0,o.kt)("p",null,"Kafka Connect JSON converter deserializes the ",(0,o.kt)("inlineCode",{parentName:"p"},"volume")," field as a ",(0,o.kt)("inlineCode",{parentName:"p"},"long")," value.\nThe connector sends it to the QuestDB server as a ",(0,o.kt)("inlineCode",{parentName:"p"},"long")," value. If the target\ntable does not have a column ",(0,o.kt)("inlineCode",{parentName:"p"},"volume"),", the database creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"long")," column. If\nthe next message contains a floating point value for the ",(0,o.kt)("inlineCode",{parentName:"p"},"volume")," field, the\nconnector sends it to QuestDB as a ",(0,o.kt)("inlineCode",{parentName:"p"},"double")," value. This causes an error because\nthe existing column ",(0,o.kt)("inlineCode",{parentName:"p"},"volume")," is of type ",(0,o.kt)("inlineCode",{parentName:"p"},"long"),"."),(0,o.kt)("p",null,"To avoid this problem, the connector can be configured to send selected numeric\ncolumns as ",(0,o.kt)("inlineCode",{parentName:"p"},"double")," regardless of the actual initial input value. Use the\n",(0,o.kt)("inlineCode",{parentName:"p"},"doubles")," configuration option to specify which columns should the connector\nalways send as the ",(0,o.kt)("inlineCode",{parentName:"p"},"double")," type."),(0,o.kt)("h3",{id:"target-table-considerations"},"Target table considerations"),(0,o.kt)("p",null,"When a target table does not exist in QuestDB, it will be created automatically.\nThis is the recommended approach for development and testing."),(0,o.kt)("p",null,"In production, it's recommended to use the SQL\n",(0,o.kt)("a",{parentName:"p",href:"https://questdb.io/docs/reference/sql/create-table/"},"CREATE TABLE")," keyword,\nbecause it gives you more control over the table schema, allowing per-table\npartitioning, creating indexes, etc."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Does this connector work with Schema Registry? "),(0,o.kt)("p",null,(0,o.kt)("p",null,"The Connector works independently of the serialization strategy used. It relies\non Kafka Connect converters to deserialize data. Converters can be configured\nusing ",(0,o.kt)("inlineCode",{parentName:"p"},"key.converter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"value.converter")," options, see the configuration\nsection above."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"I'm getting this error: \"org.apache.kafka.connect.errors.DataException: JsonConverter with schemas.enable requires 'schema' and 'payload' fields and may not contain additional fields. If you are trying to deserialize plain JSON data, set schemas.enable=false in your converter configuration.\""),(0,o.kt)("p",null,(0,o.kt)("p",null,"This error means that the connector is trying to deserialize data using a\nconverter that expects a schema. The connector does not require schemas, so you\nneed to configure the converter to not expect a schema. For example, if you are\nusing a JSON converter, you need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"value.converter.schemas.enable=false"),"\nor ",(0,o.kt)("inlineCode",{parentName:"p"},"key.converter.schemas.enable=false")," in the connector configuration."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Does this connector work with Debezium?"),(0,o.kt)("p",null,(0,o.kt)("p",null,"Yes, it's been tested with Debezium as a source and a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/questdb/kafka-questdb-connector/tree/main/kafka-questdb-connector-samples/stocks"},"sample project"),"\nis available. Bear in mind that QuestDB is meant to be used as an append-only\ndatabase; hence, updates should be translated as new inserts. The connector\nsupports Debezium's ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtractNewRecordState")," transformation to extract the new\nstate of the record. The transformation by default drops DELETE events, so there\nis no need to handle them explicitly."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"QuestDB is a time series database, how does it fit into Change Data Capture via Debezium?"),(0,o.kt)("p",null,(0,o.kt)("p",null,"QuestDB works with Debezium just great! This is the recommended pattern:\nTransactional applications use a relational database to store the current state\nof the data. QuestDB is used to store the history of changes. Example: Imagine\nyou have a PostgreSQL table with the most recent stock prices. Whenever a stock\nprice changes, an application updates the PostgreSQL table. Debezium captures\neach UPDATE/INSERT and pushes it as an event to Kafka. Kafka Connect QuestDB\nconnector reads the events and inserts them into QuestDB. In this way,\nPostgreSQL will have the most recent stock prices and QuestDB will have the\nhistory of changes. You can use QuestDB to build a dashboard with the most\nrecent stock prices and a chart with the history of changes."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How I can select which fields to include in the target table?"),(0,o.kt)("p",null,(0,o.kt)("p",null,"Use the ReplaceField transformation to remove unwanted fields. For example, if\nyou want to remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," field, you can use the following configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "questdb-sink",\n  "config": {\n    "connector.class": "io.questdb.kafka.QuestDBSinkConnector",\n    "host": "localhost:9009",\n    "topics": "Orders",\n    "table": "orders_table",\n    "key.converter": "org.apache.kafka.connect.storage.StringConverter",\n    "value.converter": "org.apache.kafka.connect.json.JsonConverter",\n    "transforms": "removeAddress",\n    "transforms.removeAddress.type": "org.apache.kafka.connect.transforms.ReplaceField$Value",\n    "transforms.removeAddress.blacklist": "address"\n  }\n}\n')),(0,o.kt)("p",null,"See\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/connect/transforms/replacefield.html#replacefield"},"ReplaceField documentation"),"\nfor more details."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"I need to run Kafka Connect on Java 8, but the connector says it requires Java 11. What should I do? "),(0,o.kt)("p",null,(0,o.kt)("p",null,"The Kafka Connect-specific part of the connectors works with Java 8. The\nrequirement for Java 11 is coming from QuestDB client itself. The zip archive\ncontains 2 JARs: ",(0,o.kt)("inlineCode",{parentName:"p"},"questdb-kafka-connector-VERSION.jar")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"questdb-VERSION.jar"),". You can replace the latter with\n",(0,o.kt)("inlineCode",{parentName:"p"},"questdb-VERSION-jdk8.jar")," from the\n",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.questdb/questdb/6.5.4-jdk8"},"Maven central"),".\nPlease note that this setup is not officially supported, and you may encounter\nissues. If you do, please report them to us."))))}d.isMDXComponent=!0}}]);