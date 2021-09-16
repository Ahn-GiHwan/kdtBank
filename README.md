# KDT BANK (Toy Project)

## Description

### 데이터(입출력)를 받아 메인화면에 입출력 리스트를 보여주고, 매니지화면에서는 차트(바,도넛)를 이용해서 입출력 상황을 한 눈에 판단할 수 있는 웹앱

<hr>
<br>

## 사용 기술

| 이름                            | 내용                                         |
| ------------------------------- | -------------------------------------------- |
| parcel                          | 번들러                                       |
| parcel-plugin-static-files-copy | 번들되지 않는 정적인 폴더(파일들) 설정       |
| reset-css                       | default된 css를 reset시켜주는 css            |
| chart.js                        | Bar & Doughnut 차트를 만들 때 사용한 library |
| sweetalert                      | alert창을 이쁘게 꾸며주는 library            |

<hr>
<br>

## 주요 기능

### 입출력 리스트 화면 (Up & Down)

<img src='https://images.velog.io/images/ahngh/post/135b3717-e7eb-485c-ba2f-ec235105448b/ezgif_listupdown.gif' width="200px"><img src="https://images.velog.io/images/ahngh/post/477d4911-25bf-4204-b571-5eb85d82e31f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.34.32.png" width="200px">

2번째 그림과 같이 검정 black div안에 red와 blue를 flex(column)를 이용하여 4:6 비율로 설정해 주었다.
그 후 막대이미지(bar)를 클릭하면 js를 통해 classList.toggle을 이용하여 class를 붙여주고 미리 설정해 놓은 css에서 red의 div를 display: none을 설정하여 blue div가 black div 전체를 사용할 수 있게 설정했다.

<hr>
<br>

### 저금통 추가하기

<hr>
<br>

### 날짜별 종합 입출력 결과 및 리스트 출력

<hr>
<br>

### 아이콘 클릭 시 매니저 페이지 이동

<hr>
<br>

### 카테고리별 지출 그래프 및 도표화

<hr>
<br>

### 요일별 지출 막대그래프로 표현
