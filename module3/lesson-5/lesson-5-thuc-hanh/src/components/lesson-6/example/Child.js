import React from 'react';

const Child = ({handleClick}) => {

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
export default Child;