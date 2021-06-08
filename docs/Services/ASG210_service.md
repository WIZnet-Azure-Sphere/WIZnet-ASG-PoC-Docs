---
slug: /services/asg210-management
title: "ASG210 상태정보 서비스"
date: 2021-06-01
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl'

## ASG210 상태정보 서비스
Waton PoC를 통해 ASG DM 서비스에 연결된 ASG210은 ```Group```으로 구분되고 하나의 Group안에 여러개의 ASG210을 등록할 수 있다. 사용자는 Group 기능을 통해 ASG210을 빠르게 검색할 수 있으며 FOTA를 통한 ASG210 및 WIZ750SR-Waton Firmware 업로드시에도 해당 Group을 한정하여 진행할 수 있다.

## ASG210 상태정보 웹페이지
ASG210의 상태 관리를 위한 웹페이지는 아래와 같이 구성되어 있다. ```Name```은 사용자가 정의한 ASG210의 이름을 뜻하며 ```세부정보창```에서 변경이 가능하다. ```Product(Company)```는 ASG210을 운영하는 회사를 뜻하며 ```Group(Site)```를 통해 다수의 ASG210을 그룹화하여 관리할 수 있다. ```Connection State``` 및 ```Connection State Updated Time```은 ASG210의 가장 마지막 연결 상태를 보여준다.

![](../static/img/asgdm/asg210-detail1.png)


### ASG210 세부정보창
상태정보 테이블에서 ASG210을 클릭하면 세부정보창을 확인할 수 있다. 세부정보창에서는 ASG210의 세부 디바이스 정보 및 WIZ750SR-Waton과 통신하기 위해 설정한 ```Local Network 정보```를 확인할 수 있다. 또한 ASG210의 ```디바이스 이름```도 변경이 가능하다.

![](../static/img/asgdm/asg210-detail2.png)


## NEXT
 
