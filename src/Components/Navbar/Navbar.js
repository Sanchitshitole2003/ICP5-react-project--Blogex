import "./Navbar.css"
import { Link } from "react-router-dom";
import Icon from "./b.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="brand_container">s
          <img src={Icon} alt="" className="icon" />
          <h1 className="navbar-title">Blogex</h1>
        </div>
        <div>
          <Link to="/" className="navbar_component">Home</Link>
          <Link to="/blog" className="navbar_component">Blog</Link>
          <Link to="/about" className="navbar_component">About</Link>
          <Link to="/contact" className="navbar_component">Contact</Link>
          <Link to="/template" className="navbar_component">Template</Link>
          <Link to="/Signup" className="navbar_component sign">SignUp</Link>
        </div>
        </div>
    </nav>
  );
}

export default Navbar;