---
id: features-reverse-proxy
title: Reverse Proxy
---

In Turple environment a reverse proxy is important for load balancing and failover and HAProxy is used for reverse proxy. HAProxy is a open source providing a reliable and high performance proxy server.
Especailly ithe reverse proxy should manage requests from the internet becuase there are various micro services running on many instances. 

<img src="/guide/img/turple12.png" alt="" width="560"/>

For better reverse proxy HAProxy should know status of all microservices. It can read all information of Turple environment from Etcd.