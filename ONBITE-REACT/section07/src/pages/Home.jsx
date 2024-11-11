//Query String 파라미터를 가져오는 커스텀 훅
import {useSearchParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import DiaryList from "../components/DiaryList.jsx";
import {useState, useContext} from "react";
import {DiaryStateContext, DiaryDispatchContext} from "../App.jsx";

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

    // filter 를 사용해 해당 달에 있는 DiaryList 필터링
    return data.filter((item) => {
        beginTime <= item.createdDate && item.createdDate <= endTime
    });
}


const Home = () => {
    //App.jsx에서 DiaryItem에 대한 데이터를 Context형태로 사용하기 위함
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
                //title -> Button 파라미터로 Button에서 동작할 콜백함수를 전송
                    leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
                    rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
            />
            <DiaryList data={monthlyData}/>

        </>
    );
}

export default Home;