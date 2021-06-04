---
slug: /setup/wiz750sr-waton
sidebar_label: "WIZ750SR-Waton Local Network 환경설정"
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl'


## WIZ750SR-Waton v1.0.1
WIZ750SR-Waton은 기존 WIZ750SR에서 Waton Server의 SNMP 프로토콜 통신을 위해 위즈네트에서 커스터마이징되었다.
WIZ750SR-Waton v1.0.1은 커스터마이징된 프로그램에서 Trap기능을 추가하여 Waton Server로 전송되는 SNMP 패킷 데이터를 Configuration Tool에 의해 Multiple Destination 설정으로 ASG210으로도 전송할 수 있도록 수정된 버전이다.

## WIZ750SR-Waton v1.0.1 Firmware
WIZ750SR-Waton v1.0.1 Firmware는 *2020-12월*에 위즈네트가 와튼에 배포하였고, 추가 배포 및 Project 환경 셋업이 필요한 경우에는 아래 메일로의 요청이 요구됨.

PoC실무 담당 : lawrence@wiznet.io, taylor@wiznet.io

마케팅 담당 : lucid@wiznet.io

## Configuration Tool v0.9.2
Configuration Tool은 Winidow OS기반의 PC환경에서 동작하며 WIZ750SR-Waton v1.0.1의 네트워크, Firmware 업데이트 및 Trap 서버를 설정할 수 있다.

### 1. 네트워크 설정 방법
WIZ750SR-Waton의 네트워크 설정을 위해서 먼저 WIZ750SR-Waton과 Configuration Tool이 설치된 `Windows OS 기반 PC`와의 Ethernet 연결이 선행되어야 한다. Ethernet 연결 이후 사용자는 PC의 `Ethernet Adapter`에 WIZ750SR-Waton과 동일한 `Network 대역`을 아래와 같이 추가해야 한다.
여기의 Network 대역은 `192.168.0.xx`이며 대역의 마지막 Host 주소는 2부터 254까지 가능하다.

> 네트워크 주소는 Network 대역 주소와 Host 주소로 구성되며 상위 3자리를 네트워크 대역, 하위 1자리를 Host주소로 명명한다. 예를 들어 192.168.0.100에서 `192.168.0`이 Network 대역 주소이며 `100`은 Host 주소를 의미한다.

<img alt="wiz750sr-network" src={useBaseUrl('/img/asgdm/wiz750sr-network.png')} />

PC의 네트워크 설정이 끝났으면 Configuration Tool을 실행하고 `Search 버튼`을 통해 PC와 연결되어 있는 WIZ750SR-Waton 디바이스를 검색한다. 검색된 WIZ750SR-Waton 디바이스를 클릭한 뒤 `Network configuration`창에서 Static 또는 DHCP를 통해 WIZ750SR-Waton의 네트워크 주소를 설정할 수 있다.

> 여기서 설정하는 Network 주소는 Waton Local server 및 ASG DM과의 통신을 위한 Network 정보이다. WIZ750SR-Waton은 192.168.0.1이라는 Configuration Tool과의 통신을 위한 Network 주소가 기본적으로 존재하고 외부 서버와의 통신을 위해서는 별도의 Network 주소를 입력한다.

<img alt="wiz750sr-network1" src={useBaseUrl('/img/asgdm/wiz750sr-network1.png')} />


### 2. Firmware Update
검색된 WIZ750SR-Waton의 펌웨어 버전이 v1.0.1이 아닌 경우, 사용자는 Configuration Tool을 통해 Firmware를 업데이트할 수 있다. 

<img alt="wiz750sr-firmwareupdate" src={useBaseUrl('/img/asgdm/wiz750sr-firmwareupdate.png')} />

### 3. Waton Local server 설정
Configuration Tool의 `Channel #2`를 통해 Waton의 로컬 서버를 설정할 수 있다. 설정이 완료되면 로컬 서버와 WIZ750SR-Waton의 데이터 통신이 가능하다.

<img alt="wiz750sr-localserver" src={useBaseUrl('/img/asgdm/wiz750sr-localserver.png')} />

### 4. Trap server 설정
마지막으로, Waton 로컬 서버로 전송되는 데이터를 ASG210을 통해 ASG DM으로 전달하기 위해서는 Configuration Tool의 `Channel #3`에서 Trap 서버에 *ASG210 로컬 네트워크 주소*를 설정해야 한다. 

> ASG210 로컬 네트워트 주소에 대한 자세한 설명은 해당 링크를 통해 확인 할 수 있다.

#### [ASG210 Local Network 환경설정](/setup/asg210-setup)

<img alt="wiz750sr-trap" src={useBaseUrl('/img/asgdm/wiz750sr-trap.png')} />


## NEXT
[ASG210 Local Network 환경설정](/setup/asg210-setup)