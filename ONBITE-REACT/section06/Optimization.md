# 최적화 - Optimization
웹 서비스의 성능을 개선하는 모든 행워를 일컫는 말
아주 단순한 것부터 아주 어려운 방법까지 매우 다양하다.

- 일반적인 웹 서비스 최적화 방법

  - 서버의 응답속도 개선
  - 이미지, 폰트, 코드 파일등의 정적 파일 로딩개선
  - 불필요한 네트워크 요청 축소 등등..

- React App 내부의 최적화 방법

  - 컴포넌트 내부의 불필요한 연산 방지
  - 컴포넌트내부의 불 필요한 함수 재생성 방지
  - 컴포넌트의 불 필요한 리렌더링 방지 

- 언제하지?

  - 프로젝트가 완성단계에 다달았을때 최적화를 진행한다.
- 최적화하는 것?

  - 최적화가 필요할거같은 연산이나 함수, 컴포넌트들만 최적화한다.
  - 모든 것을 다 최적화를 진행하는 것은 불필요하다.


## useMemo
"memoization"기법을 기반으로 불 필요한 연산을 최적화 하는 리엑트 훅
=> useCallback 자매

### memoization 이란 
동일한 연산을 반복적으로 수행해야 할때 매번 새로운 연산을 통해 결과값을 출력하는 것이 아니라
최초에 한번만 연산을 수행하고 메모리에 저장한 뒤에  동일 연산을 수행해야할때 저장되어있는 연산을 가져와 사용하는 것이다.


### 연습 List.jsx 코드 추가
```javascript
    const getAnalyzedData = () => {
  console.log("getAnalyzedData 호출");
  const totalCount = todos.length;
  const doneCount = todos.filter((todo) => todo.isDone).length;
  const notDoneCount = totalCount - doneCount;

  return {
    totalCount,
    doneCount,
    notDoneCount
  }
};

const {totalCount, doneCount, notDoneCount} = getAnalyzedData();
```
처럼 코드를 추가하고 실행을 하면 List.jsx 가 리렌더링(검색)될때마다 해당 연산 함수가 계속해서 호출되는 것을 확인 할 수 있다.
<br>해당 코드는 Todo 대한 변경사항이 있을 때만 호출 되는 것이 맞기 때문에 검색을 진행했을 때 리렌더링 되는 것은 연산낭비이다.

### 1차 개선 - `useMemo()`사용
```javascript
const {totalCount, doneCount, notDoneCount} = useMemo(() => {
  console.log("getAnalyzedData 호출");
  const totalCount = todos.length;
  const doneCount = todos.filter((todo) => todo.isDone).length;
  const notDoneCount = totalCount - doneCount;

  return {
    totalCount,
    doneCount,
    notDoneCount
  }
}, [todos]);
```
>useMemo 구조
> 
>`useMemo(()=> {}, [])` 1번째 인수는 콜백함수 2번쨰는 deps(의존성배열)을 전달한다.<br>
> 첫번째 인수로 전달한 콜백함수의 반환값을 그대로 반환한다.<br>
> 첫번째 인수를 전달한 콜백함수를 두번째 인수로 전달한 deps를 기준으로 memoization한다.

기존에 있던 `getAnalyzedData`의 연산과정을 `useMemo` 콜백함수로 옮긴뒤 제거를 한다.
<br>이후 아래 선언했던 `const {totalCount, doneCount, notDoneCount} = getAnalyzedData();`변수를 받는 과정도 useMemo에서 반환값을 받도록 설정

이렇게하면 기존에 수행했던 것과 달리 todos의 값이 상태변화가 생기면 연산을 수행이 진행된다.


## React.memo
컴포넌트를 인수로 받아 최적화된 컴포넌트를 만들어 반환한다.
> `const MemoizedComponent = memo(Component);`
> 
> `MemoizedComponent` => 최적화된 컴포넌트 <br>
> `Component` => 인수로서 최적화 시킬 컴포넌트

최적화된 컴포넌트는 props를 기준으로 memoization이 된다.<br>
부모컴포넌트가 리렌더링되더라도 자신이받는 props에 대한 변화가 없다면 리렌더링이 진행되지 않도록 변경한다.
=> 불필요한 리렌더링이 방지되어 최적화가 이루어진다.

우리가 만들어둔 컴포넌트를 확인해보면 Header 컴포넌트는 Props 전달 받지않고 처음 렌더링된 이후에는 리렌더링이 필요없다는 것을 확인 할 수 있다.
```javascript
export default memo(Header);
```
Header.jsx export를 다음처럼 변경하면 `React.memo`에 대한 기능을 수행하며 다른 컴포넌트들이 리렌더링 되는 경우에도 불필요한 리렌더링을 진행하지 않는다.


### Props를 전달 받는 컴포넌트 개선
다양한 Props(객체형태)를 전달 받는 TodoItem 컴포넌트를 개선해보려고 하는데 해당 컴포넌트는 하나의 Props지만 객체형태로 값을 전달 받는다.<br>
이때 `memo`는 얕은 비교를 진행하기도하고 App.jsx 선언되어 있는 `onCreate / onDelete` 와 같은 함수들도 전달 받기 때문에 `Header.jsx`처럼 
`export default memo(TodoItem)`으로 작성해도 그대로인 것을 확인 할 수 있다.

`memo`는 얕은 비교를 진행하고 리턴값은 boolean으로 비교하기 때문에 제대로된 최적화를 진행할 수 없게 된다.
이때 사용하는 방법은 "고차 컴포넌트 (Higher Order Component)HOC"로 반환에 대한 값을 사용자에 맞게 선택할 수 있도록 하는 방법이다.
```javascript
export default memo(TodoItem, (prevProps, nextProps) => {
  //반환 값에 따라 Props가 바뀌었는지 아닌지 판단.
  // T -> Props 변경 x -> 리렌더링 x
  // F -> Props 변경 o -> 리렌더링
  if(prevProps.id !== nextProps.id) {return false}
  if(prevProps.isDone !== nextProps.isDone) {return false}
  if(prevProps.content !== nextProps.content) {return false}
  if(prevProps.date !== nextProps.date) {return false}

  return true
});
```
위 코드처럼 콜백함수를 추가하여 (이전Props, 새로운Props)를 인수로 받아 값을 비교해 memoization을 진행한다.


>고차 컴포넌트(HOC) 관련 아티클
>
>https://patterns-dev-kr.github.io/design-patterns/hoc-pattern/


> 최적화 관련 아티클
> 
> 아티클 "When to use useMemo, useCallback"
>
>https://goongoguma.github.io/2021/04/26/When-to-useMemo-and-useCallback/



## UseCallback
```javascript
const useCall = useCallback(() => {
  
}, []);
```