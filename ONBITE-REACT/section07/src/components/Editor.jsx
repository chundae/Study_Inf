import './Editor.css';
import EmotionItems from "./EmotionItems.jsx";

const Editor = () => {
    return (
        <div className="editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input type="date"/>
            </section>
            <section className="emotion_section">
                <EmotionItems emotionId={1} emotionName={"완전 좋음"}/>
            </section>
            <section className="content_section"></section>
            <section className="button_section"></section>
        </div>
    )
}

export default Editor;