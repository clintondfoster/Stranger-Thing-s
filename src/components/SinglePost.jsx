
import { useGetSinglePostQuery } from "../store/apiSlice";
import { useParams } from 'react-router-dom';


function SinglePost() {

const { postId } = useParams();
const { data: post, isLoading, isError } = useGetSinglePostQuery(postId);

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
                <h1>{post.title}</h1>
                <p>{post.description}</p>
            </div>     
            );
            }

export default SinglePost;