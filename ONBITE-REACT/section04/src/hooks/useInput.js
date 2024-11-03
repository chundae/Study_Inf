import {useState} from "react";

function useInput() {
    const [input, setInput] = useState("");

    const Onchange = (e) => {
        setInput(e.target.value);
    };
    return [input, Onchange];
}

export default useInput;