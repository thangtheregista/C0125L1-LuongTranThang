import React, {useEffect, useState} from "react";

const Temperature = ( ) => {
    const [temperature, setTemperature] = useState("");
    const [unit, setUnit] = useState("celsius");
    const handleTemperatureChange = (temperature) => {
        setTemperature(temperature);
    };
    const handleUnitChange = (unit) => {
        setUnit(unit);
    };
    useEffect(() => {
        console.log(`Temperature changed`);
    }, [temperature]);
    return(
        <div>
            <input type="text" onChange={(e)=> {handleTemperatureChange(e.target.value)}} />
            <select onChange={(e) => {handleUnitChange(e.target.value)}}>
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
            </select>
            <div>
                {
                    unit === "celsius" && temperature ? (
                        <p>{(temperature * 9/5) + 32} °F</p>
                    ) : unit === "fahrenheit" && temperature ? (
                        <p>
                            {(temperature - 32) * 5/9} °C
                        </p>
                    ) : (
                        <p>Enter the temperature</p>
                    )
                }
            </div>
        </div>
    )
}
export default Temperature;