import React from "react";

const Homework5Child = ({handleClick}) => {
    return(
        <>
            <button onClick={()=> {handleClick("like")}}>
                Like
            </button>
            <button onClick={()=> {handleClick("dislike")}}>
                Dislike
            </button>
        </>
    )
}
export default Homework5Child