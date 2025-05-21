import React from "react";

const DemoOnSubmit = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit');
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Type anything"/>
                <button>
                    Submit
                </button>
            </form>
        </>
    )
}
export default DemoOnSubmit