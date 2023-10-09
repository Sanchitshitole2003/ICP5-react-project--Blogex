import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
        <h1 className="navbar-title">React</h1>
      <Link to="/" className="navbar_component">Home</Link>
      <Link to="/about" className="navbar_component">About</Link>
      <Link to="/contact" className="navbar_component">Contact</Link>
    </nav>
  );
}

export default Navbar;