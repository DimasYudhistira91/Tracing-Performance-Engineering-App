import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/home">
        Sistem Tracking Performa Engineer
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/customers">
            Register
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="/movies">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
