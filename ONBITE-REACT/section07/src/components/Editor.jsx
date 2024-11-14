import EmotionItem from "./EmotionItem.jsx";
import './Editor.css';
import Button from "./Button.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {emotionList} from "../util/constants.js";
import {getStringedDate} from "../util/getStringedDate.js";


const Editor = ({initData, onSubmit}) => {
    const nav = useNavigate();

    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: "",
    });

    useEffect(()=>{
        if(initData) {
            setInput({
                ...initData,
                createdDate: new Date(Number(initData.createdDate)),
            })
        }
    },[initData])

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "createdDate") {
            value = new Date(value);
        }
        setInput({
            ...input,
            [name]: value,
        });
    };

    const onSubmitButtonClick = () => {
        onSubmit(input);
    };

    return (
        <div className="Editor">

            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input
                    name="createdDate"
                    onChange={onChangeInput}
                    value={getStringedDate(input.createdDate)} type="date"/>
            </section>

            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item) => (
                        <EmotionItem
                            onClick={() =>
                                onChangeInput({
                                    target: {
                                        name: 'emotionId',
                                        value: item.emotionId,
                                    },
                                })
                            }
                            key={item.emotionId} {...item}
                            isSelected={item.emotionId === input.emotionId}
                        />
                    ))}
                </div>
            </section>

            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea
                    name="content"
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder={"오늘은 어땠나요?"}/>
            </section>

            <section className="button_section">
                <Button text={"취소하기"} onClick={() => nav(-1)}/>
                <Button text={"완료하기"} type={"POSITIVE"} onClick={onSubmitButtonClick}/>
            </section>
        </div>
    );
}

export default Editor;