import './App.css'
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import NotFoundPage from "./pages/Notfound.jsx";
import Edit from "./pages/Edit.jsx";
import {createContext, useEffect, useReducer, useRef, useState} from "react";
import {Routes, Route} from "react-router-dom";

//
// const mockData = [
//     {
//         id: 1,
//         createdDate: new Date("2024-11-11").getTime(),
//         emotionId: 1,
//         content: "1번 일기",
//     },
//     {
//         id: 2,
//         createdDate: new Date("2024-11-10").getTime(),
//         emotionId: 2,
//         content: "2번 일기",
//     },
//     {
//         id: 3,
//         createdDate: new Date("2024-10-12").getTime(),
//         emotionId: 5,
//         content: "3번 일기",
//     },
// ]


function reducer(state, action) {
    let nextState;
    switch (action.type) {

        case "INIT" :
            return action.data;

        case "CREATE": {
            nextState = [action.data, ...state];
            break;
        }
        case "UPDATE": {
            nextState = state.map((item) =>
                String(item.id) === String(action.data.id) ? action.data : item);
            break;
        }
        case "DELETE": {
            nextState = state.filter(
                (item) => String(item.id) !== String(action.data.id));
            break;
        }
        default:
            return state;
    }
    localStorage.setItem("diary", JSON.stringify(nextState));
    return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);

    useEffect(() => {
        const storedData = localStorage.getItem("diary");
        if (!storedData) {
            setIsLoading(false);
            return;
        }
        const parsedData = JSON.parse(storedData);
        if(!Array.isArray(parsedData)) {
            setIsLoading(false);
            return;
        }

        let maxId = 0;
        parsedData.forEach((item) => {
            if (Number(item.id) > maxId) {
                maxId = Number(item.id);
            }
        })
        idRef.current = maxId + 1;

        dispatch({
            type: "INIT",
            data: parsedData,
        });
        setIsLoading(false);
    }, [])


    // 새로운 일기
    const onCreate = (createdDate, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createdDate,
                emotionId,
                content,
            },
        })
    }
    //기존 일기 수정
    const onUpdate = (id, createdDate, emotionId, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id, createdDate, emotionId, content
            }
        })
    }

    //기존 일기 삭제
    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            data: {
                id
            }
        })
    }

    if (isLoading) {
        return <div>데이터 로딩중 ... </div>
    }
    return (
        <>
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={
                    {onCreate, onUpdate, onDelete}
                }>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/new" element={<New/>}/>
                        <Route path="/diary/:id" element={<Diary/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                        <Route path="/edit/:id" element={<Edit/>}/>
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    );
}

export default App