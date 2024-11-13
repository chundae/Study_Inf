import './DiaryList.css';
import Button from "./Button.jsx";
import DiaryItem from "./DiaryItem.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const DiaryList = ({data}) => {

    //정렬을 위한 State 객체
    const [sortType, setSortType] = useState("latest");
    const nav = useNavigate();

    //정렬을 위한 함수 선언 1. select 선택이되면 onChangeSortType에서 value값을 가져와 sortType할당
    //2. 할당된 데이터를 비교해 새로운 sortedData를 생성
    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    };

    const getSortedData = () => {
        return data.toSorted((a, b) => {
            if (sortType === "oldest") {
                return Number(a.createdDate) - Number(b.createdDate);
            } else {
                return Number(b.createdDate) - Number(a.createdDate);
            }
        });
    };

    const sortedData = getSortedData();

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select value={sortType} onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button
                    onClick={() => nav("/new")}
                    text={"새 일기 쓰기"}
                    type={"POSITIVE"}
                />
            </div>
            <div className="list_wrapper">
                {sortedData.map((item) => (
                    <DiaryItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}

export default DiaryList;