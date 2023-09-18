import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <div>
                <div>
                    <Link to='/'>All Posts</Link>
                </div>
                <div>
                    <Link to='/profile'>Profile</Link>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;