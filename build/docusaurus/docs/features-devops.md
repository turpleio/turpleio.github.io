---
id: features-devops
title: DevOps
---

DevOps is necessary to make a true cloud native service. When Turple receives a push notification from Github, the updated code is built and the new created container is automatically deployed to designated instances by Turple's CI/CD process.


Ansible : 지속적 배포
지속적 배포CD(Continuous Delivery)를 위해 ansible을 활용합니다.

먼저, 클라우드 인프라에 기본 환경을 구축합니다. 개발환경을 위해 하나의 노드에 전체 환경을 만들기도 하고, 다수의 노드 클러스터에 자동으로 환경을 구성할 수 있습니다. 기존 클러스터에 노드를 추가할 수도 있습니다.

구축과정을 예로 들면,

VM 인스턴스를 생성하여 노드들 클러스터를 만들고,
보안설정 security group하고,
노드 내에서, 기본 시스템 서비스(ntp, logrotated 등) 설정하고,
노드 내에서, 모니터링 설정하고,
노드 내에서, Docker 수행환경 만들기 등,
노드 구축 후의 배포과정은,

Ansible과 함께 make를 이용하여 복잡한 의존성을 확인하여 진행합니다. 수시로 개별 서비스별로 업그레이드 해야 되는 경우가 많은데요. 이때, 서비스에 영향을 주지않도록, 마이크로서비스 컨테이너 하나씩 순차적으로 배포하고 있습니다.