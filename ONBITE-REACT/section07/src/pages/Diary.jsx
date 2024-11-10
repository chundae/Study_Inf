import {useParams} from "react-router-dom";
//현재 브라우저에 명시한 URL 파라미터의값을 가져오는 React Hook

const Diary = () => {
    const params = useParams();

    return (
        <div>{params.id} 일기 입니다.</div>
    )
}

export default Diary;