import './TodoItem.css';

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

export default TodoItem;