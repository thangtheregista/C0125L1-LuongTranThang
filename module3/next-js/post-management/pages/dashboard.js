import {use, useEffect, useState} from "react";
import {useRouter} from "next/router";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import {displayContent} from "next/dist/client/dev/fouc";
import AddPostForm from "../components/AddPostForm";

export default function Dashboard() {
    const [username, setUsername] = useState("");
    const route = useRouter()
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const user = localStorage.getItem("username")
        if (!user) {
            route.push("/")
        } else {
            setUsername(user)
        }
    },[])
    const addPost = (newTitle, newContent) => {
        const newPost = {
            id: Date.now(),
            title: newTitle,
            content: newContent
        }
        setPosts([...posts, newPost])
        localStorage.setItem("posts", JSON.stringify([newPost, ...posts]))
    }
    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]")
        setPosts(savedPosts)
    }, []);
    return(
        <div>
            <Layout>
                <PostList posts={posts}/>
                <AddPostForm addPost={addPost}/>
            </Layout>
        </div>
    )
}