import { gql } from "@apollo/client";

export const GET_DOGS = gql`
query getDogs(
  $breed: String
) {
  dogsByBreed(
    breed: $breed
  ) {
    id
    breed
    name
    age
    imgLink

  }
}
`;
 export const GET_ALL_DOGS = gql`
 query allDogs{
  dogs{
    id
    breed
    name
    age
  }
 }
 `