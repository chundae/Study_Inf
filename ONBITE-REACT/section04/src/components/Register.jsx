//회원가입 폼
// 1. 사용자 이름
// 2. 생년월일
// 3. 국적
// 4.. 자기소개

import {useState} from "react";

function Register () {
    const [input, setInput] = useState({
        name : "",
        birth: "",
        country: "",
        bio: "",
    });

    console.log(input);
    const onChangeInput = (e) =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value,//name Tag 를 따라서 값을 변경한다.
        })
    }

    return(
        <>
            <div>
                <input
                    name="name"
                    value={input.name}
                    onChange={onChangeInput}
                    placeholder={"Name"}/>
                <br/>
                <input
                    name="birth"
                    value={input.birth}
                    type="date"
                    onChange={onChangeInput}/>
                <br/>
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

            <h5>{input.name} : {input.birth} : {input.country} : {input.bio}</h5>
        </>
    )
}


export default Register;
