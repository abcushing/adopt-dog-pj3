import { gql } from "@apollo/client";



const DELETE_DOG = gql`
mutation DeleteDog($id: ID!) {
  deleteDog(_id: $id) {
    _id
    breed
    name
    age
  }
}
`
const ADD_DOG = gql`
mutation Mutation($age: Int, $breed: String, $name: String) {
  addDog(age: $age, breed: $breed, name: $name) {
    _id
    breed
    name
    age
  }
}
`
const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;
export {DELETE_DOG,ADD_DOG,LOGIN_USER}
