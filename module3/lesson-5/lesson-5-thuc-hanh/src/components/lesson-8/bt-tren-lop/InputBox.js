import React from "react"

const InputBox = ({ handleSearch }) => {

    return (
        <div>
            <input type="text" placeholder="Type name" onChange={(e)=> {handleSearch(e.target.value)}} />
        </div>
    )
}