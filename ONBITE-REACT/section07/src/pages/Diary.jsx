import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Viewer from "../components/Viewer.jsx";
import useDiary from "../hooks/useDiary.jsx";
import {getStringedDate} from "../util/getStringedDate.js";
import usePageTitle from "../hooks/usePageTitle.jsx";


const Diary = () => {
    const params = useParams();
    const nav = useNavigate();
    const curDiaryItem = useDiary(params.id)

    usePageTitle(`${params.id}번 일기`)
    if(!curDiaryItem){
        return <div>데이터 로딩중...!</div>
    }

    const {createdDate, emotionId, content} = curDiaryItem;
    const title = getStringedDate(new Date(createdDate));

    return (
        <div>
            <Header
                title={`${title} 기록 `}
                leftChild={
                    <Button onClick={() => nav(-1)} text={"< 뒤로가기"}/>
                }
                rightChild={
                    <Button text={"수정하기"} onClick={()=> nav(`/edit/${params.id}`)}/>
                }
            />
            <Viewer emotionId={emotionId} content={content} />
        </div>
    )
}

export default Diary;