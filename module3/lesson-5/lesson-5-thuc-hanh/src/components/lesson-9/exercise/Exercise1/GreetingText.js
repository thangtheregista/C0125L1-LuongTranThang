import React from "react";

const GreetingText = ({ selectedLanguage }) => {
    return (
        <div>
            {
                selectedLanguage && (
                    <div className="greeting-text">
                        <h2>{selectedLanguage.name}</h2>
                    </div>
                )
            }
        </div>

    );
}
export default GreetingText;
