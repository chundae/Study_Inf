import {useRef, useState} from 'react'

import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
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

function App() {

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
  const onUpdate = (targetId) => {
    //todos State 값들 중에
    //targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    //인수 : todos 배열에서 targetID와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(todos.map((todo) =>
            todo.id === targetId
                ? {...todo, isDone: !todo.isDone}
                :
                todo
        )
    );
  };

  const onDelete = (targetId) => {
    //인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId))
  }

  return (
    <div className="App">
      <section>
        <Header/>
      </section>
      <section>
        <Editor onCreate={onCreate}/>
      </section>
      <section>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
      </section>

    </div>

  )
}

export default App
