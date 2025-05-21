import React from "react";

const Homework21Child = ({handleChange, handleSubmit}) => {
    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" name="email" onChange={(e)=> {handleChange(e.target.name, e.target.value)}}/>
                <input type="text" placeholder="Password" name="password" onChange={(e)=> {handleChange(e.target.name, e.target.value)}}/>
                <button>
                    Submit
                </button>
            </form>
        </>
    )
}
export default Homework21Child