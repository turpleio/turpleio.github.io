"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[9686],{1387:function(e,t,a){a.r(t);var s=a(6010),n=a(7294),i=a(5789),o=a(9226),r=a(5113),l=a(562),c=a(4942),m=a(415),u=a(9178),d=a(9386),h=a(4735),p=[{description:"Use case: Market data",icon:{alt:"Briefcase icon",src:"/img/pages/case-study/icons/briefcase.svg"}},{description:"Industry: Fintech",icon:{alt:"Globe icon",src:"/img/pages/case-study/icons/globe.svg"}},{description:"Deployment: QuestDB Cloud",icon:{alt:"Flag icon",src:"/img/pages/case-study/icons/flag.svg"}}],g="\nSELECT ts, sum(value) \nFROM 'twitter_mentions' \nWHERE symbol='btc' AND ts >= dateadd('d', 14, now) \nSAMPLE BY 10m\n".trim(),f='\ndef basicAggregation():\n    pipeline = [\n        {"$match": {"metadata.pair": "btc-usdt", "metadata.exchange": "binance"}},\n        {"$sort": {"time": -1}},\n        {"$limit": 50000}\n    ]\n    results = col.aggregate(pipeline, hint="Main Index", allowDiskUse=True)\n    values = []\n    for i in results:\n        values.append(i)\n    return values\nstart = time.time()\nbasicAggregation()\nprint(time.time() - start) \n'.trim(),b="\nSELECT ts, first(open), max(high), min(low), last(close) \nFROM 'ohlc_all' \nWHERE pair='btc-usd' \nSAMPLE BY 5m \nLIMIT 50000\n".trim();t.default=function(){var e="QuestDB is the backbone behind analytical capabilities at Invezo, which aims to become Bloomberg for digital assets.";return n.createElement(r.Z,{canonical:"/case-study/invezo/",description:e,title:"Invezo",image:"/img/pages/case-study/invezo/banner.png"},n.createElement("section",{className:(0,s.Z)(u.Z.section,u.Z["section--center"],m.Z.jumbotron)},n.createElement("div",{className:m.Z.jumbotron__summary},n.createElement("div",{className:m.Z.jumbotron__header},n.createElement(i.Z,{href:"https://www.invezo.com/?utm_source=questdb",variant:"plain"},n.createElement("img",{alt:h.U.invezo.alt,className:m.Z.jumbotron__logo,src:h.U.invezo.src,width:125,height:22})),n.createElement("span",{className:m.Z.jumbotron__name},"Case study")),n.createElement("h1",{className:u.Z.section__title},"Invezo"),n.createElement("p",{className:(0,s.Z)(u.Z.section__subtitle,m.Z.jumbotron__description)},e)),n.createElement("div",{className:m.Z.jumbotron__banner},n.createElement(l.E,{alt:e,src:"/img/pages/case-study/invezo/banner.png",width:777,height:350}))),n.createElement("section",{className:(0,s.Z)(u.Z.section,u.Z["section--odd"])},n.createElement("div",{className:(0,s.Z)(u.Z["section--inner"],d.Z.outcome__wrapper)},p.map((function(e,t){var a=e.icon,s=e.description;return n.createElement("p",{key:t,className:d.Z.outcome},n.createElement("img",{alt:a.alt,className:d.Z.outcome__icon,src:a.src}),s)})))),n.createElement("section",{className:u.Z.section},n.createElement("div",{className:(0,s.Z)("markdown",u.Z["section--inner"],u.Z["section--column"])},n.createElement("h3",null,"The team"),n.createElement("p",{className:"font-size--large"},n.createElement("a",{href:"https://www.invezo.com/"},"Invezo")," is a fast growing startup that aims to become the gold standard for digital assets analytics. Traditional companies in equity markets are assessed and valued based on established frameworks; their coverage from equity research companies is plentiful and all of this information is aggregated on platforms such as the Bloomberg Terminal. It's a different situation for crypto assets, which is a brand new asset class. There is a lack of tools to analyze market price behavior and underlying valuations. Invezo pulls on-chain and off-chain metrics to understand the behavior of crypto assets to a much deeper level, while offering superior charting capabilities and also providing an API."),n.createElement("p",{className:"font-size--large"},"Emmett Miller, co-founder and CEO, Invezo, tells us about his journey building his company using QuestDB Cloud."),n.createElement("h3",null,"The need for a time-series database to deliver real-time analytics to end users"),n.createElement("p",{className:"font-size--large"},"All of the data in the Invezo platform is time series. We track all of our metrics over time. There are plenty of metrics to track: cryptocurrency token price, GitHub commits, reddit subscribers, on-chain wallet transactions. This data is then exposed to the end user of the platform in real-time. The latency needs to be as low as possible to guarantee a good user experience. We want the dashboards to refresh live in milliseconds rather than seconds. This may seem a trivial thing to achieve but it is not: users zooming in and out of our dynamic charts are performing heavy operations for the underlying database to compute. New data also flows in real-time, requiring aggregations on the fly. Performant time-series databases are crucial to cope with the ingestion rate: we currently pull market data for hundreds of cryptocurrencies from more than nine different exchanges. We also need very fast querying capabilities to power our live dashboards and analytics."),n.createElement(l.E,{description:"Example of live dashboards and analytics in real time. Each refresh is a SQL query for QuestDB.",src:"/img/pages/case-study/invezo/dashboard-1.png",width:1017,height:504}),n.createElement("h3",null,"QuestDB deployment within the Invezo stack"),n.createElement("p",{className:"font-size--large"},'We collect data from crypto exchanges APIs and build our main application in Python. We use the official QuestDB Python client library to send the data via the InfluxDB Line Protocol ("ILP") over TCP. Each query is computed programmatically via PGWire using SQL and feeds real-time data, aggregations and downsampled data to plot out charts.'),n.createElement("p",{className:"font-size--large"},"QuestDB has built time-series specific syntax to make queries less verbose. For example, SAMPLE BY automatically downsamples the data for a given interval. An example of SQL query to compute the number of twitter mentions over time is the following:"),n.createElement(o.Z,null,g),n.createElement(l.E,{description:"Example of live dashboards and analytics in real time. Each refresh is a SQL query for QuestDB.",src:"/img/pages/case-study/invezo/dashboard-2.png",width:1017,height:504}),n.createElement("p",{className:"font-size--large"},'We started with AWS RD but the database was too slow for our use case as queries would take up to 6 minutes to come back. We then looked into MongoDB, which recently released time-series capabilities. Here again, slow ingestion and queries made our application unusable (see a comparison with QuestDB toward the end of the case study). In addition, we had a crack at InfluxDB but their query language "Flux" was a show stopper because it is unintuitive.'),n.createElement("p",{className:"font-size--large"},"Here is a comparison of the same query between MongoDB for time series and QuestDB:"),n.createElement(o.Z,{title:"MongoDB Query"},f),n.createElement("p",{className:"font-size--large"},"MongoDB query execution time: 5.4 seconds"),n.createElement(o.Z,{title:"QuestDB Query"},b),n.createElement("p",{className:"font-size--large"},"QuestDB query execution time: 0.1 seconds"),n.createElement("p",{className:"font-size--large"},"We saw the light at the end of the tunnel when we found out about QuestDB. We liked it for its superior ingestion rates and the ability to query data on the fly. On top of the superior performance we are impressed by how vibrant the community is; we asked a few questions on the QuestDB Slack and got a response immediately. We love SQL and wanted to build the queries for our application with a familiar language."),n.createElement(l.E,{src:"/img/pages/case-study/invezo/dashboard-3.gif",width:828,height:331,description:"SAMPLE BY queries, which are on the fly"}),n.createElement("h3",null,"QuestDB Cloud: why we chose the fully hosted solution"),n.createElement("p",{className:"font-size--large"},"We initially deployed QuestDB open source via the AWS marketplace. With QuestDB open source, we do not have the luxury of web console authentication, although we knew that a workaround with setting NGINX as a proxy was possible. We also did not have the bandwidth nor internal resources to properly monitor and manage the instances. It made sense to us that the instances should be overseen by the QuestDB creators, who know the product inside out."),n.createElement("p",{className:"font-size--large"},"By offloading the management and monitoring responsibilities to the QuestDB team, we gained precious hours to focus on our business. We also benefit from authentication for the web console, and scheduled snapshots without any downtime at the click of a button. The UI is intuitive and the team is shipping new features every week. I am excited about the upcoming cold storage integration with AWS S3, which should free a lot of space on our EBS volume."),n.createElement("div",{className:(0,s.Z)("markdown",u.Z["section--inner"],u.Z["section--column"])},n.createElement("p",{className:c.Z.card__title},n.createElement("span",{className:c.Z.card__quote},"\u201c"),"Our customers value a low-latency API, so speed is extremely important to us. With QuestDB, our ingestion rate is 5x faster and query execution time went from minutes to milliseconds",n.createElement("span",{className:c.Z.card__quote},"\u201d")),n.createElement("p",{className:c.Z.card__title},n.createElement("strong",null,"Emmett Miller, Co-founder, Invezo"))))))}}}]);