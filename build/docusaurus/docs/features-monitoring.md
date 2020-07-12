---
id: features-monitoring
title: Monitoring
---

The monitoring system keeps tracks of all instances and services. The system alerts engineers when detecting abnormal conditions. All logging data are collected by ELK for system analysis.

Zabbix는 서버의 각종 자원을 모니터링하고, 문제가 발생했을 때 알람을 발생할 수 있는 오픈소스 도구입니다.

다음 대상을 모니터링하고, 지정된 임계치를 넘으면 알람이 발생합니다.

전체 노드별 자원(CPU, Disk, Network 등)
모든 도커 컨테이너의 자원 및 해당 마이크로서비스 상태확인 결과
Redis, Mongo 등의 알려진 도구들: 커뮤니티에 공개된 template을 이용함
Zabbix web monitoring 기능을 이용한 웹서비스 모니터링
마이크로서비스의 상태 모니터링을 위해서, docker run의 상태체크(health check) 기능을 이용합니다.