import { gql } from "@apollo/client";

export const GET_DOGS = gql`
query DogsByBreed($breed: String) {
  dogsByBreed(breed: $breed) {
    _id
    breed
    name
    age
    imgLink
  }
}
`;
export const GET_ALL_DOGS = gql`
  query Dogs {
    dogs {
      _id
      breed
      name
      age
    }
  }
`;

export const GET_BREEDS = gql`
  query FacetSearch(
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
      _id
      breed
      category
      size
      exercise
      homeSize
      grooming
      coat
      lifeSpan
      imgLink
    }
  }
`;
export const GET_BREED = gql`
  query GetBreed($breed: String) {
    breed(breed: $breed) {
      _id
      breed
      category
      size
      exercise
      homeSize
      grooming
      coat
      lifeSpan
      imgLink
    }
  }
`;
