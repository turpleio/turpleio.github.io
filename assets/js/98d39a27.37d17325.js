"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[3599],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40311:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=n(72525),l=["components"],s={title:"Launch QuestDB on DigitalOcean",sidebar_label:"DigitalOcean Droplet",description:"This document describes how to launch the official AWS Marketplace AMI with QuestDB installed and how to access and secure the instance on Amazon Web Services"},c={unversionedId:"deployment/digitalocean",id:"deployment/digitalocean",isDocsHomePage:!1,title:"Launch QuestDB on DigitalOcean",description:"This document describes how to launch the official AWS Marketplace AMI with QuestDB installed and how to access and secure the instance on Amazon Web Services",source:"@site/docs/deployment/digitalocean.md",sourceDirName:"deployment",slug:"/deployment/digitalocean",permalink:"/docs/deployment/digitalocean",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/deployment/digitalocean.md",version:"current",sidebar_label:"DigitalOcean Droplet",frontMatter:{title:"Launch QuestDB on DigitalOcean",sidebar_label:"DigitalOcean Droplet",description:"This document describes how to launch the official AWS Marketplace AMI with QuestDB installed and how to access and secure the instance on Amazon Web Services"},sidebar:"docs",previous:{title:"Google Cloud Platform",permalink:"/docs/deployment/google-cloud-platform"},next:{title:"Design for performance",permalink:"/docs/operations/design-for-performance"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create a QuestDB Droplet",id:"create-a-questdb-droplet",children:[]},{value:"QuestDB droplet configuration",id:"questdb-droplet-configuration",children:[{value:"QuestDB Credentials",id:"questdb-credentials",children:[]},{value:"Disabling authentication",id:"disabling-authentication",children:[]},{value:"Disabling interfaces",id:"disabling-interfaces",children:[]}]},{value:"API creation",id:"api-creation",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"DigitalOcean is a platform with software listings from independent vendors that\nrun on cloud resources. This guide describes how to launch QuestDB via the\nDigitalOcean marketplace using the official listing. This document also\ndescribes usage instructions after you have launched the instance, including\nhints for authentication, the available interfaces, and tips for accessing the\nREST API and web console."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"The prerequisites for deploying QuestDB on DigitalOcean are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A DigitalOcean account (sign up using\n",(0,r.kt)("a",{parentName:"li",href:"https://m.do.co/c/50d6b551562b"},"the QuestDB referral link")," for 100 USD free\ncredit)"),(0,r.kt)("li",{parentName:"ul"},"Basic ",(0,r.kt)("inlineCode",{parentName:"li"},"shell")," knowledge for executing commands on the DigitalOcean droplet")),(0,r.kt)("h2",{id:"create-a-questdb-droplet"},"Create a QuestDB Droplet"),(0,r.kt)("p",null,"DigitalOcean has a marketplace which offers ",(0,r.kt)("strong",{parentName:"p"},"1-Click Apps")," reviewed by their\nstaff. QuestDB is available on the marketplace recently, so setup using this\nmethod is preferred:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the\n",(0,r.kt)("a",{parentName:"li",href:"https://marketplace.digitalocean.com/apps/questdb?refcode=50d6b551562b"},"QuestDB listing"),"\non DigitalOcean"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create QuestDB Droplet")),(0,r.kt)("li",{parentName:"ol"},"Select the basic plan for your Droplet (4GB RAM is recommended)")),(0,r.kt)(o.Z,{alt:"Choosing the RAM and CPU capacity for a QuestDB DigitalOcean Droplet",height:591,src:"/img/blog/2021-07-09/choosing-droplet.png",width:770,mdxType:"Screenshot"}),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Choose a region closest to you"),(0,r.kt)("li",{parentName:"ol"},"At the ",(0,r.kt)("strong",{parentName:"li"},"Authentication")," section, enter your SSH public key, or set a\npassword"),(0,r.kt)("li",{parentName:"ol"},"Set a hostname for the droplet such as ",(0,r.kt)("inlineCode",{parentName:"li"},"questdb-demo")),(0,r.kt)("li",{parentName:"ol"},"Leave all other settings with their defaults, and click ",(0,r.kt)("strong",{parentName:"li"},"Create Droplet")," at\nthe bottom of the page")),(0,r.kt)(o.Z,{alt:"Finalizing the creation step of a DigitalOcean Droplet running QuestDB",height:591,src:"/img/blog/2021-07-09/questdb-droplet.png",width:770,mdxType:"Screenshot"}),(0,r.kt)("p",null,"After 30 seconds, QuestDB should be ready to use. To validate that we set\neverything up successfully, copy the Droplet's IP address by clicking on it and\nnavigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://<IP ADDRESS>:9000/")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"<IP ADDRESS>")," is the IP address\nyou just copied. The interactive console should load and we can start querying\nthe database and inserting data."),(0,r.kt)("h2",{id:"questdb-droplet-configuration"},"QuestDB droplet configuration"),(0,r.kt)("p",null,"The server configuration file is at the following location on the droplet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/home/questdb/server.conf\n")),(0,r.kt)("p",null,"For details on the server properties and using this file, see the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/configuration"},"server configuration documentation"),"."),(0,r.kt)("p",null,"The default ports used by QuestDB interfaces are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Web console ","&"," REST API is available on port ",(0,r.kt)("inlineCode",{parentName:"li"},"9000")),(0,r.kt)("li",{parentName:"ul"},"PostgreSQL wire protocol available on ",(0,r.kt)("inlineCode",{parentName:"li"},"8812")),(0,r.kt)("li",{parentName:"ul"},"InfluxDB line protocol ",(0,r.kt)("inlineCode",{parentName:"li"},"9009")," (TCP and UDP)"),(0,r.kt)("li",{parentName:"ul"},"Health monitoring ","&"," Prometheus ",(0,r.kt)("inlineCode",{parentName:"li"},"/metrics")," ",(0,r.kt)("inlineCode",{parentName:"li"},"9003"))),(0,r.kt)("h3",{id:"questdb-credentials"},"QuestDB Credentials"),(0,r.kt)("p",null,"Credentials may be configured in the server configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/home/questdb/server.conf\n")),(0,r.kt)("p",null,"The default Postgres credentials should be changed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"pg.user=...\npg.password=...\n")),(0,r.kt)("p",null,"For details on authentication using InfluxDB line protocol, see the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/api/ilp/authenticate"},"InfluxDB line protocol authentication guide"),"."),(0,r.kt)("h3",{id:"disabling-authentication"},"Disabling authentication"),(0,r.kt)("p",null,"If you would like to disable authentication for Postgres wire protocol or\nInfluxDB line protocol, comment out the following lines in the server\nconfiguration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="/home/questdb/server.conf"',title:'"/home/questdb/server.conf"'},"# pg.password=...\n\n# line.tcp.auth.db.path=conf/auth.txt\n")),(0,r.kt)("h3",{id:"disabling-interfaces"},"Disabling interfaces"),(0,r.kt)("p",null,"Interfaces may be ",(0,r.kt)("strong",{parentName:"p"},"disabled completely")," with the following configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="/home/questdb/server.conf"',title:'"/home/questdb/server.conf"'},"# disable postgres\npg.enabled=false\n\n# disable InfluxDB line protocol over TCP and UDP\nline.tcp.enabled=false\nline.udp.enabled=false\n\n# disable HTTP (web console and REST API)\nhttp.enabled=false\n")),(0,r.kt)("p",null,"The HTTP interface may alternatively be set to ",(0,r.kt)("strong",{parentName:"p"},"readonly"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="/home/questdb/server.conf"',title:'"/home/questdb/server.conf"'},"# set HTTP interface to readonly\nhttp.security.readonly=true\n")),(0,r.kt)("h2",{id:"api-creation"},"API creation"),(0,r.kt)("p",null,"In addition to creating a Droplet from the QuestDB 1-Click App via the control\npanel, you can also\n",(0,r.kt)("a",{parentName:"p",href:"https://digitalocean.com/docs/api"},"use the DigitalOcean API"),"."),(0,r.kt)("p",null,"As an example, to create a 4GB QuestDB Droplet in the SFO2 region, you can use\nthe following curl command. You\u2019ll need to either save your API access token to\nan environment variable or substitute it into the command below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H \'Content-Type: application/json\' \\\n     -H \'Authorization: Bearer \'$TOKEN\'\' -d \\\n    \'{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"questdb-20-04"}\' \\\n    "https://api.digitalocean.com/v2/droplets"\n')))}d.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);