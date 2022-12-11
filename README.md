# 불렛저널로그 (bujolog)

다이어리를 쓰는 방법의 한 종류로, ‘Bullet’ 이라는 정보의 중요성이나 종류를 표시할 때 쓰는 기호를 사용하여 저널을 작성하는 불렛 저널을 웹에서 이용할 수 있도록 만든 프로젝트입니다. 불렛 저널의 주요 셋업 방법 중 키(Bullet) 설정하기, 먼슬리(Monthly) 로그, 데일리(Daily) 로그를 작성할 수 있도록 구현하였습니다.

추후, 개인 역량을 키워 불렛 저널의 여러 기능을 추가로 만들 계획이 있으며, 해당 서비스의 서버를 구축하여 배포하는 것이 목표입니다.

</br>
</br>

## 링크

&nbsp; &nbsp; [LINK](https://youyou94.github.io/bujolog/)

</br>
</br>

## 사용 방법

1. 저장소 복제

```
git clone https://github.com/YouYou94/bujolog
```

2. Firebase 추가

```
# src 폴더 안에 .env 파일 추가
# .env 폴더 안에 자신의 Firebase 키 추가
# 구글 파이어베이스에서 인증 기능 사용
# 구글 & 깃허브 & 이메일 로그인 기능 선택 추가
# src
#  ├─ .env
#  └─ ...

REACT_APP_API_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAING_SENDER_ID=
REACT_APP_APP_ID=
REACT_APP_MEASUREMENT_ID=
```

3. 실행

```
npm start
```

4. 게스트용 아이디

```
id : guest1234@email.com

pw : guest1234
```

</br>
</br>

## 사용 기술

Javascript | styled-components | React | Redux | Context

</br>
</br>

## 프로젝트를 통해 배운 점

- 처음 상태관리를 구현할 때, React hooks의 useState를 이용하여 상태관리를 하였습니다. 데이터를 상위 컴포넌트에서 하위 컴포넌트에 prop drilling 과정을 거쳐 전달하였으나 컴포넌트 구조가 깊어질수록 prop의 추적 및 유지보수가 어려워진다는 것을 알게 되었습니다.
  이러한 문제를 해결하고자 전역 상태관리 라이브러리인 Redux와 Context API를 사용하였습니다. 단순히 **prop drilling**을 피하고 낮은 규모와 빈도의 업데이트가 이루어지는 데이터에는 `Context API`를 사용하였고, 복잡한 주요 기능들의 상태관리에서는 `Redux`를 사용하였습니다.

- map 함수를 이용하여 반복되는 컴포넌트를 구현할 당시 key prop에 map 함수의 index 값을 주어 구현하였습니다. 그러나 CRUD 기능에서 원하는 값을 처리할 때 다른 값이 처리되는 문제가 발생하였습니다.
  이를 해결하기 위해 React 공식 문서를 살펴보았고, 공식문서에서 key prop에 index를 넣었을 때, 배열이 재배열이 될 경우 state와 관련된 문제가 발생할 수 있다는 것을 알게 되었습니다. 결과적으로 key prop에 index 대신 `nanoid`라는 랜덤 문자열 생성기를 이용하여 문제를 해결할 수 있었습니다.

- styled-components를 이용하여 `@font-face`를 사용할 경우, 리렌더링 발생 시 **폰트의 깜빡임 현상(FOUT : Flash of Unstlyed Font)**이 일어나는 것을 발견하였습니다. 이는 사용자 UX에 좋지 않은 영향을 끼쳤고, styled-components 자체의 문제였기 때문에 이를 해결하기 위해 styled-components와 폰트 관련 CSS를 따로 분리하여 설정하였습니다.

</br>
</br>

## 진행 상황

_22.11.01 ~ 22.11.24_

- 불렛 키 셋업 페이지 구현
- 먼슬리 로그 : 스케줄 페이지, 로그 페이지 구현
- 데일리 로그 : 로그 페이지 구현
- 1차 구현 완성!

_22.11.24 ~_

- 사용자 인터페이스 추가
- 파이어베이스 연동
- 로그인 및 회원가입 추가
- 컴포넌트 파일 구조 변경

</br>
</br>

## Reference

본 프로젝트는 개인 공부를 목적으로 하고 있습니다.
