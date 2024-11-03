import { useState, useRef } from "react";


//회원가입 폼
// 1. 사용자 이름
// 2. 생년월일
// 3. 국적
// 4.. 자기소개

function RegisterRef () {
    const [input, setInput] = useState({
        name : "",
        birth: "",
        country: "",
        bio: "",
    });

    const countRef= useRef(0);
    const inputRef = useRef();



    const onChangeInput = (e) =>{
        countRef.current++;
        console.log(countRef.current)
        setInput({
            ...input,
            [e.target.name] : e.target.value,//name Tag 를 따라서 값을 변경한다.
        })
    }
    const onSubmit = () =>{
        if(input.name === ""){
            //이름을 입력하는 DOM요소에 포커스
            inputRef.current.focus();
        }
    }

    return(
        <>
            <div>
                <input
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChangeInput}
                    placeholder={"Name"}/>
            </div>
            <div>
                <input
                    name="birth"
                    value={input.birth}
                    type="date"
                    onChange={onChangeInput}/>
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChangeInput}>
                    <option value=""></option>
                    <option value={"KR"} >한국</option>
                    <option value={"US"}>미국</option>
                    <option value={"UK"} >영국</option>
                </select>
            </div>

            <div>
                <textarea name="bio" value={input.bio} onChange={onChangeInput}/>
            </div>

            <button onClick={onSubmit}>전송</button>

            <h5>{input.name} : {input.birth} : {input.country} : {input.bio}</h5>
        </>
    )
}


export default RegisterRef;
