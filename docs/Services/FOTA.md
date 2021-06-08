---
slug: /service/fota
title: "FOTA"
date: 2021-05-10
sidebar_position: 6
---

import useBaseUrl from '@docusaurus/useBaseUrl'

## FOTA 서비스
FOTA(Firmware Over The Air)는 디바이스의 펌웨어를 네트워크를 통해 다양한 방식으로 배포하는 서비스다. ASG DM은 MS Azure 서비스중 하나인 Azure Sphere Security Service(AS3)에서 제공하는 Public API를 통해 ASG210의 OTA를 진행할 수 있다.

> Azure Sphere Security Service(AS3)는 유지 관리 및 업데이트 등을 사용하기 위해 Azure Sphere 칩과 통신하는 클라우드 기반의 서비스

## FOTA 사용자 가이드
Azure Sphere의 OTA는 인증된 보안 연결을 통해서만 업데이트가 진행되어 어플리케이션 소프트웨어의 원격 서비스와 업데이트를 가능하게 하고, 지속적이고 안정적인 운영을 보장한다. ASG DM에서는 이러한 FOTA 기능을 사용할 수 있도록 사용자 서비스를 제공하며, 진행 과정은 다음과 같다.

<img alt="FOTA 6Steps" src={useBaseUrl('/img/asgdm/web-service-fota-steps.png')} />

### 1. Select Device Group
  * FOTA를 진행할 디바이스 그룹 선택

### 2. Upload Imagepackage
  * Image Package 파일 업로드
    * ASG210의 Multi-Core 사용 시, 2개 이상의 이미지 패키지 업로드 필요(RTApp, HLApp)
  * Ethernet을 사용하는 경우, 별도의 Board config image package 업로드

### 3. Create a Deployment
  * 업로드한 이미지의 배포 생성 
  * 마지막으로 배포된 이미지가 디바이스로 업데이트

### 4. Check the Deployment
  * 리스트를 통한 배포 히스토리 확인

### 5. Update ASG Device
  * ASG210 디바이스에 대한 업데이트 진행(장치가 Cloud에 연결된 상태인지 확인)
  > ASG210이 해당 그룹에 포함되지 않은 경우, 그룹을 설정하고 ASG210의 Restart을 수행

### 6. Update Node Device
  * ASG210에 연결된 WIZ750SR-Waton 디바이스의 펌웨어를 업데이트
  > 업데이트 방법은 RTApp Image package 컴파일러시 WIZ750SR-Waton의 Firmware를 함께 컴파일한다.


## Select Device Group
FOTA 첫번째 단계에서는 펌웨어를 배포할 디바이스 그룹을 선택한다. ASG210 디바이스 그룹에는 여러대의 ASG210을 포함시킬 수 있으며 FOTA 서비스는 디바이스 그룹을 통해 한번에 그룹에 속한 모든 ASG210의 펌웨어를 일괄 업데이트할 수 있다. 각각의 ASG210은 사용자 설정에 의해 하나의 디바이스 그룹에 속할 수 있다.

> ASG210은 하나 이상의 그룹에 속할 수 없으며 가장 마지막에 설정된 그룹에 지정된다.

<img alt="FOTA Step1" src={useBaseUrl('/img/asgdm/web-service-fota-step1.png')} />

## Upload Imagepackage
선택된 AGS210의 디바이스 그룹에 배포할 이미지 패키지 파일을 업로드 한다. 기본적으로 이미지 패키지 업로드시 이미지 배포까지 한번에 이루어 진다. 다만, `Just Upload selected file` 옵션을 통해 업로드 이후 사용자가 직접 배포할 수 있다. 추가로 배포 생성 시 `Image ID`와 `Component ID`가 필요하므로 사용자는 이미지 패키지 생성시, 각 Image ID 및 Component ID를 저장하고 있어야 한다.

*이미지 패키지는 이미지, 그리고 이미지와 관련된 메타데이터가 결합된 패키지 파일이다. 배포 시 정보를 포함하고 있는 이미지 패키지를 사용한다.*

