"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[9720],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return n?i.createElement(d,a(a({ref:t},p),{},{components:n})):i.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3657:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var i=n(83117),r=n(80102),o=(n(67294),n(3905)),a=["components"],l={title:"JIT compiler",sidebar_label:"JIT compiler",description:"Documentation for usage of the just-in-time (JIT) SQL compiler in QuestDB. JIT compilation enhances the performance of the system to run SQL queries which contain filters with arithmetical expressions."},s={unversionedId:"concept/jit-compiler",id:"concept/jit-compiler",isDocsHomePage:!1,title:"JIT compiler",description:"Documentation for usage of the just-in-time (JIT) SQL compiler in QuestDB. JIT compilation enhances the performance of the system to run SQL queries which contain filters with arithmetical expressions.",source:"@site/docs/concept/jit-compiler.md",sourceDirName:"concept",slug:"/concept/jit-compiler",permalink:"/docs/concept/jit-compiler",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/concept/jit-compiler.md",version:"current",sidebar_label:"JIT compiler",frontMatter:{title:"JIT compiler",sidebar_label:"JIT compiler",description:"Documentation for usage of the just-in-time (JIT) SQL compiler in QuestDB. JIT compilation enhances the performance of the system to run SQL queries which contain filters with arithmetical expressions."},sidebar:"docs",previous:{title:"SQL extensions",permalink:"/docs/concept/sql-extensions"},next:{title:"Partitions",permalink:"/docs/concept/partitions"}},c=[{value:"Queries eligible for JIT compilation",id:"queries-eligible-for-jit-compilation",children:[]},{value:"JIT compiler usage",id:"jit-compiler-usage",children:[]},{value:"Known limitations",id:"known-limitations",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"QuestDB includes a JIT compiler which is run on queries (and sub-queries) that\nperform a full scan over a table or table partitions. The main goal behind this\nfeature is to improve performance for filters with arithmetical expressions. To\ndo so, the JIT compiler emits machine code with a single function that may also\nuse SIMD (vector) instructions."),(0,o.kt)("p",null,"For details on the implementation, motivation, and internals of this feature,\nsee our ",(0,o.kt)("a",{parentName:"p",href:"/blog/2022/01/12/jit-sql-compiler"},"article about SQL JIT compilation"),".\nThis post describes our storage model, how we built a JIT compiler for SQL and\nour plans for improving it in future."),(0,o.kt)("h2",{id:"queries-eligible-for-jit-compilation"},"Queries eligible for JIT compilation"),(0,o.kt)("p",null,"The types of queries that are eligible for performance improvements via JIT\ncompilation are those which contain ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," clauses. Here are some examples\nwhich are supported based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"cpu-only")," data set from the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/timescale/tsbs/blob/master/docs/questdb.md"},"Time Series Benchmark Suite"),"\nuse case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"-- basic filtering in WHERE clauses\nSELECT count(), max(usage_user) FROM cpu WHERE usage_user > 75;\n\n-- sub-queries\nSELECT * FROM cpu\nWHERE usage_user > 75\nAND (region = 'us-west-1' OR region = 'us-east-1');\n")),(0,o.kt)("h2",{id:"jit-compiler-usage"},"JIT compiler usage"),(0,o.kt)("p",null,"The JIT compiler is enabled by default for QuestDB 6.3 onwards. If you wish to\ndisable it, change the ",(0,o.kt)("inlineCode",{parentName:"p"},"cairo.sql.jit.mode")," setting in the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/configuration"},"server configuration")," file from ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"off"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="path/to/server.conf"',title:'"path/to/server.conf"'},"cairo.sql.jit.mode=off\n")),(0,o.kt)("p",null,"Embedded API users are able to enable or disable the compiler globally by\nproviding their ",(0,o.kt)("inlineCode",{parentName:"p"},"CairoConfiguration")," implementation. Alternatively, JIT\ncompilation can be changed for a single query by using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"SqlExecutionContext#setJitMode")," method. The latter may look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'final CairoConfiguration configuration = new DefaultCairoConfiguration(temp.getRoot().getAbsolutePath());\ntry (CairoEngine engine = new CairoEngine(configuration)) {\n    final SqlExecutionContextImpl ctx = new SqlExecutionContextImpl(engine, 1);\n    // Enable SQL JIT compiler\n    ctx.setJitMode(SqlJitMode.JIT_MODE_ENABLED);\n    // Subsequent query execution (called as usual) with have JIT enabled\n    try (SqlCompiler compiler = new SqlCompiler(engine)) {\n        try (RecordCursorFactory factory = compiler.compile("abc", ctx).getRecordCursorFactory()) {\n            try (RecordCursor cursor = factory.getCursor(ctx)) {\n                // ...\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Server logs should contain references to ",(0,o.kt)("inlineCode",{parentName:"p"},"SQL JIT compiler mode"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"2021-12-16T09:25:34.472450Z A server-main SQL JIT compiler mode: on\n")),(0,o.kt)("p",null,"Due to certain limitations noted below, JIT compilation won't take place for all\nqueries. To understand whether JIT compilation took place for a query, one will\nsee something similar in the server logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"2021-12-16T09:35:01.738910Z I i.q.g.SqlCompiler plan [q=`select-group-by count() count from (select [usage_user] from cpu timestamp (timestamp) where usage_user > 75)`, fd=73]\n2021-12-16T09:35:01.742777Z I i.q.g.SqlCodeGenerator JIT enabled for (sub)query [tableName=cpu, fd=73]\n")),(0,o.kt)("h2",{id:"known-limitations"},"Known limitations"),(0,o.kt)("p",null,"The current implementation of the JIT SQL compiler has a number of limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Only x86-64 CPUs are currently supported."),(0,o.kt)("li",{parentName:"ul"},"Vectorized filter execution requires AVX2 instruction set."),(0,o.kt)("li",{parentName:"ul"},"Filters with any SQL function, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"now()"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"abs()"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"round()"),", are\nnot supported."),(0,o.kt)("li",{parentName:"ul"},"Filters with any pseudo-function or operator, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"in()")," on symbol column,\nor ",(0,o.kt)("inlineCode",{parentName:"li"},"between")," on non-designated timestamp column, or ",(0,o.kt)("inlineCode",{parentName:"li"},"within")," on geohash\ncolumn, are not supported."),(0,o.kt)("li",{parentName:"ul"},"Only the following arithmetic operations are allowed to be present in the\nfilter: ",(0,o.kt)("inlineCode",{parentName:"li"},"+"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"-"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"/"),"."),(0,o.kt)("li",{parentName:"ul"},"Only filters with fixed-size columns are supported: BOOLEAN, BYTE, GEOBYTE,\nSHORT, GEOSHORT, CHAR, INT, GEOINT, SYMBOL, FLOAT, LONG, GEOLONG, DATE,\nTIMESTAMP, DOUBLE.")))}u.isMDXComponent=!0}}]);