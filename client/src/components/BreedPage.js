import { useQuery } from "@apollo/client"
import { GET_BREED } from "../utils/queries"

export default function BreedPage(breed) {
  const{loading,error,data} = useQuery(GET_BREED,{variables:breed})
  console.log(breed);
  return (
    < >
    {!loading && !error && (
      <div id="breedContainer">
      {console.log(data)}
        <img src={data.breed.imgLink}/>
        <span>
          <h2>Breed Name:{data.breed.breed}</h2>
          </span>

        <span>
          <h2>Category: {data.breed.category} </h2>
          </span>
        <span>
          <h2>Size: {data.breed.size} </h2>
          </span>
        <span>
          <h2>Activity Level: {data.breed.exercise} </h2>
          </span>
        <span>
          <h2>Home Size: {data.breed.homeSize} </h2>
          </span>
        <span>
          <h2>Grooming: {data.breed.grooming} </h2>
          </span>
        <span>
          <h2>Coat: {data.breed.coat} </h2>
          </span>
        <span>
          <h2>lifeSpan: {data.breed.lifeSpan} </h2>
          </span>

        </div>
    )}
    </>
  )
}
