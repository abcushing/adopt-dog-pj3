import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = ({ setCurrent, setBreed }) => {
  const search = () => {
    setCurrent("search");
    setBreed("");
  };
  return (
    <div>
      <Link to="/" onClick={() => setCurrent("home")}>
        Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
      <Link to="/About" onClick={() => setCurrent("about")}>
        About &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
      <Link to="/Login" onClick={() => setCurrent("Login")}>
        Login &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
      <Link to="/Signup" onClick={() => setCurrent("Signup")}>
        Sign up &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
      <Link to="/Contact" onClick={() => setCurrent("contact")}>
        Contact &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
      <Link to="/Search" onClick={() => search()}>
        Find a Friend &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
      <Link to="/Add" onClick={() => setCurrent("newDog")}>
        Add a new Dog &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
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
