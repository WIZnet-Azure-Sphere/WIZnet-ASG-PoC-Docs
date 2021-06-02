---
title: "FOTA"
date: 2021-05-10
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl'


# FOTA (Firmware Over The Air)

FOTA는 디바이스의 펌웨어를 네트워크를 통해 다양한 방식으로 배포하는 것을 말합니다.

Azure Sphere의 Azure Sphere Security Service를 통해 ASG210의 OTA를 진행할 수 있습니다.

>Azure Sphere Security Service(AS3)는 유지 관리 및 업데이트 등을 사용하기 위해 Azure Sphere 칩과 통신하는 클라우드 기반 서비스입니다.

Azure Sphere의 OTA는 인증된 보안 연결을 통해서만 업데이트가 진행되어 어플리케이션 소프트웨어의 원격 서비스와 업데이트를 가능하게 하고, 지속적이고 안정적인 운영을 보장합니다.


ASG DM에서는 이러한 FOTA 기능을 사용할 수 있도록 기능을 제공하며, 진행 과정은 다음과 같습니다.


**1. 디바이스 그룹 선택**

  * 펌웨어를 배포하고 디바이스 그룹을 선택합니다.
  * 디바이스가 소속될 그룹입니다.

**2. 이미지 패키지(.imagepackage) 업로드**

  * Image Package 파일을 AS3에 업로드 합니다. 
  * 이미지 파일의 개수는 어떤 application을 사용하는지에 따라 달라질 수 있습니다.
    * 예) M4, A7 코어 사용 시 -> 2개 이미지 필요 (RT app, HL app)
  * Ethernet을 사용하는 경우 Board config image를 사용해야 합니다.  


**3. 배포 생성**
  
  * 업로드한 이미지 정보를 기반으로 배포를 생성합니다. 
  * 마지막으로 생성된 배포가 디바이스로 업데이트 됩니다.

**4. 배포 리스트 확인**

  * 생성된 배포 리스트를 확인합니다.


**5. ASG 디바이스 업데이트**

  * ASG 디바이스에 대한 업데이트를 진행합니다. 이 때 장치는 네트워크에 연결된 상태여야 합니다.
  * 장치가 선택된 그룹에 포함되어 있지 않으면 그룹을 설정하고 Restart 명령을 보냅니다.

**6. Node 디바이스 업데이트 (사용 시)**

  * ASG210에 연결된 Node 디바이스의 펌웨어를 업데이트합니다.
  * 현재 WIZ750SR 디바이스 펌웨어 업데이트만 지원합니다.


<!-- FOTA 화면 -->



## 디바이스 그룹 선택

디바이스 그룹은 동일한 제품 유형의 디바이스 모음입니다. 디바이스 그룹을 지정하여 여러 디바이스에 동일한 어플리케이션을 일괄 배포할 수 있습니다.

각 디바이스는 하나의 디바이스 그룹에 속하며, 하나의 디바이스 그룹은 하나의 제품(Product)에 속합니다. 




## 이미지 패키지 업로드

*이미지 패키지는 이미지, 그리고 이미지와 관련된 메타데이터가 결합된 패키지 파일입니다. 배포 시 정보를 포함하고 있는 이미지 패키지를 사용합니다.*

배포할 이미지 패키지를 업로드 합니다.

**배포 생성 시 이미지 ID가 필요**하므로, 사용자는 이미지 패키지를 생성할 때 각 이미지의 ID를 메모해 두는 것이 좋습니다.



**Image ID**

이미지 ID는 어플리케이션 빌드 결과로 표시됩니다.

이미 생성된 이미지 파일의 정보를 보려면 `Azure Sphere Developer command prompt`에서 아래 명령을 통해 확인합니다.

```
azsphere image-package show -f <file path>
```

결과는 다음과 같이 표시됩니다.

![](https://paper-attachments.dropbox.com/s_6B416B4379E3C4034F7587B155C6F6BEFE698D1D76F13665776365B9EF449879_1599800286024_image.png)




## 배포 생성

배포(Deployment)란 디바이스에 업데이트 할 이미지 패키지 세트를 의미합니다.

이전 단계에서 업로드한 이미지들을 사용하여 하나의 배포로 만듭니다.

<!-- 배포 생성 이미지 -->


배포에 포함시킬 이미지 ID를 입력합니다.

Azure Sphere의 배포에는 이미지를 4개까지 포함시킬 수 있습니다.

- High-level app (for A7 core)
- Real-time app 1 (for M4 core 1)
- Real-time app 2 (for M4 core 2)
- Board configuration
    - Ethernet 사용 시 필요


>ASG210의 2 port ethernet application은 A7 및 M4 core와 Ethernet 기능을 사용하므로 총 3개의 이미지를 사용해 배포를 생성합니다.



`Create Deployment` 버튼을 클릭하여 배포를 생성합니다.



## 배포 리스트 확인

생성된 배포 리스트를 확인합니다.


<!-- 배포 리스트 이미지 -->

- Deployment Id: 배포의 고유 ID입니다.
- Deployed Images: 배포에 포함된 이미지 리스트를 나타냅니다.
- Deployment Date: 배포가 생성된 시간입니다.


## ASG 디바이스 업데이트

ASG 디바이스가 새 업데이트를 수신하기 위해서는 네트워크에 연결된 상태여야 합니다.


`Update Device` 버튼 클릭 시, 장치를 현재 선택된 그룹으로 이동하고 Restart 명령을 보냅니다.

장치가 재시작 되면 AS3로부터 업데이트를 수신하여 새로운 App으로 업데이트 됩니다.

>Restart 명령은 application에서 구현되어 있어야 합니다. (IoT Hub direct method 사용)
>장치를 Reset 할 수 없는 경우, 24시간 내에 업데이트가 이루어집니다.


## Node 디바이스 업데이트

ASG 하위의 Node 디바이스(WIZ750SR 지원)의 펌웨어를 업데이트 합니다.