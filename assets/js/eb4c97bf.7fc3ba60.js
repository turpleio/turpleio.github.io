"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[7575],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7176:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return f}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={title:"Root directory structure",sidebar_label:"Root directory",description:"Contents of the <root_directory> folder explained."},d={unversionedId:"concept/root-directory-structure",id:"concept/root-directory-structure",isDocsHomePage:!1,title:"Root directory structure",description:"Contents of the <root_directory> folder explained.",source:"@site/docs/concept/root-directory-structure.md",sourceDirName:"concept",slug:"/concept/root-directory-structure",permalink:"/docs/concept/root-directory-structure",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/concept/root-directory-structure.md",version:"current",sidebar_label:"Root directory",frontMatter:{title:"Root directory structure",sidebar_label:"Root directory",description:"Contents of the <root_directory> folder explained."},sidebar:"docs",previous:{title:"Geospatial data",permalink:"/docs/concept/geohashes"},next:{title:"REST API",permalink:"/docs/reference/api/rest"}},c=[{value:"<code>conf</code> directory",id:"conf-directory",children:[]},{value:"<code>db</code> directory",id:"db-directory",children:[]},{value:"<code>log</code> directory",id:"log-directory",children:[]},{value:"<code>public</code> directory",id:"public-directory",children:[]},{value:"<code>snapshot</code> directory",id:"snapshot-directory",children:[]},{value:"<code>tmp</code> directory",id:"tmp-directory",children:[]}],s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},p=s("Tabs"),u=s("TabItem"),m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"QuestDB creates the following file structure in its ",(0,o.kt)("inlineCode",{parentName:"p"},"root_directory"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-filestructure"},"questdb\n\u251c\u2500\u2500 conf\n\u251c\u2500\u2500 db\n\u251c\u2500\u2500 log\n\u251c\u2500\u2500 public\n\u2514\u2500\u2500 snapshot (optional)\n")),(0,o.kt)("p",null,"By default, QuestDB's root directory will be the following:"),(0,o.kt)(p,{defaultValue:"nix",values:[{label:"Linux/FreeBSD",value:"nix"},{label:"macOS (Homebrew)",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(u,{value:"nix",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$HOME/.questdb\n"))),(0,o.kt)(u,{value:"macos",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/opt/homebrew/var/questdb\n"))),(0,o.kt)(u,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"C:\\Windows\\System32\\qdbroot\n")))),(0,o.kt)("h2",{id:"conf-directory"},(0,o.kt)("inlineCode",{parentName:"h2"},"conf")," directory"),(0,o.kt)("p",null,"Contains configuration files for QuestDB:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-filestructure"},"\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 date.formats\n\u2502\xa0\xa0 \u251c\u2500\u2500 mime.types\n\u2502\xa0\xa0 \u2514\u2500\u2500 server.conf\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"file"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"date.formats")),(0,o.kt)("td",{parentName:"tr",align:null},"A list of date formats in plain text.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mime.types")),(0,o.kt)("td",{parentName:"tr",align:null},"Mapping file used by the HTTP server to map file extension to response type when an user downloads a file.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"server.conf")),(0,o.kt)("td",{parentName:"tr",align:null},"Server configuration file. Find out more in the ",(0,o.kt)("a",{parentName:"td",href:"/docs/reference/configuration"},"server configuration")," section.")))),(0,o.kt)("h2",{id:"db-directory"},(0,o.kt)("inlineCode",{parentName:"h2"},"db")," directory"),(0,o.kt)("p",null,"This directory contains all the files related to database tables. It is\norganised as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each table has its own ",(0,o.kt)("inlineCode",{parentName:"li"},"table_directory")," under ",(0,o.kt)("inlineCode",{parentName:"li"},"root_directory/db/table_name")),(0,o.kt)("li",{parentName:"ul"},"Within a ",(0,o.kt)("inlineCode",{parentName:"li"},"table_directory"),", each ",(0,o.kt)("a",{parentName:"li",href:"/docs/concept/partitions"},"partition")," has its\nown ",(0,o.kt)("inlineCode",{parentName:"li"},"partition_directory"),"."),(0,o.kt)("li",{parentName:"ul"},"Within each ",(0,o.kt)("inlineCode",{parentName:"li"},"partition directory"),", each column has its own ",(0,o.kt)("inlineCode",{parentName:"li"},"column_file"),", for\nexample ",(0,o.kt)("inlineCode",{parentName:"li"},"mycolumn.d")),(0,o.kt)("li",{parentName:"ul"},"If a given column has an ",(0,o.kt)("a",{parentName:"li",href:"/docs/concept/indexes"},"index"),", then there will also\nbe an ",(0,o.kt)("inlineCode",{parentName:"li"},"index_file"),", for example ",(0,o.kt)("inlineCode",{parentName:"li"},"mycolumn.k"))),(0,o.kt)("p",null,"The table also stores metadata in ",(0,o.kt)("inlineCode",{parentName:"p"},"_meta")," files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-filestructure"},"\u251c\u2500\u2500 db\n\u2502\xa0\xa0 \u251c\u2500\u2500 Table\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Partition 1\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 _archive\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column1.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column2.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column2.k\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ...\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Partition 2\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 _archive\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column1.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column2.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column2.k\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ...\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 _meta\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 _txn\n\u2502\xa0\xa0 \u2514\u2500\u2500  table_1.lock\n")),(0,o.kt)("p",null,"If the table is not partitioned, data is stored in a directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-filestructure"},"\u251c\u2500\u2500 db\n\u2502\xa0\xa0 \u251c\u2500\u2500 Table\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 default\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 _archive\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column1.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column2.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 column2.k\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ...\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 _meta\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 _txn\n\u2502\xa0\xa0 \u2514\u2500\u2500  table_1.lock\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"As tempting as it may be to delete partitions by manually removing the\ndirectories from the file system, we really discourage this. The partitions are\norganised with metadata and deleting them directly could corrupt the table. We\nrecommend you use\n",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/sql/alter-table-drop-partition"},"ALTER TABLE DROP PARTITION")," for\nthis effect."))),(0,o.kt)("h2",{id:"log-directory"},(0,o.kt)("inlineCode",{parentName:"h2"},"log")," directory"),(0,o.kt)("p",null,"Contains the log files for QuestDB:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-filestructure"},"\u251c\u2500\u2500 log\n\u2502\xa0\xa0 \u251c\u2500\u2500 stdout-2020-04-15T11-59-59.txt\n\u2502\xa0\xa0 \u2514\u2500\u2500 stdout-2020-04-12T13-31-22.txt\n")),(0,o.kt)("p",null,"Log files look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"2020-04-15T16:42:32.879970Z I i.q.c.TableReader new transaction [txn=2, transientRowCount=1, fixedRowCount=1, maxTimestamp=1585755801000000, attempts=0]\n2020-04-15T16:42:32.880051Z I i.q.g.FunctionParser call to_timestamp('2020-05-01:15:43:21','yyyy-MM-dd:HH:mm:ss') -> to_timestamp(Ss)\n2020-04-15T16:42:32.880657Z I i.q.c.p.WriterPool >> [table=`table_1`, thread=12]\n2020-04-15T16:42:32.881330Z I i.q.c.AppendMemory truncated and closed [fd=32]\n2020-04-15T16:42:32.881448Z I i.q.c.AppendMemory open /usr/local/var/questdb/db/table_1/2020-05/timestamp.d [fd=32, pageSize=16777216]\n2020-04-15T16:42:32.881708Z I i.q.c.AppendMemory truncated and closed [fd=33]\n2020-04-15T16:42:32.881830Z I i.q.c.AppendMemory open /usr/local/var/questdb/db/table_1/2020-05/temperature.d [fd=33, pageSize=16777216]\n2020-04-15T16:42:32.882092Z I i.q.c.AppendMemory truncated and closed [fd=34]\n2020-04-15T16:42:32.882210Z I i.q.c.AppendMemory open /usr/local/var/questdb/db/table_1/2020-05/humidity.d [fd=34, pageSize=16777216]\n2020-04-15T16:42:32.882248Z I i.q.c.TableWriter switched partition to '/usr/local/var/questdb/db/table_1/2020-05'\n2020-04-15T16:42:32.882571Z I i.q.c.p.WriterPool << [table=`table_1`, thread=12]\n2020-04-15T16:44:33.245144Z I i.q.c.AppendMemory truncated and closed [fd=32]\n2020-04-15T16:44:33.245418Z I i.q.c.AppendMemory truncated and closed [fd=33]\n2020-04-15T16:44:33.245712Z I i.q.c.AppendMemory truncated and closed [fd=34]\n2020-04-15T16:44:33.246096Z I i.q.c.ReadWriteMemory truncated and closed [fd=30]\n2020-04-15T16:44:33.246217Z I i.q.c.ReadOnlyMemory closed [fd=31]\n2020-04-15T16:44:33.246461Z I i.q.c.TableWriter closed 'table_1'\n2020-04-15T16:44:33.246492Z I i.q.c.p.WriterPool closed [table=`table_1`, reason=IDLE, by=12]\n2020-04-15T16:44:33.247184Z I i.q.c.OnePageMemory closed [fd=28]\n2020-04-15T16:44:33.247239Z I i.q.c.ReadOnlyMemory closed [fd=27]\n2020-04-15T16:44:33.247267Z I i.q.c.TableReader closed 'table_1'\n2020-04-15T16:44:33.247287Z I i.q.c.p.ReaderPool closed 'table_1' [at=0:0, reason=IDLE]\n2020-04-15T16:44:39.763406Z I http-server disconnected [ip=127.0.0.1, fd=24]\n2020-04-15T16:44:39.763729Z I i.q.c.h.HttpServer pushed\n")),(0,o.kt)("h2",{id:"public-directory"},(0,o.kt)("inlineCode",{parentName:"h2"},"public")," directory"),(0,o.kt)("p",null,"Contains the web files for the Web Console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-filestructure"},"\u2514\u2500\u2500 public\n    \u251c\u2500\u2500 assets\n    \u2502\xa0\xa0 \u251c\u2500\u2500 console-configuration.json\n    \u2502\xa0\xa0 \u2514\u2500\u2500 favicon.png\n    \u251c\u2500\u2500 index.html\n    \u251c\u2500\u2500 qdb.js\n    \u251c\u2500\u2500 qdb.css\n    \u2514\u2500\u2500 ...\n")),(0,o.kt)("h2",{id:"snapshot-directory"},(0,o.kt)("inlineCode",{parentName:"h2"},"snapshot")," directory"),(0,o.kt)("p",null,"Created when a filesystem (disk) ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/sql/snapshot"},"snapshot")," is\ncollected. Contains table metadata file copies."),(0,o.kt)("h2",{id:"tmp-directory"},(0,o.kt)("inlineCode",{parentName:"h2"},"tmp")," directory"),(0,o.kt)("p",null,"Created when a ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/sql/copy"},(0,o.kt)("inlineCode",{parentName:"a"},"COPY"))," SQL command is run for a\npartitioned table and no value is set for the ",(0,o.kt)("inlineCode",{parentName:"p"},"cairo.sql.copy.work.root"),"\nconfiguration setting. Contains temporary import files like indexes or temporary\npartitions."))}f.isMDXComponent=!0}}]);