import './App.css';
import RouterComponent from './components/RouterComponent';
import SearchBar from './components/SearchBar';
import AllPosts from './components/AllPosts';
import { Link } from "react-router-dom";


function App() {


  return (
    <div>
      <nav>
      <RouterComponent />
      </nav>
      <div>
        <Link to="/posts" />
      </div>
      <div>
        <Link to="/posts/_id" />
      </div>
      
    </div>
  );
}

export default App;
