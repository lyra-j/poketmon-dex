# Poketmon Dex!!

## 💻 프로젝트 소개

[프로젝트 배포 사이트](https://poketmon-dex-git-rtk-lyra-js-projects.vercel.app/)

&nbsp; **[Frontend / React & JS / 개인 과제]**
<br />
&nbsp; 📆 작업 기간 : 2025.02.03 ~ 2025.02.10 <br />
&nbsp; React와 Styled-Components를 활용하여 제작한 포켓몬 도감입니다.<br />
&nbsp; 사용자가 원하는 포켓몬의 나만의 포켓몬 리스트에 추가하거나 삭제할 수 있습니다.<br />
&nbsp; 포켓몬카드를 클릭하면 해당 포켓몬의 상세페이지로 이동하며, 상세페이지에서도 포켓몬 추가/삭제할 수 있습니다.<br />
&nbsp; 상세페이지에서 이전페이지로 돌아가도 선택한 포켓몬의 목록이 유지됩니다.<br />
&nbsp; SweetAlert2 UI라이브러리를 활용하여 최대 등록 마리수 제한 및 중복 방지 모달을 구현했습니다. <br />
<br />

![React](https://img.shields.io/badge/-React-61DAFB?&logo=react&logoColor=white) ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?&logo=javascript&logoColor=white) ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?&logo=css3&logoColor=white) ![sytled-components](https://img.shields.io/badge/-styledcomponents-DB7093?&logo=styledcomponents&logoColor=white) ![vercel](https://img.shields.io/badge/-vercel-000000?&logo=vercel&logoColor=white)

<br />

### 🔹 Git 브랜치 전략

상태관리 방식을 단계별로 나눠서 구현했습니다..

- props-drillng : 최상위 컴포넌트에서 부터 props를 내려주는 방식
- context : props-drilling의 단점을 보완한 context API로 전역상태 관리
- rtk(redux-toolkit): 리덕스 툴킷을 활용하여 전역상태 관리

<br />

## 🔹 트러블슈팅 & TIL

- [콜백지옥, 아니고 props 지옥](https://velog.io/@ly-ra/props-지옥-props-drilling)
- [기출변형! input.value만 나올 줄 알았죠?](https://velog.io/@ly-ra/TIL-빈-슬롯-만큼-공통이미지-채우기-array.fill-map)
- [Path Parameter만 알려주셨는데요!?](https://velog.io/@ly-ra/TIL-동적라우팅-패스파라미터-쿼리스트링)
- [RTK 리팩토링, import 주의보!](https://velog.io/@ly-ra/TIL-RTK-refactoring)
- [과제 발제를 보면서 예상했다..버블버블](https://velog.io/@ly-ra/TIL-버블버블-e.stopPropagation-vs-e.preventDefault)
- [배포완료? 끝날때까지 끝난게 아니다!](https://velog.io/@ly-ra/TIL-vercel-배포-딸깍-주의-사항)

<br />

---

## 📝 프로젝트 작업 후기

리액트 과제를 진행하며 이전보다 많이 익숙해졌다는 느낌을 받았다.<br />이번에는 흐름이 보이고, 진행하는 데 막막하다라는 생각이 들만큼의 큰 어려움은 없었던것 같다. <br />하지만~내맘대로 한번에 진행이 되지 않는것은 언제나 있는 일이라, 거의 끝난 것 같다! 하면서도 무언가 하나씩 오류가 발생했다.<br />
오히려 처음엔 어려울 것 같았던 부분들이 의외로 스무스하게 해결되었고, 쉬운 부분에서 더 오랜 시간을 소비했던 것 같다.<br />
쉽다고 생각해서 가볍게 넘어 간듯하다. 이해는 빠르게 했지만, 실제로 코드를 작성해보며 실전에서 익히는 건 또 다른 문제라는 걸 새삼 느꼈다. 그래서 복습할 때도 손에 익지 않은 코드들을 최대한 반복연습!

작업 중에 여러 자잘한 오류가 발생했고, 해결을 하긴 했지만, 그 부분들을 트러블슈팅으로 기록하기에는 애매하단 생각이들었다.<br />
과제를 진행하면서 튜터님들과 상담할 시간이 있었는데, 그때 몇 가지 질문을 드린 적이 있다. 문제가 생기면 따로 찾아보고 공부하고 튜터님께 찾아가기도 했지만, 막상 찾아가면 대부분 소소한(?) 문제고 금방 해결되곤 했었다. 그래서 튜터님을 찾는 게 오히려 고민이 될 때도 있었다.<br />
튜터님이 주신 답변은 그런 사소하다고 생각되는 것도 격어봐야 금방 해결할 수 있다고 말해주셨다. 그러니 언제든지 찾아오라고.. 🥹<br />
이전에는 이런 소소한 부분들은 TIL이나 트러블슈팅에 기록하지 않았지만, 이제는 이 작은 것들이 쌓여야 내 자산이 된다는 걸 깨닫고, TIL이나 트러블슈팅에 이 과정들을 기록하면서 더 많이 배우고, 나만의 자료로 만들어가고 있다.

스타일에 대해서는 '깔끔하고 정돈된 화면이면 된다'는 생각이 있어서 과제를 하면서 CSS를 많이 활용하지 않았다. 그래서 그런지 styled-components의 장점을 체감하지 못했다. 나중에 다른 CSS를 배운다고 하니 그때는 적극적으로 활용해봐야겠다고 생각중!