import React from "react";
import ShowMessage from "./ShowMessage";

function Example1() {
    const title = "Hello props";
    const description = "Props is simple";
    const menuInfo = {
        title: "Hello props",
        description: "Props is simple",
        price: 10,
    }
    const menuItem = ["Home", "Profile"]
    return(
        <>
            <ShowMessage menuInfo={menuInfo} menuItem={menuItem}/>
        </>
    )
}

export default Example1;