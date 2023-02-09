import { useState } from "react";
import { ADD_DOG } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from '../utils/auth';

export default function AddDog() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  var [age, setAge] = useState("");
  const [addDog] = useMutation(ADD_DOG, {
    variables: { breed: breed, name: name, age: age },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Auth.loggedIn()){
      return alert("Admins Only")
    }
    if (name === "" || breed === "" || age ===0) {
      return alert("Please fill in all fields");
    }

    addDog(breed, name, age);

    setName("");
    setBreed("");
    setAge("");
  };

  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <h1>Add Dog</h1>
        <div>
          <label className="formLabel">Breed:</label>
          <input
            type="text"
            placeholder="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </div>
        <div>
          <label className="formLabel">Name:</label>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="formLabel">Age :</label>

          <input
            type="text"
            placeholder="age"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
        </div>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}
