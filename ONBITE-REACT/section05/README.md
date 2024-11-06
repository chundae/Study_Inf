## 여러 컴포넌트에서 데이터 주고받기

- 다양한 컴포넌트들이 서로 부모과 자식의 관계의 형태로 이루며 계층 구조이다.
- 서로다른 컴포넌트가 서로 데이터(Props)를 주고받기 위해서는 **반드시 부모 자식관계**여야 만 한다. 
- 하나의 State 여러 컴포넌트에서 사용하게되는경우에는

  - 부모가 되는 컴포넌트에 State를 설정하고 각각 전달을 진행해야한다.
  - 현재 구성한 Viewer / Controller 컴포넌트를 살펴보면 Viewer에는 count 를 전달하고 Controller에는 이벤트핸들러를 생성하여 state객체를 전부 전달하는 것을 확인 할수 있따.
- 다음과 같이 State 를 계층의 위로 올리는것을 React에서는 State Lifting이라고 한다.(state 끌어올리기)
- 따라서 데이터들은 위에서 아래로 흐름이 이루어지면 "단방향 흐름을 지닌다."


#### React에서는 데이터를 위에서 아래로 단방향으로 사용하기 때문에 데이터의 원천인 `State`를 어떤 컴포넌트에 위치 시킬 것인지를 항상 고민해야한다.
> State Lifting
>
> State 끌어올리기라고 하며 여러 컴포넌트에서사용되는 State를 사용되는 컴포넌트 상위 컴포넌트에 배치시킨다는 의미이다.

```javascript
function App() {
    const [count, setCount] = useState(0);
    const onClickButton = (value) => {
        setCount(count + value);
    }

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <Viewer count = {count} />
            </section>
            <section>
                <Controller onClickButton={onClickButton}/>
            </section>
        </div>
    )
}
```

---


## React Components LifeCycle

Mount -> Update -> UnMount 순으로 라이프사이클을 지니고 있다.

- Mount
  
  - 컴포넌트가 탄생한 순간 "A 컴포넌트가 Mount되었다."
  - 화면에 처음 렌더링 되는 순간
  - 서버에서 데이터를 불러오는 작업
- Update

  - 컴포넌트가 다시 렌더링되는순간
  - 리렌더링 될때를 의미
  - 어떤 값이 변경되었는지 콘솔에 출력
- UnMount

  - 컴포넌트가 화면에서 사라지는순간
  - 렌더링을 제외되는 순간을 의미
  - 컴포넌트가 사용하던 메모리 정리



## useEffect

> Side Effect  
> 우리말로 "부작용"이라는 뜻
~에 의해 파생되는 효과, ~에 의한 부수적인 효과를 의미

```javascript
//인수로는 콜백함수와 배열(**의존성배열 -> deps(dependence Array)**)을 넣는다.
//두번째 인수로 전달한 배열의 값이 바뀌면 콜백함수를 실행
useEffect(() => {
}, []);
```

- 사용
```javascript
function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    useEffect(() => {
        console.log(`count: ${count} / input: ${input}`)
    }, [count, input]);


    const onClickButton = (value) => {
        setCount(count + value);
    }
}
```
위 코드를 살펴보면 count / Input 의 변경이 이루어지면 log를 띄우도록 useEffect를 설정하였다.
여기서 하나의 의문점이 생긴다.
그냥 `onclickButton`이벤트핸들러에서 log를 띄우면 되는거 아닌가?하는 의문이 생기는데
이렇게 해본결과 controller에서 값을 증가하는 버튼을 눌렀지만 `onClickButton`에서 출력하는 log는 기존(이전)값인 0이 출력되는 오류를 확인햇다.

왜그럴까 찾아보니 React는 비동기로 이벤트를 처리하기 떄문에 실행기 된거같으면서도 아직 완료가 되지 않는 상태이기때문에 그렇게 출력되는 것이다. 
따라서 변경된 값을 바로바로 확인하기 위헤서는 이벤트핸들러에 log를 출력하는 것이 아닌 useEffect를 사용해야 한다.
