---
slug: /setup/asg210-setup
sidebar_label: "ASG210 Local Network 환경설정"
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl'

## ASG210 Setup


## ASG210 동작 상태 확인


## ASG210 네트워크 설정
Local Network와 연결되는 ASG210의 Ethernet port는 Static 또는 DHCP로 설정이 가능하며, 기본설정은 DHCP로 되어 있다. Local Network Hub에서 DHCP를 지원하지 않는 경우, 사용자는 PC Tool을 통해 ASG210의 Local Network를 Static 옵셥을 통해 WIZ750SR-Waton과 동일한 Network 대역을 맞춰줘야 한다.

### 1. 로컬 네트워크 설정 방법
WIZnet이 배포한 ASG210 PC Tool을 실행시키고 Device Search버튼을 통해 PC와 연결된 ASG210을 검색할 수 있다. 검색된 ASG210을 선택하고 Network configuration 메뉴에서 Local Network 통신을 위한 Network 정보를 설정한다.

<img alt="asg210-local-network-setup" src={useBaseUrl('/img/asgdm/asg210-network.png')} />

## NEXT
[WIZ750SR-Waton Local Network 환경설정](/setup/wiz750sr-waton)