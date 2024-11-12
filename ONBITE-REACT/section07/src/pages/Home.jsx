import {useState, useContext} from "react";
import {DiaryStateContext} from "../App.jsx";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import DiaryList from "../components/DiaryList.jsx";

const getMonthlyData = (pivotDate, data) => {
    //pivot 을 기준으로 달의 시작
    const beginTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1, 0, 0, 0).getTime();
    //달의 마지막 날
    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth() + 1,
        0, 23, 59, 59).getTime();

    return data.filter((item) => {
        beginTime <= item.createdDate && item.createdDate <= endTime
    });
}



const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());

    const monthlyData = getMonthlyData(pivotDate, data);
    //이번달 기준 + 1
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    };
    //이번달 기준 - 1
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    };

    return (
        <>
            <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
                    leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
                    rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
            />
            <DiaryList data={monthlyData}/>

        </>
    );
}

export default Home;