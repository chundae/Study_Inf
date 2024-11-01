import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Button from "./components/Button.jsx";

//부모 컴포넌트
function App() {
    const buttonProps = {
        text : "mail",
        color: "red",
        a: 1,
        b : 2,
        c : 3,
    };
  return (
    <>
        <Button {...buttonProps}/>
        <Button text={"cafe"}>
            <Header/>
        </Button>
        <Button text={"blog"}>
            <div>자식요소</div>
        </Button>
    </>
  )
}

export default App
