---
id: features-logging
title: Logging
---

Rsyslog / ELK : 로그 통합 및 분석
백엔드에서 운영되는 서비스의 severity에 따른 로그 관리는 무엇보다 중요합니다. 특히, 다수의 마이크로 서비스로 구성되는 환경에서는 로그를 통한 빠른 문제해결이 무엇보다 중요합니다.

그래서,

모든 마이크로 서비스에서 발생하는 로그는 rsyslog를 통해 한 곳으로 통합합니다.
또한, Logstash로 해당 로그를 전송하여 ELK(Elasticsearch, Logstash, Kibana)를 통한 복잡한 로그를 쉽게 분석할 수 있도록 합니다.