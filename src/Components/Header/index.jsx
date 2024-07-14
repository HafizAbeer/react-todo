import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
          <Link to={"/home"} className="navbar-brand">
            Hafiz Abeer
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link " aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/users"} className="nav-link">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/AddUsers"} className="nav-link">
                  Add Users
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Auth
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={"/login"} className="dropdown-item">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to={"/register"} className="dropdown-item">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link to={"/forgotpassword"} className="dropdown-item">
                      Forgot Password
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
