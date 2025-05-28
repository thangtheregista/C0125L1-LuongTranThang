import React from "react";
import {useEffect, useState} from "react";

const LanguageSelector = ({languages, setSelectedLanguage}) => {
    return(
        <>
            <div className="language-selector">
                {
                    languages.map((language) => (
                        <button key={language.id} onClick={()=>{
                            setSelectedLanguage(language);
                        }}>{language.id}</button>
                    ))
                }
            </div>
        </>
    )
}
export default LanguageSelector;