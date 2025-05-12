import './App.css';
import React from "react";

function App() {
    // npx create-react-app lesson-3-thuc-hanh-1
    // CTRL + Shift + S
    // CTRL + ALT + L
    const element1 = React.createElement(
        'h1',
        null,
        'Chào mừng đến với ReactJS'
    )
    const element2 = React.createElement(
        'p',
        null,
        "Đây là bài tập đầu tiên của chúng ta"
    )
    const element3 = React.createElement(
        'a',
        {
            href: "https://www.google.com",
        },
        "Đi dến Google"
    )
    const fruits = ["Apple", "Banana", "Orange", "Apricot", "Black Rowan", "Cranberry"];
    const element4 = fruits.map((fruit, index) => {
        return React.createElement(
            'li',
            {key: index},
            fruit
        )
    })
    return (
        <div>
            {element1}
            {element2}
            {element3}
            <h1>
                List of fruits
            </h1>
            <ul>
                {fruits.map((fruit, index) =>
                    (<li key={index}>
                        {fruit}
                    </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default App;
