import './App.css';
import React from "react";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Example4 from "./components/Example4";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";
import Exercise4 from "./components/Exercise4";
import Exercise5 from "./components/Exercise5";
import Exercise6 from "./components/Exercise6";
import Exercise7 from "./components/Exercise7";
import Exercise8 from "./components/Exercise8";
import Exercise9 from "./components/Exercise9";
import Exercise10 from "./components/Exercise10";
import Exercise11 from "./components/Exercise11";
import Exercise12 from "./components/Exercise12";
import Exercise13 from "./components/Exercise13";
import Exercise14 from "./components/Exercise14";
import Exercise15 from "./components/Exercise15";
import Exercise16 from "./components/Exercise16";
import Exercise17 from "./components/Exercise17";
import Exercise18 from "./components/Exercise18";
import Exercise19 from "./components/Exercise19";
import Exercise20 from "./components/Exercise20";
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
                {element4}
                {fruits.map((fruit, index) =>
                    (<li key={index}>
                        {fruit}
                    </li>
                    ))
                }
            </ul>
            <Example1/>
            <Example2/>
            <Example3/>
            <Example4/>
            <Exercise1/>
            <Exercise2/>
            <Exercise3/>
            <Exercise4/>
            <Exercise5/>
            <Exercise6/>
            <Exercise7/>
            <Exercise8/>
            <Exercise9/>
            <Exercise10/>
            <Exercise11/>
            <Exercise12/>
            <Exercise13/>
            <Exercise14/>
            <Exercise15/>
            <Exercise16/>
            <Exercise17/>
            <Exercise18/>
            <Exercise19/>
            <Exercise20/>
        </div>
    );
}

export default App;
