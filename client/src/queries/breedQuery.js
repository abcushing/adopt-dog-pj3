import { gql } from "@apollo/client";


export const GET_BREEDS = gql`
  query getBreeds(
    $exercise: [String]
    $category: [String]
    $grooming: [String]
    $homeSize: [String]
  ) {
    facetSearch(
      exercise: $exercise
      category: $category
      grooming: $grooming
      homeSize: $homeSize
    ) {
      id
      breed
      imgLink
    }
  }
`;
export const  GET_BREED= gql`
    query getBreed($breed:String) {
      breed(breed:$breed) {
        id
        imgLink
        breed
        category
        size
        exercise
        homeSize
        grooming
        coat
        sheds
        lifeSpan
      }
    }
  `;
