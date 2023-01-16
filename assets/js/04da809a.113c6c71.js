"use strict";(self.webpackChunkquestdb_io=self.webpackChunkquestdb_io||[]).push([[5578],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7491:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return i},default:function(){return c}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],s={title:"Run QuestDB on Kubernetes",sidebar_label:"Kubernetes",description:"This document describes how to deploy QuestDB using a Kubernetes cluster by means of official Helm charts maintained by the QuestDB project"},u={unversionedId:"deployment/kubernetes",id:"deployment/kubernetes",isDocsHomePage:!1,title:"Run QuestDB on Kubernetes",description:"This document describes how to deploy QuestDB using a Kubernetes cluster by means of official Helm charts maintained by the QuestDB project",source:"@site/docs/deployment/kubernetes.md",sourceDirName:"deployment",slug:"/deployment/kubernetes",permalink:"/docs/deployment/kubernetes",editUrl:"https://github.com/turpleio/homepage/edit/main/docs/deployment/kubernetes.md",version:"current",sidebar_label:"Kubernetes",frontMatter:{title:"Run QuestDB on Kubernetes",sidebar_label:"Kubernetes",description:"This document describes how to deploy QuestDB using a Kubernetes cluster by means of official Helm charts maintained by the QuestDB project"},sidebar:"docs",previous:{title:"Launch the official QuestDB AMI via the AWS Marketplace",permalink:"/docs/deployment/aws-official-ami"},next:{title:"Google Cloud Platform",permalink:"/docs/deployment/google-cloud-platform"}},i=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Get the QuestDB Helm chart",id:"get-the-questdb-helm-chart",children:[]},{value:"Run QuestDB",id:"run-questdb",children:[]},{value:"Querying QuestDB locally",id:"querying-questdb-locally",children:[]}],p={toc:i};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can deploy QuestDB in a ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes")," cluster using a\n",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSet"),"\nand a\n",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"persistent volume"),".\nWe distribute QuestDB via ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh"},"Helm")," on\n",(0,l.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/questdb/questdb"},"ArtifactHub"),"."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"Kubernetes CLI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"))),(0,l.kt)("h2",{id:"get-the-questdb-helm-chart"},"Get the QuestDB Helm chart"),(0,l.kt)("p",null,"Using the Helm client, add the official Helm chart repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add questdb https://helm.questdb.io/\n")),(0,l.kt)("p",null,"Update the Helm index:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo update\n")),(0,l.kt)("h2",{id:"run-questdb"},"Run QuestDB"),(0,l.kt)("p",null,"Start a local cluster using ",(0,l.kt)("inlineCode",{parentName:"p"},"minikube"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"minikube start\n")),(0,l.kt)("p",null,"Then install the chart:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm install my-questdb questdb/questdb\n")),(0,l.kt)("p",null,"Finally, use the Kubernetes CLI to get the pod name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"READY"),(0,l.kt)("th",{parentName:"tr",align:null},"STATUS"),(0,l.kt)("th",{parentName:"tr",align:null},"RESTARTS"),(0,l.kt)("th",{parentName:"tr",align:null},"AGE"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"my-questdb-0"),(0,l.kt)("td",{parentName:"tr",align:null},"1/1"),(0,l.kt)("td",{parentName:"tr",align:null},"Running"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"9m59s")))),(0,l.kt)("h2",{id:"querying-questdb-locally"},"Querying QuestDB locally"),(0,l.kt)("p",null,"In order to run queries against your local instance of QuestDB, you can use port\nforwarding:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward my-questdb-0 9000\n")),(0,l.kt)("p",null,"The following ports may also be used:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"9000: ",(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/rest"},"REST API")," and\n",(0,l.kt)("a",{parentName:"li",href:"/docs/develop/web-console"},"Web Console")),(0,l.kt)("li",{parentName:"ul"},"8812: ",(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/postgres"},"Postgres")),(0,l.kt)("li",{parentName:"ul"},"9009: ",(0,l.kt)("a",{parentName:"li",href:"/docs/reference/api/ilp/overview"},"InfluxDB line protocol"))))}c.isMDXComponent=!0}}]);