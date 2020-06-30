import React from "react";
import { Link } from "react-router-dom";
import '../../style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
<Link className="navbar-brand nav-item" to="/about">Annaruth McBride</Link>
      <Link className="nav-item nav-link" to="/projects">Projects</Link>
 


      {/* <Link className="navbar-brand" to="/">
        Home
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/projects"
              className={
                window.location.pathname === "/" || window.location.pathname === "/projects"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}

export default Navbar;
