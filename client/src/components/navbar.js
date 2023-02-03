import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
      <Link to="/About">About &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
      <Link to="/Contact">Contact &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
      <a href="https://www.ddfl.org/adoption" target="_blank" rel="noreferrer">
        Adopt Now &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </a>
      <a href="https://www.peta.org/" target="_blank" rel="noreferrer">
        Resources
      </a>
      <br></br>
      <br></br>
    </div>
  );
};

export default NavBar;
