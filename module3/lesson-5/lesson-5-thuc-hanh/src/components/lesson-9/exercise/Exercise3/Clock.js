import React, {useEffect, useState} from "react";
import ClockDisplay from "./ClockDisplay";
import Greeting from "./Greeting";

const Clock = () => {
    const [ currentTime, setCurrentTime ] = useState(new Date().toLocaleTimeString());
    const [hour, setHour] = useState(new Date().getHours());
    const [greeting, setGreeting] = useState("");

    useEffect(()=>{
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
            setHour(new Date().getHours());
        }, 1000);
        if (hour < 12) {
            setGreeting("Chao buoi sang");
        } else if (hour < 18) {
            setGreeting("Chao buoi trua");
        } else {
            setGreeting("Chao buoi toi");
        }
        return () => clearInterval(timer);
    },[currentTime]);
    return (
        <div>
            <ClockDisplay currentTime={currentTime}/>
            <Greeting greeting={greeting}/>
        </div>
    );
}
export default Clock;