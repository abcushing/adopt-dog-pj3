
export default function BreedRow({ dog ,setBreed,setCurrent}) {

  const adoptables = (currentBreed) =>{
      setBreed(currentBreed)
      setCurrent('adoptables')
  }
  return (
    <tr>
      <td>{dog.breed}</td>
      <td><img src={`${dog.imgLink}`}/></td>
      <td><button onClick={()=> adoptables(dog.breed)}>Adoptables</button></td>
      <td>
        <a onClick={() => setBreed(dog.breed)}>
          Breed Info
          </a>
      </td>
    </tr>
  );
}
