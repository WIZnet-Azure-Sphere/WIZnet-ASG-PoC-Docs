---
title: "ASG DM FOTA"
date: 2021-05-10
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl'


# FOTA (Firmware Over The Air)

FOTA는 디바이스의 펌웨어를 네트워크를 통해 다양한 방식으로 배포하는 것을 가리킵니다.

ASG210은 Azure Sphere의 Azure Sphere Security Service를 통해 OTA를 진행합니다.


> Azure Sphere Security Service(AS3)는 유지 관리 및 업데이트 등을 사용하기 위해 Azure Sphere 칩과 통신하는 클라우드 기반 서비스입니다.

Azure Sphere의 OTA는 인증된 보안 연결을 통해서만 업데이트가 진행되어 어플리케이션 소프트웨어의 원격 서비스와 업데이트를 가능하게 하고, 지속적이고 안정적인 운영을 보장합니다.


ASG210 OTA는 다음 과정으로 이루어집니다.


1. **디바이스 그룹 선택**
    펌웨어를 배포할 디바이스 그룹을 선택합니다.
2. **이미지 패키지(.imagepackage) 업로드**
    배포할 파일을 선택하고 `Upload` 버튼을 눌러 업로드 합니다. 이미지 파일의 개수는 Azure sphere에서 사용하는 코어 수에 달라집니다.
    ASG210의 경우 A7 및 M4 core를 사용하므로 2개의 이미지를 업로드합니다.
3. **배포 생성**
    업로드 한 이미지를 기반으로 배포를 생성합니다. 마지막으로 생성된 배포가 디바이스로 업데이트 됩니다.
4. **배포 리스트 확인**
    생성된 배포 리스트를 확인합니다.


![](https://paper-attachments.dropbox.com/s_3ACD4460663C499CE88C1CE914D646F871BC5FCC40AA0ECDFE571D555ED83851_1599622753363_fota-guide.png)




## **디바이스 그룹**

디바이스 그룹은 동일한 제품 유형의 디바이스 모음입니다. 그룹을 지정하여 여러 디바이스에 어플리케이션을 일괄 배포할 수 있습니다.

각 디바이스는 하나의 디바이스 그룹에 속하며, 하나의 디바이스 그룹은 하나의 제품(Product)에 속합니다. 

> 데모에서 제품은 ASG210으로 설정되어 있습니다.




## **이미지 패키지 업로드**

*이미지 패키지는 이미지, 그리고 이미지와 관련된 메타데이터가 결합된 패키지 파일입니다. 배포 시 정보를 포함하고 있는 이미지 패키지를 사용합니다.*

배포할 이미지 패키지를 업로드 합니다.
배포 생성에서 이미지 ID가 사용되므로, 사용자는 이미지 패키지를 생성할 때 각 이미지의 ID를 기억해야 합니다.

**Image ID**
이미지 ID는 어플리케이션 빌드 결과로 표시됩니다.

이미 빌드가 완료된 이미지 파일의 정보를 보려면 `Azure Sphere Developer command prompt`에서 아래 명령을 통해 확인합니다.

    >azsphere pkg show -f <file path>

결과는 다음과 같이 표시됩니다.

![](https://paper-attachments.dropbox.com/s_6B416B4379E3C4034F7587B155C6F6BEFE698D1D76F13665776365B9EF449879_1599800286024_image.png)




## **배포 생성**

배포란 디바이스에 업데이트 할 이미지 패키지 세트를 의미합니다.
이전 단계에서 업로드한 이미지를 조합하여 하나의 세트로 만듭니다.


![](https://paper-attachments.dropbox.com/s_6B416B4379E3C4034F7587B155C6F6BEFE698D1D76F13665776365B9EF449879_1599803169298_image.png)


배포에 포함시킬 이미지 ID를 입력합니다.

Azure Sphere의 배포에는 이미지를 4개까지 포함시킬 수 있습니다.

- High-level app (for A7 core)
- Real-time app 1 (for M4 core 1)
- Real-time app 2 (for M4 core 2)
- Board configuration
    - Ethernet 사용 시 필요

ASG210의 경우, 이더넷을 사용하고 A7 core와 1개의 M4 core 사용하므로 총 3개의 이미지를 사용합니다.


> 페이지에서는 데모 어플리케이션에 대한 각 Image ID가 설정되어 있습니다.

`Create Deployment` 버튼을 클릭하여 배포를 생성합니다.



## **배포 리스트 확인**

생성된 배포 리스트를 확인합니다.


![](https://paper-attachments.dropbox.com/s_6B416B4379E3C4034F7587B155C6F6BEFE698D1D76F13665776365B9EF449879_1599800313131_image.png)

- Deployment Id: 배포의 고유 ID입니다.
- Deployed Images: 배포에 사용한 이미지 리스트를 나타냅니다.
- Deployment Date: 배포가 생성된 시간입니다.


## Access the Demo Server

1. Go to [https://demo.winc.ai](https://demo.winc.ai).
2. Use guest account (temporary access) and login.
3. Explore the default brownfield example project.

<a class="btn btn-success" href="https://demo.winc.ai" data-toggle="tooltip" data-placement="top" title="WIZnet PaaS Demo Site"><span class="h3">Go! Demo</span></a>



