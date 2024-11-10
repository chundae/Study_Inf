import './App.css'
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import NotFoundPage from "./pages/Notfound.jsx";


function App() {

  const nav= useNavigate();
  const onClickButton = () => {
    nav('/new');
  }
  return (
      <>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/new"}>New</Link>
          <Link to={"/diary"}>Diary</Link>
        </div>
        <button onClick={onClickButton}>New-Page Change</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New/>} />
          <Route path="/diary/:id" element={<Diary/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </>
  );
}

export default App
