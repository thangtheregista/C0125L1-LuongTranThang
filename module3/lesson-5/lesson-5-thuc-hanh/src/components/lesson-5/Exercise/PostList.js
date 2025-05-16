import React from "react";
import PostItem from "./PostItem";

function PostList() {
    const posts = [
        {
            title: "Post 1",
            date: "2023-10-01",
            excerpt: "Content of Post 1"
        },
        {
            title: "Post 1",
            date: "2023-10-01",
            excerpt: "Content of Post 1"
        },
        {
            title: "Post 1",
            date: "2023-10-01",
            excerpt: "Content of Post 1"
        }
    ];
    return(
        <div>
            <PostItem title={posts[0].title} date={posts[0].date} excerpt={posts[0].excerpt}/>
            <PostItem title={posts[1].title} date={posts[1].date} excerpt={posts[1].excerpt}/>
            <PostItem title={posts[2].title} date={posts[2].date} excerpt={posts[2].excerpt}/>
        </div>
    )
}
export default PostList