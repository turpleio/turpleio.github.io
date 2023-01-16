"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[1196],{44835:function(e,t,a){a.r(t);var i=a(86010),s=a(67294),n=a(35789),o=a(35113),r=a(60562),c=a(34942),l=a(50415),m=a(29386),u=a(99178),d=a(24735);t.default=function(){return s.createElement(o.Z,{canonical:"/case-study/liveaction/",description:"QuestDB is used by LiveAction  as a time series database for storing flow and encrypted traffic metadata analyzed by their real-time threat detection offering.",title:"LiveAction offer AI-driven network security"},s.createElement("section",{className:(0,i.Z)(u.Z.section,u.Z["section--center"],l.Z.jumbotron)},s.createElement("div",{className:l.Z.jumbotron__summary},s.createElement("div",{className:l.Z.jumbotron__header},s.createElement(n.Z,{href:"https://www.liveaction.com/encrypted-traffic-analysis?utm_source=questdb",variant:"plain"},s.createElement("img",{alt:"LiveAction logo",className:l.Z.jumbotron__logo,height:65,src:d.U.liveaction.src,width:150})),s.createElement("span",{className:l.Z.jumbotron__name},"Case study")),s.createElement("h1",{className:u.Z.section__title},"QuestDB powers analytics in LiveAction\u2019s network security suite"),s.createElement("p",{className:(0,i.Z)(u.Z.section__subtitle,l.Z.jumbotron__description)},"QuestDB is used by LiveAction as a time series database for storing flow and encrypted traffic metadata analyzed by their real-time threat detection engine.")),s.createElement("div",{className:l.Z.jumbotron__banner},s.createElement(r.E,{alt:"Visualizing data in a Jupyter notebook querying data from QuestDB",height:170,src:"/img/pages/case-study/liveaction/visualization-questdb-jupyter.png",width:800}))),s.createElement("section",{className:(0,i.Z)(u.Z.section,u.Z["section--odd"])},s.createElement("div",{className:(0,i.Z)(u.Z["section--inner"],m.Z.outcome__wrapper)},s.createElement("p",{className:m.Z.outcome},s.createElement("img",{alt:"Dollar icon",className:m.Z.outcome__icon,src:"/img/pages/case-study/icons/dollar.svg"}),"Cost reduction due to lower resource consumption"),s.createElement("p",{className:m.Z.outcome},s.createElement("img",{alt:"Workflow icon",className:m.Z.outcome__icon,src:"/img/pages/case-study/icons/workflow.svg"}),"RESTful API support allows simple interoperation with existing stack"),s.createElement("p",{className:m.Z.outcome},s.createElement("img",{alt:"Leaf icon",className:m.Z.outcome__icon,src:"/img/pages/case-study/icons/leaf.svg"}),"SQL compatibility simplifies developer onboarding"),s.createElement("p",{className:m.Z.outcome},s.createElement("img",{alt:"Gauge icon",className:m.Z.outcome__icon,src:"/img/pages/case-study/icons/gauge.svg"}),"Powers a real-time system that operates at enterprise network speeds"),s.createElement("p",{className:m.Z.outcome},s.createElement("img",{alt:"Voice icon",className:m.Z.outcome__icon,src:"/img/pages/case-study/icons/voice.svg"}),"Active developer community that helps with troubleshooting"),s.createElement("p",{className:m.Z.outcome},s.createElement("img",{alt:"Time icon",className:m.Z.outcome__icon,src:"/img/pages/case-study/icons/time.svg"}),"Fast turnaround time from prototype phase to production deployment"))),s.createElement("section",{className:(0,i.Z)(u.Z.section,c.Z.card)},s.createElement("p",{className:c.Z.card__title},"LiveAction is a cybersecurity software company offering a SaaS platform for network monitoring and security. Their encrypted traffic analysis product, ThreatEye, integrates advanced security technologies into a streaming machine learning pipeline to identify network faults, anomalies and threats at wire speed."),s.createElement("p",{className:c.Z.card__subtitle},"In this case study, VP Product Development of ThreatEye and founder of Counterflow AI (now LiveAction), Randy Caldejon describes how and why QuestDB is an important component of their SaaS platform for time-series and behavioural analytics.")),s.createElement("section",{className:u.Z.section},s.createElement("div",{className:(0,i.Z)("markdown",u.Z["section--inner"],u.Z["section--column"])},s.createElement(r.E,{alt:"Encrypted traffic is growing, SSL is nearly obsolete, and malware is hidden within encryption",height:433,src:"/img/pages/case-study/liveaction/traffic-overview.jpg",width:791}),s.createElement("h3",null,"Encrypted traffic analysis for network security"),s.createElement("p",{className:"font-size--large"},"The rise in encrypted traffic over HTTPS and the recent introduction of protocols such as DNS over HTTPS and TLS 1.3 means that network defenders are faced with dramatically reduced deep packet inspection capabilities and visibility. Our security offering allows LiveAction partners to extend network visibility into the nature of this traffic using Encrypted Traffic Analysis (ETA)."),s.createElement("p",{className:"font-size--large"},"ETA provides techniques to gain insight into network behaviour despite encryption while protecting user privacy. It combines Deep Packet Dynamics with machine learning to identify malicious patterns in network activity. The benefit of this approach is that it can scale with continued growth in network traffic and increased use of encrypted protocols despite having no visibility into the content of the exchanges."),s.createElement("h3",null,"Analytics to process millions of events per second"),s.createElement("p",{className:"font-size--large"},"ThreatEye NV is powered by a streaming machine learning engine (MLE) that ingests the high-fidelity flow data generated by its software probes. We use this to provide end-to-end visibility into the nature of network traffic using real-time inferences in combination with Encrypted Traffic Analysis."),s.createElement("p",{className:"font-size--large"},"Distinct from batch processing, streaming ML is powered by analyzers designed to inspect network traffic without multiple passes over the data stream. The streaming nature of this solution means that we have to process millions of events per second. The QuestDB instances we\u2019re running are storing billions of records with the fields which we analyze to perform our predictions. The performance of QuestDB allows us to run queries such as these without our database being the bottleneck."),s.createElement(r.E,{alt:"Running ML tooling via Jupyter notebooks to detect outliers",height:433,src:"/img/pages/case-study/liveaction/local-outlier-factor-questdb-jupyter.png",width:800}),s.createElement("h3",null,"Why we chose QuestDB for time series analytics"),s.createElement("p",{className:"font-size--large"},"We started with InfluxDB as our central time series database, but we quickly started hitting performance issues with scalability in production environments, and we needed to find a practical alternative. We\u2019re typically executing 25k to 100k inserts per second, depending on the size of the customer and the network activity. After InfluxDB, we tried TimescaleDB, which was reasonable for performance, but the database configuration was inconvenient for us and the system footprint was not ideal."),s.createElement("p",{className:"font-size--large"},"When I first tried QuestDB using test scripts to evaluate time series databases, I initially thought I had misconfigured something because the ingestion speed seemed unrealistic. When I ran some SQL queries in the console and got near-instant results returning our full dataset, I started to get excited about QuestDB being a legitimate alternative to other systems."),s.createElement("p",{className:"font-size--large"},"Our tools export either JSON or CSV, which means that a RESTful API to import and export data allows for seamless interfacing with the rest of our technology stack. We\u2019re now using InfluxDB line protocol over TCP for ingestion, and the performance is even better."),s.createElement("h3",null,"Why performance matters for streaming data scenarios"),s.createElement("p",{className:"font-size--large"},"We\u2019re analyzing over 150 features of network flows, and our customers want to see common aggregations such as"," ",s.createElement("b",null,"top-n clients")," consuming data on the network or TLS connections with unusual entropy scores. SQL compatibility makes this easy to calculate in QuestDB and quick to verify in the web console. Even better, the Postgres interface offers our security analytics team the flexibility to dive into deeper analysis using Jupyter Hub."),s.createElement("p",{className:"font-size--large"},"Our solution runs in hybrid-cloud deployments and needs to scale up to 40Gbps worth of inspected network data. High-performance is critical to ensure scalable and reliable analytics when deploying in high-throughput scenarios such as enterprise networks."),s.createElement("p",{className:"font-size--large"},"LiveAction plans to introduce a community version of the ThreatEye analysis pipeline in Q2 2022. The pipeline includes native integration with QuestDB. The community version will be released as ThreatEye Toolkit and will be available as a Docker container on Docker Hub."),s.createElement(r.E,{alt:"A diagram showing six patterns of network traffic highlighted by Deep Packet Dynamics",height:433,src:"/img/pages/case-study/liveaction/console.png",width:1e3}),s.createElement("div",{className:(0,i.Z)("markdown",u.Z["section--inner"],u.Z["section--column"])},s.createElement("p",{className:c.Z.card__title},s.createElement("span",{className:c.Z.card__quote},"\u201c"),"QuestDB is impressive and stands out as a superior option. We use it as the basis of our time series analytics for network threat detection.",s.createElement("span",{className:c.Z.card__quote},"\u201d")),s.createElement("p",{className:c.Z.card__title},s.createElement("b",null,"Randy Caldejon, VP Product Development ThreatEye, LiveAction"))))))}}}]);