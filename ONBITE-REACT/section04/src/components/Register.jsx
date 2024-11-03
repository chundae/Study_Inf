//회원가입 폼
// 1. 사용자 이름
// 2. 생년월일
// 3. 국적
// 4.. 자기소개

import {useState} from "react";

function Register () {
    const [name , setName]  = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");

    const onChangeName = (e) =>{
        console.log(e)
        setName(e.target.value);
    }

    const onChangeBirth = (e) =>{
        setBirth(e.target.value);
    }

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }
    const onChanteBio = (e) =>{
        setBio(e.target.value);
    }

    return(
        <>
            <div>
                <input value={name} onChange={onChangeName} placeholder={"Name"}/>{name}<br/>
                <input value={birth} type="date" onChange={onChangeBirth}/>{birth}<br/>
            </div>
            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option value=""></option>
                    <option value={"KR"} >한국</option>
                    <option value={"US"}>미국</option>
                    <option value={"UK"} >영국</option>
                </select>
                {country}
            </div>

            <div>
                <textarea value={bio} onChange={onChanteBio}/>
                {bio}
            </div>
        </>
    )
}


export default Register;
