"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[3788],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),c=i,f=u["".concat(m,".").concat(c)]||u[c]||p[c]||o;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5309:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return m},toc:function(){return l},default:function(){return p}});var a=n(3117),i=n(102),o=(n(7294),n(3905)),r=["components"],s={title:"Timestamps and time zones",description:"This document describes how to work with time zones in QuestDB, including hints how to convert timestamps to UTC, to a specific time zone or by a UTC offset value."},m={unversionedId:"guides/working-with-timestamps-timezones",id:"guides/working-with-timestamps-timezones",isDocsHomePage:!1,title:"Timestamps and time zones",description:"This document describes how to work with time zones in QuestDB, including hints how to convert timestamps to UTC, to a specific time zone or by a UTC offset value.",source:"@site/docs/guides/working-with-timestamps-timezones.md",sourceDirName:"guides",slug:"/guides/working-with-timestamps-timezones",permalink:"/docs/guides/working-with-timestamps-timezones",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/guides/working-with-timestamps-timezones.md",version:"current",frontMatter:{title:"Timestamps and time zones",description:"This document describes how to work with time zones in QuestDB, including hints how to convert timestamps to UTC, to a specific time zone or by a UTC offset value."},sidebar:"docs",previous:{title:"Modify data",permalink:"/docs/guides/modifying-data"},next:{title:"Optimizing ingestion with commit lag configuration",permalink:"/docs/guides/out-of-order-commit-lag"}},l=[{value:"Timestamps in QuestDB",id:"timestamps-in-questdb",children:[]},{value:"QuestDB&#39;s internal time zone database",id:"questdbs-internal-time-zone-database",children:[{value:"Referring to time zones",id:"referring-to-time-zones",children:[]},{value:"Updates to the time zone database",id:"updates-to-the-time-zone-database",children:[]}]},{value:"Converting timestamps to and from time zones",id:"converting-timestamps-to-and-from-time-zones",children:[{value:"Using UTC offset for conversions",id:"using-utc-offset-for-conversions",children:[]}]}],d={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When working with timestamped data, it may be necessary to convert timestamp\nvalues to or from UTC, or to offset timestamp values by a fixed duration. The\nfollowing sections describe how QuestDB handles timestamps natively, how to use\nbuilt-in functions for working with time zone conversions, and general hints for\nworking with time zones in QuestDB."),(0,o.kt)("h2",{id:"timestamps-in-questdb"},"Timestamps in QuestDB"),(0,o.kt)("p",null,"The native timestamp format used by QuestDB is a Unix timestamp in microsecond\nresolution. Although timestamps in nanoseconds will be parsed, the output will\nbe truncated to microseconds. QuestDB does not store time zone information\nalongside timestamp values and therefore it should be assumed that all\ntimestamps are in UTC."),(0,o.kt)("p",null,"The following example shows how a Unix timestamp in microseconds may be passed\ninto a timestamp column directly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"CREATE TABLE my_table (ts timestamp, col1 int) timestamp(ts);\nINSERT INTO my_table VALUES(1623167145123456, 12);\nmy_table;\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"ts"),(0,o.kt)("th",{parentName:"tr",align:"left"},"col1"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-06-08T15:45:45.123456Z"),(0,o.kt)("td",{parentName:"tr",align:"left"},"12")))),(0,o.kt)("p",null,"Timestamps may also be inserted as strings in the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"INSERT INTO my_table VALUES('2021-06-08T16:45:45.123456Z', 13);\nmy_table;\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"ts"),(0,o.kt)("th",{parentName:"tr",align:"left"},"col1"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-06-08T15:45:45.123456Z"),(0,o.kt)("td",{parentName:"tr",align:"left"},"12")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-06-08T16:45:45.123456Z"),(0,o.kt)("td",{parentName:"tr",align:"left"},"13")))),(0,o.kt)("p",null,"When inserting timestamps into a table, it is also possible to use\n",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/function/date-time/#date-and-timestamp-format"},"timestamp units"),"\nto define the timestamp format, in order to process trailing zeros in exported\ndata sources such as PostgreSQL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"INSERT INTO my_table VALUES(to_timestamp('2021-06-09T16:45:46.123456789', 'yyyy-MM-ddTHH:mm:ss.N+'), 14);\n-- Passing 9-digit nanosecond into QuestDB, this is equal to:\n\nINSERT INTO my_table VALUES(to_timestamp('2021-06-10T16:45:46.123456789', 'yyyy-MM-ddTHH:mm:ss.SSSUUUN'), 14);\n\nmy_table;\n")),(0,o.kt)("p",null,"The output maintains microsecond resolution:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"ts"),(0,o.kt)("th",{parentName:"tr",align:"left"},"col1"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-06-08T15:45:45.123456Z"),(0,o.kt)("td",{parentName:"tr",align:"left"},"12")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-06-08T16:45:45.123456Z"),(0,o.kt)("td",{parentName:"tr",align:"left"},"13")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-06-09T16:45:46.123456Z"),(0,o.kt)("td",{parentName:"tr",align:"left"},"14")))),(0,o.kt)("h2",{id:"questdbs-internal-time-zone-database"},"QuestDB's internal time zone database"),(0,o.kt)("p",null,"In order to simplify working with time zones, QuestDB uses\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tz_database"},"the tz time zone database")," which is\nstandard in the Java ecosystem. This time zone database is used internally in\ntime zone lookup and in operations relating to timestamp value conversion to and\nfrom time zones."),(0,o.kt)("p",null,"For this reason, a time zone may be referenced by abbreviated name, by full time\nzone name or by UTC offset:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Abbreviation"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Time zone name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"UTC offset"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"EST"),(0,o.kt)("td",{parentName:"tr",align:"left"},"America/New_York"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-05:00")))),(0,o.kt)("h3",{id:"referring-to-time-zones"},"Referring to time zones"),(0,o.kt)("p",null,"It's strongly advised ",(0,o.kt)("strong",{parentName:"p"},"not to use the three-letter ID")," or abbreviation for\ntime zones for the following reason:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'The same abbreviation is often used for multiple time zones (for example,\n"CST" could be U.S. "Central Standard Time" and "China Standard Time"), and\nthe Java platform can then only recognize one of them')),(0,o.kt)("p",null,"Therefore, choosing a geographic region which observes a time zone\n(",(0,o.kt)("inlineCode",{parentName:"p"},'"America/New_York"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"Europe/Prague"'),") or a UTC offset value (",(0,o.kt)("inlineCode",{parentName:"p"},'"+02:00"'),") is\nmore reliable when referring to time zones. Instructions for converting to and\nfrom time zones are described in the\n",(0,o.kt)("a",{parentName:"p",href:"#converting-timestamps-to-and-from-time-zones"},"Converting timestamps to and from time zones"),"\nsection below."),(0,o.kt)("p",null,"The current QuestDB time zone database uses the ",(0,o.kt)("strong",{parentName:"p"},"English locale")," but support\nfor additional locales may be added in future. Referring to time zones which are\noutdated or not recognized results in a ",(0,o.kt)("inlineCode",{parentName:"p"},"invalid timezone name")," error. The\nfollowing resources may be used for hints how to refer to time zones by ID or\noffset:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://www.iana.org/time-zones"},"official list maintained by IANA")),(0,o.kt)("li",{parentName:"ul"},"Java's\n",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/time/ZoneId.html#getAvailableZoneIds--"},"getAvailableZoneIds"),"\nmethod"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"Wiki entry on tz database time zones"),"\n(this is a convenient reference, but may not be 100% accurate)")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Users should be aware that the time zone database contains both ",(0,o.kt)("strong",{parentName:"p"},"current and\nhistoric transitions")," for various time zones. Therefore time zone conversions\nmust take the historic time zone transitions into account based on the timestamp\nvalues."))),(0,o.kt)("h3",{id:"updates-to-the-time-zone-database"},"Updates to the time zone database"),(0,o.kt)("p",null,"The upstream project updates past time zones as new information becomes\navailable. These changes are typically related to daylight saving time (DST)\nstart and end date transitions and, on rare occasions, time zone name changes."),(0,o.kt)("p",null,"The tz database version used by QuestDB is determined by the JDK version used at\nbuild time and therefore updates to the time zone database are directly\ninfluenced by this JDK version. To find the JDK version used by a QuestDB build,\nrun the following SQL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT build()\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"build"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Build Information: QuestDB 6.0.3, JDK 11.0.7, Commit Hash a6afbadb9b9419d47cca1bf86fa13fdadf08bda4")))),(0,o.kt)("h2",{id:"converting-timestamps-to-and-from-time-zones"},"Converting timestamps to and from time zones"),(0,o.kt)("p",null,"For convenience, QuestDB includes two functions for time zone conversions on\ntimestamp values."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/reference/function/date-time#to_timezone"},"to_timezone()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/reference/function/date-time#to_utc"},"to_utc()"))),(0,o.kt)("p",null,"These functions are used to convert a Unix timestamp, or a string equivalent\ncast to timestamp as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT to_timezone(1623167145000000, 'Europe/Berlin')\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"to_timezone"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-06-08T17:45:45.000000Z")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT to_utc(1623167145000000, 'Europe/Berlin')\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"to_utc"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-06-08T13:45:45.000000Z")))),(0,o.kt)("h3",{id:"using-utc-offset-for-conversions"},"Using UTC offset for conversions"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/function/date-time#to_timezone"},"to_timezone()")," and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/function/date-time#to_utc"},"to_utc()")," functions may use UTC\noffset for converting timestamp values. In some cases, this can be more reliable\nthan string or time zone ID conversion given historic changes to time zone names\nor transitions. The following example takes a Unix timestamp in microseconds and\nconverts it to a time zone ",(0,o.kt)("inlineCode",{parentName:"p"},"+2")," hours offset from UTC:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT to_timezone(1213086329000000, '+02:00')\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"to_timezone"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2008-06-10T10:25:29.000000Z")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT to_utc('2008-06-10T10:25:29.000000Z', '+02:00')\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"to_timezone"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2008-06-10T08:25:29.000000Z")))))}p.isMDXComponent=!0}}]);