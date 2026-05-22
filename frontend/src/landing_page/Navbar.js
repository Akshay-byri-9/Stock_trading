import React from "react";
import { Link, NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom py-3 sticky-top"
      style={{ backgroundColor: "#FFF", zIndex:"1000"}}
    >
      <div className="container-fluid px-5">
        <Link className="navbar-brand" to="/">
          <img
            src="images/logo.svg"
            style={{ height: "30px" }}
            alt="Logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav fs-5 gap-4">
            <li className="nav-item"><NavLink className="nav-link" to="/signup">Signup</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/products">Product</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/pricing">Pricing</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/support">Support</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;