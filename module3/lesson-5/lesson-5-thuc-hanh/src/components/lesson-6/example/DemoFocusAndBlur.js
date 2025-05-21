import React from "react";

const DemoFocusAndBlur = () => {
    const handleFocus = () => {
        console.log('Focus input');
    }
    const handleBlur = () => {
        console.log('Blur input');
    }
    return(
        <>
            <input type="text" onFocus={handleFocus} onBlur={handleBlur} placeholder="Type anything"/>
            <button>Button</button>
        </>
    )
}

export default DemoFocusAndBlur