import React from "react";

function Exercise13() {
    function image(url, alt) {
        return <img src={url} alt={alt}/>
    }
    const image1 = image("https://picsum.photos/200/300", "Image 1")
    return(
        <>
            {image1}
        </>
    )
}
export default Exercise13