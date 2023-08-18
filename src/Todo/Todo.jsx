import {useState} from "react";
import {Link} from "react-router-dom";

export default function Todo(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Home</h1>
            <link to="/home">HOME</link>
            <p>{count}</p>
            <button onClick={(() => {setCount(count + 1)})}>Count</button>
            <button onClick={(() => {setCount(0)})}>Reset</button>
            <input type= "text" {(() => {setCount(0)})}>Reset</input>
        </div>
    );
}