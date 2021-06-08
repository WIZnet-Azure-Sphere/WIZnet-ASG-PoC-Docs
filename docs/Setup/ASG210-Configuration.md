---
slug: /setup/asg210-setup
sidebar_label: "ASG210 Local Network 환경설정"
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl'

## ASG210 설치 및 동작 상태 확인
사용자는 5V2A 어뎁터를 통해 ASG210에 전원을 공급하고 각각의 네트워크망에 Ethernet Cable을 연결한다. ASG210은 Dual Port Ethernet을 통해 내부 네트워크 정보를 클라우드(외부 네트워크)로 전송할 수 있다. 내부 네트워크의 경우 ASG210이 자동으로 DHCP 서버를 검색해 네트워크를 설정하지만 DHCP 서버가 없는 경우, 사용자가 직접 네트워크 정보를 설정해야 한다. 클라우드(외부 네트워크)를 위한 네트워크 정보 설정은 ASG210이 자동으로 Router의 DHCP서버를 검색하여 네트워크를 설정한다.

### ASG210 동작 상태 LEDs
1. Power : ASG210 전원 연결 상태 확인
2. Cloud : ASG DM 클라우드 서비스 연결 상태 확인
3. Wi-Fi : 외부 네트워크와의 Wi-Fi 연결 상태 확인
4. WAN : 외부 네트워크와의 Ethernet 연결 상태 확인
5. Interface : 내부 네트워크와의 Data 통신 상태 확인
6. BLE : BLE 연결 상태 확인 (user defined)

<img alt="asg210-configuration" src={useBaseUrl('/img/asgdm/asg210-config.png')} />

## ASG210 네트워크 설정
Local Network와 연결되는 ASG210의 Ethernet port는 Static 또는 DHCP로 설정이 가능하며, 기본설정은 DHCP로 되어 있다. Local Network Hub에서 DHCP를 지원하지 않는 경우, 사용자는 PC Tool을 통해 ASG210의 Local Network를 Static 옵션을 통해 WIZ750SR-Waton과 동일한 Network 대역을 맞춰줘야 한다.

### 1. 로컬 네트워크 설정 방법
WIZnet이 배포한 ASG210 PC Tool을 실행시키고 Device Search버튼을 통해 PC와 연결된 ASG210을 검색할 수 있다. 검색된 ASG210을 선택하고 Network configuration 메뉴에서 Local Network 통신을 위한 Network 정보를 설정한다.

<img alt="asg210-local-network-setup" src={useBaseUrl('/img/asgdm/asg210-network.png')} />

## NEXT
[WIZ750SR-Waton Local Network 환경설정](/setup/wiz750sr-waton)