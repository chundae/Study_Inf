import './List.css';
import TodoItem from "./TodoItem.jsx";
import {useState} from "react";

const List = ({todos, onUpdate, onDelete}) => {
    const [search,setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase()
                .includes(search.toLowerCase())
        );
    };

    const filteredTodos = getFilteredData();

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <input value={search}
                   onChange={onChangeSearch}
                   placeholder="검색어를 입력하세요"/>
            <div className="todos_wrapper">
                {filteredTodos.map((todo)=>{
                    return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
                })}
            </div>
        </div>
    )
}
//{todos.map((todo)=>{}}
//처럼 맵(리스트)형태로 데이터를 전달하는 경우에는 각각 객체에 대한 key 값이 필요하다.
//해서 return <TodoItem key={todo.id}/> 의 형태로 구조분해 할당을 통해서 기존에 todo 객체를 생성한 id값을 사용하도록 설정.

export default List;