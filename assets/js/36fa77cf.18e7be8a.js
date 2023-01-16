"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[6764],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92316:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=n(46092),s=n(72525),l=["components"],p={title:"Real-time stock price dashboard using QuestDB, Python and Plotly",author:"G\xe1bor Boros",author_url:"https://github.com/gabor-boros",author_image_url:"https://avatars.githubusercontent.com/gabor-boros",description:"How to schedule tasks in Python, store stock market data in QuestDB, and create beautiful real-time dashboards using Plotly and Dash.",keywords:["timeseries","questdb","python","plotly","stock"],tags:["tutorial","python","market data","plotly"],image:"/img/blog/shared/og-plotly.png"},c={permalink:"/blog/2021/11/01/plotly-finnhub-realtime-dashboard",source:"@site/blog/2021-11-01-plotly-finnhub-realtime-dashboard.mdx",title:"Real-time stock price dashboard using QuestDB, Python and Plotly",description:"How to schedule tasks in Python, store stock market data in QuestDB, and create beautiful real-time dashboards using Plotly and Dash.",date:"2021-11-01T00:00:00.000Z",formattedDate:"November 1, 2021",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"python",permalink:"/blog/tags/python"},{label:"market data",permalink:"/blog/tags/market-data"},{label:"plotly",permalink:"/blog/tags/plotly"}],readingTime:15.62,truncated:!1,prevItem:{title:"How we built inter-thread messaging from scratch",permalink:"/blog/2021/11/03/interthread"},nextItem:{title:"Demo geospatial and timeseries queries on 250k unique devices",permalink:"/blog/2021/10/04/geospatial-timeseries-demo"}},d=[{value:"Why Plotly and Dash are useful for real-time applications",id:"why-plotly-and-dash-are-useful-for-real-time-applications",children:[]},{value:"Project overview",id:"project-overview",children:[{value:"Prerequisites",id:"prerequisites",children:[]}]},{value:"Environment setup",id:"environment-setup",children:[{value:"Create a new project",id:"create-a-new-project",children:[]},{value:"Installing QuestDB &amp; Redis",id:"installing-questdb--redis",children:[]},{value:"Create the database table",id:"create-the-database-table",children:[]}]},{value:"Creating workers using Celery",id:"creating-workers-using-celery",children:[{value:"Define Python dependencies",id:"define-python-dependencies",children:[]},{value:"Setting up the DB connection",id:"setting-up-the-db-connection",children:[]},{value:"Define the worker settings",id:"define-the-worker-settings",children:[]},{value:"Create the periodic task",id:"create-the-periodic-task",children:[]},{value:"Checking in on what we&#39;ve built so far",id:"checking-in-on-what-weve-built-so-far",children:[]}]},{value:"Visualizing data with Plotly and Dash",id:"visualizing-data-with-plotly-and-dash",children:[{value:"Getting static assets",id:"getting-static-assets",children:[]},{value:"Setting up the application",id:"setting-up-the-application",children:[]}]},{value:"Summary",id:"summary",children:[]}],u={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{alt:"TimescaleDB logo, QuestDB logo, InfluxDB logo",height:467,src:"/img/blog/2021-11-01/banner.png",width:650,mdxType:"Banner"}),(0,r.kt)("p",null,"This post comes from G\xe1bor Boros, who has written an excellent tutorial that\nshows how to build dashboards using Plotly and QuestDB that track and chart\nstock prices in real-time. Thanks for the submission, G\xe1bor!"),(0,r.kt)("h2",{id:"why-plotly-and-dash-are-useful-for-real-time-applications"},"Why Plotly and Dash are useful for real-time applications"),(0,r.kt)("p",null,"If you're working with large amounts of data, efficiently storing raw\ninformation will be your first obstacle. The next challenge is to make sense of\nthe data utilizing analytics. One of the fastest ways to convey the state of\ndata is through charts and graphs."),(0,r.kt)("p",null,"In this tutorial, we will create a real-time streaming dashboard using QuestDB,\nCelery, Redis, Plotly, and Dash. It will be a fun project with excellent charts\nto quickly understand the state of a system with beautiful data visualizations."),(0,r.kt)("p",null,'Plotly defines itself as "the front end for ML and data science models", which\ndescribes it really well. Plotly has an "app framework" called Dash which we can\nuse to create web applications quickly and efficiently. Dash abstracts away the\nboilerplate needed to set up a web server and several handlers for it.'),(0,r.kt)("h2",{id:"project-overview"},"Project overview"),(0,r.kt)("p",null,"The project will be built from two main components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a backend that periodically fetches user-defined stock data from\n",(0,r.kt)("a",{parentName:"li",href:"https://finnhub.io/"},"Finnhub"),", and"),(0,r.kt)("li",{parentName:"ul"},"a front-end that utilizes Plotly and Dash to visualize the gathered data on\ninteractive charts")),(0,r.kt)("p",null,"For this tutorial, you will need some experience in Python and basic SQL\nknowledge. We will use Celery backed by Redis as the message broker and QuestDB\nas storage to periodically fetch data."),(0,r.kt)("p",null,"Let's see the prerequisites and jump right in!"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/release/python-380/"},"Python 3.8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker & Docker Compose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://finnhub.io/"},"Finnhub")," account and sandbox API key"),(0,r.kt)("li",{parentName:"ul"},"Basic SQL skills")),(0,r.kt)("p",null,"The source code for this tutorial is available at the corresponding\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gabor-boros/questdb-stock-market-dashboard"},"GitHub repository"),"."),(0,r.kt)("h2",{id:"environment-setup"},"Environment setup"),(0,r.kt)("h3",{id:"create-a-new-project"},"Create a new project"),(0,r.kt)("p",null,"First of all, we are going to create empty directories for our project root and\nthe Python module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p streaming-dashboard/app\n# streaming-dashboard\n# \u2514\u2500\u2500 app\n")),(0,r.kt)("h3",{id:"installing-questdb--redis"},"Installing QuestDB & Redis"),(0,r.kt)("p",null,"To install the services required for our project, we are using Docker and Docker\nCompose to avoid polluting our host machine. Within the project root, let's\ncreate a file, called ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". This file describes all the\nnecessary requirements the project will use; later on we will extend this file\nwith other services too."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="streaming-dashboard/docker-compose.yml"',title:'"streaming-dashboard/docker-compose.yml"'},'# docker-compose.yml\n\nversion: "3"\n\nvolumes:\n  questdb_data: {}\n\nservices:\n  redis:\n    image: "redis:latest"\n    ports:\n      - "6379:6379"\n\n  questdb:\n    image: "questdb/questdb:latest"\n    volumes:\n      - questdb_data:/root/.questdb/db\n    ports:\n      - "9000:9000"\n      - "8812:8812"\n')),(0,r.kt)("p",null,"Here we go! When you run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up"),", QuestDB and Redis will fire up.\nAfter starting the services, we can access QuestDB's interactive console on\n",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:9000/"},"http://127.0.0.1:9000"),"."),(0,r.kt)("h3",{id:"create-the-database-table"},"Create the database table"),(0,r.kt)("p",null,"We could create the database table later, but we will take this opportunity and\ncreate the table now since we have already started QuestDB. Connect to QuestDB's\ninteractive console, and run the following SQL statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-questdb-sql"},"CREATE TABLE\n      quotes(stock_symbol SYMBOL CAPACITY 5 CACHE INDEX, -- we are in fact just checking 3\n             current_price DOUBLE,\n             high_price DOUBLE,\n             low_price DOUBLE,\n             open_price DOUBLE,\n             percent_change DOUBLE,\n             tradets TIMESTAMP, -- timestamp of the trade\n             ts TIMESTAMP)      -- time of insert in our table\n      timestamp(ts)\nPARTITION BY DAY;\n")),(0,r.kt)("p",null,"After executing the command, we will see a success message in the bottom left\ncorner, confirming that the table creation was successful and the table appears\non the right-hand side's table list view."),(0,r.kt)(s.Z,{alt:"Creating a table using the SQL editor in QuestDB's web console",height:591,src:"/img/blog/2021-11-01/create_table.png",width:770,mdxType:"Screenshot"}),(0,r.kt)("p",null,"Voil\xe0! The table is ready for use."),(0,r.kt)("h2",{id:"creating-workers-using-celery"},"Creating workers using Celery"),(0,r.kt)("h3",{id:"define-python-dependencies"},"Define Python dependencies"),(0,r.kt)("p",null,"As mentioned, our project will have two parts. For now, let's focus on the\nroutine jobs that will fetch the data from Finnhub. As is the case of every\nstandard Python project, we are using ",(0,r.kt)("inlineCode",{parentName:"p"},"requirements.txt")," to define the\ndependencies the project will use. Place the ",(0,r.kt)("inlineCode",{parentName:"p"},"requirements.txt")," in your project\nroot with the content below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"finnhub-python==2.4.14  # The official Finnhub Python client\npydantic[dotenv]==1.9.2 # We will use Pydantic to create data models\ncelery[redis]==5.2.7    # Celery will be the periodic task executor\npsycopg[c,pool]==3.1.1  # We are using QuestDB's PostgreSQL connector\ndash==2.6.1             # Dash is used for building data apps\npandas==1.4.3           # Pandas will handle the data frames from QuestDB\nplotly==5.10.0          # Plotly will help us with beautiful charts\n")),(0,r.kt)("p",null,"We can split the requirements into two logical groups:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"requirements for fetching the data, and"),(0,r.kt)("li",{parentName:"ol"},"requirements needed to visualize this data")),(0,r.kt)("p",null,"For the sake of simplicity, we did not create two separate requirements files,\nthough in a production environment we would do."),(0,r.kt)("p",null,"In order to let the application communicate with QuestDB utilizing the ",(0,r.kt)("inlineCode",{parentName:"p"},"psycopg"),"\nclient library, we need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"libpq-dev")," package on our system. To install\nit, use your package manager; on Windows, you may need to install PostgreSQL on\nyour system."),(0,r.kt)("p",null,"Then, create a virtualenv and install the dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ virtualenv -p python3.8 virtualenv\n$ source virtualenv/bin/activate\n$ pip install -r requirements.txt\n")),(0,r.kt)("h3",{id:"setting-up-the-db-connection"},"Setting up the DB connection"),(0,r.kt)("p",null,"Since the periodic tasks would need to store the fetched quotes, we need to\nconnect to QuestDB. Therefore, we create a new file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," package, called\n",(0,r.kt)("inlineCode",{parentName:"p"},"db.py"),". This file contains the PostgreSQL connection pool that will serve as the\nbase for our connections."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# app/db.py\n\nfrom psycopg_pool import ConnectionPool\nfrom app.settings import settings\n\npool = ConnectionPool(\n    settings.database_url,\n    min_size=1,\n    max_size=settings.database_pool_size,\n)\n")),(0,r.kt)("h3",{id:"define-the-worker-settings"},"Define the worker settings"),(0,r.kt)("p",null,"Before we jump right into the implementation, we must configure Celery. To\ncreate a configuration used by both the workers and the dashboard, create a\n",(0,r.kt)("inlineCode",{parentName:"p"},"settings.py")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," package. We will use ",(0,r.kt)("inlineCode",{parentName:"p"},"pydantic"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseSettings"),"\nto define the configuration. This helps us to read the settings from a ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),"\nfile, environment variable, and prefix them if needed."),(0,r.kt)("p",null,"Ensuring that we do not overwrite any other environment variables, we will set\nthe prefix to ",(0,r.kt)("inlineCode",{parentName:"p"},"SMD"),' that stands for "stock market dashboard", our application.\nBelow you can see the settings file:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# app/settings.py\n\nfrom typing import List\n\nfrom pydantic import BaseSettings\n\n\nclass Settings(BaseSettings):\n    """\n    Settings of the application, used by workers and dashboard.\n    """\n\n    # Celery settings\n    celery_broker: str = "redis://127.0.0.1:6379/0"\n\n    # Database settings\n    database_url: str = "postgresql://admin:quest@127.0.0.1:8812/qdb"\n    database_pool_size: int = 3\n\n    # Finnhub settings\n    api_key: str = ""\n    frequency: int = 5  # default stock data fetch frequency in seconds\n    symbols: List[str] = list()\n\n    # Dash/Plotly\n    debug: bool = True\n    graph_interval: int = 10\n\n    class Config:\n        """\n        Meta configuration of the settings parser.\n        """\n\n        env_file = ".env"\n        # Prefix the environment variable not to mix up with other variables\n        # used by the OS or other software.\n        env_prefix = "SMD_"  # SMD stands for Stock Market Dashboard\n\n\nsettings = Settings()\n')),(0,r.kt)("p",null,"In the settings, you can notice we already defined the ",(0,r.kt)("inlineCode",{parentName:"p"},"celery_broker")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"database_url")," settings with unusual default values."),(0,r.kt)("p",null,"Some bits are missing at the moment. We still have to define the correct\nsettings and run the worker in a Docker container. To keep our environment\nseparated, we will use a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file. One of the most significant advantages for\n",(0,r.kt)("inlineCode",{parentName:"p"},"pydantic")," settings is that it can read environment variables from ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," files."),(0,r.kt)("p",null,"Let's create a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file in the project root, next to ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),", so\nyour project structure should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 app\n\u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u251c\u2500\u2500 db.py\n\u2502   \u251c\u2500\u2500 settings.py\n\u2502   \u2514\u2500\u2500 worker.py\n\u251c\u2500\u2500 .env\n\u251c\u2500\u2500 docker-compose.yml\n")),(0,r.kt)("p",null,"Add the following content to the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'SMD_API_KEY = "<YOUR SANDBOX API KEY>"\nSMD_FREQUENCY = 10\nSMD_SYMBOLS = ["AAPL","DOCN","EBAY"]\n')),(0,r.kt)("p",null,"As you may assume, you will need to get your API key for the sandbox environment\nat this step. To retrieve the key, the only thing you have to do is sign up to\nFinnhub, and your API key will appear on the dashboard after login."),(0,r.kt)(s.Z,{alt:"Two API keys from the Finnhub platform used in a demo application",height:591,src:"/img/blog/2021-11-01/finnhub_api_key.png",width:770,mdxType:"Screenshot"}),(0,r.kt)("h3",{id:"create-the-periodic-task"},"Create the periodic task"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# app/worker.py\n\nimport finnhub\nfrom celery import Celery\nfrom app.db import pool\nfrom app.settings import settings\n\nclient = finnhub.Client(api_key=settings.api_key)\ncelery_app = Celery(broker=settings.celery_broker)\n\n@celery_app.on_after_configure.connect\ndef setup_periodic_tasks(sender, **kwargs):\n    """\n    Set up a periodic task for every symbol defined in the settings.\n    """\n    for symbol in settings.symbols:\n        sender.add_periodic_task(settings.frequency, fetch.s(symbol))\n\n\n@celery_app.task\ndef fetch(symbol: str):\n    """\n    Fetch the stock info for a given symbol from Finnhub and load it into QuestDB.\n    """\n\n    quote: dict = client.quote(symbol)\n    # https://finnhub.io/docs/api/quote\n    # quote = {\'c\': 148.96, \'d\': -0.84, \'dp\': -0.5607, \'h\': 149.7, \'l\': 147.8, \'o\': 148.985, \'pc\': 149.8, \'t\': 1635796803}\n    # c: Current price\n    # d: Change\n    # dp: Percent change\n    # h: High price of the day\n    # l: Low price of the day\n    # o: Open price of the day\n    # pc: Previous close price\n    # t: when it was traded\n    query = f"""\n    INSERT INTO quotes(stock_symbol, current_price, high_price, low_price, open_price, percent_change, tradets, ts)\n    VALUES(\n        \'{symbol}\',\n        {quote["c"]},\n        {quote["h"]},\n        {quote["l"]},\n        {quote["o"]},\n        {quote["pc"]},\n        {quote["t"]} * 1000000,\n        systimestamp()\n    );\n    """\n\n    with pool.connection() as conn:\n        conn.execute(query)\n')),(0,r.kt)("p",null,"Going through the code above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import finnhub\nfrom celery import Celery\nfrom app.db import pool\nfrom app.settings import settings\n\n# [...]\n")),(0,r.kt)("p",null,"In the first few lines, we import the requirements that are needed to fetch and\nstore the data."),(0,r.kt)("p",null,"After importing the requirements, we configure the Finnhub client and Celery to\nuse the Redis broker we defined in the application settings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# [...]\n\nclient = finnhub.Client(api_key=settings.api_key)\ncelery_app = Celery(broker=settings.celery_broker)\n\n# [...]\n")),(0,r.kt)("p",null,"To fetch the data periodically per stock symbol, we need to programmatically\ncreate a periodic task for every symbol we defined in the settings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# [...]\n\n@celery_app.on_after_configure.connect\ndef setup_periodic_tasks(sender, **kwargs):\n    """\n    Set up a periodic task for every symbol defined in the settings.\n    """\n    for symbol in settings.symbols:\n        sender.add_periodic_task(settings.frequency, fetch.s(symbol))\n\n# [...]\n')),(0,r.kt)("p",null,"The snippet above will register a new periodic per stock symbol after Celery is\nconnected to the broker."),(0,r.kt)("p",null,"The last step is to define the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," task that does the majority of the work."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# [...]\n\n@celery_app.task\ndef fetch(symbol: str):\n    """\n    Fetch the stock info for a given symbol from Finnhub and load it into QuestDB.\n    """\n\n    quote: dict = client.quote(symbol)\n    # https://finnhub.io/docs/api/quote\n    # quote = {\'c\': 148.96, \'d\': -0.84, \'dp\': -0.5607, \'h\': 149.7, \'l\': 147.8, \'o\': 148.985, \'pc\': 149.8, \'t\': 1635796803}\n    # c: Current price\n    # d: Change\n    # dp: Percent change\n    # h: High price of the day\n    # l: Low price of the day\n    # o: Open price of the day\n    # pc: Previous close price\n    # t: when it was traded\n\n    query = f"""\n    INSERT INTO quotes(stock_symbol, current_price, high_price, low_price, open_price, percent_change, tradets, ts)\n    VALUES(\n        \'{symbol}\',\n        {quote["c"]},\n        {quote["h"]},\n        {quote["l"]},\n        {quote["o"]},\n        {quote["pc"]},\n        {quote["t"]} * 1000000,\n        systimestamp()\n    );\n    """\n\n    with pool.connection() as conn:\n        conn.execute(query)\n')),(0,r.kt)("p",null,"Using the Finnhub ",(0,r.kt)("inlineCode",{parentName:"p"},"client"),", we get a quote for the given symbol. After the quote\nis retrieved successfully, we prepare a SQL query to insert the quote into the\ndatabase. At the end of the function, as the last step, we open a connection to\nQuestDB and insert the new quote."),(0,r.kt)("p",null,"Congratulations! The worker is ready for use; let's try it out!"),(0,r.kt)("p",null,"Execute the command below in a new terminal window within the virtualenv, and\nwait some seconds to let Celery kick in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"python -m celery --app app.worker.celery_app worker --beat -l info -c 1\n")),(0,r.kt)("p",null,"Soon, you will see that the tasks are scheduled, and the database is slowly\nfilling."),(0,r.kt)("h3",{id:"checking-in-on-what-weve-built-so-far"},"Checking in on what we've built so far"),(0,r.kt)("p",null,"Before proceeding to the visualization steps, let's have a look at what we have\nbuilt so far:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"we created the project root"),(0,r.kt)("li",{parentName:"ol"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file to manage related services"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"app/settings.py")," that handles our application configuration"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"app/db.py")," configuring the database pool, and"),(0,r.kt)("li",{parentName:"ol"},"last but not least, ",(0,r.kt)("inlineCode",{parentName:"li"},"app/worker.py")," that handles the hard work, fetches, and\nstores the data.")),(0,r.kt)("p",null,"At this point, we should have the following project structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"\u251c\u2500\u2500 app\n\u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u251c\u2500\u2500 db.py\n\u2502   \u251c\u2500\u2500 settings.py\n\u2502   \u2514\u2500\u2500 worker.py\n\u251c\u2500\u2500 .env\n\u2514\u2500\u2500 docker-compose.yml\n")),(0,r.kt)("h2",{id:"visualizing-data-with-plotly-and-dash"},"Visualizing data with Plotly and Dash"),(0,r.kt)("h3",{id:"getting-static-assets"},"Getting static assets"),(0,r.kt)("p",null,"This tutorial is not about writing the necessary style sheets or collecting\nstatic assets, so you only need to copy-paste some code. As the first step,\ncreate an ",(0,r.kt)("inlineCode",{parentName:"p"},"assets")," directory next to the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," package with the structure below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"\u251c\u2500\u2500 app\n\u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u251c\u2500\u2500 db.py\n\u2502   \u251c\u2500\u2500 settings.py\n\u2502   \u2514\u2500\u2500 worker.py\n\u251c\u2500\u2500 assets\n\u2502\u2500\u2500 .env\n\u2514\u2500\u2500 docker-compose.yml\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"style.css")," will define the styling for our application. As mentioned above,\nDash will save us from boilerplate code, so the ",(0,r.kt)("inlineCode",{parentName:"p"},"assets")," directory will be used\nby default in conjunction with the stylesheet in it."),(0,r.kt)("p",null,"Download the ",(0,r.kt)("inlineCode",{parentName:"p"},"style.css")," file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"assets")," directory, this can be done using\n",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"curl -s -Lo ./assets/style.css https://raw.githubusercontent.com/gabor-boros/questdb-stock-market-dashboard/main/assets/style.css\n")),(0,r.kt)("h3",{id:"setting-up-the-application"},"Setting up the application"),(0,r.kt)("p",null,"This is the most interesting part of the tutorial. We are going to visualize the\ndata we collect. Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," package, and let's begin\nwith the imports:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# app/main.py\n\nfrom datetime import datetime, timedelta\n\nimport dash\nimport pandas\nfrom dash import dcc, html\nfrom dash.dependencies import Input, Output\nfrom plotly import graph_objects\n\nfrom app.db import pool\nfrom app.settings import settings\n\n# [...]\n")),(0,r.kt)("p",null,"After having the imports in place, we are defining some helper functions and\nconstants."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# [...]\n\nGRAPH_INTERVAL = settings.graph_interval * 1000\n\nTIME_DELTA = 5  # last T hours of data are looked into as per insert time\n\nCOLORS = [\n    "#1e88e5",\n    "#7cb342",\n    "#fbc02d",\n    "#ab47bc",\n    "#26a69a",\n    "#5d8aa8",\n]\n\n\ndef now() -> datetime:\n    return datetime.utcnow()\n\n\ndef get_stock_data(start: datetime, end: datetime, stock_symbol: str):\n    def format_date(dt: datetime) -> str:\n        return dt.isoformat(timespec="microseconds") + "Z"\n\n    query = f"SELECT * FROM quotes WHERE ts BETWEEN \'{format_date(start)}\' AND \'{format_date(end)}\'"\n\n    if stock_symbol:\n        query += f" AND stock_symbol = \'{stock_symbol}\' "\n\n    with pool.connection() as conn:\n        return pandas.read_sql_query(query, conn)\n\n# [...]\n')),(0,r.kt)("p",null,"In the first few lines, we define constants for setting a graph update frequency\n(",(0,r.kt)("inlineCode",{parentName:"p"},"GRAPH_INTERVAL"),") and colors that will be used for coloring the graph\n(",(0,r.kt)("inlineCode",{parentName:"p"},"COLORS"),")."),(0,r.kt)("p",null,"After that, we define two helper functions, ",(0,r.kt)("inlineCode",{parentName:"p"},"now")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"get_stock_data"),". While\n",(0,r.kt)("inlineCode",{parentName:"p"},"now")," is responsible only for getting the current time in UTC (as Finnhub\nreturns the date in UTC too), the ",(0,r.kt)("inlineCode",{parentName:"p"},"get_stock_data")," does more. It is the core of\nour front-end application, it fetches the stock data from QuestDB that workers\ninserted."),(0,r.kt)("p",null,"Define the initial data frame and the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# [...]\n\ndf = get_stock_data(now() - timedelta(hours=TIME_DELTA), now(), "")\n\napp = dash.Dash(\n    __name__,\n    title="Real-time stock market changes",\n    assets_folder="../assets",\n    meta_tags=[{"name": "viewport", "content": "width=device-width, initial-scale=1"}],\n)\n\n# [...]\n')),(0,r.kt)("p",null,"As you can see above, the initial data frame (",(0,r.kt)("inlineCode",{parentName:"p"},"df"),") will contain the latest 5\nhours of data we have. This is needed to pre-populate the application with some\ndata we have. The application definition ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," describes the application's\ntitle, asset folder, and some HTML meta tags used during rendering."),(0,r.kt)("p",null,"Create the application layout that will be rendered as HTML. We won't write\nHTML, we will use Dash's helpers for that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# [...]\n\napp.layout = html.Div(\n    [\n        html.Div(\n            [\n                html.Div(\n                    [\n                        html.H4("Stock market changes", className="app__header__title"),\n                        html.P(\n                            "Continually query QuestDB and display live changes of the specified stocks.",\n                            className="app__header__subtitle",\n                        ),\n                    ],\n                    className="app__header__desc",\n                ),\n            ],\n            className="app__header",\n        ),\n        html.Div(\n            [\n                html.P("Select a stock symbol"),\n                dcc.Dropdown(\n                    id="stock-symbol",\n                    searchable=True,\n                    options=[\n                        {"label": symbol, "value": symbol}\n                        for symbol in df["stock_symbol"].unique()\n                    ],\n                ),\n            ],\n            className="app__selector",\n        ),\n        html.Div(\n            [\n                html.Div(\n                    [\n                        html.Div(\n                            [html.H6("Current price changes", className="graph__title")]\n                        ),\n                        dcc.Graph(id="stock-graph"),\n                    ],\n                    className="one-half column",\n                ),\n                html.Div(\n                    [\n                        html.Div(\n                            [html.H6("Percent changes", className="graph__title")]\n                        ),\n                        dcc.Graph(id="stock-graph-percent-change"),\n                    ],\n                    className="one-half column",\n                ),\n            ],\n            className="app__content",\n        ),\n        dcc.Interval(\n            id="stock-graph-update",\n            interval=int(GRAPH_INTERVAL),\n            n_intervals=0,\n        ),\n    ],\n    className="app__container",\n)\n\n# [...]\n')),(0,r.kt)("p",null,"This snippet is a bit longer, though it has only one interesting part,\n",(0,r.kt)("inlineCode",{parentName:"p"},"dcc.Interval"),". The interval is used to set up periodic graph refresh."),(0,r.kt)("p",null,"We are nearly finished with our application, but the last steps are to define\ntwo callbacks that will listen to input changes and the interval discussed\nabove. The first callback is for generating the graph data and rendering the\nlines per stock symbol."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# [...]\n\n@app.callback(\n    Output("stock-graph", "figure"),\n    [Input("stock-symbol", "value"), Input("stock-graph-update", "n_intervals")],\n)\ndef generate_stock_graph(selected_symbol, _):\n    data = []\n    filtered_df = get_stock_data(now() - timedelta(hours=TIME_DELTA), now(), selected_symbol)\n    groups = filtered_df.groupby(by="stock_symbol")\n\n    for group, data_frame in groups:\n        data_frame = data_frame.sort_values(by=["ts"])\n        trace = graph_objects.Scatter(\n            x=data_frame.ts.tolist(),\n            y=data_frame.current_price.tolist(),\n            marker=dict(color=COLORS[len(data)]),\n            name=group,\n        )\n        data.append(trace)\n\n    layout = graph_objects.Layout(\n        xaxis={"title": "Time"},\n        yaxis={"title": "Price"},\n        margin={"l": 70, "b": 70, "t": 70, "r": 70},\n        hovermode="closest",\n        plot_bgcolor="#282a36",\n        paper_bgcolor="#282a36",\n        font={"color": "#aaa"},\n    )\n\n    figure = graph_objects.Figure(data=data, layout=layout)\n    return figure\n\n# [...]\n')),(0,r.kt)("p",null,"The other callback is very similar to the previous one; it will be responsible\nfor updating the percentage change representation of the stocks or a given\nstock."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# [...]\n\n@app.callback(\n    Output("stock-graph-percent-change", "figure"),\n    [\n        Input("stock-symbol", "value"),\n        Input("stock-graph-update", "n_intervals"),\n    ],\n)\ndef generate_stock_graph_percentage(selected_symbol, _):\n    data = []\n    filtered_df = get_stock_data(now() - timedelta(hours=TIME_DELTA), now(), selected_symbol)\n    groups = filtered_df.groupby(by="stock_symbol")\n\n    for group, data_frame in groups:\n        data_frame = data_frame.sort_values(by=["ts"])\n        trace = graph_objects.Scatter(\n            x=data_frame.ts.tolist(),\n            y=data_frame.percent_change.tolist(),\n            marker=dict(color=COLORS[len(data)]),\n            name=group,\n        )\n        data.append(trace)\n\n    layout = graph_objects.Layout(\n        xaxis={"title": "Time"},\n        yaxis={"title": "Percent change"},\n        margin={"l": 70, "b": 70, "t": 70, "r": 70},\n        hovermode="closest",\n        plot_bgcolor="#282a36",\n        paper_bgcolor="#282a36",\n        font={"color": "#aaa"},\n    )\n\n    figure = graph_objects.Figure(data=data, layout=layout)\n    return figure\n\n# [...]\n')),(0,r.kt)("p",null,"The last step is to call ",(0,r.kt)("inlineCode",{parentName:"p"},"run_server")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," object when the script is\ncalled from the CLI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# [...]\n\nif __name__ == "__main__":\n    app.run_server(host="0.0.0.0", debug=settings.debug)\n')),(0,r.kt)("p",null,"We are now ready to try our application with actual data. Make sure that the\nDocker containers are started and execute ",(0,r.kt)("inlineCode",{parentName:"p"},"PYTHONPATH=. python app/main.py")," from\nthe project root:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ PYTHONPATH=. python app/main.py\n\nDash is running on http://0.0.0.0:8050/\n\n * Tip: There are `.env` or `.flaskenv` files present. Do \"pip install python-dotenv\"\n   to use them.\n * Serving Flask app 'main' (lazy loading)\n * Environment: production\n   WARNING: This is a development server. Do not use it in a production deployment.\n   Use a production WSGI server instead.\n * Debug mode: off\n * Running on all addresses.\n   WARNING: This is a development server. Do not use it in a production deployment.\n * Running on http://192.168.0.14:8050/ (Press CTRL+C to quit)\n")),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:8050/"},"http://127.0.0.1:8050/"),", to see the application in action."),(0,r.kt)(s.Z,{alt:"A chart built using Plotly showing real-time market data from multiple tickers",height:591,src:"/img/blog/2021-11-01/stock_market_plot.png",width:770,mdxType:"Screenshot"}),(0,r.kt)("p",null,"To select only one stock, in the dropdown field choose the desired stock symbol\nand let the application refresh."),(0,r.kt)(s.Z,{alt:"A chart built using Plotly showing real-time market data from a single ticker",height:591,src:"/img/blog/2021-11-01/choosing_ticker_symbol.png",width:770,mdxType:"Screenshot"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this tutorial, we've learned how to schedule tasks in Python, store data in\nQuestDB, and create beautiful dashboards using Plotly and Dash. Although we\nwon't start trading just right now; this tutorial demonstrated well how to\ncombine these separately powerful tools and software to create something bigger\nand more useful. Thank you for your attention!"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"If you like this content, we'd love to know your thoughts! Feel free to share\nyour feedback or come and say hello in the\n",(0,r.kt)("a",{parentName:"p",href:"https://"},"QuestDB Community Slack"),"."))}h.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);