import { useMutation } from "@apollo/client";
import { DELETE_DOG } from "../utils/mutations";

export default function DogRow({ dog }) {
  const [deleteDog] = useMutation(DELETE_DOG, {
    variables: { id: dog.id },
  });
  const handleDelete = ()=>{

    deleteDog()
    window.alert(`Thank You for adopting ${dog.name}!!!`)
  }

  return (
    <tr>
      <td><img src={`${dog.imgLink}`}/></td>
      <td>{dog.name}</td>
      <td>{dog.breed}</td>
      <td>{dog.age}</td>
      <td>
        <button onClick={() => handleDelete()}>Adopt</button>
      </td>
    </tr>
  );
}
