import React from "react";
import Homework18Child from "./Homework18Child";

const Homework18 = () => {
    let favoriteLanguage = "";
    const handleChange = (language) => {
        favoriteLanguage = language;
        console.log(favoriteLanguage);
    }
    return (
        <div>
            <Homework18Child id="html" handleChange={handleChange}/>
            <Homework18Child id="css" handleChange={handleChange}/>
            <Homework18Child id="javascript" handleChange={handleChange}/>
        </div>
    )
}
export default Homework18