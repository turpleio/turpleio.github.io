---
id: features-coordinator
title: Coordinator
---

Etcd : 클러스터 코디네이터
Etcd를 이용해 마이크로서비스들 사이의 조정자 역할을 구현합니다. 조정자 기능의 예를 들면,

리더, 매스터 선출
공통 설정 관리
마이크로서비스 등록 및 디스커버리
Etcd vs Consul

Etcd는 단순 key/value 저장만 제공하지만, Consul의 경우는 서비스 디스커버리(service discovery), 상태체크(health check)를 추가로 제공하기 때문에 간편하게 쓰기 좋은 도구입니다. 일반적인 경우는 Consul를 추천합니다.

하지만, 깃플이 사용하는 일부 모듈이 Etcd에 의존성이 있었고, Consul이 제공하는 부가기능도 Etcd를 지원하는 다른 도구로 해결 가능했습니다.