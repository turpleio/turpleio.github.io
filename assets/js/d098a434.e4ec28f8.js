"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[5305],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,c=m["".concat(s,".").concat(u)]||m[u]||h[u]||r;return n?a.createElement(c,l(l({ref:t},p),{},{components:n})):a.createElement(c,l({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81339:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),l=n(72525),o=["components"],s={title:"Geospatial data",description:"This document describes how to work with geohashes as geospatial types in QuestDB, including hints on converting back and forth from latitude and longitude, inserting via SQL, InfluxDB line protocol, CSV, and more."},d={unversionedId:"concept/geohashes",id:"concept/geohashes",isDocsHomePage:!1,title:"Geospatial data",description:"This document describes how to work with geohashes as geospatial types in QuestDB, including hints on converting back and forth from latitude and longitude, inserting via SQL, InfluxDB line protocol, CSV, and more.",source:"@site/docs/concept/geohashes.md",sourceDirName:"concept",slug:"/concept/geohashes",permalink:"/docs/concept/geohashes",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/concept/geohashes.md",version:"current",frontMatter:{title:"Geospatial data",description:"This document describes how to work with geohashes as geospatial types in QuestDB, including hints on converting back and forth from latitude and longitude, inserting via SQL, InfluxDB line protocol, CSV, and more."},sidebar:"docs",previous:{title:"Indexes",permalink:"/docs/concept/indexes"},next:{title:"Root directory structure",permalink:"/docs/concept/root-directory-structure"}},p=[{value:"Geohash description",id:"geohash-description",children:[]},{value:"QuestDB geohash type",id:"questdb-geohash-type",children:[{value:"Geohash literals",id:"geohash-literals",children:[]},{value:"Specifying geohash precision",id:"specifying-geohash-precision",children:[]},{value:"Casting geohashes",id:"casting-geohashes",children:[]}]},{value:"SQL examples",id:"sql-examples",children:[{value:"First and last functions",id:"first-and-last-functions",children:[]},{value:"Within operator",id:"within-operator",children:[]}]},{value:"Java embedded usage",id:"java-embedded-usage",children:[]},{value:"InfluxDB line protocol",id:"influxdb-line-protocol",children:[]},{value:"CSV import",id:"csv-import",children:[]},{value:"Postgres",id:"postgres",children:[]}],h={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"QuestDB adds support for working with geospatial data through a ",(0,r.kt)("inlineCode",{parentName:"p"},"geohash")," type.\nThis page describes how to use geohashes, with an overview of the syntax,\nincluding hints on converting from latitude and longitude, inserting via SQL,\nInfluxDB line protocol, and via Java embedded API."),(0,r.kt)("p",null,"To facilitate working with this data type,\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/function/spatial"},"spatial functions")," and\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/operators/spatial"},"operators")," have been added to help with\nfiltering and generating data."),(0,r.kt)("h2",{id:"geohash-description"},"Geohash description"),(0,r.kt)("p",null,"A geohash is a convenient way of expressing a location using a short\nalphanumeric string, with greater precision obtained with longer strings. The\nbasic idea is that the Earth is divided into grids of defined size, and each\narea is assigned a unique id called its Geohash. For a given location on Earth,\nwe can convert latitude and longitude as\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Geohash#Limitations_when_used_for_deciding_proximity"},"the approximate center point"),"\nof a grid represented by a geohash string. This string is the Geohash and will\ndetermine which of the predefined regions the point belongs to."),(0,r.kt)("p",null,"In order to be compact, ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Base32#Geohash"},"base32"),"\nis used as a representation of Geohashes, and are therefore comprised of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"all decimal digits (0-9) and"),(0,r.kt)("li",{parentName:"ul"},"almost all of the alphabet (case-insensitive) ",(0,r.kt)("strong",{parentName:"li"},'except "a", "i", "l", "o"'),".")),(0,r.kt)("p",null,"The followng figure illustrates how increasing the length of a geohash results\nin a higher-precision grid size:"),(0,r.kt)(l.Z,{alt:"An illustration showing three maps with different geohash precision levels applied",height:598,src:"/img/docs/geohashes/increasing-precision.png",width:850,mdxType:"Screenshot"}),(0,r.kt)("h2",{id:"questdb-geohash-type"},"QuestDB geohash type"),(0,r.kt)("p",null,"Geohash column types are represented in QuestDB as ",(0,r.kt)("inlineCode",{parentName:"p"},"geohash(<precision>)"),".\nPrecision is specified in the format ",(0,r.kt)("inlineCode",{parentName:"p"},"n{units}")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," is a numeric\nmultiplier and ",(0,r.kt)("inlineCode",{parentName:"p"},"units")," may be either ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," for char or ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," for bits (",(0,r.kt)("inlineCode",{parentName:"p"},"c")," being\nshorthand for 5 x ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),")."),(0,r.kt)("p",null,"The following example shows basic usage of geohashes by creating a column of 5\n",(0,r.kt)("inlineCode",{parentName:"p"},"char")," precision, 29 bits of precision, and inserting geohash values into these\ncolumns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"CREATE TABLE geo_data (g5c geohash(5c), g29b geohash(29b));\nINSERT INTO geo_data VALUES(#u33d8, ##10101111100101111111101101101)\n-- Querying by geohash\nSELECT * FROM geo_data WHERE g5c = #u33d8;\n")),(0,r.kt)("p",null,"It's not possible to store variable size geohashes within a column, therefore\nthe size and precision of a geohash must be known beforehand. Shorter-precision\ngeohashes ",(0,r.kt)("strong",{parentName:"p"},"cannot be inserted")," into longer-precision columns as all bits are\nsignificant. Details on the size of geohashes is described in the\n",(0,r.kt)("a",{parentName:"p",href:"#specifying-geohash-precision"},"geohash precision")," section below. Additionally,\n",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," is supported as a separate value for geohash columns of all precision."),(0,r.kt)("h3",{id:"geohash-literals"},"Geohash literals"),(0,r.kt)("p",null,"Geohashes have a literal syntax which starts with the hash ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," symbol followed\nby up to 12 chars, i.e.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"INSERT INTO my_geo_data VALUES(#u33, #u33d8b12)\n")),(0,r.kt)("p",null,"Geohash literals with a single hash (",(0,r.kt)("inlineCode",{parentName:"p"},"#"),") may include a suffix in the format\n",(0,r.kt)("inlineCode",{parentName:"p"},"/{bits}")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"bits")," is the number of bits from 1-60 to allow for further\ngranularity of the geohash size. This is useful if a specific precision is\ndesired on the column size, but the values being inserted are using a char\nnotation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"-- insert a 5-bit geohash into a 4 bit column\nINSERT INTO my_geo_data VALUES(#a/4)\n-- insert a 20-bit geohash into an 18 bit column\nINSERT INTO my_geo_data VALUES(#u33d/18)\n")),(0,r.kt)("p",null,"The binary equivalent of geohashes may be expressed with two hash symbols (",(0,r.kt)("inlineCode",{parentName:"p"},"##"),")\nfollowed by up to 60 bits:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"INSERT INTO my_geo_data VALUES(##0111001001001001000111000110)\n")),(0,r.kt)("p",null,"Implicit casts from strings to literal geohashes is possible, but less efficient\nas string conversion to geohash must be performed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"INSERT INTO my_geo_data VALUES(#u33, #u33d8b12)\n-- equivalent to\nINSERT INTO my_geo_data VALUES('u33', 'u33d8b12')\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," values reserve 1 bit which means 8-bit geohashes are stored in 9-bits as\n",(0,r.kt)("inlineCode",{parentName:"p"},"short"),"s internally."),(0,r.kt)("h3",{id:"specifying-geohash-precision"},"Specifying geohash precision"),(0,r.kt)("p",null,"The size of the ",(0,r.kt)("inlineCode",{parentName:"p"},"geohash")," type may be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 to 12 chars or"),(0,r.kt)("li",{parentName:"ul"},"1 to 60 bits")),(0,r.kt)("p",null,"The following table shows all options for geohash precision using ",(0,r.kt)("inlineCode",{parentName:"p"},"char"),"s and\nthe calculated area of the grid the geohash refers to:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Area"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(1c)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#u")),(0,r.kt)("td",{parentName:"tr",align:null},"5,000km \xd7 5,000km")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(2c)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#u3")),(0,r.kt)("td",{parentName:"tr",align:null},"1,250km \xd7 625km")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(3c)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#u33")),(0,r.kt)("td",{parentName:"tr",align:null},"156km \xd7 156km")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(4c)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#u33d")),(0,r.kt)("td",{parentName:"tr",align:null},"39.1km \xd7 19.5km")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(5c)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#u33d8")),(0,r.kt)("td",{parentName:"tr",align:null},"4.89km \xd7 4.89km")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(6c)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#u33d8b")),(0,r.kt)("td",{parentName:"tr",align:null},"1.22km \xd7 0.61km")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(7c)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#u33d8b1")),(0,r.kt)("td",{parentName:"tr",align:null},"153m \xd7 153m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(8c)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#u33d8b12")),(0,r.kt)("td",{parentName:"tr",align:null},"38.2m \xd7 19.1m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(9c)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#u33d8b121")),(0,r.kt)("td",{parentName:"tr",align:null},"4.77m \xd7 4.77m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(10c)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#u33d8b1212")),(0,r.kt)("td",{parentName:"tr",align:null},"1.19m \xd7 0.596m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(11c)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#u33d8b12123")),(0,r.kt)("td",{parentName:"tr",align:null},"149mm \xd7 149mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(12c)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#u33d8b121234")),(0,r.kt)("td",{parentName:"tr",align:null},"37.2mm \xd7 18.6mm")))),(0,r.kt)("p",null,"For geohashes with size determined by ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," for bits, the following table compares\nthe precision of some geohashes with units expressed in bits compared to chars:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type (char)"),(0,r.kt)("th",{parentName:"tr",align:null},"Equivalent to"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(1c)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(5b)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(6c)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(30b)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(12c)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"geohash(60b)"))))),(0,r.kt)("h3",{id:"casting-geohashes"},"Casting geohashes"),(0,r.kt)("p",null,"Explicit casts are not necessary, but given certain constraints, it may be\nrequired to cast from strings to geohashes. Empty strings are cast as ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," for\ngeohash values which are stored in the column with all bits set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"INSERT INTO my_geo_data VALUES(cast({my_string} as geohash(8c))\n")),(0,r.kt)("p",null,"It may be desirable to cast as geohashes in the circumstance where a table with\na desired schema should be created such as the following query. Note that the\nuse of ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE 1 != 1")," means that no rows are inserted, only the table schema is\nprepared:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"CREATE TABLE new_table AS\n(SELECT cast(null AS geohash(4c)) gh4c)\nFROM source_table WHERE 1 != 1\n")),(0,r.kt)("p",null,"Geohash types can be cast from higher to lower precision, but not from lower to\nhigher precision:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"-- The following cast is valid:\nCAST(#123 as geohash(1c))\n-- Invalid (low-to-high precision):\nCAST(#123 as geohash(4c))\n")),(0,r.kt)("h2",{id:"sql-examples"},"SQL examples"),(0,r.kt)("p",null,"The following queries create a table with two ",(0,r.kt)("inlineCode",{parentName:"p"},"geohash")," type columns of varying\nprecision and insert geohashes as string values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"CREATE TABLE my_geo_data (g1c geohash(1c), g8c geohash(8c));\nINSERT INTO my_geo_data values(#u, #u33d8b12);\n")),(0,r.kt)("p",null,"Larger-precision geohashes are truncated when inserted into smaller-precision\ncolumns, and inserting smaller-precision geohases into larger-precision columns\nproduces an error, i.e.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"-- SQL will execute successfully with 'u33d8b12' truncated to 'u'\nINSERT INTO my_geo_data values(#u33d8b12, #eet531sq);\n-- ERROR as '#e' is too short to insert into 8c_geohash column\nINSERT INTO my_geo_data values(#u, #e);\n")),(0,r.kt)("p",null,"Performing geospatial queries is done by checking if geohash values are equal to\nor within other geohashes. Consider the following table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"CREATE TABLE geo_data\n  (ts timestamp,\n  device_id symbol,\n  g1c geohash(1c),\n  g8c geohash(8c)),\nindex(device_id) timestamp(ts);\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"within")," operator may only be used when all symbol columns in the query are\nindexed."))),(0,r.kt)("p",null,"This creates a table with a ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol")," type column as an identifier and we can\ninsert values as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"INSERT INTO geo_data values(now(), 'device_1', #u, #u33d8b12);\nINSERT INTO geo_data values(now(), 'device_1', #u, #u33d8b18);\nINSERT INTO geo_data values(now(), 'device_2', #e, #ezzn5kxb);\nINSERT INTO geo_data values(now(), 'device_1', #u, #u33d8b1b);\nINSERT INTO geo_data values(now(), 'device_2', #e, #ezzn5kxc);\nINSERT INTO geo_data values(now(), 'device_3', #e, #u33dr01d);\n")),(0,r.kt)("p",null,"This table contains the following values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ts"),(0,r.kt)("th",{parentName:"tr",align:null},"device_id"),(0,r.kt)("th",{parentName:"tr",align:null},"g1c"),(0,r.kt)("th",{parentName:"tr",align:null},"g8c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2021-09-02T14:20:04.669312Z"),(0,r.kt)("td",{parentName:"tr",align:null},"device_1"),(0,r.kt)("td",{parentName:"tr",align:null},"u"),(0,r.kt)("td",{parentName:"tr",align:null},"u33d8b12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2021-09-02T14:20:06.553721Z"),(0,r.kt)("td",{parentName:"tr",align:null},"device_1"),(0,r.kt)("td",{parentName:"tr",align:null},"u"),(0,r.kt)("td",{parentName:"tr",align:null},"u33d8b12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2021-09-02T14:20:07.095639Z"),(0,r.kt)("td",{parentName:"tr",align:null},"device_1"),(0,r.kt)("td",{parentName:"tr",align:null},"u"),(0,r.kt)("td",{parentName:"tr",align:null},"u33d8b18")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2021-09-02T14:20:07.721444Z"),(0,r.kt)("td",{parentName:"tr",align:null},"device_2"),(0,r.kt)("td",{parentName:"tr",align:null},"e"),(0,r.kt)("td",{parentName:"tr",align:null},"ezzn5kxb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2021-09-02T14:20:08.241489Z"),(0,r.kt)("td",{parentName:"tr",align:null},"device_1"),(0,r.kt)("td",{parentName:"tr",align:null},"u"),(0,r.kt)("td",{parentName:"tr",align:null},"u33d8b1b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2021-09-02T14:20:08.807707Z"),(0,r.kt)("td",{parentName:"tr",align:null},"device_2"),(0,r.kt)("td",{parentName:"tr",align:null},"e"),(0,r.kt)("td",{parentName:"tr",align:null},"ezzn5kxc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2021-09-02T14:20:09.280980Z"),(0,r.kt)("td",{parentName:"tr",align:null},"device_3"),(0,r.kt)("td",{parentName:"tr",align:null},"e"),(0,r.kt)("td",{parentName:"tr",align:null},"u33dr01d")))),(0,r.kt)("p",null,"We can check if the last-known location of a device is a specific geohash with\nthe following query which will return an exact match based on geohash:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT * FROM geo_data WHERE g8c = #u33dr01d LATEST ON ts PARTITION BY device_id\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ts"),(0,r.kt)("th",{parentName:"tr",align:null},"device_id"),(0,r.kt)("th",{parentName:"tr",align:null},"g1c"),(0,r.kt)("th",{parentName:"tr",align:null},"g8c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2021-09-02T14:20:09.280980Z"),(0,r.kt)("td",{parentName:"tr",align:null},"device_3"),(0,r.kt)("td",{parentName:"tr",align:null},"e"),(0,r.kt)("td",{parentName:"tr",align:null},"u33dr01d")))),(0,r.kt)("h3",{id:"first-and-last-functions"},"First and last functions"),(0,r.kt)("p",null,"The use of ",(0,r.kt)("inlineCode",{parentName:"p"},"first()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"last()"),' functions within geospatial queries has been\nsignificantly optimized so that common types of queries relating to location are\nimproved. This means that queries such as "last-known location" by indexed\ncolumn for a given time range or sample bucket is specifically optimized for\nquery speed over large datasets:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT ts, last(g8c) FROM geo_data WHERE device_id = 'device_3';\n-- first and last locations sample by 1 hour:\nSELECT ts, last(g8c), first(g8c) FROM geo_data\nWHERE device_id = 'device_3' sample by 1h;\n")),(0,r.kt)("h3",{id:"within-operator"},"Within operator"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"within")," operator can be used as a prefix match to evaluate if a geohash is\nequal to or is within a larger grid. The following query will return the most\nrecent entries by device ID if the ",(0,r.kt)("inlineCode",{parentName:"p"},"g8c")," column contains a geohash within\n",(0,r.kt)("inlineCode",{parentName:"p"},"u33d"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql",metastring:'title="LATEST BY usage"',title:'"LATEST',BY:!0,'usage"':!0},"SELECT * FROM geo_data\nWHERE g8c within(#u33d)\nLATEST ON ts PARTITION BY device_id;\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"within")," operator can only be applied in ",(0,r.kt)("inlineCode",{parentName:"p"},"LATEST BY")," queries and all symbol\ncolumns within the query ",(0,r.kt)("strong",{parentName:"p"},"must be indexed"),"."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ts"),(0,r.kt)("th",{parentName:"tr",align:null},"device_id"),(0,r.kt)("th",{parentName:"tr",align:null},"g1c"),(0,r.kt)("th",{parentName:"tr",align:null},"g8c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2021-09-02T14:20:08.241489Z"),(0,r.kt)("td",{parentName:"tr",align:null},"device_1"),(0,r.kt)("td",{parentName:"tr",align:null},"u"),(0,r.kt)("td",{parentName:"tr",align:null},"u33d8b1b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2021-09-02T14:20:09.280980Z"),(0,r.kt)("td",{parentName:"tr",align:null},"device_3"),(0,r.kt)("td",{parentName:"tr",align:null},"e"),(0,r.kt)("td",{parentName:"tr",align:null},"u33dr01d")))),(0,r.kt)("p",null,"For more information on the use of this operator, see the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/operators/spatial"},"spatial operators")," reference."),(0,r.kt)("h2",{id:"java-embedded-usage"},"Java embedded usage"),(0,r.kt)("p",null,"Inserting geohashes into tables via Java (embedded) QuestDB instance through the\n",(0,r.kt)("inlineCode",{parentName:"p"},"TableWriter"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"putGeoHash")," method which accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"LONG")," values natively with\nthe destination precision. Additionally, ",(0,r.kt)("inlineCode",{parentName:"p"},"GeoHashes.fromString")," may be used for\nstring conversion, but comes with some performance overhead as opposed to ",(0,r.kt)("inlineCode",{parentName:"p"},"long"),"\nvalues directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'try (TableWriter writer = engine.getWriter(ctx.getCairoSecurityContext(), "geohash_table")) {\n    for(int i = 0; i < 10; i++) {\n        TableWriter.Row row = writer.newRow();\n        row.putSym(0, "my_device");\n        // putGeoStr(columnIndex, hash)\n        row.putGeoStr(1, "u33d8b1b");\n        // putGeoHashDeg(columnIndex, latitude, longitude)\n        row.putGeoHashDeg(2, 48.669, -4.329)\n        row.append();\n    }\n    writer.commit();\n}\n\n')),(0,r.kt)("p",null,"Reading geohashes via Java is done by means of the following methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Record.getGeoByte(columnIndex)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Record.getGeoShort(columnIndex)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Record.getGeoInt(columnIndex)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Record.getGeoLong(columnIndex)"))),(0,r.kt)("p",null,"Therefore it's necessary to know the type of the column beforehand through\ncolumn metadata by index:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ColumnType.tagOf(TableWriter.getMetadata().getColumnType(columnIndex));\n")),(0,r.kt)("p",null,"Invoking the method above will return one of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ColumnType.GEOBYTE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ColumnType.GEOSHORT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ColumnType.GEOINT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ColumnType.GEOLONG"))),(0,r.kt)("p",null,"For more information and detailed examples of using table readers and writers,\nsee the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/api/java-embedded"},"Java API documentation"),"."),(0,r.kt)("h2",{id:"influxdb-line-protocol"},"InfluxDB line protocol"),(0,r.kt)("p",null,"Geohashes may also be inserted via InfluxDB line protocol. In order to perform\ninserts in this way;"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create table with columns of geohash type beforehand:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"CREATE TABLE tracking (ts timestamp, geohash geohash(8c));\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Insert via InfluxDB line protocol using the ",(0,r.kt)("inlineCode",{parentName:"li"},"geohash")," field:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'tracking geohash="46swgj10"\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The InfluxDB Line Protocol parser does not support geohash literals, only\nstrings. This means that table columns of type ",(0,r.kt)("inlineCode",{parentName:"p"},"geohash")," type with the desired\nprecision must exist before inserting rows with this protocol."),(0,r.kt)("p",{parentName:"div"},"If a value cannot be converted or is omitted it will be set as ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")))),(0,r.kt)("p",null,"Inserting geohashes with larger precision than the column it is being inserted\ninto will result in the value being truncated, for instance, given a column with\n",(0,r.kt)("inlineCode",{parentName:"p"},"8c")," precision:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Inserting the following line\ngeo_data geohash="46swgj10r88k"\n# Equivalent to truncating to this value:\ngeo_data geohash="46swgj10"\n')),(0,r.kt)("h2",{id:"csv-import"},"CSV import"),(0,r.kt)("p",null,"Geohashes may also be inserted via ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/importing-data/"},"CSV import"),".\nIn order to perform inserts in this way;"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create table with columns of geohash type beforehand:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"CREATE TABLE tracking (ts timestamp, geohash geohash(8c));\n")),(0,r.kt)("p",null,"Note that you may skip this step, if you specify column types in the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),"\nJSON object."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Import the CSV file via REST API using the ",(0,r.kt)("inlineCode",{parentName:"li"},"geohash")," field:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -F data=@tracking.csv 'http://localhost:9000/imp?name=tracking'\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tracking.csv")," file's contents may look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"ts,geohash\n17/01/2022 01:02:21,46swgj10\n")),(0,r.kt)("p",null,"Just like InfluxDB line protocol, CSV import supports geohash strings only, so\nthe same restrictions apply."),(0,r.kt)("h2",{id:"postgres"},"Postgres"),(0,r.kt)("p",null,"Geohashes may also be used over Postgres wire protocol as other data types. The\nPython example below demonstrates how to connect to QuestDB over postgres wire,\ninsert and query geohashes:"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When querying geohash values over Postgres wire protocol, QuestDB always returns\ngeohashes in text mode (i.e. as strings) as opposed to binary"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import psycopg2 as pg\nimport datetime as dt\n\ntry:\n    connection = pg.connect(user="admin",\n                            password="quest",\n                            host="127.0.0.1",\n                            port="8812",\n                            database="qdb")\n    cursor = connection.cursor()\n\n    cursor.execute("""CREATE TABLE IF NOT EXISTS geo_data\n      (ts timestamp, device_id symbol index, g1c geohash(1c), g8c geohash(8c))\n      timestamp(ts);""")\n\n    cursor.execute("INSERT INTO geo_data values(now(), \'device_1\', \'u\', \'u33d8b12\');")\n    cursor.execute("INSERT INTO geo_data values(now(), \'device_1\', \'u\', \'u33d8b18\');")\n    cursor.execute("INSERT INTO geo_data values(now(), \'device_2\', \'e\', \'ezzn5kxb\');")\n    cursor.execute("INSERT INTO geo_data values(now(), \'device_3\', \'e\', \'u33dr01d\');")\n    # commit records\n    connection.commit()\n\n    print("Data in geo_data table:")\n    cursor.execute("SELECT * FROM geo_data;")\n    records = cursor.fetchall()\n    for row in records:\n        print(row)\n\n    print("Records within \'u33d\' geohash:")\n    cursor.execute("SELECT * FROM geo_data WHERE g8c within(#u33d) LATEST ON ts PARTITION BY device_id;")\n    records = cursor.fetchall()\n    for row in records:\n        print(row)\n\nfinally:\n    if (connection):\n        cursor.close()\n        connection.close()\n        print("QuestDB connection closed")\n')))}m.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);