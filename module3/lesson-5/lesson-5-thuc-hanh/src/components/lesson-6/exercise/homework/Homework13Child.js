import React from "react";

const Homework13Child = ({handleChange}) => {
    return(
        <>
            <input type="text" placeholder="Nhap ten" name="name" onChange={(e) => {
                handleChange(e.target.name, e.target.value)
            }}/>
            <input type="text" placeholder="Nhap tuoi" name="age" onChange={(e) => {
                handleChange(e.target.name, e.target.value)
            }}/>
            <input type="text" placeholder="Nhap email" name="email" onChange={(e) => {
                handleChange(e.target.name, e.target.value)
            }}/>
        </>
    )
}
export default Homework13Child