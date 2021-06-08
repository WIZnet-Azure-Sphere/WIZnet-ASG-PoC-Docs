---
slug: /services/wiz750sr-wation-management
title: "WIZ750SR-Waton 상태정보 및 설정 서비스"
date: 2021-06-01
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl'

## WIZ750SR-Waton 상태정보 및 설정 서비스
Waton PoC를 통해 등록된 ASG210은 각각의 Local Network를 통해 통신하는 WIZ750SR-Waton 장비들을 가지고 있다. `Bank Network` 메뉴에서는 해당 ASG210에 연결된 WIZ750SR-Waton을 검색하고 해당 장비의 세부정보를 확인 및 변경하는 서비스를 제공한다.

### WIZ750SR-Waton 검색 및 세부정보 확인
사이드 메뉴의 `Bank Network`에서 ASG210의 그룹을 선택하고 원하는 ASG210를 선택하면 Local Network로 연결된 WIZ750SR-Waton 리스트를 확인할 수 있다.

<img alt="Search WIZ750SR-Waton" src={useBaseUrl('/img/asgdm/web-service-750sr-search.png')} />

### WIZ750SR-Waton 디바이스 정보 확인
검색된 WIZ750SR-Waton를 클릭하면 해당 장치의 세부 내용 확인 및 설정이 가능하며 가장 상단의 `Device Info`에서  `GET`을 통해 WIZ750SR-Waton의 가장 기본적인 디바이스 정보를 확인할 수 있다.
<<<<<<< HEAD

<img alt="Device Info" src={useBaseUrl('/img/asgdm/web-service-750sr-device-info.png')} />

### WIZ750SR-Waton 로컬 네트워크 상태정보 및 설정
`Network Configuration`에서는 WIZ750SR-Waton의 Local Network 통신을 위해 설정된 네트워크 정보를 `GET`을 통해 확인할 수 있으며 사용자가 해당 정보를 `SETTING`을 통해 설정할 수 있다. 또한, `Remote IP`  및 `Remote port`를 통해 WIZ750SR-Waton이 통신하려는 Waton의 내부 서버정보를 설정할 수 있다.

<img alt="Network configuration" src={useBaseUrl('/img/asgdm/web-service-750sr-network-config.png')} />
=======

### WIZ750SR-Waton 로컬 네트워크 상태정보 및 설정
`Network Configuration`에서는 WIZ750SR-Waton의 Local Network 통신을 위해 설정된 네트워크 정보를 확인할 수 있으며 해당 정보를 수정할 수 있다. `Remote IP`  및 `Remote port`
>>>>>>> 95e3c02a9e16ebdd661923f63205f6d10a5e7241

### WIZ750SR-Waton 시리얼 통신 상태정보 및 설정
`Serial Configuration`은 WIZ750SR-Waton의 Serial 통신과 관련한 설정을 `GET`을 통해 확인할 수 있고 `SETTING`을 통하여 설정된 값을 변경할 수 있다.

<img alt="Serial configuration" src={useBaseUrl('/img/asgdm/web-service-750sr-serial-config.png')} />

### WIZ750SR-Waton 시리얼 데이터 통신 설정
`Serial Data Packing Options`는 WIZ750SR-Waton의 Serial Data에 대한 전송 조건을 `GET`을 통해 확인할 수 있고 `SETTING`을 통해서 값을 변경할 수 있다.

<img alt="Serial Data configuration" src={useBaseUrl('/img/asgdm/web-service-750sr-serial-data.png')} />


## NEXT
 
