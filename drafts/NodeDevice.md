---
title: "ASG DM Node Device"
date: 2021-05-10
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl'



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



