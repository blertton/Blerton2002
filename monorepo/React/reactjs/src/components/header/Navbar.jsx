import React from "react";
import './navbar.css';

const NavBar = ({ title, page, pagenumbers }) => (
    <nav className="nav">
      <h1 className="title">{title}</h1>
      <p className="counter">Step {page}/{pagenumbers}</p>
    </nav>
  );

export default NavBar;
