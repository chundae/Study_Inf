import {useEffect} from "react";

const usePageTitle = (title) => {
    useEffect(()=>{
        //돔 요소를 가져오는 변수명 $추가
        const $title = document.getElementsByTagName("title")[0]
        $title.innerText = title
    },[title])
}

export default usePageTitle;