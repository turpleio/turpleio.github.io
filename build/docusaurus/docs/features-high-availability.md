---
id: features-high-availability
title: High Availability
---

Services of cloud native application must be stopless. The clustring architecture and monitoring system of Turple makes the services fault-tolerant and realiable.

<img src="/guide/img/turple07.png" alt="" width="480"/>

<img src="/guide/img/turple08.png" alt="" width="480"/>

위에서 부터 차례로 설명합니다.
깃플 서비스의 백엔드는 단위기능을 수행하는 마이크로서비스들로 구성됩니다. 마이크로서비스들은 부하분산과 장애조치failover를 위해 여러 노드에 걸쳐 수평적확장될 수 있습니다.

마이크로서비스는 버전관리되는 도커이미지로 제작되어 여러개 노드에 배포됩니다. 마이크로서비스는 도커docker 컨테이너로 수행됩니다. 모든 백엔드의 서비스는 도커로 관리되고 있습니다.



백엔드 인프라를 고민하면서,

Docker swarm 와 Kubenetes 를 검토했고 실제로 docker swarm은 한동안 사용했었지만, 정교하게 배포를 위한 기능과 네트워크 성능 때문에 직접 환경을 구축하게 되었습니다. Cloud Foundry 같은 Application PaaS 지향하며 우리의 목적에 맞는 가벼운 환경을 지향합니다.