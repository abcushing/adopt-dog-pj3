import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <a href="https://www.ddfl.org/adoption" target="_blank" rel="noreferrer">Adopt Now</a>
        <a href="https://www.peta.org/" target="_blank" rel="noreferrer">Resources</a>
    </div>
  );
};

export default NavBar;