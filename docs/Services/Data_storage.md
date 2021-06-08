---
slug: /services/data-storage
title: "Storage"
date: 2021-06-01
sidebar_position: 5
---

import useBaseUrl from '@docusaurus/useBaseUrl'

## Storage 란
`Storage`는 ASG210으로 들어오는 모든 데이터를 저장 및 확인할 수 있는 사용자 서비스이다. 데이터의 형태는 Dashboard에서 보여지는 해석된 데이터가 아닌 `Low DATA`형태로 보관된다. 현재는 영구적으로 데이터를 저장할 수 있다.

### ASG210 DATA 검색
상단의 필터에서 그룹의 특정 ASG210을 선택하여 `SEARCH DATA`를 통해 해당 ASG210에 전송되는 모든 데이터를 `DATA Table`에서 확인할 수 있다.

<img alt="Search ASG210 DATA" src={useBaseUrl('/img/asgdm/web-service-storage-search.png')} />

### DATA Table
`DATA Table`은 사용자가 지정한 ASG210의 이름과 실제 DATA를 전송한 Node 디바이스인 WIZ750SR-Waton의 MAC 주소를 포함한 실제 Low DATA를 보여준다. 모든 수신된 Low DATA는 `Enqueued Time`과 매칭되어 사용자는 데이터의 수신 시간을 추적할 수 있다.

<img alt="Low DATA" src={useBaseUrl('/img/asgdm/web-service-storage-data.png')} />


## NEXT
 

