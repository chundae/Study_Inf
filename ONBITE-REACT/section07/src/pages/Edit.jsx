import {useNavigate, useParams} from "react-router-dom"
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import {useContext, useEffect, useState} from "react";
import {DiaryDispatchContext, DiaryStateContext} from "../App.jsx";

const Edit = () => {
    const data = useContext(DiaryStateContext);
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    const params = useParams();
    const nav = useNavigate()
    const [curDiaryItem, setCurDiaryItem] = useState();

    useEffect(() => {
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(params.id)
        );

        if (!currentDiaryItem) {
            alert("존재하지 않는 일기입니다.")
            nav('/', {replace: true});
        }

        setCurDiaryItem(currentDiaryItem);
    }, [params.id, data])


    const onClickDelete = () => {
        let isDelete = window.confirm("Are you sure you want to delete?")
        if (isDelete) {
            onDelete(params.id);
            nav('/', {replace: true});
        }
    }

    const onSubmit = (input) => {
        if (window.confirm("Are you sure you want to delete?")) {
            onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
        };

        nav('/', {replace: true});
    }

    return (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={
                    <Button onClick={() => nav(-1)} text={"< 뒤로가기"}/>}
                rightChild={
                    <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete}/>
                }
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
        </div>
    )
};

export default Edit;