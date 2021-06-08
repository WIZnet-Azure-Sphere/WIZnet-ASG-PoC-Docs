---
slug: /services/bank-dashboard
title: "Battery Bank 대시보드"
date: 2021-06-01
sidebar_position: 4
---

import useBaseUrl from '@docusaurus/useBaseUrl'

## Battery Bank 대시보드
Battery Bank 대시보드는 사용자가 Waton Battery 장치와 연결된 Battery Bank 데이터를 모니터링할 수 있도록 서비스한다. Battery Bank 데이터는 크게 `Bank 데이터`와 Bank안의 `Battery Cell 데이터`로 구성되어 있으며 사용자는 원하는 데이터를 대시보드에서 선택하여 확인할 수 있다.

### Battery Bank 검색
상단의 필터를 통해 그룹에서 `ASG210 검색`을 통해 해당 ASG210의 하위 WIZ750SR-Waton과 연결된 `Battery Bank List`를 확인할 수 있다. 현재 Battery Bank는 WIZ750SR-Waton의 MAC 주소를 통해 판별할 수 있다.

<img alt="Battery Bank list" src={useBaseUrl('/img/asgdm/web-service-dashboard-search.png')} />

### Battery Bank 셀 설정
`CONFIG`를 통하여 각 Bank안의 `CELL 개수`를 설정할 수 있다. `Number of Bank`는 Bank List의 Bank number를 가리킨다.

<img alt="Cell setup" src={useBaseUrl('/img/asgdm/web-service-dashboard-cell.png')} />

### Battery Bank 실시간 데이터 모니터링
Bank list에서 모니터링하려는 Bank를 선택하면 Bank에서 전송되는 `Voltage(V)`, `Current(A)`,`Ripple Current(p-pA)`의 실시간 데이터 확인 및 모든 Cell의 데이터를 같은 화면에서 한번에 확인 가능하다.

<img alt="Bank Data" src={useBaseUrl('/img/asgdm/web-service-dashboard-bank.png')} />

### 각 Cell의 실시간 데이터 모니터링
Bank를 선택하면 하위의 `Cell List`를 확인할 수 있다. 사용자는 Cell을 선택하여 각 Cell의 실시간 세부 데이터 모니터링이 가능하다.

<img alt="Cell Data" src={useBaseUrl('/img/asgdm/web-service-dashboard-cell-data.png')} />

## NEXT
 

