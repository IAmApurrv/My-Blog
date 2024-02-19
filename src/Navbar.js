import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blog App</h1>
      <div className="links">
        <Link to="/" style={{ color: 'white', backgroundColor: '#00afb9', borderRadius: '8px' }}>Home</Link>
        <Link to="/Create" style={{ color: 'white', backgroundColor: '#00afb9', borderRadius: '8px' }}>New Blog</Link>

        {/* <a href="/">Home</a>
        <a href="/Create" style={{ color: 'white', backgroundColor: '#f1356d', borderRadius: '8px' }}>New Blog</a> */}
      </div>
    </nav>
  );
}

export default Navbar;