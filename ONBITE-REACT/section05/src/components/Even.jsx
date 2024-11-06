import {useEffect} from "react";


const Even = () => {
    useEffect(() => {
        //클린업, 정리함수 -> useEffect가 정리될떄 실행된다.
        return () => {
            console.log("unMount")
        };
    }, [])
    return (
        <div>
            짝수입니다.
        </div>
    )
}

export default Even;