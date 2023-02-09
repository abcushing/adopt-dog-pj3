import SearchResults from "./SearchResults";
import BreedPage from "./BreedPage";
import Adoptables from "./Adoptables";
import AddDog from "./AddDog";
import Home from "../pages/Home";
import About from "../pages/about"
import Contact from "../pages/contact"
import Login from "../pages/Login";

export default function Body({ breed, setBreed, current, setCurrent }) {
  console.log(breed);
  if (current === "search") {
    if (breed === "") {
      return (
        <div>
          <SearchResults  setBreed= {setBreed} setCurrent = {setCurrent}/>
        </div>
      );
    } else {

      return <><BreedPage breed = {breed}/></>;
    }
  } else if (current === "adoptables") {

    return <Adoptables breed = {breed}/>;
  }else if (current ==="newDog"){
    return <AddDog/>
  }else if(current ==="home"){
    return <Home/>
  
  }else if(current ==="about"){
    return <About/>
  
  }else if(current ==="contact"){
    return <Contact/>
  }else if(current ==="login"){
    return <Login/>
  }
}
