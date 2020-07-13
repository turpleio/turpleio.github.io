---
id: features-reverse-proxy
title: Reverse Proxy
---

<img src="/guide/img/turple12.png" alt="" width="560"/>


기본적으로 Haproxy를 활용합니다. 이를 통해, 외부로 제공되는 웹서비스의 로드분산과 장애조치failover를 제공합니다.
웹소켓을 통한 MQTT, REST API 등의 요구사항에 따라 정교한 설정이 필요합니다. 또한, Etcd에 관리되고 있는 마이크로서비스들의 동적인 추가/삭제를 동적으로 반영합니다.