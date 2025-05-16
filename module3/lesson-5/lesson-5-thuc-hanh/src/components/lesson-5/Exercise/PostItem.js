import React from "react";

function PostItem(props) {

    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.excerpt}</p>
        </div>
    )
}
export default PostItem