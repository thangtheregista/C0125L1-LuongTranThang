import Link from "next/link";

export default function PostList({posts}) {
    if (posts.length===0) {
        return(
            <p>
                No posts yet
            </p>
        )
    }
    return(
        <div>
            <h3>
                Post list
            </h3>
            {
                posts.map((post) => (
                    <div key={post.id}>
                        <h4>
                            <Link href={`/posts/${post.id}`}>{post.title}</Link>
                        </h4>
                        <p>{post.content}</p>
                    </div>

                ))
            }
        </div>
    )
}