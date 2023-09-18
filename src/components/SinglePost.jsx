
import { useGetSinglePostQuery } from "../store/apiSlice";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


function SinglePost() {

// const post = posts.find((p) => p_.id === postId)
const { postId } = useParams();
const { data: post, isLoading, isError } = useGetSinglePostQuery(postId);

console.log("postId", postId)
// console.log('data', data)
// console.log("loading", isLoading)

console.log("data", post)

if (isLoading) {
    return <div>Loading...</div>
}
if (isError) {
    return <div>Error loading posts.</div>
}
if (!post) {
    return <div>Post not found!</div>
}
    return (
            <div>
               <h2>{post.title}</h2>
               <p>{post.description}</p>
               <p>Price: {post.price}</p>
               <p>Will Deliver: {post.willDeliver ? "Yes" : "No"}</p>
               <Link to='/posts'>Go Back to All Posts</Link>
                </div>   
        );
    }

export default SinglePost;