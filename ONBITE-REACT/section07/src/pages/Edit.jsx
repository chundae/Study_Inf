import {useNavigate, useParams} from "react-router-dom"
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import {useContext, useEffect, useState} from "react";
import {DiaryDispatchContext, DiaryStateContext} from "../App.jsx";
import useDiary from "../hooks/useDiary.jsx";
import usePageTitle from "../hooks/usePageTitle.jsx";

const Edit = () => {

    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    const params = useParams();
    const nav = useNavigate()
    usePageTitle(`${params.id}번 일기 수정`)

    const curDiaryItem = useDiary(params.id)

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