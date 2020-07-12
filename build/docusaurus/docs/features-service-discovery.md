---
id: features-service-discovery
title: Service Discovery
---

Skydns는 내부 DNS 서비스를 제공합니다. Registrator는 각 노드에서 도커 컨테이너로 수행되는 마이크로서비스의 상태변화를 관리합니다. Registrator와 Skydns는 etcd를 통해 정보를 공유합니다.

룰규칙을 수행하는 Rule 마이크로서비스가 추가되는 예를 들면,

N번째 노드에 Rule-n 이 수행됩니다.
N전째 노드의 Registrator는 Rule-n의 service name, IP 및 PORT 정보를 etcd에 기록합니다.
Skydns는 rule-n.rule.skydns 를 제공합니다.
다른 마이크로서비스들은 rule.skydns 로 전체 Rule 클러스터의 정보에서 rule-n.rule.skydns의 IP 및 PORT정보를 알 수 있습니다.