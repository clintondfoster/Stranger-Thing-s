import './App.css';
import RouterComponent from './components/RouterComponent';
import SearchBar from './components/SearchBar';
import AllPosts from './components/AllPosts';


function App() {


  return (
    <div>
      <nav>
        <SearchBar />
      </nav>
      <AllPosts />
      <RouterComponent />
    </div>
  );
}

export default App;
