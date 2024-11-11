import './App.css'
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import NotFoundPage from "./pages/Notfound.jsx";
import Edit from "./pages/Edit.jsx";
import {createContext, useContext, useReducer, useRef} from "react";

const mockData = [
    {
        id: 1,
        createdDate: new Date("2024-11-11").getTime(),
        emotionId: 1,
        content: "1번 일기",
    },
    {
        id: 2,
        createdDate: new Date("2024-11-10").getTime(),
        emotionId: 2,
        content: "2번 일기",
    },
    {
        id: 3,
        createdDate: new Date("2024-10-12").getTime(),
        emotionId: 5,
        content: "3번 일기",
    },
]


function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state]
        case "UPDATE":
            return state.map((item) =>
                String(item.id) === String(action.data.id) ? action.data : item);
        case "DELETE":
            return state.filter((item) => String(item.id) === String(action.data.id));
        default:
            return state;
    }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

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

    return (
        <>
            <button onClick={() => {
                onCreate(new Date().getTime(), 1, "Hello");
            }}>일기 추가 테스트
            </button>

            <button onClick={() => {
                onUpdate(1, new Date().getTime(), 3, "Update");
            }}>수정 버튼
            </button>

            <button onClick={() => {
                onDelete(1)
            }}>삭제 버튼
            </button>

            {/*provider로 묶어줌으로써 아래 페이지에서 데이터를사용 할 수 있게함.*/}
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
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