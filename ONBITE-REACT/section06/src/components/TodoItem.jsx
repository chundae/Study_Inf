import './TodoItem.css';
import {memo, useContext} from "react";
import {TodoDispatchContext, TodoStateContext} from "../App.jsx";

const TodoItem = ({id, isDone, content, date}) => {
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);

    const onChangeCheckBox = () => {
        onUpdate(id);
    };

    const onClickDelButton = () => {
        onDelete(id)
    }
    console.log(content)
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

// 고차 컴포넌트 (Higher Order Component)HOC
// export default memo(TodoItem, (prevProps, nextProps) => {
//     //반환 값에 따라 Props가 바뀌었는지 아닌지 판단.
//     // T -> Props 변경 x -> 리렌더링 x
//     // F -> Props 변경 o -> 리렌더링
//     if(prevProps.id !== nextProps.id) {return false}
//     if(prevProps.isDone !== nextProps.isDone) {return false}
//     if(prevProps.content !== nextProps.content) {return false}
//     if(prevProps.date !== nextProps.date) {return false}
//
//     return true
// });
export default memo(TodoItem);
