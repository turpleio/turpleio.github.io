"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[1913],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(a),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7882:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=a(46092),l=a(72525),s=["components"],c={title:"Real-time stock price alerts using Python, Grafana and QuestDB",author:"Kovid Rathee",author_title:"Guest",author_url:"https://gist.github.com/kovid-r",author_image_url:"https://avatars.githubusercontent.com/kovid-r",description:"Use Python to query stock prices via REST API, stream the results to QuestDB, and configure Slack alerts based on changes in time series data using Grafana.",keywords:["timeseries","marketdata","grafana","python"],tags:["tutorial","python","grafana","marketdata","alerting"],image:"/img/blog/shared/og-grafana.png"},p={permalink:"/blog/2021/03/09/realtime-stock-alerts-python-grafana-questdb",source:"@site/blog/2021-03-09-realtime-stock-alerts-python-grafana-questdb.mdx",title:"Real-time stock price alerts using Python, Grafana and QuestDB",description:"Use Python to query stock prices via REST API, stream the results to QuestDB, and configure Slack alerts based on changes in time series data using Grafana.",date:"2021-03-09T00:00:00.000Z",formattedDate:"March 9, 2021",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"python",permalink:"/blog/tags/python"},{label:"grafana",permalink:"/blog/tags/grafana"},{label:"marketdata",permalink:"/blog/tags/marketdata"},{label:"alerting",permalink:"/blog/tags/alerting"}],readingTime:8.765,truncated:!1,prevItem:{title:"Running QuestDB and Prometheus on GKE Autopilot",permalink:"/blog/2021/03/18/questdb-and-prometheus-on-gke-autopilot"},nextItem:{title:"Realtime crypto tracker with Kafka and QuestDB",permalink:"/blog/2021/02/18/realtime-crypto-tracker-with-kafka-and-questdb"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Start QuestDB and Grafana",id:"start-questdb-and-grafana",children:[]},{value:"Send data to QuestDB",id:"send-data-to-questdb",children:[]},{value:"Query real-time stock prices",id:"query-real-time-stock-prices",children:[]},{value:"Slack incoming webhook",id:"slack-incoming-webhook",children:[]},{value:"Grafana notification channels",id:"grafana-notification-channels",children:[]},{value:"Grafana alerts",id:"grafana-alerts",children:[{value:"Rules and conditions",id:"rules-and-conditions",children:[]},{value:"Create an alert",id:"create-an-alert",children:[]}]},{value:"Summary",id:"summary",children:[]}],h={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{alt:"A laptop showing a graph of financial data over time",height:433,src:"/img/blog/2021-03-09/banner.jpg",width:650,mdxType:"Banner"},"Photo by ",(0,o.kt)("a",{href:"https://techdaily.ca/robinhood-canada"},"Tech Daily")," via"," ",(0,o.kt)("a",{href:"https://unsplash.com/photos/ztYmIQecyH4"},"Unsplash")),(0,o.kt)("p",null,"This submission comes from one of our community contributors\n",(0,o.kt)("a",{parentName:"p",href:"https://kovidrathee.medium.com/"},"Kovid Rathee")," who has written a great guide\nfor setting up alerting via Grafana."),(0,o.kt)("p",null,"Thanks for your contribution, Kovid!"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"There are many reasons why reacting to time series data is useful, and the\nquicker you can respond to changes in this data, the better. The best tool for\nthis job is easily a time series database, a type of database designed to write\nand read large amounts of measurements that change over time."),(0,o.kt)("p",null,"In this tutorial, you will learn how to read data from a REST API and stream it\nto QuestDB, an open-source time series database. We will use Grafana to\nvisualize the data and notify Slack of changes that interest us. We use Python\nto fetch data from the API and stream it to QuestDB, and you can easily\ncustomize the scripts to check different stocks or even APIs."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before getting started with the tutorial, you will need the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop"},"Docker")," to run Grafana and\nQuestDB with Docker Compose"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://iextrading.com/developers/"},"IexFinance account"),", which offers a free\ntier for 50,000 API calls per month to poll stock prices"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://slack.com/intl/en-gb/help/articles/206845317-Create-a-Slack-workspace"},"Slack workspace"),"\n(optional)")),(0,o.kt)("p",null,"The Python example in this tutorial uses\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/questdb/questdb-slack-grafana-alerts/blob/main/python/stock_data_TSLA_example.py#L29"},"real-time price for a stock"),",\nusing the last trade on IEX. Prices outside of market hours can be retrieved\nfrom the ",(0,o.kt)("inlineCode",{parentName:"p"},"extendedPrice")," field from the Quote endpoint. For more information,\nsee the ",(0,o.kt)("a",{parentName:"p",href:"https://iexcloud.io/docs/api/#quote"},"IexCloud quote endpoint")),(0,o.kt)("p",null,"This tutorial uses Slack as an example notification channel to deliver alerts\nvia Grafana, but it's simple to choose another channel you would like alerts\ndelivered to, such as your own REST API via webhook, Kafka, email, Pagerduty and\nmore. For more details on the available notification channels, see the Grafana\ndocumentation for the\n",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/alerting/notifications/#list-of-supported-notifiers"},"list of supported notifiers"),"."),(0,o.kt)("h2",{id:"start-questdb-and-grafana"},"Start QuestDB and Grafana"),(0,o.kt)("p",null,"To clone the GitHub repository and start the example project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/questdb/questdb-slack-grafana-alerts.git\ncd questdb-slack-grafana-alerts\ndocker-compose up\n")),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up")," brings up two networked containers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Grafana on ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:3000"},"localhost:3000")),(0,o.kt)("li",{parentName:"ul"},"QuestDB on ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:9000"},"localhost:9000")," as well as a port open on\n",(0,o.kt)("inlineCode",{parentName:"li"},"8812"),", which accepts Postgres wire protocol")),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up")," will also\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bsmth/questdb-slack-grafana-alerts/tree/main/grafana"},"provision Grafana"),"\nwith the default connection credentials to QuestDB for Postgres authentication.\nBy provisioning credentials, you can use QuestDB as a default data source in\nGrafana right away without manual configuration steps."),(0,o.kt)("p",null,"Verify QuestDB and Grafana are running by visiting the URLs listed above or use\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose ps")," from the repository root which will show you the running\ncontainers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="docker-compose ps"',title:'"docker-compose','ps"':!0},"     Name                   Command               State                            Ports\n------------------------------------------------------------------------------------------------------------------\ngrafana_alerts   /run.sh                          Up      0.0.0.0:3000->3000/tcp\nquestdb_alerts   /app/bin/java --add-export ...   Up      0.0.0.0:8812->8812/tcp, 0.0.0.0:9000->9000/tcp, 9009/tcp\n")),(0,o.kt)("h2",{id:"send-data-to-questdb"},"Send data to QuestDB"),(0,o.kt)("p",null,"The Python dependencies required for this tutorial are provided in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file and can be installed using pip:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n")),(0,o.kt)("p",null,"We will use the ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/iexfinance/"},"IexFinance API")," to fetch\nreal-time stock prices, but first, we can verify the configuration is correct by\nusing a test script that generates dummy data. The mock script generates random\nprices so that we don't deplete the API call limit during testing."),(0,o.kt)("p",null,"To start sending mock data to QuestDB, run the mock data script in the ",(0,o.kt)("inlineCode",{parentName:"p"},"python"),"\ndirectory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd python\npython mock_stock_data_example.py\n")),(0,o.kt)("p",null,"The script will create a table ",(0,o.kt)("inlineCode",{parentName:"p"},"stock_prices"),", and it will start sending mock\ndata to this table. The columns that we have are:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"column"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"stockListed")),(0,o.kt)("td",{parentName:"tr",align:null},"name of the stock, e.g., ",(0,o.kt)("inlineCode",{parentName:"td"},"TSLA")," for Tesla")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"stockPrice")),(0,o.kt)("td",{parentName:"tr",align:null},"price of the stock in USD as ",(0,o.kt)("inlineCode",{parentName:"td"},"double"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"createdDateTime")),(0,o.kt)("td",{parentName:"tr",align:null},"timestamp at which stockPrice was ingested in QuestDB")))),(0,o.kt)("p",null,"One feature of QuestDB that we are using for the stock name is the ",(0,o.kt)("inlineCode",{parentName:"p"},"symbol")," data\ntype optimized for text columns with repetitive values. More information on this\ntype can be found on the QuestDB\n",(0,o.kt)("a",{parentName:"p",href:"/docs/concept/symbol"},"documentation for symbol type"),"."),(0,o.kt)("p",null,"To verify if data is arriving in QuestDB:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:9000"},"localhost:9000")),(0,o.kt)("li",{parentName:"ol"},"Run the following query:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT * FROM stock_prices;\n")),(0,o.kt)("p",null,"We should see all rows from our table returned at the bottom panel:"),(0,o.kt)(l.Z,{alt:"A screenshot of the QuestDB web console displaying rows of a database table",height:354,src:"/img/blog/2021-03-09/all-rows.png",width:650,mdxType:"Screenshot"}),(0,o.kt)("h2",{id:"query-real-time-stock-prices"},"Query real-time stock prices"),(0,o.kt)("p",null,"Once you have tested the ingestion using the mock data script, we can start\nmaking requests to an API for live market data and query real-time stock prices.\nTo configure IexFinance API authentication:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("a",{parentName:"li",href:"https://iexcloud.io/console/tokens"},"IexFinance console"),", create an\nAPI token"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Reveal Secret Token")," and copy the value")),(0,o.kt)(l.Z,{alt:"A screenshot of the IexFinance console with API keys",height:285,src:"/img/blog/2021-03-09/iex-finance-api.png",width:650,mdxType:"Screenshot"}),(0,o.kt)("p",null,"Now we can add this token to our project, so the Python scripts have\nprogrammatic access to the IexFinance API. To store project secrets, we are\nusing the ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/python-dotenv/"},"Python dotenv")," package,\nwhich allows passing configuration to Python scripts as environment variables.\nWe can explicitly pass a token to each API call to IexFinance, or we can use the\n",(0,o.kt)("inlineCode",{parentName:"p"},"IEX_TOKEN")," environment variable that the Python library will check implicitly.\nTo add the token:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new file ",(0,o.kt)("inlineCode",{parentName:"li"},"./python/.env")),(0,o.kt)("li",{parentName:"ol"},"Paste the token in the ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file in the format ",(0,o.kt)("inlineCode",{parentName:"li"},"IEX_TOKEN=Skwf93hD...")),(0,o.kt)("li",{parentName:"ol"},"Run the live market data example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd python\npython stock_data_TSLA_example.py\n")),(0,o.kt)("p",null,"If the markets are open, real-time prices will be sent to QuestDB:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"Inserting rows into table 'stock_prices' - press Ctrl-C to stop\nInserting into 'stock_prices': TSLA 673.58 2021-03-10 12:37:23.147258\n...\n")),(0,o.kt)("h2",{id:"slack-incoming-webhook"},"Slack incoming webhook"),(0,o.kt)("p",null,"The next step is to create an incoming webhook in Slack to send alerts as\nHTTP(S) requests from Grafana. To set up the webhook:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the\n",(0,o.kt)("a",{parentName:"li",href:"https://api.slack.com/apps?new_app=1"},"create a new Slack app")," page and\ncreate an app called ",(0,o.kt)("strong",{parentName:"li"},"Price Alerts")," for your workspace"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Incoming Webhooks")," in the features section"),(0,o.kt)("li",{parentName:"ol"},"Activate incoming webhooks and click ",(0,o.kt)("strong",{parentName:"li"},"Add New Webhook to Workspace")),(0,o.kt)("li",{parentName:"ol"},"Select the Slack channel you want to receive alerts in and click ",(0,o.kt)("strong",{parentName:"li"},"Allow")),(0,o.kt)("li",{parentName:"ol"},"Copy the Webhook URL which is in the following format")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"https://hooks.slack.com/services/T123/B0123/2Fb...\n")),(0,o.kt)("h2",{id:"grafana-notification-channels"},"Grafana notification channels"),(0,o.kt)("p",null,"The final step in connecting Slack and Grafana is to create a notification\nchannel. To configure a Slack notification channel to send alerts to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to Grafana at ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:3000"},"localhost:3000")," using the\ndefault credentials:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"user:admin\npass:admin\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Navigate to\n",(0,o.kt)("a",{parentName:"li",href:"http://localhost:3000/alerting/notifications"},"notification channels")," and\nclick ",(0,o.kt)("strong",{parentName:"li"},"Add channel")),(0,o.kt)("li",{parentName:"ol"},"Give it the name ",(0,o.kt)("strong",{parentName:"li"},"Stock Price Alert")," and choose the ",(0,o.kt)("inlineCode",{parentName:"li"},"Slack")," type"),(0,o.kt)("li",{parentName:"ol"},"Paste the webhook URL in the ",(0,o.kt)("strong",{parentName:"li"},"Url")," field"),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Notification settings")," dropdown, enable the ",(0,o.kt)("strong",{parentName:"li"},"Include image"),"\ncheckbox"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Test")," to verify that the configuration is correct and then click\n",(0,o.kt)("strong",{parentName:"li"},"Save"))),(0,o.kt)("p",null,"Your Slack workspace should display a test notification coming from Grafana:"),(0,o.kt)(l.Z,{alt:"A test Slack notification from Grafana with example error information and a chart",height:407,src:"/img/blog/2021-03-09/webhook.png",width:450,mdxType:"Screenshot"}),(0,o.kt)("h2",{id:"grafana-alerts"},"Grafana alerts"),(0,o.kt)("p",null,"Next up, we can create a new panel on Grafana and configure alerts based on\nqueries we're interested in:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:3000/dashboard/new"},"Create new Dashboard")," and\nclick ",(0,o.kt)("strong",{parentName:"li"},"+ Add new panel")),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Query")," panel, click the pencil icon or click ",(0,o.kt)("strong",{parentName:"li"},"Edit SQL")),(0,o.kt)("li",{parentName:"ol"},"Paste the following example query")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"SELECT createdDatetime time,\n       round(avg(stockPrice),2) avgPrice\nFROM stock_prices\nWHERE stock = 'TSLA'\nSAMPLE BY 5s;\n")),(0,o.kt)("p",null,"We now have a visualization of five-second averages of Tesla's stock price:"),(0,o.kt)(l.Z,{alt:"A dashboard in Grafana showing Tesla stock price over time",height:459,src:"/img/blog/2021-03-09/graphing-tsla-over-time.png",width:650,mdxType:"Screenshot"}),(0,o.kt)("p",null,"To make sure we don't lose our visualization panel, click ",(0,o.kt)("strong",{parentName:"p"},"Save")," and give the\ndashboard a name of our choice."),(0,o.kt)("h3",{id:"rules-and-conditions"},"Rules and conditions"),(0,o.kt)("p",null,"To understand how alerts work, let's take a brief look at the concepts. The two\nmain components for setting up alerts are the alert ",(0,o.kt)("strong",{parentName:"p"},"Rule")," and ",(0,o.kt)("strong",{parentName:"p"},"Conditions"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Rule")," has the following settings:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Name")," to give the alert a descriptive title"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Evaluate every")," is how often the scheduler will evaluate the alert rule"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"for")," specifies how long the query needs to violate the thresholds before\ntriggering alert notifications")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Conditions")," section has the following settings:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WHEN")," sets an aggregate function on a series"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OF")," is the query to alert on over a time range in the format\n",(0,o.kt)("inlineCode",{parentName:"li"},"query(query_name, from, until)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IS ...")," allows specifying a comparison to a value or range")),(0,o.kt)("p",null,"For more information on the conditions of alerting, see the Grafana\n",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/alerting/create-alerts/#conditions"},"alert conditions documentation"),"."),(0,o.kt)("h3",{id:"create-an-alert"},"Create an alert"),(0,o.kt)("p",null,"The example alert we are using in this tutorial will be triggered if the minimum\nvalue of the query named ",(0,o.kt)("inlineCode",{parentName:"p"},"5-second Avg. of TSLA")," is below ",(0,o.kt)("inlineCode",{parentName:"p"},"762"),", and we will set\nthe time range for alerting to the last thirty seconds. To set up this alert:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Edit the query and select the ",(0,o.kt)("strong",{parentName:"li"},"Alert")," tab"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create Alert")," and give it the name ",(0,o.kt)("inlineCode",{parentName:"li"},"Tesla Stock Price alert")),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Rule")," section:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("strong",{parentName:"li"},"Evaluate every")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"10 seconds")),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("strong",{parentName:"li"},"for")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"30 seconds")))),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Conditions")," section:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("strong",{parentName:"li"},"WHEN")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"min()")),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("strong",{parentName:"li"},"OF")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"query(5-second Avg. of TSLA, 30s, now())")),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"IS ABOVE"),", change this to ",(0,o.kt)("strong",{parentName:"li"},"IS BELOW"),", and set the value to ",(0,o.kt)("inlineCode",{parentName:"li"},"762")))),(0,o.kt)("li",{parentName:"ol"},"Use the default values in the ",(0,o.kt)("strong",{parentName:"li"},"No Data & Error Handling")," section"),(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("strong",{parentName:"li"},"Notifications -> Send to"),", choose the ",(0,o.kt)("inlineCode",{parentName:"li"},"Stock Price Alerts")," notification\nchannel"),(0,o.kt)("li",{parentName:"ol"},"Add an optional message to be delivered with the alert")),(0,o.kt)(l.Z,{alt:"Configuration settings for alerting in Grafana based on Tesla stock prices over the last 30 seconds",height:666,src:"/img/blog/2021-03-09/configuring-alert.png",width:650,mdxType:"Screenshot"}),(0,o.kt)("p",null,"When the conditions of the alert are met, we will see Slack notifications\narriving in the channel that we have configured:"),(0,o.kt)(l.Z,{alt:"A Slack notification displaying an alert from Grafana that Tesla stock price has exceeded a threshold",height:221,src:"/img/blog/2021-03-09/slack-alert.png",width:650,mdxType:"Screenshot"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In this tutorial, we've shown how Grafana and QuestDB can be quite powerful for\ndata visualization and alerting. We learned how to ingest live ticker data from\na REST API into QuestDB and how to visualize this data in a Grafana dashboard\nand set up alerts based on predefined conditions."),(0,o.kt)("p",null,"The next steps for improvements to the Python scripts could be command-line\narguments for multiple stock symbols, and better error handling if markets are\nnot open. Feel free to\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/questdb/questdb-slack-grafana-alerts"},"submit a PR")," if you\nhave a suggestion or improvements to make!"),(0,o.kt)("p",null,"If you like this content, we'd love to know your thoughts! Feel free to share\nyour feedback or just come and say hello in the\n",(0,o.kt)("a",{parentName:"p",href:"https://"},"QuestDB Community Slack"),"."))}d.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);