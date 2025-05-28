import React, {useEffect, useState} from "react";
import LanguageSelector from "./LanguageSelector";
import GreetingText from "./GreetingText";

const Language = ({  }) => {
    const [languages, setLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    useEffect(() => {
         setLanguages([
             {id: "VN", name: "Xin chao"},
             {id: "EN", name: "Hello"},
             {id: "JP", name: "Konichiwa"},
         ]) ;
        console.log(selectedLanguage);
    }, [selectedLanguage]);
    return(
        <>
            <LanguageSelector languages={languages} setSelectedLanguage={setSelectedLanguage}/>
            <GreetingText selectedLanguage={selectedLanguage}/>
        </>
    )
}
export default Language;