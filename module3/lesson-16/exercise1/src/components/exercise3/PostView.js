import Card from "react-bootstrap/Card";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

export default function PostView() {
    const [post, setPost] = useState([])
    const {id} = useParams()
    const fetchPost = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/posts/${id}`);
            setPost(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchPost()
    }, [id]);
    return(
        <div>
            <h1>Post View</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                        {post.content}
                    </Card.Text>
                    <Card.Text>
                        {post.author}
                    </Card.Text>
                    <Card.Text>
                        {post.createdAt}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}