"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[8194],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9854:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),l=["components"],o={title:"ILP Overview",sidebar_label:"Overview",description:"InfluxDB line protocol reference documentation."},s={unversionedId:"reference/api/ilp/overview",id:"reference/api/ilp/overview",isDocsHomePage:!1,title:"ILP Overview",description:"InfluxDB line protocol reference documentation.",source:"@site/docs/reference/api/ilp/overview.md",sourceDirName:"reference/api/ilp",slug:"/reference/api/ilp/overview",permalink:"/docs/reference/api/ilp/overview",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/reference/api/ilp/overview.md",version:"current",sidebar_label:"Overview",frontMatter:{title:"ILP Overview",sidebar_label:"Overview",description:"InfluxDB line protocol reference documentation."},sidebar:"docs",previous:{title:"Postgres",permalink:"/docs/reference/api/postgres"},next:{title:"ILP Columnset Value Types",permalink:"/docs/reference/api/ilp/columnset-types"}},p=[{value:"Examples",id:"examples",children:[]},{value:"Usage",id:"usage",children:[{value:"Syntax",id:"syntax",children:[]},{value:"Behavior",id:"behavior",children:[]},{value:"Difference from InfluxDB",id:"difference-from-influxdb",children:[]},{value:"Generic example",id:"generic-example",children:[]},{value:"Irregularly-structured data",id:"irregularly-structured-data",children:[]},{value:"Duplicate column names",id:"duplicate-column-names",children:[]},{value:"Name restrictions",id:"name-restrictions",children:[]},{value:"Symbolset",id:"symbolset",children:[]},{value:"Symbolset values",id:"symbolset-values",children:[]},{value:"Columnset",id:"columnset",children:[]},{value:"Columnset values",id:"columnset-values",children:[]},{value:"Designated timestamp",id:"designated-timestamp",children:[]}]}],m={toc:p};function d(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"QuestDB implements the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v1.8/write_protocols/line_protocol_tutorial/"},"InfluxDB line protocol"),"\nto ingest data. QuestDB can listen for line protocol packets over\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/api/ilp/tcp-receiver"},"TCP"),"."),(0,r.kt)("p",null,"This page aims to provide examples for QuestDB experts setting up TCP without\nany client libraries, or those looking to implement a new client library\nyourself."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For general QuestDB users, client libraries are available for a number of\nlanguages: ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/clients/overview"},"ILP client libraries"),"."))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"We provide examples in a number of programming languages. See our\n",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/insert-data#influxdb-line-protocol"},"ILP section"),' of the "develop"\ndocs.'),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"table_name,symbolset columnset timestamp\\n\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Element"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"table_name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the table where QuestDB will write data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"symbolset")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A set of comma-separated ",(0,r.kt)("inlineCode",{parentName:"td"},"name=value")," pairs that will be parsed as symbol columns.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"columnset")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A set of comma-separated ",(0,r.kt)("inlineCode",{parentName:"td"},"name=value")," pairs that will be parsed as non-symbol columns.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UNIX timestamp. The default unit is nanosecond and is configurable via ",(0,r.kt)("inlineCode",{parentName:"td"},"line.tcp.timestamp"),". The value will be truncated to microsecond resolution when parsed by QuestDB.")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"name")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"name=value")," pair always corresponds to ",(0,r.kt)("inlineCode",{parentName:"p"},"column name")," in the\ntable."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Each ILP message has to end with a new line ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n")," character."))),(0,r.kt)("h3",{id:"behavior"},"Behavior"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the ",(0,r.kt)("inlineCode",{parentName:"li"},"table_name")," does not correspond to an existing table, QuestDB will\ncreate the table on the fly using the name provided. Column types will be\nautomatically recognized and assigned based on the data."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," column is automatically created as\n",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/designated-timestamp"},"designated timestamp")," with the\n",(0,r.kt)("a",{parentName:"li",href:"/docs/concept/partitions"},"partition strategy")," set to ",(0,r.kt)("inlineCode",{parentName:"li"},"DAY"),". Alternatively,\nuse ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/sql/create-table"},"CREATE TABLE")," to create the table with\na different partition strategy before ingestion."),(0,r.kt)("li",{parentName:"ul"},"When the timestamp is empty, QuestDB will use the server timestamp.")),(0,r.kt)("h3",{id:"difference-from-influxdb"},"Difference from InfluxDB"),(0,r.kt)("p",null,"QuestDB TCP Receiver uses ILP as both serialization and the transport format.\nInfluxDB on other hand uses HTTP as the transport and ILP as serialization\nformat. For this reason the existing InfluxDB client libraries will not work\nwith QuestDB."),(0,r.kt)("h3",{id:"generic-example"},"Generic example"),(0,r.kt)("p",null,"Let's assume the following data:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"timestamp"),(0,r.kt)("th",{parentName:"tr",align:"left"},"city"),(0,r.kt)("th",{parentName:"tr",align:"left"},"temperature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"humidity"),(0,r.kt)("th",{parentName:"tr",align:"left"},"make"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1465839830100400000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"London"),(0,r.kt)("td",{parentName:"tr",align:"left"},"23.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.343"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Omron")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1465839830100600000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Bristol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"23.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.443"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Honeywell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1465839830100700000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"London"),(0,r.kt)("td",{parentName:"tr",align:"left"},"23.6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.358"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Omron")))),(0,r.kt)("p",null,"The line protocol syntax for that table is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"readings,city=London,make=Omron temperature=23.5,humidity=0.343 1465839830100400000\\n\nreadings,city=Bristol,make=Honeywell temperature=23.2,humidity=0.443 1465839830100600000\\n\nreadings,city=London,make=Omron temperature=23.6,humidity=0.348 1465839830100700000\\n\n")),(0,r.kt)("p",null,"This would create table similar to this SQL statement and populate it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"CREATE TABLE readings (\n  timestamp TIMESTAMP,\n  city SYMBOL,\n  temperature DOUBLE,\n  humidity DOUBLE,\n  make SYMBOL\n) TIMESTAMP(timestamp) PARTITION BY DAY;\n")),(0,r.kt)("h3",{id:"irregularly-structured-data"},"Irregularly-structured data"),(0,r.kt)("p",null,"InfluxDB line protocol makes it possible to send data under different shapes.\nEach new entry may contain certain tags or fields, and others not. QuestDB\nsupports on-the-fly data structure changes with minimal overhead. Whilst the\nexample just above highlights structured data, it is possible for InfluxDB line\nprotocol users to send data as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"readings,city=London temperature=23.2 1465839830100400000\\n\nreadings,city=London temperature=23.6 1465839830100700000\\n\nreadings,make=Honeywell temperature=23.2,humidity=0.443 1465839830100800000\\n\n")),(0,r.kt)("p",null,"This would result in the following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"timestamp"),(0,r.kt)("th",{parentName:"tr",align:"left"},"city"),(0,r.kt)("th",{parentName:"tr",align:"left"},"temperature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"humidity"),(0,r.kt)("th",{parentName:"tr",align:"left"},"make"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1465839830100400000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"London"),(0,r.kt)("td",{parentName:"tr",align:"left"},"23.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NULL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NULL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1465839830100700000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"London"),(0,r.kt)("td",{parentName:"tr",align:"left"},"23.6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NULL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NULL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1465839830100800000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NULL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"23.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.358"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Honeywell")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Whilst we offer this function for flexibility, we recommend that users try to\nminimise structural changes to maintain operational simplicity."))),(0,r.kt)("h3",{id:"duplicate-column-names"},"Duplicate column names"),(0,r.kt)("p",null,"If line contains duplicate column names, the value stored in the table will be\nthat from the first ",(0,r.kt)("inlineCode",{parentName:"p"},"name=value")," pair on each line. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"trade,ticker=USD price=30,price=60 1638202821000000000\\n\n")),(0,r.kt)("p",null,"Price ",(0,r.kt)("inlineCode",{parentName:"p"},"30")," is stored, ",(0,r.kt)("inlineCode",{parentName:"p"},"60")," is ignored."),(0,r.kt)("h3",{id:"name-restrictions"},"Name restrictions"),(0,r.kt)("p",null,"Both table name and column names are allowed to have spaces ",(0,r.kt)("inlineCode",{parentName:"p"}," "),". These spaces\nhave to be escaped with ",(0,r.kt)("inlineCode",{parentName:"p"},"\\"),". For example both of these are valid lines."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'trade\\ table,ticker=USD price=30,details="Latest price" 1638202821000000000\\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'trade,symbol\\ ticker=USD price=30,details="Latest price" 1638202821000000000\\n\n')),(0,r.kt)("p",null,"Table and column names must not contain any of the forbidden characters:\n",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),",",(0,r.kt)("inlineCode",{parentName:"p"},"\\r"),",",(0,r.kt)("inlineCode",{parentName:"p"},"?"),",",(0,r.kt)("inlineCode",{parentName:"p"},","),",",(0,r.kt)("inlineCode",{parentName:"p"},":"),",",(0,r.kt)("inlineCode",{parentName:"p"},'"'),",",(0,r.kt)("inlineCode",{parentName:"p"},"'"),",",(0,r.kt)("inlineCode",{parentName:"p"},"\\"),",",(0,r.kt)("inlineCode",{parentName:"p"},"/"),",",(0,r.kt)("inlineCode",{parentName:"p"},"\\0"),",",(0,r.kt)("inlineCode",{parentName:"p"},")"),",",(0,r.kt)("inlineCode",{parentName:"p"},"("),",",(0,r.kt)("inlineCode",{parentName:"p"},"+"),",",(0,r.kt)("inlineCode",{parentName:"p"},"*"),",",(0,r.kt)("inlineCode",{parentName:"p"},"~")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"%"),"."),(0,r.kt)("p",null,"Additionally, table name must not start or end with the ",(0,r.kt)("inlineCode",{parentName:"p"},".")," character. Column\nname must not contain ",(0,r.kt)("inlineCode",{parentName:"p"},".")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),"."),(0,r.kt)("h3",{id:"symbolset"},"Symbolset"),(0,r.kt)("p",null,"Area of the message that contains comma-separated set of ",(0,r.kt)("inlineCode",{parentName:"p"},"name=value")," pairs for\nsymbol columns. For example in a message like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"trade,ticker=BTCUSD,venue=coinbase price=30,price=60 1638202821000000000\\n\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"symbolset")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"ticker=BTCUSD,venue=coinbase"),". Please note the mandatory space\nbetween ",(0,r.kt)("inlineCode",{parentName:"p"},"symbolset")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"columnset"),". Naming rules for columns are subject to\n",(0,r.kt)("a",{parentName:"p",href:"#duplicate-column-names"},"duplicate rules")," and\n",(0,r.kt)("a",{parentName:"p",href:"#name-restrictions"},"name restrictions"),"."),(0,r.kt)("h3",{id:"symbolset-values"},"Symbolset values"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"symbolset")," values are always interpreted as ",(0,r.kt)("a",{parentName:"p",href:"/docs/concept/symbol"},"SYMBOL"),".\nParser takes values literally so please beware of accidentally using high\ncardinality types such as ",(0,r.kt)("inlineCode",{parentName:"p"},"9092i")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"1.245667"),". This will result in a\nsignificant performance loss due to large mapping tables."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"symbolset")," values are not quoted. They are allowed to have special characters,\nsuch as ",(0,r.kt)("inlineCode",{parentName:"p"}," ")," (space), ",(0,r.kt)("inlineCode",{parentName:"p"},"="),", ",(0,r.kt)("inlineCode",{parentName:"p"},","),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\r")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"\\"),", which must be escaped with a\n",(0,r.kt)("inlineCode",{parentName:"p"},"\\"),". Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"trade,ticker=BTC\\\\USD\\,All,venue=coin\\ base price=30 1638202821000000000\\n\n")),(0,r.kt)("p",null,"Whenever ",(0,r.kt)("inlineCode",{parentName:"p"},"symbolset")," column does not exist, it will be added on-the-fly with\ntype ",(0,r.kt)("inlineCode",{parentName:"p"},"SYMBOL"),". On other hand when the column does exist, it is expected to be of\n",(0,r.kt)("inlineCode",{parentName:"p"},"SYMBOL")," type, otherwise the line is rejected."),(0,r.kt)("h3",{id:"columnset"},"Columnset"),(0,r.kt)("p",null,"Area of the message that contains comma-separated set of ",(0,r.kt)("inlineCode",{parentName:"p"},"name=value")," pairs for\nnon-symbol columns. For example in a message like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"trade,ticker=BTCUSD priceLow=30,priceHigh=60 1638202821000000000\\n\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"columnset")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"priceLow=30,priceHigh=60"),". Naming rules for columns are subject\nto ",(0,r.kt)("a",{parentName:"p",href:"#duplicate-column-names"},"duplicate rules")," and\n",(0,r.kt)("a",{parentName:"p",href:"#name-restrictions"},"name restrictions"),"."),(0,r.kt)("h3",{id:"columnset-values"},"Columnset values"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"columnset")," supports several values types, which are used to either derive type\nof new column or mapping strategy when column already exists. These types are\nlimited by existing Influx Line Protocol specification. Wider QuestDB type\nsystem is available by creating table via SQL upfront. The following are\nsupported value types:\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/api/ilp/columnset-types#integer"},"Integer"),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/api/ilp/columnset-types#long256"},"Long256"),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/api/ilp/columnset-types#float"},"Float"),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/api/ilp/columnset-types#string"},"String")," and\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/api/ilp/columnset-types#timestamp"},"Timestamp")),(0,r.kt)("h3",{id:"designated-timestamp"},"Designated timestamp"),(0,r.kt)("p",null,"Designated timestamp is the trailing value of an ILP message. It is optional,\nand when present, is a timestamp in Epoch nanoseconds. When the timestamp is\nomitted, the server will insert each message using the system clock as the row\ntimestamp."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"While ",(0,r.kt)("inlineCode",{parentName:"p"},"columnset")," timestamp type units are microseconds, the designated\ntimestamp units are nanoseconds. These are default units, which can be\noverridden via the ",(0,r.kt)("inlineCode",{parentName:"p"},"line.tcp.timestamp")," configuration property."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Example of ILP message with desginated timestamp value"',title:'"Example',of:!0,ILP:!0,message:!0,with:!0,desginated:!0,timestamp:!0,'value"':!0},"tracking,loc=north val=200i 1000000000\\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Example of ILP message sans timestamp"',title:'"Example',of:!0,ILP:!0,message:!0,sans:!0,'timestamp"':!0},"tracking,loc=north val=200i\\n\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We recommend populating designated timestamp via trailing value syntax above."))),(0,r.kt)("p",null,"It is also possible to populate designated timestamp via ",(0,r.kt)("inlineCode",{parentName:"p"},"columnset"),". Please see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/api/ilp/columnset-types#timestamp"},"mixed timestamp")," reference."))}d.isMDXComponent=!0}}]);