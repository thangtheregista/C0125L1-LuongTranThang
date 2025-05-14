import React from "react";

function Example3() {
    const elementJSX = (
        <h1 className="greeting">
            Hello World
        </h1>
    )
    const reactCreateElement = React.createElement(
        'h1',
        {
            className: "greeting",
        },
        "Hello World"
    )
    return(
        <>
            {reactCreateElement}
        </>
    )
}

export default Example3