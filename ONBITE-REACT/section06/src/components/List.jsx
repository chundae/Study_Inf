import './List.css';
import TodoItem from "./TodoItem.jsx";
import {useContext, useMemo, useState} from "react";
import {TodoStateContext} from "../App.jsx";

const List = () => {
    const todos = useContext(TodoStateContext);
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

    //useMemo는 첫번째 인수로 전달한 콜백함수의 반환값을 그대로 반환한다.
    //첫번쨰 인수를 전달한 콜백함수를 두번째 인수로 전달한 deps를 기준으로 memoization한다.
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

    //const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>

            <input value={search}
                   onChange={onChangeSearch}
                   placeholder="검색어를 입력하세요"/>
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo}/>
                })}
            </div>

            <div>total : {totalCount}</div>
            <div>done : {doneCount}</div>
            <div>notDone : {notDoneCount}</div>

        </div>
    )
}
//{todos.map((todo)=>{}}
//처럼 맵(리스트)형태로 데이터를 전달하는 경우에는 각각 객체에 대한 key 값이 필요하다.
//해서 return <TodoItem key={todo.id}/> 의 형태로 구조분해 할당을 통해서 기존에 todo 객체를 생성한 id값을 사용하도록 설정.

export default List;