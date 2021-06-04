---
slug: /network-configuration
sidebar_label: "Network Configuration"
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl'

## Waton PoC Network 설정
Waton PoC 테스트를 위해서는 먼저 Network 환경을 설정해야 한다. Waton PoC Network는 아래 그림과 같이 Battery Bank 장비의 WIZ750SR-Waton이 속한 ```Local Network```와 ASG210이 ASG DM서비스와 통신하는 ```Global Network```로 구분된다. ASG210의 Security System은 두 네트워크간의 데이터 전송의 보안을 책임진다.

<img alt="wiz750sr-network" src={useBaseUrl('/img/asgdm/ASGDM_network.png')} />

## Local Network 환경설정
Local Network는 WIZ750SR-Waton과 ASG210간의 Ethernet 기반 통신망을 구축하는데 있다. Ethernet 기반 통신망을 구축하기 위해서는 먼저 ```Network Hub```를 통해 WIZ750SR-Waton 장비와 ASG210을 Ethernet 케이블로 연결한다. 그리고 ```사용자 PC```를 동일한 ```Network Hub```에 연결함으로써 ```PC Tool```을 통해 WIZ750SR-Waton과 ASG210의 각각의 Local Network 정보를 설정할 수 있다.

아래 링크를 통해 세부 Local Network 환경설정 방법을 확인할 수 있다.
#### [1. PC Tool을 통한 WIZ750SR-Waton Local Network 환경설정](https://wiznet-azure-sphere.github.io/WIZnet-ASG-PoC-Docs/wiz750sr-waton)

#### [2. PC Tool을 통한 ASG210 Local Network 환경설정](https://wiznet-azure-sphere.github.io/WIZnet-ASG-PoC-Docs/asg210-setup)

<img alt="wiz750sr-network" src={useBaseUrl('/img/asgdm/ASGDM_network_local.png')} />

## Global Network 환경설정
Global Network는 ASG210이 Internet 접속을 통해 ASG DM과 통신하는 네트워크 환경이다. 이는 ASG210을 Global Network Router 장비에 Ethernet 케이블을 통해 연결함으로써 완료된다.

<img alt="wiz750sr-network" src={useBaseUrl('/img/asgdm/ASGDM_network_global.png')} />

## NEXT
PC Tool을 통한 WIZ750SR-Waton Local Network 환경설정

PC Tool을 통한 ASG210 Local Network 환경설정