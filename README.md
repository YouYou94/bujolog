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

- 처음 컴포넌트를 구현할 때, 상위 컴포넌트의 데이터를 하위 컴포넌트에 prop으로 전달하는 형식으로 코드를 구현을 하였습니다. 그러나 하위 컴포넌트의 깊이가 깊어질수록 코드를 읽을 때, 해당 prop의 추적이 어려워졌고, 버그가 발생할 경우 버그를 고치는데 있어 매우 많은 양의 코드를 고쳐야 했습니다. 이것은 유지보수 또한 어려워진다는 것을 알게 되었고, 과도한 **props drilling**을 피하기 위해 전역 상태 관리 라이브러리인 `Redux`와 `Context Api`를 사용하였습니다.

- map 함수를 이용하여 컴포넌트를 구현할 당시 key prop에 map 함수의 index 값을 주어 구현하였습니다. 그러나 CRUD 구현 과정에서 문제가 발생했고, 원하는 값을 처리할 때 자꾸만 다른 값이 처리되는 버그가 발생하였습니다. 문제를 해결하고자 공식 문서를 살폈고, 이를 통해 **map 함수의 key prop에 index를 지양하는 이유**에 대해 알게 되어 index 값이 아닌 `nanoid()`를 이용하여 key 값을 전달하여 해당 문제를 해결하였습니다.

- styled-components를 이용하여 `@font-face`를 사용할 경우 리렌더링이 발생 시 **폰트의 깜빡임 현상(FOUT : Flash of Unstyled Font)**이 일어났고, 이는 UX에 좋지 않은 영향을 주므로 이를 해결하기 위하여 styled-components와 폰트 관련 css를 따로 분리하여 설정하였습니다.

</br>
</br>

## 진행 상황

_22.11.01 ~ 22.11.24_

- 불렛 키 셋업 페이지 구현
- 먼슬리 로그 : 스케줄 페이지, 로그 페이지 구현
- 데일리 로그 : 로그 페이지 구현
- 1차 구현 완성!

_22.11.24 ~ 22.11.29_

- 사용자 인터페이스 추가
- 파이어베이스 연동
- 로그인 및 회원가입 추가
- 컴포넌트 파일 구조 변경

</br>
</br>

## Reference

본 프로젝트는 개인 공부를 목적으로 하고 있습니다.
