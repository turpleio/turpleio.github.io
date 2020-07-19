---
id: features-high-availability
title: High Availability
---

Services of cloud native application must not be stopped. The clustering architecture and monitoring system of Turple makes the services fault-tolerant and reliable. The default cluster size of Turple is 3 and the size can change as service requirements. Basicaly, in Turple environment the micro services expand horizontally for load balancing and failover. Turple uses two ways for health-check. One is health-checking by using Route53. The other is for service containers. Turple sets up to make Route53 health-check gateway instances regularly.

<img src="/guide/img/turple07.png" alt="" width="480"/>

What if Gateway-3 was down? First Route53 passes requests only to Gateway-1 and Gateway-2. Then Turple's reverse proxy passes traffic to only available service containers. Engineers can recognize the problem occurs by alerting from the monitoring system. Since other two servers are running they can have enough time to resolve the problem. In the worst case even if two server are down one server can provide service. This is how Turple implements high availability of service. 

<img src="/guide/img/turple08.png" alt="" width="480"/>

