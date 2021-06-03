---
title: "Device Management"
date: 2021-05-10
sidebar_position: 0
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


## 디바이스 목록 조회

등록된 디바이스 목록과 각 디바이스의 연결 상태를 확인합니다.


- Name: 디바이스의 고유 ID 값입니다.
- Product(Company):
- Device Group(Site): 
- Connection state: 디바이스의 클라우드 연결 상태를 나타냅니다.
- Connection state updated time: 마지막 상태 업데이트 시간입니다.

<img alt="Device Management 1" src={useBaseUrl('/img/asgdm/deviceManagement1.png')} />

<img alt="Device Management 2" src={useBaseUrl('/img/asgdm/deviceManagement2.png')} />


## 디바이스 세부 정보 확인

각 디바이스를 클릭하여 세부 정보를 확인할 수 있습니다.


<img alt="Device Detail" src={useBaseUrl('/img/asgdm/DeviceDetail.png')} />

