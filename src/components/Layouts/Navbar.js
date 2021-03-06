import React from "react";
import { Link } from "react-router-dom";
import '../../style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
    <Link className="navbar-brand nav-item" to="/">Annaruth McBride</Link>
      <Link className="navbar-brand nav-item" to="/projects"> Projects </Link>
  

    </nav>
  );
}

export default Navbar;
