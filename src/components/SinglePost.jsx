
import { useGetAllPostsQuery } from "../store/apiSlice";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


function SinglePost() {

// const post = posts.find((p) => p_.id === postId)
const { postId } = useParams();
const { data: postsData, isLoading, isError } = useGetAllPostsQuery();

// console.log("postId", postId)
// console.log('data', data)
// console.log("loading", isLoading)

console.log(postsData);


// setState to object filter
// useEfffect isLoading when changes data === "undefined" : singlePost comonenet to state

const post = isLoading ? postsData.data.posts.filter((i)=> i.id === postId) : [];

console.log("data", post)

if (isLoading) {
    return <div>Loading...</div>
} else if (isError) {
    return <div>Error loading posts.</div>
} else if (!post) {
    return <div>Post not found!</div>
} else {
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
}

export default SinglePost;