import React from "react";

function Exercise15() {
    const arrOfObjects = [
        {
            title: "Apple",
            id: 1,
        },
        {
            title: "Samsung",
            id: 2,
        }
    ]

    return(
        <>
            <ul>
                {arrOfObjects.map((item) => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Exercise15;