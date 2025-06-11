import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Layout from "../../components/Layout";

export default function PostDetail() {
    const router = useRouter()
    const {id} = router.query;
    const [post, setPost] = useState(null)
    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]")
        const foundPost = savedPosts.find(post => post.id.toString()=== id )
        setPost(foundPost)
    }, [id]);
    if (!post) {
        return <Layout><p>Loading post</p></Layout>
    }
    return(
        <Layout>
            <h1>
                {post.title}
            </h1>
            <p>
                {post.content}
            </p>
            <button onClick={()=> router.back()}>
                Back
            </button>
        </Layout>
    )
}