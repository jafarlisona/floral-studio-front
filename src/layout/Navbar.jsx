import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <Link className="logo" to="/">Floral Studio</Link>
        <div className="pages">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/add-page">Add</NavLink>
          <NavLink to="">About Us</NavLink>
          <NavLink to="">Portfolio</NavLink>
          <NavLink to="">Pricing</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
