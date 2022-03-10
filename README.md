# KDT BANK (Toy Project)

## 목차

1. [프로젝트 설명](#프로젝트-설명)<br>
2. [사용 기술](#사용-기술)<br>
3. [개발 프로세스](#개발-프로세스)<br>
4. [주요 기능](#주요-기능)<br>
5. [느낀 점](#느낀-점)<br>
6. [결과물 보기](#결과물-보기)

<br>
<hr>
<br>

## 프로젝트 설명

### 데이터(입출력 내역)를 받아 메인화면에 입출력 리스트를 보여주고, 매니저 화면에서는 차트(바,도넛)를 이용해서 입출력 상황을 한 눈에 판단할 수 있는 웹앱

<br>
<hr>
<br>

## 사용 기술

| 이름                            | 내용                                         |
| ------------------------------- | -------------------------------------------- |
| webpack                          | 번들러                                       |
| reset-css                       | default된 css를 reset시켜주는 css            |
| chart.js                        | Bar & Doughnut 차트를 만들 때 사용한 library |
| sweetalert                      | alert창을 이쁘게 꾸며주는 library            |
| swiper                          | slide기능을 쉽게 해주는 library              |

<br>
<hr>
<br>

## 개발 프로세스

- git flow를 사용하여 기능별로 feature를 따서 개발하여 기능에 집중하기가 용이함
- netlify를 이용하여 배포
- 로컬과 develop 두 곳에서 확인 후 master에 merge하여 에러부분을 잡기가 용이함

<br>
<hr>
<br>

## 주요 기능

### 저금통 만들기

<img src='https://images.velog.io/images/ahngh/post/bba62ebc-b518-4e12-949d-f6bfea3ebca4/savingBox.gif' width="200px">

- 저금통 이름이나 가격이 틀안에서 넘어갈 경우 넘치는 부분은 '...'으로 대체된다.
- 가격은 ','가 찍혀서 출력
- esc 클릭 or 우측 상단의 'X' 아이콘을 누르면 닫힘
- 닫히면 기존의 내용은 초기화됨
- 공백, 가격에 문자열 입력 시 alert으로 알려줌
- 배경색상에 맞춰서 글자의 색상(흰색 or 검정색)이 변한다.
- 많으면 좌우로 스크롤 가능

<br>
<hr>
<br>

### 데이터(입출력 리스트)를 날짜별(진짜 현재 날짜)로 나눠서 출력 & UpDown가능

<img src='https://images.velog.io/images/ahngh/post/7ba243ae-689f-47c4-b61c-d9f31be595e7/listShowUpdown.gif' width="200px">

- 오늘, 어제, 2일전까지는 글자로 출력, 나머지는 날짜로 출력
- bar icon 클릭 시 커졌다가 작아졌다함
- 날짜 우측에 그날에 대한 정보 출력(수입이 많으면 수입, 지출이 많으면 지출)
- 가격은 ','가 찍혀서 출력
- 상하로 스크롤 가능

<br>
<hr>
<br>

### 메인 페이지 스와이퍼

<img src='https://images.velog.io/images/ahngh/post/512dc64f-fa10-461b-b3ba-3260a70c0d20/swiper.gif' width="200px">

- 좌우로 스와이퍼 가능 (swiper library 사용)

<br>
<hr>
<br>

### 아이콘 클릭 시 매니저 페이지 이동 & chart로 데이터 표현

<img src='https://images.velog.io/images/ahngh/post/a24c54fd-615e-4edf-9f92-2b48753d3306/manage-page.gif' width="200px">

- chart icon 클릭 시 매니저페이지로 이동
- 닫기 버튼 클릭 시 메인 페이지로 이동

<br>
<hr>
<br>

## 느낀 점

### HTML

의미있는 부분을 의미있는 태그로 사용하는 법이 어려웠다. <br>
예를 들면 위치상 footer에 있지만 기능은 nav였던 부분, article과 section의 사용성 <br>
두 개의 페이지로 보여지지만 하나의 html로 만들어서 main이 하나로 해야 하는지 두 개로 해야 하는지에 대해..<br>
또한 닫기 버튼은 위치상 가장 상단이지만 웹표준을 위해 태그는 하단에 위치하고 view에만 상단에 위치하게 하는 것도 배웠다.

<br>

### CSS

기초 레이아웃을 잘 잡는 것이 중요하다는 것을 깨달았다.<br>
하다보면 잡히겠지 하고 막하다가 중간에 싹 갈아 엎었다...<br>
실제 건물도 기초공사를 튼튼하게 해야 전체적으로 건물이 튼튼하듯이 css도 똑같은 것 같다.

overflow scroll에서 크로스 브라우징을 위해 각 브라우저 엔진마다 설정을 해줘야하는 부분을 깨닫고 크로스 브라우징을 생각을 하면서 코딩을 하게 습관을 들여준 프로젝트였다.

<br>

### JS

데이터를 내가 원하는 형식을 바꾸는 것이 힘들었다. 이번 프로젝트를 통해 reduce의 강점을 알게되었다. <br>
카테고리별로 가격을 종합하거나, 데이터 중 날짜를 중복제거하여 빼오거나, 날짜별로 합한 가격을 출력할때에 모두 reduce를 사용하였고 매우 편하게 데이터를 조작할 수 있었다. 또한 map, filter도 자주 사용하여 고차함수들에 잘 익숙해져서 데이터를 조작하는 것에 대한 두려움이 많이 사라졌다.

price에 콤마를 찍기위해 정규표현식을 사용했는데 safari에서는 최신 정규표현식(?,<,!)을 지원하지 않는 다는 것을 배웠고, 그대신 toLocalString 함수가 있다는 것을 배웠다.

addEventListener에서 className을 비교해서 찾는 것보다 includes()를 사용하여 찾는 것이 더 정확한 것 같다.

<br>
<hr>
<br>

## 결과물 보기

### 코드 보러 가기

- https://github.com/Ahn-GiHwan/kdtBank

### 사이트 보러 가기

- develop https://kdtbank-dev.netlify.app/
- master https://kdtbank.netlify.app/

**모바일 모드로 보는 것을 추천!!!**<br>

1. 창을 작게 해서 보기
2. 개발자 모드에서 Device 버전 클릭<br>
   command + option + i 후 상단 좌측 두번째 아이콘 클릭
