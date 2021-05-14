---
title: "ASG DM Device Management--"
date: 2021-05-10
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl'

## Overview

ASG Device Managament System은 Microsoft가 서비스하는 Azure Sphere Security Service(AS3)를 통한 ASG210의 상태관리, 모니터링 및 소프트웨어 업데이트 뿐 아니라 WinC Device Management를 활용하여 ASG210을 통해 연결된 Brownfield의 디바이스를 추적, 모니터링 및 원격(OTA) 펌웨어 업데이트 관리 기능을 제공합니다.

추가로 ASG210(Azure Sphere Guardian 210)은 Microsoft가 개발하고 보증하는 Azure Sphere의 강력한 보안 기능을 탑재하고 있기 때문에 WinC Cloud를 통한 네트워크상의 보안뿐 아니라 하드웨어 시스템 공격에도 강력합니다.


![](https://paper-attachments.dropbox.com/s_6B416B4379E3C4034F7587B155C6F6BEFE698D1D76F13665776365B9EF449879_1600332116076_image.png)



## 주요 기능

- 디바이스 자동 등록
  - 외부 네트워크 망이 구성된 환경에서 ASG210은 자동으로 Device Management에 등록된다.
- 디바이스 상태 관리
  - ASG210 상태 관리
    - ASG210의 연결 여부 및 디바이스 동작 상태, 그리고 소프트웨어 등의 정보를 확인할 수 있다.
  - Brown-field 디바이스 상태 관리
    - Search 기능을 통해 ASG210과 연결된 Brown-field 디바이스를 확인할 수 있으며 각각의 상태 및 정보에 대한 모니터링이 가능하다.
- 소프트웨어 자동 배포 (OTA)
  - ASG210 뿐 아니라 Brown-field 디바이스의 소프트웨어 및 펌웨어는 Microsoft에서 서비스하는 Azure Sphere Security Service(AS3)를 통해 관리되며 원격(OTA) 업데이트 할 수 있다.



# ASG Device Managament System User Guide


## **디바이스 목록 조회**

등록된 디바이스 목록과 각 디바이스의 연결 상태를 확인합니다.


- Name: 디바이스의 고유 ID 값입니다.
- Product(Company):
- Device Group(Site): 
- Connection state: 디바이스의 클라우드 연결 상태를 나타냅니다.
- Connection state updated time: 마지막 상태 업데이트 시간입니다.

<img alt="Device Management 1" src={useBaseUrl('/img/asgdm/deviceManagement1.png')} />

<img alt="Device Management 2" src={useBaseUrl('/img/asgdm/deviceManagement2.png')} />



----

## **Brown-field 디바이스 관리**

테이블의 상세 보기 버튼(**∨**)을 클릭하면 Brown-field 디바이스를 상세 조회합니다.

먼저, `Search Device` 버튼을 클릭해 하위 디바이스를 검색합니다.

![Search legacy device](https://paper-attachments.dropbox.com/s_6B416B4379E3C4034F7587B155C6F6BEFE698D1D76F13665776365B9EF449879_1599799798446_image.png)



> Demo page에서 하위 디바이스는 WIZ750SR을 타겟으로 합니다.

ASG210으로부터 응답을 받으면 검색된 Brown-field 디바이스 목록이 표시되고, 각각의 Brown-field 디바이스는 MAC Address로 구분됩니다.
검색된 Brown-field 디바이스를 선택하여 각 세부 정보를 확인하거나 설정할 수 있습니다. (예: 네트워크 설정)


![Legacy device information](https://paper-attachments.dropbox.com/s_6B416B4379E3C4034F7587B155C6F6BEFE698D1D76F13665776365B9EF449879_1599801516218_image.png)


`Device Info`, `Uart Info`, `Network Info` 버튼을 사용하여 선택된 디바이스로 각 항목에 대한 세부 정보를 요청할 수 있습니다.


> Device, Uart, Network외의 설정

버튼을 클릭하면 선택한 ASG210로 정보 요청 명령을 보냅니다. Brown-field 디바이스는 미리 정의된 프로토콜에 의해 요청받은 설정 정보를 파악하여 응답 데이터를 보냅니다.

응답 데이터는 아래 그림처럼 각 파트에 표시됩니다.


![Legacy device configuration data](https://paper-attachments.dropbox.com/s_6B416B4379E3C4034F7587B155C6F6BEFE698D1D76F13665776365B9EF449879_1599802356391_image.png)



## Access the Demo Server

1. Go to [https://demo.winc.ai](https://demo.winc.ai).
2. Use guest account (temporary access) and login.
3. Explore the default brownfield example project.

<a class="btn btn-success" href="https://demo.winc.ai" data-toggle="tooltip" data-placement="top" title="WIZnet PaaS Demo Site"><span class="h3">Go! Demo</span></a>



