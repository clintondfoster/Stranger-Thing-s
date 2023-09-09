import './App.css';
import { Link } from "react-router-dom";
import RouterComponent from './components/RouterComponent';
import SearchBar from './components/SearchBar';
import { useState } from "react";
import AllPosts from './components/AllPosts';



function App() {

const [filteredPosts, setFilteredPosts] = useState([]);

const handleSearch = (searchTerm) => {

}

  return (
    <div>
      <nav>
        <div>
          <Link to="/posts">All Posts</Link>
        </div>
        <div>
          <Link to="/">Profile</Link>
        </div>
        <SearchBar onSearch={handleSearch} />
      </nav>
      <AllPosts />
      <RouterComponent />
    </div>
  );
}

export default App;
