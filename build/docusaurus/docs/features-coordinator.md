---
id: features-coordinator
title: Coordinator
---

Etcd is a very strong key-value store for a clustering environment. Since Etcd provides very reliable service to other microservices, it's used for leader election or service discovery. All microservices in Turple environment write a variety of information to Etcd and read from it the information they need.

<img src="/guide/img/turple20.png" alt="" width="340"/>
