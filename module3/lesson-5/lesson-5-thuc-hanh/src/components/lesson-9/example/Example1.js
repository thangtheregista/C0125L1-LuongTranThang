import React, {useEffect} from 'react';

const Example1 = () => {

    // useEffect(() => {
    //     console.log("Chay 1 lan sau khi render")
    // }, []);
    useEffect(() => {
        console.log("Chay moi khi component render")
    })
    return(
        <>
        </>
    )
}
export default Example1