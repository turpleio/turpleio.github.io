---
id: features-reverse-proxy
title: Reverse Proxy
---

In Turple environment a reverse proxy is important for load balancing and failover and HAProxy is used for reverse proxy. HAProxy is open source providing a reliable and high-performance proxy server.
Especially the reverse proxy should manage requests from the internet because there are various micro services running on many instances. To determines where to send requests, HAproxy should know the latest status of all microservices in the system and Etcd provides the information that HAProxy needs.

<img src="/guide/img/turple12.png" alt="" width="560"/>

