"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[8281],{18976:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return h},default:function(){return g}});var n=a(83117),i=a(80102),o=(a(67294),a(3905)),r=a(41395),s=a(58215),l=a(99226),d=a(24966),p=a(42954),m=["components"],c={title:"Java ILP client",description:"Introducing QuestDB Java ILP Client"},u={unversionedId:"reference/clients/java_ilp",id:"reference/clients/java_ilp",isDocsHomePage:!1,title:"Java ILP client",description:"Introducing QuestDB Java ILP Client",source:"@site/docs/reference/clients/java_ilp.md",sourceDirName:"reference/clients",slug:"/reference/clients/java_ilp",permalink:"/docs/reference/clients/java_ilp",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/reference/clients/java_ilp.md",version:"current",frontMatter:{title:"Java ILP client",description:"Introducing QuestDB Java ILP Client"},sidebar:"docs",previous:{title:"Clients overview",permalink:"/docs/reference/clients/overview"},next:{title:"Data types",permalink:"/docs/reference/sql/datatypes"}},h=[{value:"Quickstart",id:"quickstart",children:[]},{value:"Example with TLS and Authentication enabled",id:"example-with-tls-and-authentication-enabled",children:[]},{value:"General usage pattern",id:"general-usage-pattern",children:[]},{value:"Designated timestamp considerations",id:"designated-timestamp-considerations",children:[]},{value:"Other considerations",id:"other-considerations",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Limitations",id:"limitations",children:[]}],k={toc:h};function g(e){var t=e.components,a=(0,i.Z)(e,m);return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"Add a QuestDB as a dependency to your build project:"),(0,o.kt)(r.Z,{defaultValue:"maven",values:[{label:"Maven",value:"maven"},{label:"Gradle",value:"gradle"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"maven",mdxType:"TabItem"},(0,o.kt)(d.Z,{renderText:function(e){return(0,o.kt)(l.Z,{className:"language-xml",mdxType:"CodeBlock"},"<dependency>\n  <groupId>org.questdb</groupId>\n  <artifactId>questdb</artifactId>\n  <version>"+e.name+"</version>\n</dependency>")},mdxType:"InterpolateReleaseData"})),(0,o.kt)(s.Z,{value:"gradle",mdxType:"TabItem"},(0,o.kt)(d.Z,{renderText:function(e){return(0,o.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},"compile group: 'org.questdb', name: 'questdb', version: '"+e.name+"'")},mdxType:"InterpolateReleaseData"}))),(0,o.kt)("p",null,"The code bellow creates an instance of a client, configures it to connect to a\nQuestDB server running on localhost on a TCP port 9009. Then it sends two rows,\neach with one ",(0,o.kt)("a",{parentName:"p",href:"/docs/concept/symbol/"},"symbol"),", long column and one string\ncolumn. It instructs the QuestDB server to assign a timestamp by using a local\nwall-clock."),(0,o.kt)(p.Q,{name:"ilp",lang:"java",header:!1,mdxType:"RemoteRepoExample"}),(0,o.kt)("h2",{id:"example-with-tls-and-authentication-enabled"},"Example with TLS and Authentication enabled"),(0,o.kt)("p",null,"This sample configures a client to use TLS encryption for a connection to a\nQuestDB server. It also instructs the client to authenticate."),(0,o.kt)(p.Q,{name:"ilp-auth-tls",lang:"java",header:!1,mdxType:"RemoteRepoExample"}),(0,o.kt)("p",null,"This configuration also works with ",(0,o.kt)("a",{parentName:"p",href:"https://questdb.io/cloud/"},"QuestDB Cloud"),".\nIf you are using a self-managed QuestDB with\n",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/api/ilp/authenticate"},"authentication enabled")," then ",(0,o.kt)("inlineCode",{parentName:"p"},"authToken"),"\nis the ",(0,o.kt)("inlineCode",{parentName:"p"},"d")," portion of a JWK."),(0,o.kt)("h2",{id:"general-usage-pattern"},"General usage pattern"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a client instance via ",(0,o.kt)("inlineCode",{parentName:"p"},"Sender.builder()"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"table(CharSequence)")," to select a table for inserting a new row.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"symbol(CharSequence, CharSequence)")," to add all symbols. You must add\nsymbols before adding other column type.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the following options to add all the remaining columns:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"stringColumn(CharSequence, CharSequence)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"longColumn(CharSequence, long)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"doubleColumn(CharSequence, double)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"boolColumn(CharSequence, boolean)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timestampColumn(CharSequence, long)")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"at(long)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"atNow()")," to set a designated timestamp.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Optionally: You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"flush()")," to send locally buffered data into a\nserver.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the step no. 2 to start a new row.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"close()")," to dispose the Sender after you no longer need it."))),(0,o.kt)("h2",{id:"designated-timestamp-considerations"},"Designated timestamp considerations"),(0,o.kt)("p",null,"The following options determine how a\n",(0,o.kt)("a",{parentName:"p",href:"/docs/concept/designated-timestamp/"},"designated timestamp")," is assigned:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"atNow()")," automatically assigns a timestamp based on a server wall-clock upon\nreceiving a row."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"at(long)")," assigns a specific timestamp.")),(0,o.kt)("p",null,"The code samples above use QuestDB to assign timestamp automatically: ",(0,o.kt)("inlineCode",{parentName:"p"},"atNow()"),"\ninstructs the server to assign a timestamp by using a local wall-clock. To\nassign a specific timestamp, use ",(0,o.kt)("inlineCode",{parentName:"p"},"at(long)")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"atNow()"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"QuestDB works best when rows are ingested in chronological order. This means\nrows with older timestamps are ingested before rows with newer timestamps."),(0,o.kt)("p",{parentName:"div"},"Receiving out-of-order data can have a performance impact:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For QuestDB 6.6 and later versions, the out-of-order data ingestion has been\noptimized and automated.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For QuestDB 6.5.5 and earlier versions, users need to configure\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/out-of-order-commit-lag"},"Out-of-order commit lag")," setting."))))),(0,o.kt)("p",null,"Please note that the client does not interpret the timestamp in any way. It\nmerely passes the timestamp to a server, and it is up to the server to interpret\nthe timestamp. The default behavior of a QuestDB server is to treat the\ndesignated timestamp as a number of nanoseconds since 1st Jan 1970 UTC. See\n",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/insert-data/#timestamps"},"Timestamps")," for more details."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"By default, QuestDB's engine treats a designated timestamp as nanoseconds, but\nthis does not mean that ",(0,o.kt)("inlineCode",{parentName:"p"},"System.nanoTime()")," can be used to get the current time\nand pass it to ",(0,o.kt)("inlineCode",{parentName:"p"},"at(long)"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"System.nanoTime()")," is only useful for measuring\nelapsed time, and it is not related to any notion of system or wall-clock time."))),(0,o.kt)("h2",{id:"other-considerations"},"Other considerations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Sender is not thread-safe. For multiple threads to send data to QuestDB,\neach thread should have its own Sender instance. An object pool can also be\nused to re-use Sender instances."),(0,o.kt)("li",{parentName:"ul"},"The Sender instance has to be closed after it is no longer in use. The Sender\nimplements the ",(0,o.kt)("inlineCode",{parentName:"li"},"java.lang.AutoCloseable")," interface, and therefore the\n",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html"},"try-with-resource"),"\npattern can be used to ensure that the Sender is closed."),(0,o.kt)("li",{parentName:"ul"},"A client buffers row data internally and sends them to a server in batches\nwhen the buffer is full. This improves performance significantly, but it also\nmeans that during a period of quiescence, some written rows may be retained in\nthe buffer and are not sent to a server until the buffer are full."),(0,o.kt)("li",{parentName:"ul"},"The method ",(0,o.kt)("inlineCode",{parentName:"li"},"flush()")," can be called to force sending the internal buffer to a\nserver, even when the buffer is not full yet.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The client offers a builder API to configure all supported options. See\n",(0,o.kt)("inlineCode",{parentName:"p"},"Sender.builder()"),"."),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"The client supports TCP only. It does not support UDP as transport."))}g.isMDXComponent=!0}}]);