import React, {useState} from "react";

const Example2 = () => {
    const [color, setColor] = useState("red");

    return(
        <div>
            <p style={{color:`${color}`}}>
                Color is {color}
            </p>
            <button onClick={()=>{
                setColor("blue");
            }} style={{color:"blue"}}>
                Change Color blue
            </button>
            <button onClick={()=>{
                setColor("red");
            }} style={{color:"red"}}>
                Change Color blue
            </button>
        </div>
    )
}
export default Example2