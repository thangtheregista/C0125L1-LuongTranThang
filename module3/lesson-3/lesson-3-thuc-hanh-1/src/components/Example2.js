import React from "react";

function Example2() {
    function getGreeting(user) {
        if (user) {
            return <h1>
                Xin chào {formatName(user)}
            </h1>
        } else {
            return <h1>
                Xin chào người lạ
            </h1>
        }
    }
    const user = {
        firstName: "Nguyen",
        lastName: "Van A",
    }

    function formatName(user) {
        return user.firstName + " " + user.lastName;
    }
    const user1 = getGreeting(user);
    const user2 = getGreeting(null);
    return(
        <>
           <h1>
               User name: {formatName(user)}
               {user1}
               {user2}
           </h1>
        </>
    )
}

export default Example2