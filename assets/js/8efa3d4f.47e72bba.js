"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[4450],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},80603:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=a(46092),s=["components"],l={title:"Querying data in a Jupyter Notebook",author:"David G. Simmons",author_title:"QuestDB Team",author_url:"https://github.com/davidgs",author_image_url:"https://avatars.githubusercontent.com/davidgs",description:"Use a Jupyter notebook to create a database, insert and query data and graph the results using Python.",keywords:["python","pandas","jupiternotebook","timeseries","questdb"],tags:["tutorial","python","pandas","jupyternotebook"],image:"/img/blog/shared/og-python.png"},u={permalink:"/blog/2020/06/15/python-questdb-tutorial",source:"@site/blog/2020-06-15-python-questdb-tutorial.mdx",title:"Querying data in a Jupyter Notebook",description:"Use a Jupyter notebook to create a database, insert and query data and graph the results using Python.",date:"2020-06-15T00:00:00.000Z",formattedDate:"June 15, 2020",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"python",permalink:"/blog/tags/python"},{label:"pandas",permalink:"/blog/tags/pandas"},{label:"jupyternotebook",permalink:"/blog/tags/jupyternotebook"}],readingTime:5.3,truncated:!0,prevItem:{title:"Demo launch on HackerNews retrospective",permalink:"/blog/2020/07/01/we-put-a-sql-database-on-the-internet"},nextItem:{title:"Sending IoT sensor data from Arduino to QuestDB",permalink:"/blog/2020/06/05/iot-on-questdb"}},p=[{value:"Getting started",id:"getting-started",children:[]},{value:"Create a database",id:"create-a-database",children:[]},{value:"Generate some data",id:"generate-some-data",children:[]},{value:"Query data from QuestDB",id:"query-data-from-questdb",children:[]},{value:"Read the content into pandas dataframe",id:"read-the-content-into-pandas-dataframe",children:[]},{value:"Narrow the search",id:"narrow-the-search",children:[]},{value:"Plot the data",id:"plot-the-data",children:[]},{value:"Clean up",id:"clean-up",children:[]}],d={toc:p};function c(e){var t=e.components,l=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{alt:"A software developer typing code on a laptop",height:365,src:"/img/blog/2020-06-15/banner.jpg",width:650,mdxType:"Banner"},"Photo by"," ",(0,o.kt)("a",{href:"https://unsplash.com/photos/npxXWgQ33ZQ"},"Glenn Carstens-Peters")," ","via ",(0,o.kt)("a",{href:"https://unsplash.com"},"Unsplash")),(0,o.kt)("p",null,"This tutorial shows how to use QuestDB with a Jupyter notebook. We will learn\nhow to create a database, query data and read table contents into a Pandas\ndataframe, and use ",(0,o.kt)("inlineCode",{parentName:"p"},"matplotlib")," to create charts of our table data."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"To get started, you'll need a few things installed and set up. This should be\nquick."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"QuestDB:")," To download QuestDB, you can find complete instructions for getting\nstarted with ",(0,o.kt)("a",{parentName:"p",href:"/docs/get-started/docker"},"Docker"),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/get-started/homebrew"},"Homebrew")," on macOS, or the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/get-started/binaries"},"binaries"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Jupyter Notebooks:")," These are interactive Python environments that will help\nyou run a complete version of this tutorial. To run it, you should:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"make sure you are running Python 3.x and not Python 2.7. If you're in doubt,\n",(0,o.kt)("inlineCode",{parentName:"li"},"python --version")," will tell you."),(0,o.kt)("li",{parentName:"ul"},"install Jupyter Notebooks with ",(0,o.kt)("inlineCode",{parentName:"li"},"pip3 install --upgrade ipython jupyter")," make\nsure that the libraries we use in this tutorial are also installed with\n",(0,o.kt)("inlineCode",{parentName:"li"},"pip3 install requests urlib matplotlib pandas")),(0,o.kt)("li",{parentName:"ul"},"clone ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/davidgs/QuestNotebook"},"this repository"),"\n(",(0,o.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/davidgs/QuestNotebook"),") in the repository\ndirectory run Jupyter Notebook")),(0,o.kt)("p",null,"That will get you right back to a page that looks eerily similar to this that is\ninteractive, allowing you to run the code and interact with the database\nyourself."),(0,o.kt)("p",null,"If you get errors like ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleNotFoundError: No module named 'requests'")," for any\nof the libraries you installed above, double-check to make sure that you are\nactually using Python 3.x ",(0,o.kt)("inlineCode",{parentName:"p"},"jupytper --path")," will let you know if Jupyter is\nusing 2.7 or 3.x"),(0,o.kt)("h2",{id:"create-a-database"},"Create a database"),(0,o.kt)("p",null,"We will need someplace to store our data, so let's create a test database where\nwe can put some random data. We will create a simple table with 5 columns, one\nof which is a timestamp."),(0,o.kt)("p",null,"The create operation in QuestDB appends records to the bottom of a table. If the\ntable has a designated new record, timestamps must be greater than, or equal to\nthe latest timestamp. Attempts to add a timestamp in middle of a table will\nresult in a timestamp out of order error."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"cust_id")," is the customer identifier. It uniquely identifies a customer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"balance_ccy")," balance currency. We use char in this example, but we could use\n",(0,o.kt)("inlineCode",{parentName:"p"},"SYMBOL")," to avoid storing text against each record to save space and increase\ndatabase performance.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"balance")," is the current balance for customer and currency tuple.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"inactive")," is used to flag deleted records.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"timestamp")," timestamp in microseconds of the record. Note that if you receive\nthe timestamp data as a string, it could also be inserted using\n",(0,o.kt)("inlineCode",{parentName:"p"},"to_timestamp"),"."))),(0,o.kt)("p",null,"This should return a ",(0,o.kt)("inlineCode",{parentName:"p"},"200")," status the first time you run it. If you run it more\nthan once, subsequent runs will return ",(0,o.kt)("inlineCode",{parentName:"p"},"400")," because the database already\nexists."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import requests import urllib.parse as par\n  q = 'create table balances'\\\n    '(cust_id int,'\\\n    ' balance_ccy char,'\\\n    'balance double,'\\\n    'inactive boolean,'\\\n    'timestamp timestamp)'\\\n    'timestamp(timestamp)'\n  r = requests.get(\"http://localhost:9000/exec?query=\" + q)\n  print(r.status_code)\n")),(0,o.kt)("h2",{id:"generate-some-data"},"Generate some data"),(0,o.kt)("p",null,"Since we have a new setup, we should add some data to QuestDB so that we can\nhave something to query. We will add some random data, for now. You can re-run\nthis section as many times as you want to add 100 entries at a time, or simply\nchange the ",(0,o.kt)("inlineCode",{parentName:"p"},"range(100)")," to add as many datapoints as you wish."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nimport random\nfrom datetime import datetime\n\nsuccess = 0\nfail = 0\ncurrency = ["$", "\u20ac", "\xa3", "\xa5"]\nrandom.seed()\n\nfor x in range(1000):\n  cust = random.randint(20, 42)\n  cur = random.choice(currency)\n  bal = round(random.uniform(10.45, 235.15), 2)\n  act = bool(random.getrandbits(1))\n  query = "insert into balances values("\\\n      + str(cust) + ",\'"\\\n      + cur + "\'," \\\n      + str(bal) + "," \\\n      + str(act) + ",systimestamp())"\n  r = requests.get("http://localhost:9000/exec?query=" + query)\n  if r.status_code == 200:\n    success += 1\n  else:\n    fail += 1\n  print("Rows inserted: " + str(success))\n  if fail > 0:\n    print("Rows Failed: " + str(fail))\n')),(0,o.kt)("h2",{id:"query-data-from-questdb"},"Query data from QuestDB"),(0,o.kt)("p",null,"Now that we have data available, let's try querying some of it to see what we\nget back!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nimport io\n\nr = requests.get("http://localhost:9000/exp?query=select * from balances")\nrawData = r.text\nprint(rawData)\n')),(0,o.kt)("h2",{id:"read-the-content-into-pandas-dataframe"},"Read the content into pandas dataframe"),(0,o.kt)("p",null,"So you'll notice that the returned data is just a massive CSV string. If you'd\nrather have JSON data, then you would change the endpoint to\n",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9000/exec"),", but since we're going to use Pandas to frame our\ndata, we'll stick with CSV."),(0,o.kt)("p",null,"We are also telling pandas to parse the ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp")," field as a date. This is\nimportant since we're dealing with time series data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n\npData = pd.read_csv(io.StringIO(rawData), parse_dates=['timestamp'])\nprint(pData)\n")),(0,o.kt)("h2",{id:"narrow-the-search"},"Narrow the search"),(0,o.kt)("p",null,"That's just getting us all the data, but let's narrow the search using some SQL\nclauses. Let's look for a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"cust_id")," and only balances of that customer\nthat are in USD."),(0,o.kt)("p",null,"We are also only interested in times the customer was active. Since this is SQL,\nyou can make this query as simple, or as complex, as you'd like. All of the data\nwas generated randomly, so this exact query may return no results, you may have\nto adjust the ",(0,o.kt)("inlineCode",{parentName:"p"},"cust_id")," below until you get results back."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," The query string must be URL-encoded before it is sent."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import urllib.parse\n\nq = "select cust_id,"\\\n    " balance,"\\\n    " balance_ccy,"\\\n    " inactive,"\\\n    " timestamp"\\\n    " from balances"\\\n    " where cust_id = 26"\\\n    " and balance_ccy = \'$\'"\\\n    " and not inactive"\n\nquery = urllib.parse.quote(q)\nr = requests.get("http://localhost:9000/exp?query=" + query)\nqueryData = r.text\nrawData = pd.read_csv(io.StringIO(queryData), parse_dates=[\'timestamp\'])\nprint(rawData)\n')),(0,o.kt)("h2",{id:"plot-the-data"},"Plot the data"),(0,o.kt)("p",null,"We will use matplotlib to plot the data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from matplotlib import pyplot as plt\n\nrawData.plot("timestamp", ["balance"], subplots=True)\n')),(0,o.kt)("p",null,"From that query we should get a nice little plot of our data, like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Graph of the balance from the query",src:a(87696).Z})),(0,o.kt)("h2",{id:"clean-up"},"Clean up"),(0,o.kt)("p",null,"Now we will clean everything up for the next time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'r = requests.get("http://localhost:9000/exec?query=drop table balances")\nif r.status_code == 200:\n  print("Database Table dropped")\nelse:\n  print("Database Table not Dropped: " + str(r.status_code))\n')),(0,o.kt)("p",null,"You can now stop your QuestDB instance, if you'd like, or leave it running and\nfind some great uses for it! If you enjoyed this tutorial, please\n",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/intent/follow?screen_name=QuestDB"},"follow us")," on Twitter,\nand make sure you give our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/questdb/questdb"},"GitHub repository")," a star!"))}c.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})},87696:function(e,t,a){t.Z=a.p+"assets/images/graph-74ca7ab3894ace758b8b488c232d2327.png"}}]);