<img alt="FOTA Step2" src={useBaseUrl('/img/asgdm/web-service-fota-step2.png')} />

<<<<<<< HEAD
### Image ID 및 Component ID 확인
Image ID와 Component ID 는 ASG210 Application 빌드 결과 로그에 표시되며 이미 생성된 이미지 파일의 정보를 확인하기 위해서는 `Azure Sphere Developer command prompt`에서 아래 명령을 수행한다.
=======

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
>>>>>>> 95e3c02a9e16ebdd661923f63205f6d10a5e7241

```
azsphere image-package show -f <file path>
```

<<<<<<< HEAD
<img alt="FOTA Prompt" src={useBaseUrl('/img/asgdm/web-service-fota-step2-prompt.png')} />
=======
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
>>>>>>> 95e3c02a9e16ebdd661923f63205f6d10a5e7241

## Create a Deployment
배포(Deployment)란 디바이스 그룹에 업데이트 할 이미지 패키지 세트를 의미하며 Upload Imagepackage 단계에서 업로드한 이미지 패키지들을 묶어서 배포한다. 사용자는 업로드한 Image Package 파일과 매칭되는 `Image ID`를 입력하고 `Create Deployment` 버튼을 클릭하여 배포를 생성할 수 있다.

> Azure Sphere는 배포시 최대 4개의 이미지 패키지를 포함시킬 수 있다.
> - High-level app (for A7 core)
> - Real-time app 1 (for M4 core 1)
> - Real-time app 2 (for M4 core 2)
> - Board configuration
>    - Ethernet 사용 시 필요

<img alt="FOTA Step3" src={useBaseUrl('/img/asgdm/web-service-fota-step3.png')} />

## Check the Deployment
사용자는 지금까지 해당 디바이스 그룹에 배포된 이미지 패키지 정보 및 시간 데이터를 확인할 수 있다.

> - Deployment Id: 배포의 고유 ID입니다.
> - Deployed Images: 배포에 포함된 이미지 리스트를 나타냅니다.
> - Deployment Date: 배포가 생성된 시간입니다.

<img alt="FOTA Step4" src={useBaseUrl('/img/asgdm/web-service-fota-step4.png')} />

## Update ASG Device
선택한 디바이스 그룹에 배포가 완료되면 MS AS3 서비스에 의해 자동적으로 해당 디바이스 그룹에 속한 ASG210은 `24시간 이내`에 배포된 Firmware를 업데이트할 수 있다. 그러나 사용자가 즉시 업데이트를 수행해야 하는 경우 `Update ASG Device` 단계에서 디바이스 그룹의 ASG210을 선택하여 업데이트 시간에 상관없이 `Firmware를 즉시 업데이트`할 수 있다. 이 경우, 디바이스가 새 업데이트를 수신하기 위해서는 `Cloud`에 연결되어 있어야 한다.

> 기본적으로 디바이스 그룹에 이미지를 배포하면 해당 그룹의 ASG210은 24시간 이내에 자동으로 업데이트 된다.

<img alt="FOTA Step5" src={useBaseUrl('/img/asgdm/web-service-fota-step5.png')} />

## Update Node Device
`Update ASG Device`에서 선택된 ASG210과 연결된 WIZ750SR-Waton(Node)의 펌웨어 버전을 확인할 수 있으며 최신 버전으로의  업데이트를 진행할 수 있다. `Current Version`은 현재 WIZ750SR-Waton에서 동작하는 펌웨어의 버전을 나타내고 `Available Version`은 MS AS3에 업데이트된 WIZ750SR-Waton의 버전을 나타낸다. Available Version이 Current Version보다 상위 버전일 경우 사용자는 WIZ750SR-Waton의 펌웨어 업데이트를 수행할 수 있다.

<img alt="FOTA Step6" src={useBaseUrl('/img/asgdm/web-service-fota-step6.png')} />