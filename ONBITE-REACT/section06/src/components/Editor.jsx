import './Editor.css';
import {useState, useRef, useContext} from "react";
import {TodoDispatchContext, TodoStateContext} from "../App.jsx";

const Editor = () => {

    //App.jsx 에서 전달한 Context 데이터를 전달받기
    const {onCreate} = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const contentRef = useRef();
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }

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
             <input
                 ref={contentRef}
                value={content}
                onChange={onChangeContent}
                onKeyDown={onKeyDown}
                placeholder="새로운 Todo..."/>
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

/*
1. App.Jsx 에서 전달받은 onCreate 함수를 onSubmit 함수 내부에서 사용
2. onSubmit 함수에서는 state로 할당한 content를 사용.


즉 순서는
1. input에서 값을 입력하여 onChange함수를 실행
-> onChangeContent에서 setContent로 state에 데이터를 할당

2. button을 클릭하여 onSubmit함수를 실행
-> App 컴포넌트에서 전달받은 onCreate함수를 내부에서 실행하면서 인수로는 state인 content를 전달함.

 */


export default Editor;