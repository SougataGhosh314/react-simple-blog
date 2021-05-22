import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>the Ghosh blog</h1>
            <div className="links">
                <Link to="/">Home </Link>
                <Link to="/create_blog">New blog </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;