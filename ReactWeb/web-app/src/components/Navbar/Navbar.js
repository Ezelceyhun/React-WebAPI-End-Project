import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <a href="/" className="a">
        ANASAYFA
      </a>
      <label>Coding Archive</label>
      <a href="/CreateUser" className="a1">
        Üye Ol
      </a>
    </nav>
  );
};
export default Navbar;
