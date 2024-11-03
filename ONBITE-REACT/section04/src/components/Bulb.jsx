import {useState} from "react";

const Bulb = () =>{
    const [light, setLight] = useState("OFF")
    console.log(light)
    return (
        <div> {light === "ON" ?
            <h1 style={{backgroundColor: "Orange"}}>ON</h1>
            :
            <h1 style={{backgroundColor: "Gray"}}>OFF</h1>
        }
            <button onClick={() => {
                setLight(light === "OFF" ? "ON" : "OFF");
            }}>
                {light === "ON" ? "OFF" : "ON"}
            </button>

        </div>
    );
}

export default Bulb;