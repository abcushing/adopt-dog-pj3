import { useQuery } from "@apollo/client";
import { GET_DOGS } from "../queries/dogQuery";
import SearchResults from "./SearchResults";
import BreedPage from "./BreedPage";
import Adoptables from "./Adoptables";
import AddDog from "./AddDog";
import Home from "../pages/Home";
import About from "../pages/About"
import Contact from "../pages/Contact"

export default function Body({ breed, setBreed, current, setCurrent }) {
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
  }
}
