# 감정일기장 Final Project

## 요구사항
1. "/" : 모든 일기를 조회하는 메인페이지
2. "/new" : 새로운 일기를 작성하는 페이지
3. "/diary" : 일기를 상세히 조회하는 페이지


>12.11) Home 페이지 구현하기 2. 기능
>Sort 메서드 비교함수 관련 아티클
>https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


## Component 구현

### Header / button Component
#### Header
```javascript
// Props로 제목과 좌우에 배치할 요소를 받아옴.
const Header = ({title, leftChild, rightChild}) => {}
```

#### Button
```javascript
// Props = 버튼 내부 요소(text), 버튼색을 결정할 타입(type),
// 콜백함수(onClick)
const Button = ({text, type, onClick}) => {}
```


### DiaryList / item 

#### DiaryList
App에서 전달한 `DiaryStateContext`를 통해 data 수령
```javascript
const DiaryList = ({data}) => {}
```

정렬기능
