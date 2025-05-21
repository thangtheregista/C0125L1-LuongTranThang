import React from "react";

const Homework7Child = ({handleSelectImage, number, url}) => {

    return(
        <>
            <button onClick={()=> handleSelectImage(url)}>
                Anh {number}
            </button>

        </>
    )
}
export default Homework7Child;