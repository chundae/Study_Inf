## Todo - List Project

### Components
요구조건 
1. 투두를 생성. enter로 생성가능 -> button도 사용할 수 있음.
2. 투두를 완료하면 객체의 체크박스를 활성화 상태로 변경
3. 삭제 가능
#### Editor
1. input에서 값을 입력하여 onChange함수를 실행
   -> onChangeContent에서 setContent로 state에 데이터를 할당
```javascript
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
```
2. button을 클릭하여 onSubmit함수를 실행
   -> App 컴포넌트에서 전달받은 onCreate함수를 내부에서 실행하면서 인수로는 state인 content를 전달함.
```javascript
const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const onSubmit = () => {
        if (content === "") {
            //input 입력값이 없는 경우 focus 주기
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        //데이터를 등록한다음 입력창 초기화 하기
        //그냥 state에 빈 문자열을 입력하면 됨.
        setContent("");
    }
    return (
        <div className="Editor">
            ...
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}
```

#### List
App 컴포넌트에서 Todos(state)를 전달 받아 사용한다.

1. map을 사용하여 데이터를 리스트화 시켜서 TodoItem 컴포넌트의 Props로 사용.
```javascript
<div className="todos_wrapper">
    {filteredTodos.map((todo)=>{
       return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
    })}
</div>
```
`{todos.map((todo)=>{}}` 처럼 맵(리스트)형태로 데이터를 전달하는 경우에는 각각 객체에 대한 key 값이 필요하다.
따라서 `return <TodoItem key={todo.id}/>` 의 형태로 구조분해 할당을 통해서 기존에 todo 객체를 생성한 id값을 사용하도록 설정.
그리고 props로는 `{...todo}` 스프레드 연산자를 사용한다.
Todo의 체크박스를 사용 및 삭제를 위해 `onUpate` / `onDelete`함수를 App컴포넌트에서 전달받아 전송


2. filteredTodos 는 검색기능의 `filter` 사용해 리렌더링을 시키기 위해 사용
```javascript
const [search,setSearch] = useState("");

//검색값을 state에 할당
const onChangeSearch = (e) => {
    setSearch(e.target.value);
};

const getFilteredData = () => {
    //검색 결과가 없는 경우는 그냥 전달받은 props를 사용
    if (search === "") {
        return todos;
    }
    //검색을 진행하는 경우 filter를 사용하여 해당 키워드가 들어있는 todo를 출력
    //검색결과를 일관성 있게 변경하기 위해 `toLowerCase()`함수를 사용하여 모두 소문자로 사용
    return todos.filter((todo) =>
        todo.content.toLowerCase()
            .includes(search.toLowerCase())
    );
};
```
#### TodoItem
```javascript
const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

   const onChangeCheckBox = () => {
      onUpdate(id);
   };

   const onClickDelButton = () => {
      onDelete(id)
   }
   return (
           <div className="TodoItem">
              <input
                      onChange={onChangeCheckBox}
                      readOnly checked={isDone}
                      type="checkbox"/>
              <div className="content" style={{textDecoration : isDone ? 'line-through' : 'none'}}>{content}</div>
              <div className="date">{new Date(date).toLocaleDateString()}</div>
              <button onClick={onClickDelButton}>Del</button>
           </div>
   );
}
```
- `List`컴포넌트에서 전달 받은 props 구조분해 할당하여 각각 객체를 사용한다.
- checkBox기능을 수행하기 위한 `onUpdate`의 함수 인자로 Id값을 전송
- Delete 기능을 위해 `onDelete`의 함수 인자로 Id값을 전송 
- `<div content>`에선 체크박스가 활성화 되면 글자의 스타일을 변경하도록 설정

#### App
데이터를 확인하기 위한 Mock객체 생성
```javascript
const mockData= [
  {
    id:0,
    isDone: false,
    content: "React",
    date: new Date().getTime(),
  },
  {
    id:1,
    isDone: false,
    content: "Java",
    date: new Date().getTime(),
  },
  {
    id:2,
    isDone: false,
    content: "Spring",
    date: new Date().getTime(),
  },
]
```
- `Editor`컴포넌트에서 사용되는 `onCreate`함수를 정의하고 새로운 객체와 스프레드 연산자를 사용한다.
- `todos`는 모든 컴포넌트에서 사용되는 state 이기 때문에 부모 컴포넌트인 App.jsx에 선언하여 사용한다. 
- `idRef`는 생성되는 Todo에 id값을 중복되지 않게 할당하기 위해 사용된다.
```javascript
const [todos, setTodos] = useState(mockData);
const idRef = useRef(3);
const onCreate = (content) =>{
   const newTodo = {
      id: idRef.current++,
      isDone: false,
      content : content,
      date : new Date().getTime()
   }

   setTodos([newTodo ,...todos]);
}
```

`TodoItem` 컴포넌트에서 사용되는 `onUdpate`와 `onDelete` 함수를 정의.

- OnUpdate()

   - todos State 값들중에 targetId와 일치하는 id를 갖는 TodoItem의 isDone 값을 변경
   - 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 밖쑨 새로운 배열
   
     - 예를 들어 [id : 0, isDone : False, content: "spring", date: date]형태로 배열이 있다면 여기서 `isDone`만 수정하여 새로운 객체로 생성 후 반환하는 것
```javascript
  const onUpdate = (targetId) => {
    setTodos(todos.map((todo) =>
            todo.id === targetId
                ? {...todo, isDone: !todo.isDone}
                :
                todo
        )
    );
  };
```

- OnDelete()

   - todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
   - `targetId : 1`로 입력받았을때 1이라는 id를 갖는 객체는 제외하고 새로운 배열을 생성하여 출력한다.
```javascript
const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId))
}
```