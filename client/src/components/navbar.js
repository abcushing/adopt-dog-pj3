import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({setCurrent,setBreed}) => {
  const search = () => {
    setCurrent('search')
    setBreed('')
  }
  return (
    <div>
      <Link onClick={()=>setCurrent("home")}>Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
      <Link  onClick={()=>setCurrent("about")}>About &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
      <Link  onClick={()=>setCurrent("contact")}>Contact &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
      <Link  onClick={()=>search() }>Find a Friend &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
      <Link  onClick={()=>setCurrent("newDog")}>Add a new Dog &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
      <a href="https://www.ddfl.org/adoption" target="_blank" rel="noreferrer">
        Adopt Now &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </a>
      <a href="https://www.peta.org/" target="_blank" rel="noreferrer">
        Resources
      </a>
      <button onClick={()=>setCurrent("login")}>Admin Login</button>
      <br></br>
      <br></br>
    </div>
  );
};

export default NavBar;
