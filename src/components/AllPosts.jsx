import { useState } from 'react';
import { useGetAllPostsQuery } from "../store/apiSlice";
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';


function AllPosts() {

const { data, isLoading, isError } = useGetAllPostsQuery();
const posts = data?.posts || [];
const [filteredPosts, setFilteredPosts] = useState([]);
console.log("posts", posts)

const handleSearch = (searchTerm) => {
    const filtered = posts?.filter((post) => 
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
    {posts.length > 0 && (
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
        : posts.map((post, idx) => (
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