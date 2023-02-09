import { useQuery } from "@apollo/client";
import { GET_DOGS } from "../utils/queries";
import DogRow from "./DogRow";

export default function Adoptables(breed) {
  const { loading, error, data } = useQuery(GET_DOGS, {
    variables:  {breed:breed.breed} 
  });
  if(error){console.log(error);}
  if(loading){console.log(loading);}
  return (
    <>  
      {!loading && !error && (
        <table>
          <thead>
            <tr>
                <img/>
              <th>Breed</th>
              <th>Name</th>
              <th>Age</th>
              <th>Adopt!!!!</th>
              
            </tr>
          </thead>
          <tbody>
          {/* dynamically create rows from DogRow based on last query */}
          {data.dogsByBreed.map((dog) => (
            <DogRow
              key={dog.id}
              dog={dog}
            />
          ))}
          </tbody>
        </table>
      )}
    </>
  );
}
