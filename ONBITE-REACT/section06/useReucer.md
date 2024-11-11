## useReducer
- 컴포넌트 내부에 새로운 State를 생성하는 React Hook
- 모든 useState는 useReducer로 대체 가능

- 상태관리 코드를 컴포넌트 외부로 분리가 가능하다는 큰 특징이 있다.
  
  - 해당 특징을 사용하면 state에 대한 여러 상태변화(set...)코드를 외부에 선언하여 코드도 깔끔해지고 해당 컴포넌트는 기본 목적인 렌더링을 진행할 수 있게된다.


### App.jsx Update
>기존 코드는 README.md 확인

### useReducer()
```javascript
//기존에 사용하던 useState 변경
const [todos, dispatch] = useReducer(reducer, mockData);
```
- dispatch는 주로 객체형태로 구성

  - type에 변경되는 유형
  - data - 변경사항을 입력한다.


이후 `function App()`컴포넌트 외부에 `function reducer()`선언
```javascript
function reducer (state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item)=>
          item.id === action.targetId
              ? {...item, isDone: !item.isDone}
              : item)
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}
```
- `reducer()`는 인자값으로 state와 action을 받게된다. `state`는 App에서는 `todos`를 의미하고 `action`은 변경사항(dispatch)을 저장한 객체이다.
- `reducer()`는 주로 switch를 사용하여 dispatch에 선언한 type을 기준으로 분류하여 로직을 수행한다.




## 코드 개선

---

#### `onCreate()`
```javascript
  const onCreate = (content) =>{
      dispatch({
        type: "CREATE",
        data: {
          id : idRef.current++,
          isDone: false,
          content: content,
          date : new Date().getTime()
        }
    })
  };
```
#### `onUpdate` / `onDelete`
```javascript
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId : targetId
    })
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  };
```


## 전체코드
```javascript
import {useRef, useState, useReducer} from 'react'

import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
const mockData= [
        //....
]

function reducer (state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item)=>
          item.id === action.targetId
              ? {...item, isDone: !item.isDone}
              : item)
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}
function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) =>{
      dispatch({
        type: "CREATE",
        data: {
          id : idRef.current++,
          isDone: false,
          content: content,
          date : new Date().getTime()
        }
    })
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId : targetId
    })
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  };

  return (
    <div className="App">
        <Header/>
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
```