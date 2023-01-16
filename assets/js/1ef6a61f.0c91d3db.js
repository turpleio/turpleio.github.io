"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[1368],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56150:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),s=n(46092),l=n(72525),i=["components"],u={title:"Running QuestDB and Prometheus on GKE Autopilot",author:"Yitaek Hwang",author_title:"Guest",author_url:"https://github.com/Yitaek",author_image_url:"https://avatars.githubusercontent.com/Yitaek",description:"Learn how Google Kubernetes Engine in Autopilot can run QuestDB and Prometheus with automated backups for a production-ready time series database deployment.",keywords:["timeseries","kubernetes","autopilot","prometheus","devops"],tags:["tutorial","prometheus","kubernetes","autopilot","devops"],image:"/img/blog/shared/og-google-kubernetes-engine.png"},p={permalink:"/blog/2021/03/18/questdb-and-prometheus-on-gke-autopilot",source:"@site/blog/2021-03-18-questdb-and-prometheus-on-gke-autopilot.mdx",title:"Running QuestDB and Prometheus on GKE Autopilot",description:"Learn how Google Kubernetes Engine in Autopilot can run QuestDB and Prometheus with automated backups for a production-ready time series database deployment.",date:"2021-03-18T00:00:00.000Z",formattedDate:"March 18, 2021",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"prometheus",permalink:"/blog/tags/prometheus"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"autopilot",permalink:"/blog/tags/autopilot"},{label:"devops",permalink:"/blog/tags/devops"}],readingTime:8.085,truncated:!1,prevItem:{title:"Automating ETL jobs on time series data with QuestDB on Google Cloud Platform",permalink:"/blog/2021/03/31/automating-etl-jobs-on-time-series-data-on-gcp"},nextItem:{title:"Real-time stock price alerts using Python, Grafana and QuestDB",permalink:"/blog/2021/03/09/realtime-stock-alerts-python-grafana-questdb"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Setting up GKE Autopilot",id:"setting-up-gke-autopilot",children:[]},{value:"Deploying QuestDB",id:"deploying-questdb",children:[]},{value:"Monitoring Postgres metrics",id:"monitoring-postgres-metrics",children:[{value:"Expose Postgres port",id:"expose-postgres-port",children:[]},{value:"Install Prometheus Postgres exporter",id:"install-prometheus-postgres-exporter",children:[]}]},{value:"Automated Velero backups",id:"automated-velero-backups",children:[{value:"Installation",id:"installation",children:[]},{value:"Velero configuration",id:"velero-configuration",children:[]},{value:"GCS bucket storage",id:"gcs-bucket-storage",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{alt:"An aeroplane cockpit showing instruments for displaying system statuses",height:433,src:"/img/blog/2021-03-18/banner.jpg",width:650,mdxType:"Banner"},"Photo by ",(0,r.kt)("a",{href:"https://unsplash.com/photos/jW8hkB_Qmj8"},"Kent Pilcher")," ","via ",(0,r.kt)("a",{href:"https://unsplash.com"},"Unsplash")),(0,r.kt)("p",null,"This submission comes from one of our community contributors\n",(0,r.kt)("a",{parentName:"p",href:"https://yitaek.medium.com/"},"Yitaek Hwang")," who has put together another\nexcellent tutorial that shows how to use the official QuestDB Helm chart with\nGoogle's Autopilot feature on GKE. Yitaek also includes details of how to use a\nPrometheus exporter and automated backups to demonstrate a production-ready\ndeploy of QuestDB."),(0,r.kt)("p",null,"Thanks for another great contribution, Yitaek!"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Recently, I've been experimenting with QuestDB as a primary time series database\nto stream and analyze IoT and financial data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/2021/02/05/streaming-heart-rate-data-with-iot-core-and-questdb"},"Streaming Heart Rate Data with IoT Core and QuestDB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/2021/02/18/realtime-crypto-tracker-with-kafka-and-questdb"},"Real-time Crypto Tracker with Kafka and QuestDB"))),(0,r.kt)("p",null,"While I was able to validate the power of QuestDB in storing massive amounts of\ndata and querying them quickly in those two projects, I was mostly running them\non my laptop via Docker. To scale my experiments, I wanted to create a more\nproduction-ready setup, including monitoring and disaster recovery, on\nKubernetes. So in this guide, we'll walk through setting up QuestDB on GKE with\nPrometheus and Velero."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before getting started with the tutorial, you will need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/"},"GCP account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/install"},"gcloud CLI")," for programmatic\naccess to Google Cloud resources"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://v3.helm.sh/docs/intro/install/"},"Helm 3"),", the package manager for\nKubernetes")),(0,r.kt)("h2",{id:"setting-up-gke-autopilot"},"Setting up GKE Autopilot"),(0,r.kt)("p",null,"As a DevOps engineer/SRE, I'm a huge fan of GKE since it provides many features\nout of the box, such as cluster autoscaling, network policy plugins, and managed\nIstio compared to other managed Kubernetes options available. Recently Google\nCloud announced\n",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/containers-kubernetes/introducing-gke-autopilot"},"GKE Autopilot"),",\na new mode that further automates Kubernetes operations, including node\nmanagement, security/hardening, and resource optimization. It brings together\nthe serverless experience of Cloud Run with the flexibility and features of GKE.\nIn practice, this means that you are now charged for pod usage rather than\npaying for the compute and storage of the underlying Kubernetes nodes, making it\nan excellent choice for projects with unknown resource utilization."),(0,r.kt)("p",null,"Creating a new GKE Autopilot cluster is also extremely simple. There's no need\nto set up Terraform or VPCs/autoscalers/node groups. To get started, create a\nGoogle Cloud account, navigate to\n",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/"},"Google Kubernetes Engine"),", enable the Kubernetes\nEngine API, and click on ",(0,r.kt)("strong",{parentName:"p"},"Create Cluster"),":"),(0,r.kt)(l.Z,{alt:"A screenshot of the Google Cloud console UI for creating a Kubernetes cluster",height:320,src:"/img/blog/2021-03-18/create-cluster.png",width:400,mdxType:"Screenshot"}),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Configure"),' button under "Autopilot mode", give the cluster a\nname, and wait for a few minutes for the cluster to be ready. I went with the\ndefault name ',(0,r.kt)("inlineCode",{parentName:"p"},"autopilot-cluster-1")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"us-east1")," region, and left the\nnetworking and advanced configuration sections with default values. To configure\nyour Kubernetes context to interact with the cluster via Helm, fetch the\ncredentials using the following ",(0,r.kt)("inlineCode",{parentName:"p"},"gcloud")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters \\\n  get-credentials autopilot-cluster-1 --region us-east1\n")),(0,r.kt)("h2",{id:"deploying-questdb"},"Deploying QuestDB"),(0,r.kt)("p",null,"QuestDB provides\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/questdb/questdb-kubernetes"},"an official Helm chart")," that\ndeploys a single ",(0,r.kt)("inlineCode",{parentName:"p"},"StatefulSet")," pod with 50Gi PVC by default. To install the\nchart, add the QuestDB Helm repo and deploy it by running the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add questdb https://helm.questdb.io/\nhelm upgrade --install questdb questdb/questdb\n")),(0,r.kt)("p",null,"Since GKE Autopilot does not pre-provision node capacity, the pod will be\ninitially marked as unschedulable. Give it a few seconds until cluster\nautoscaler triggers a scaling up event and schedules the questdb pod."),(0,r.kt)(l.Z,{alt:"The status dashboard for Kubernetes services in Google Cloud Console",height:88,src:"/img/blog/2021-03-18/cluster-status-green.png",width:650,mdxType:"Screenshot"}),(0,r.kt)("p",null,"For a quick smoke test, port-forward the HTTP endpoint and interact with the web\nconsole UI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward questdb-0 9000:9000\n")),(0,r.kt)(l.Z,{alt:"The QuestDB web console running on Kubernetes, accessed via port forwarding",height:228,src:"/img/blog/2021-03-18/questdb-console.png",width:650,mdxType:"Screenshot"}),(0,r.kt)("h2",{id:"monitoring-postgres-metrics"},"Monitoring Postgres metrics"),(0,r.kt)("p",null,"At this point, we have a healthy, running instance of QuestDB. However, without\ninspecting the application logs, there is no easy way to determine the overall\nsystem health and grab metrics from QuestDB. For performance reasons, QuestDB\nteam decided to decouple the REST endpoint from its min\n",(0,r.kt)("a",{parentName:"p",href:"/docs/operations/health-monitoring"},"HTTP server that holds a simple health status"),"\non port 9003. This port is currently not exposed via the Helm chart, so the\n",(0,r.kt)("inlineCode",{parentName:"p"},"StatefulSet")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," sections need to be changed to allow probes to\nperiodically check this endpoint."),(0,r.kt)("p",null,"QuestDB currently does not provide a comprehensive metrics endpoint that\nnatively integrates with Prometheus or Postgres, but there are open GitHub\nissues listed below for these features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/questdb/questdb/issues/837"},"[#837] Add support for exposing database state similar to pg_stat_database and pg_stat_activity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/questdb/questdb/issues/532"},"[#532] Add Prometheus metrics endpoint"))),(0,r.kt)("p",null,"I wanted to deploy Prometheus Postgres Exporter to at least track QuestDB\nup/down status and set up the framework to monitor Postgres metrics once these\nfeatures become available."),(0,r.kt)("h3",{id:"expose-postgres-port"},"Expose Postgres port"),(0,r.kt)("p",null,"First, we need to modify the default QuestDB chart to expose port ",(0,r.kt)("inlineCode",{parentName:"p"},"8812")," which\nis the default Postgres endpoint. Create a new YAML file called\n",(0,r.kt)("inlineCode",{parentName:"p"},"questdb-values.yaml")," with the following contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="questdb-values.yaml"',title:'"questdb-values.yaml"'},"service:\n  expose:\n    postgresql:\n      enabled: true\n      port: 8812\n")),(0,r.kt)("p",null,"And pass this config file using Helm to update the existing deployment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --install questdb questdb/questdb -f questdb-values.yaml\n")),(0,r.kt)("h3",{id:"install-prometheus-postgres-exporter"},"Install Prometheus Postgres exporter"),(0,r.kt)("p",null,"Prometheus Helm charts are maintained by the\n",(0,r.kt)("a",{parentName:"p",href:"https://prometheus-community.github.io/helm-charts/"},"Prometheus community"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add prometheus-community https://prometheus-community.github.io/helm-charts\n")),(0,r.kt)("p",null,"Next, we need to modify the default values to scrape QuestDB and also disable\ndefault metrics since QuestDB doesn't currently expose ",(0,r.kt)("inlineCode",{parentName:"p"},"pg_stat_database")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"pg_stat_activity"),". We also want Prometheus to scrape our metrics, so we need to\nadd annotations and specify our scrape port. Create another YAML file called\n",(0,r.kt)("inlineCode",{parentName:"p"},"exporter-values.yaml")," with the following contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="exporter-values.yaml"',title:'"exporter-values.yaml"'},'config:\n  datasource:\n    host: questdb-0.questdb-headless\n    user: admin\n    password: quest\n    port: "8812"\n    database: qdb\n    sslmode: disable\n  disableDefaultMetrics: true\n  annotations:\n    prometheus.io/scrape: "true"\n    prometheus.io/port: "9187"\n')),(0,r.kt)("p",null,"Now we can pass this file via Helm to install the Postgres exporter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade -i postgres-exporter prometheus-community/prometheus-postgres-exporter -f exporter-values.yaml\n")),(0,r.kt)("p",null,"Finally, we can install Prometheus to collect these metrics. Create a new YAML\nfile to hold our Prometheus configurations called ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus-values.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="prometheus-values.yaml"',title:'"prometheus-values.yaml"'},"alertmanager:\n  enabled: false\nnodeExporter:\n  enabled: false\npushgateway:\n  enabled: false\n")),(0,r.kt)("p",null,"Since we don't have many metrics from QuestDB yet, we will only deploy the\nPrometheus server and accept the default configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade -i prometheus prometheus-community/prometheus -f prometheus-values.yaml\n")),(0,r.kt)("p",null,"Access the Prometheus dashboard using port-forwarding to run some example\nqueries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export POD_NAME=$(kubectl get pods --namespace default -l \\ "app=prometheus,component=server" -o jsonpath="{.items[0].metadata.name}")\nkubectl --namespace default port-forward $POD_NAME 9090\n')),(0,r.kt)("p",null,"Once port-forwarding is active, visit ",(0,r.kt)("a",{parentName:"p",href:"localhost:9090"},"localhost:9090")," and check\nthat we're able to scrape ",(0,r.kt)("inlineCode",{parentName:"p"},"pg_up"),":"),(0,r.kt)(l.Z,{alt:"A screenshot of Prometheus monitoring the uptime of a QuestDB instance",height:500,src:"/img/blog/2021-03-18/prometheus.png",width:650,mdxType:"Screenshot"}),(0,r.kt)("p",null,"If you are looking for a production-ready monitoring setup, please refer to my\nfour-part series\n",(0,r.kt)("a",{parentName:"p",href:"https://yitaek.medium.com/practical-monitoring-with-prometheus-grafana-part-i-22d0f172f993"},"Practical monitoring with Prometheus and Grafana"),"."),(0,r.kt)("h2",{id:"automated-velero-backups"},"Automated Velero backups"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://velero.io/"},"Velero")," is an open-source tool to back up and restore\nKubernetes resources and persistent volumes which is useful for disaster\nrecovery (taking snapshots) or data migration. Velero runs inside the Kubernetes\ncluster and integrates with various storage providers (e.g., AWS S3, GCP\nStorage, Minio) as well as ",(0,r.kt)("a",{parentName:"p",href:"https://velero.io/docs/v1.5/restic/"},"restic")," to take\nsnapshots either on-demand or on a specified schedule."),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Velero can be installed via ",(0,r.kt)("a",{parentName:"p",href:"https://vmware-tanzu.github.io/helm-charts/"},"Helm"),"\nor via the ",(0,r.kt)("a",{parentName:"p",href:"https://velero.io/docs/v1.5/basic-install/"},"official CLI tool"),". In\ngeneral, it seems like the CLI gets the latest updates, and the Helm chart lags\nbehind slightly with compatible Docker images."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# for MacOS\nbrew install velero\n# for Windows\nchoco install velero\n")),(0,r.kt)("h3",{id:"velero-configuration"},"Velero configuration"),(0,r.kt)("p",null,"To set up Velero on GCP, we need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vmware-tanzu/velero-plugin-for-gcp#Create-an-GCS-bucket"},"Create a GCS bucket")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vmware-tanzu/velero-plugin-for-gcp#Set-permissions-for-Velero"},"Set permissions for Velero")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vmware-tanzu/velero-plugin-for-gcp#Install-and-start-Velero"},"Install and start Velero"))),(0,r.kt)("h3",{id:"gcs-bucket-storage"},"GCS bucket storage"),(0,r.kt)("p",null,"Provide a unique bucket name and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"gsutil")," tool to create a bucket.\nReplace ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_BUCKET>")," with the name of the bucket and run the following\ncommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"PROJECT_ID=$(gcloud config get-value project) BUCKET=<YOUR_BUCKET> gsutil mb gs://$BUCKET/\n")),(0,r.kt)("p",null,"Create a service account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'gcloud iam service-accounts create velero \\\n  -\u2014display-name "Velero service account"\n')),(0,r.kt)("p",null,"Attach the compute permissions to the service account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'SERVICE_ACCOUNT_EMAIL=$(gcloud iam service-accounts list \\\n  --filter="displayName:Velero service account" \\\n  --format \'value(email)\')ROLE_PERMISSIONS=(\n    compute.disks.get\n    compute.disks.create\n    compute.disks.createSnapshot\n    compute.snapshots.get\n    compute.snapshots.create\n    compute.snapshots.useReadOnly\n    compute.snapshots.delete\n    compute.zones.get\n)\n\ngcloud iam roles create velero.server \\\n    --project $PROJECT_ID \\\n    --title "Velero Server" \\\n    --permissions "$(IFS=","; echo "${ROLE_PERMISSIONS[*]}")"\n\ngcloud projects add-iam-policy-binding $PROJECT_ID \\\n    --member serviceAccount:$SERVICE_ACCOUNT_EMAIL \\\n    --role projects/$PROJECT_ID/roles/velero.server\n\ngsutil iam ch serviceAccount:$SERVICE_ACCOUNT_EMAIL:objectAdmin gs://${BUCKET}\n')),(0,r.kt)("p",null,"Download the service account key and save it as ",(0,r.kt)("inlineCode",{parentName:"p"},"credentials-velero"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud iam service-accounts keys create credentials-velero \\\n    --iam-account $SERVICE_ACCOUNT_EMAIL\n")),(0,r.kt)("p",null,"Now we can install Velero with the GCS plugin enabled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"velero install \\\n    --provider gcp \\\n    --plugins velero/velero-plugin-for-gcp:v1.1.0 \\\n    --bucket $BUCKET \\\n    --secret-file ./credentials-velero\n")),(0,r.kt)("p",null,"Finally, we can create a schedule using a ",(0,r.kt)("inlineCode",{parentName:"p"},"cron"),"-like expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'velero schedule create \\\n  questdb --schedule "0 7 * * *" \\\n  -l "app.kubernetes.io/instance=questdb" \\\n  --include-namespaces default\n')),(0,r.kt)("p",null,"Lastly, verify backups are being made in our bucket:"),(0,r.kt)(l.Z,{alt:"Incremental backups of QuestDB in a storage bucket on Google Cloud",height:230,src:"/img/blog/2021-03-18/velero-backups.png",width:650,mdxType:"Screenshot"}),(0,r.kt)("p",null,"For more information on Velero,\n",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/dev-genius/disaster-recovery-on-kubernetes-98c5c78382bb"},"my article about disaster recovery on Kubernetes"),"\nprovides a deep-dive into the service features and describes why you should\ncheck it out."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"To optimize for performance, QuestDB decided to build a time series database\nfrom scratch with ANSI SQL compatibility, as opposed to building on top of\nPostgres like TimescaleDB. As a newer product, QuestDB is working on enterprise\nfeatures (e.g., replication, high-availability, recovery from snapshot) and\nintegrations with other popular projects. With the Prometheus Postgres exporter\nand Velero, we can configure a production-ready QuestDB instance on Kubernetes.\nI look forward to enhancing this setup in future releases when QuestDB adds more\nmonitoring and DevOps features."),(0,r.kt)("p",null,"If you like this content, we'd love to know your thoughts! Feel free to share\nyour feedback or just come and say hello in the\n",(0,r.kt)("a",{parentName:"p",href:"https://"},"QuestDB Community Slack"),"."))}m.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);