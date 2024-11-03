import {useState} from "react";
import useInput from "../hooks/useInput.js";

// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능하다.
// 2. 조건부로 호출이 불가능하다.호출에 대한 순서가 꼬여 문제가 발생할 수 있다.
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.



const HookExam = () => {
    const [input, onchange] = useInput();
    return (
        <>
            <div>
                <input value={input} onClick={onchange}/>
            </div>
        </>
    );
}

export default HookExam;