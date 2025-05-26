import React, {useEffect} from "react";

const Example2 = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("This will run every second");

        }, 1000);
        console.log("Component mounted, interval started");
        return () => {
            clearTimeout(timer);
            console.log("Component unmounted, interval cleared");
        } // Cleanup function to clear the interval
    });
    return (
        <>
            <h1>Example 2</h1>
            <p>This is an example component.</p>
        </>
    );
}
export default Example2;