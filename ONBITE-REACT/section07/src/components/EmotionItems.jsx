import './EmotionItems.css';
import {getEmotionImage} from "../util/get-emotion-image.js";


const EmotionItems = ({emotionId, emotionName}) => {
    return (
        <div className="EmotionItems">
            <img src={getEmotionImage(emotionId)}/>
            <div>{emotionName}</div>
        </div>
    );
};

export default EmotionItems;