# 불렛저널로그 (bujolog)

_(리펙터링 진행중)_

다이어리를 쓰는 방법의 한 종류로, ‘Bullet’ 이라는 정보의 중요성이나 종류를 표시할 때 쓰는 기호를 사용하여 저널을 작성하는 불렛 저널을 웹에서 이용할 수 있도록 만든 프로젝트입니다. 불렛 저널의 주요 셋업 방법 중 키 설정하기, 먼슬리로그, 데일리로그를 프론트엔드를 구현하였습니다.

</br>
</br>

## 1. 개발 목표

- 불렛저널 셋업 방법을 프론트엔드로 구현

</br>
</br>

## 2. 개발 기간, 사용 기술 및 배포

### 2.1 개발 기간

- 1차 - _22. 11. 01 ~ 22. 11. 29_
- 2차 - _23. 01. 05 ~ 진행중_ ( 코드 리펙터링 )

### 2.2 사용 기술

- JavaScript
- React
- Styled-Components
- Redux-toolkit
- ~~FireBase~~

### 2.3 배포

- Demo : https://youyou94.github.io/bujolog

</br>
</br>

## 3. 주요 기능

- 사용자 생성 기능
- 키 설정 CRUD 기능
- 먼슬리로그 CRUD 기능
- 데일리로그 CRD 기능 _(23. 01. 12 ~ 현재 구현중)_

</br>
</br>

## 4. 주요 개발 내용

- FireBase Auth → LocalStorage

  - 기존에는 FireBase의 인증 시스템을 이용하여 로그인과 로그아웃을 구현하였습니다.
  - 리펙터링 과정 _(23. 01. 05)_ 을 거치면서 크롬 앱의 모멘텀과 같은 형식으로 변경하여 사용자가 조금 더 이용하기 쉽게 로그인 기능을 없애고, 로컬스토리지를 이용하여 이름으로 간단히 접속해서 사용할 수 있도록 변경하였습니다.

- CRUD 기능

  - 프론트엔드 개발자라면 경험해야할 CRUD 기능을 구현
  - 키 설정 CRUD (키 생성, 키 조회, 키 변경, 키 삭제) 구현
  - 먼슬리로그 스케줄 CRUD (스케줄 생성, 스케줄 조회, 스케줄 변경, 스케줄 삭제) 구현
  - 데일리로그 CRD 기능 (데일리로그 생성, 데일리로그 조회, 데일리로그 삭제) 구현

- Redux-Toolkit을 이용한 상태 관리

  - 원래 Redux를 이용한 상태관리의 목적은 복잡한 컴포넌트의 상태를 관리하기 위해 보통 사용하지만, 본 프로젝트는 상태 관리가 복잡하지 않기 때문에 `useState` 훅을 이용하여 상태 관리가 가능합니다. 그러나 Redux에 대해 이해하고 공부하려는 목적으로 사용하였습니다.

- Container-Presenter 패턴 사용 _( 23. 01. 05 ~)_

  - 동작과 로직이 있는 Container와 사용자가 조작하는 마크업 구조를 가진 Presenter로 나누어 Container-Presenter 패턴의 사용법을 익히고, 패턴의 장점 중 하나의 코드에 대한 구조를 이해하기 쉽다는 것을 느꼈습니다.

    </br>
    </br>

## 5. 이슈 해결

- map 함수를 이용하여 반복되는 컴포넌트를 구현할 때, key prop에 map 함수의 index 값을 주어 구현하였습니다. 그러나 CRUD 기능에서 원하는 값을 처리할 때 다른 값이 처리되는 문제가 발생하였습니다.

  이와 같은 문제를 해결하기 위해 찾아보던 중 React 공식문서에서 **key prop에 index를 넣었을 때, 배열이 재배열이 될 경우 state와 관련된 문제가 발생할 수 있다**는 사실을 알게 되었습니다. 결과적으로 key prop에 index 대신 `nanoid()`라는 랜덤 문자열 생성기를 이용하여 문제를 해결할 수 있었습니다.

- styled-components를 이용하여 `@font-face`를 사용할 경우, 리렌더링 발생 시 **폰트의 깜빡임 현상**(FOUT : Flash of Unstlyed Font)이 일어나는 것을 발견하였습니다.

  이는 사용자 UX에 좋지 않은 영향을 끼쳤고, styled-components 자체의 문제였기 때문에 이를 해결하기 위해 styled-components와 폰트 관련 CSS를 따로 분리하여 설정하였습니다.
