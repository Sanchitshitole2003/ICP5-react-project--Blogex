import "./Navbar.css"
import { Link } from "react-router-dom";

import logo from "./logo.png"

function Navbar() {


  return (
    <nav className="navbar">
      <div className="brand_container">
        <img src={logo} alt="" className="icon" />
        <h1 className="navbar-title">BlogUs</h1>
      </div>
      <div className="links">
        <Link to="/" className="navbar_component"><div>Home</div></Link>
        <Link to="/blog" className="navbar_component"><div>Blog</div></Link>
        <Link to="/Popular" className="navbar_component"><div>Popular</div></Link>
        <Link to="/about" className="navbar_component"><div>About</div></Link>
        <Link to="/contacts" className="navbar_component"><div>Contact</div></Link>
      </div>

      <div>
        <Link to="/signup">
          <button className="nav-btn">
            SignUp
          </button>
        </Link>
      </div>

    </nav >
  );
}

export default Navbar;