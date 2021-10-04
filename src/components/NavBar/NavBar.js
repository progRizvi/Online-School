import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              className="nav-link"
              activeStyle={{
                fontWeight: "bold",
                borderBottom: "3px solid rgb(144, 231, 109)",
                color: "rgb(144, 231, 109)",
              }}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              activeStyle={{
                fontWeight: "bold",
                borderBottom: "3px solid rgb(144, 231, 109)",
                color: "rgb(144, 231, 109)",
              }}
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              activeStyle={{
                fontWeight: "bold",
                borderBottom: "3px solid rgb(144, 231, 109)",
                color: "rgb(144, 231, 109)",
              }}
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              activeStyle={{
                fontWeight: "bold",
                borderBottom: "3px solid rgb(144, 231, 109)",
                color: "rgb(144, 231, 109)",
              }}
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
