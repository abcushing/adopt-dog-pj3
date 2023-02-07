import {gql} from '@apollo/client'

const DELETE_DOG = gql`
mutation($id:ID!) {
    deleteDog(id: $id){
        id
        breed
        name
        age
    }
}
`
const ADD_DOG = gql`
mutation($breed:String, $name: String, $age: Int) {
    addDog(breed: $breed name :$name age: $age){
        id
        breed
        name
        age
    }
}
`
export {DELETE_DOG,ADD_DOG}