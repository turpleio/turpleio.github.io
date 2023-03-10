"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[5037],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return c}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7623:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],p={title:"Postgres",description:"Postgres compatibility reference documentation."},l={unversionedId:"reference/api/postgres",id:"reference/api/postgres",isDocsHomePage:!1,title:"Postgres",description:"Postgres compatibility reference documentation.",source:"@site/docs/reference/api/postgres.md",sourceDirName:"reference/api",slug:"/reference/api/postgres",permalink:"/docs/reference/api/postgres",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/reference/api/postgres.md",version:"current",frontMatter:{title:"Postgres",description:"Postgres compatibility reference documentation."},sidebar:"docs",previous:{title:"REST API",permalink:"/docs/reference/api/rest"},next:{title:"ILP Overview",permalink:"/docs/reference/api/ilp/overview"}},s=[{value:"Examples",id:"examples",children:[]},{value:"Compatibility",id:"compatibility",children:[{value:"List of supported features",id:"list-of-supported-features",children:[]},{value:"List of supported connection properties",id:"list-of-supported-connection-properties",children:[]},{value:"List of unsupported features",id:"list-of-unsupported-features",children:[]}]},{value:"Recommended third party tools",id:"recommended-third-party-tools",children:[{value:"CLIs",id:"clis",children:[]},{value:"Libraries / Programmatic clients",id:"libraries--programmatic-clients",children:[]},{value:"Drivers",id:"drivers",children:[]}]}],d={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"QuestDB supports the Postgres wire protocol. As a result, QuestDB is capable of\nrunning most of Postgres queries. This means that you can use your favorite\nPostgres client or driver with QuestDB, at no extra cost."),(0,i.kt)("p",null,"The storage model used by Postgres is fundamentally different to the one used by\nQuestDB. Some features that exists for Postgres do not apply to QuestDB."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,'We provide examples in a number of programming languages. See our "develop" docs\nfor:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/develop/insert-data#postgresql-wire-protocol"},"Inserting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/develop/query-data#postgresql-wire-protocol"},"Querying")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/develop/update-data#postgres-compatibility"},"Updating"))),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("h3",{id:"list-of-supported-features"},"List of supported features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Querying (all types expect ",(0,i.kt)("inlineCode",{parentName:"li"},"BLOB"),")"),(0,i.kt)("li",{parentName:"ul"},"Prepared statements with bind parameters (check for specific libraries\n",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/api/postgres#libraries--programmatic-clients"},"below"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INSERT")," statements with bind parameters"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UPDATE")," statements with bind parameters"),(0,i.kt)("li",{parentName:"ul"},"DDL execution"),(0,i.kt)("li",{parentName:"ul"},"Batch inserts with ",(0,i.kt)("inlineCode",{parentName:"li"},"JDBC")),(0,i.kt)("li",{parentName:"ul"},"Plain authentication")),(0,i.kt)("p",null,"Examples which demonstrate how to use Postgres clients in a number of different\nlanguages can be found on the following pages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/develop/insert-data#postgresql-wire-protocol"},"Insert data")," demonstrates\nhow to use the parameterized queries and prepared statements to insert data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/develop/query-data#postgresql-wire-protocol"},"Query data")," shows how to\nrun queries against tables."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/develop/update-data#postgres-compatibility"},"Update data")," shows how to\nupdate tables.")),(0,i.kt)("h3",{id:"list-of-supported-connection-properties"},"List of supported connection properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"database")),(0,i.kt)("td",{parentName:"tr",align:null},"qdb"),(0,i.kt)("td",{parentName:"tr",align:null},"Should be set to any value for example ",(0,i.kt)("inlineCode",{parentName:"td"},"qdb"),", database name is ignored, QuestDB does not have database instance name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"user")),(0,i.kt)("td",{parentName:"tr",align:null},"admin"),(0,i.kt)("td",{parentName:"tr",align:null},"User name configured in ",(0,i.kt)("inlineCode",{parentName:"td"},"pg.user")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"pg.readonly.user")," property in ",(0,i.kt)("inlineCode",{parentName:"td"},"server.conf"),". Default value is ",(0,i.kt)("inlineCode",{parentName:"td"},"admin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"password")),(0,i.kt)("td",{parentName:"tr",align:null},"quest"),(0,i.kt)("td",{parentName:"tr",align:null},"Password from ",(0,i.kt)("inlineCode",{parentName:"td"},"pg.password")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"pg.readonly.password")," property in ",(0,i.kt)("inlineCode",{parentName:"td"},"server.conf"),". Default value is ",(0,i.kt)("inlineCode",{parentName:"td"},"quest"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:null},"-c statement_timeout=60000"),(0,i.kt)("td",{parentName:"tr",align:null},"The only supported option is ",(0,i.kt)("inlineCode",{parentName:"td"},"statement_timeout"),". It specifies maximum execution time in milliseconds for SELECT or UPDATE statement")))),(0,i.kt)("h3",{id:"list-of-unsupported-features"},"List of unsupported features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SSL"),(0,i.kt)("li",{parentName:"ul"},"Remote file upload (",(0,i.kt)("inlineCode",{parentName:"li"},"COPY")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"stdin"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DELETE")," statements"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BLOB")," transfer")),(0,i.kt)("h2",{id:"recommended-third-party-tools"},"Recommended third party tools"),(0,i.kt)("p",null,"The following list of third party tools includes drivers, clients or utility\nCLIs that our team has tested extensively. Picking an item from it will\nguarantee that your code will work with QuestDB."),(0,i.kt)("p",null,"We recognize that our community might value some features more than others. This\nis why we encourage you to ",(0,i.kt)("a",{parentName:"p",href:"https:///issues"},"open an issue on GitHub")," if\nyou think we are missing something important for your workflow."),(0,i.kt)("h3",{id:"clis"},"CLIs"),(0,i.kt)("h4",{id:"psql-12"},(0,i.kt)("a",{parentName:"h4",href:"https://www.postgresql.org/docs/current/app-psql.html"},"PSQL")," ",(0,i.kt)("inlineCode",{parentName:"h4"},"12")),(0,i.kt)("p",null,"Support for ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DROP"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUNCATE"),"."),(0,i.kt)("h3",{id:"libraries--programmatic-clients"},"Libraries / Programmatic clients"),(0,i.kt)("h4",{id:"node-postgres-nodejs-84"},(0,i.kt)("a",{parentName:"h4",href:"https://node-postgres.com/"},"node-postgres")," (NodeJS) ",(0,i.kt)("inlineCode",{parentName:"h4"},"8.4")),(0,i.kt)("h4",{id:"pq-go-18"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/lib/pq"},"pq")," (Go) ",(0,i.kt)("inlineCode",{parentName:"h4"},"1.8")),(0,i.kt)("h4",{id:"pq-c-12"},(0,i.kt)("a",{parentName:"h4",href:"https://www.postgresql.org/docs/12/libpq.html"},"pq")," (C) ",(0,i.kt)("inlineCode",{parentName:"h4"},"12")),(0,i.kt)("h4",{id:"psycopg-python-293-and-31"},(0,i.kt)("a",{parentName:"h4",href:"https://www.psycopg.org"},"Psycopg")," (Python) ",(0,i.kt)("inlineCode",{parentName:"h4"},"2.9.3")," and ",(0,i.kt)("inlineCode",{parentName:"h4"},"3.1")),(0,i.kt)("h4",{id:"ruby-pg-ruby-143"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/ged/ruby-pg"},"ruby-pg")," (Ruby) ",(0,i.kt)("inlineCode",{parentName:"h4"},"1.4.3")),(0,i.kt)("h4",{id:"pg_connect-php-810"},(0,i.kt)("a",{parentName:"h4",href:"https://www.php.net/manual/en/function.pg-connect.php"},"pg_connect")," (PHP) ",(0,i.kt)("inlineCode",{parentName:"h4"},"8.1.0")),(0,i.kt)("h3",{id:"drivers"},"Drivers"),(0,i.kt)("h4",{id:"jdbc-422"},(0,i.kt)("a",{parentName:"h4",href:"https://jdbc.postgresql.org/"},"JDBC")," ",(0,i.kt)("inlineCode",{parentName:"h4"},"42.2")))}u.isMDXComponent=!0}}]);