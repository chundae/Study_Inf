//Query String 파라미터를 가져오는 커스텀 훅
import {useSearchParams} from "react-router-dom";

const Home = () => {
    const [params, setParams] = useSearchParams();
    console.log(params.get("value"));

    return (
        <>
            <div>Home</div>
        </>
    )
}

export default Home;