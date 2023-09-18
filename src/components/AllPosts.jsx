import { useState, useEffect } from 'react';
import { useGetAllPostsQuery } from "../store/apiSlice";
import SearchBar from "./SearchBar";
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';


function AllPosts() {

const { data: postsData, isLoading, isError } = useGetAllPostsQuery();
const [filteredPosts, setFilteredPosts] = useState([]);
const [errorMessage, setErrorMessage] = useState('');
const [searchTerm, setSearchTerm] = useState('');

// const posts = data?.posts;
// console.log(`data ${data}` )
console.log(`isLoading ${isLoading}`)
console.log(`isError ${isError}`)
// console.log(data)
console.log("posts", postsData)

// const navigate = useNavigate();

useEffect(() => {
    if (isError) {
        setErrorMessage("Error loading posts.")
    }
}, [isError]);

useEffect(() => {
    if (postsData) {
        
        setFilteredPosts(postsData.data.posts);
    } 
}, [postsData]);

useEffect(() => {
    if (searchTerm.trim() === '') {
        setFilteredPosts(postsData ? postsData.data.posts : []);
    } else {
        const filtered = (postsData ? postsData.data.posts : []).filter((post) => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPosts(filtered);
    }
}, [searchTerm, postsData]);


const handleSearch = (term) => {
    setSearchTerm(term);
}


return (
<div className="container">
    <NavBar />
    <div>
        <h2 className="page-header">All Posts</h2>
        <SearchBar onSearch={handleSearch}/>
        {isLoading && <div className="loading">Loading...</div>}
        {isError && <div className="error">{errorMessage}</div>}
        {filteredPosts.length > 0 ? (
            <div>
            {filteredPosts.map((post, idx) => (
                <div className="post-item" key={idx}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <Link className="back-link" to={`/posts/${post._id}`}>View</Link>
                    </div>
                    ))}
                </div>
        ) : ( 
            <div>No posts found.</div>
        )}
    </div>
</div>
)
}

export default AllPosts;