import React from "react";

const DemoOnChange = () => {
    const handleOnChange = (e) => {
        e.preventDefault()
        console.log(e.target.value);
    }
    return(
        <div>
            <input type="text" onChange={handleOnChange} placeholder="Type anything"/>
        </div>
    )
}
export default DemoOnChange