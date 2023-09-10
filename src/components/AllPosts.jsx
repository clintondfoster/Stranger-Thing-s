import { useState } from 'react';
import { useGetAllPostsQuery } from "../store/apiSlice";
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';


function AllPosts() {

const { data , isLoading, isError } = useGetAllPostsQuery();
const posts = data?.posts;
// console.log(`data ${data}` )
console.log(`isLoading ${isLoading}`)
console.log(`isError ${isError}`)
// console.log(data)
console.log("posts", data)
const [filteredPosts, setFilteredPosts] = useState([]);


const handleSearch = (searchTerm) => {
    const filtered = posts?.filter((post) => 
        // console.log(posts);
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredPosts(filtered || []);
    console.log("filtered", filtered);
}


return (
<div>
    <nav>
        <div>
            <Link to="/posts">All Posts</Link>
        </div>
        <div>
            <Link to="/Profile">Profile</Link>
        </div>
    </nav>
    {data.posts.length > 0 && (
        <SearchBar onSearch={handleSearch} />
    )}
    <div>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error loading posts.</div>}
        {filteredPosts.length > 0 ? filteredPosts.map((post, idx) => (
            <div key={idx}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
            </div> 
        ))
        :
         posts.map((post, idx) => (
            <div key={idx}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                </div>
        ))}
        </div>
    </div>
    )
}

export default AllPosts;