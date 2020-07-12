---
id: features-database
title: Database
---

MongoDB : NoSQL DB
MongoDB는 JSON 형태의 도큐먼트 단위로 데이터를 저장하는 NoSQL DB입니다.

Query, Index, Aggregation 기능 지원
Replica set으로 구성하여 고가용성 제공
샤딩sharding구성하여 수평 확장 제공
현재 주로 채팅 로그 기록 및 통계 처리 데이터 저장합니다.

Redis : 인메모리 DB
Redis는 Key-Value Store로 대용량의 데이터 처리를 위해 설계된 인메모리 DB입니다.

Strings, Hashes, Lists, Sets, Sorted Sets 등의 다양한 데이터 타입을 지원
만료 시각이 되면 데이터를 삭제하는 Expire 기능 지원
메모리에 있는 데이터를 파일에 저장할 수 있는 Persistence 기능 지원
Redis Sentinel 구성으로 고가용성 제공
Redis Cluster 구성으로 샤딩 제공
현재 Redis Sentinel을 구성하여 운영중이며, 세션 데이터 공유 및 간단한 Job queue 등의 용도로 활용합니다.