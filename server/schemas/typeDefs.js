const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Breed {
    _id: ID!
    breed: String!
    category: String!
    size: String!
    exercise: String!
    homeSize: String!
    grooming: String!
    coat: String!
    sheds:Boolean
    lifeSpan: Int
    
  }

  type Dog {
    breed: String!
    name: String!
    age: Int
    imgLink: String
    price: Float
  }

  type Query {
    breed: [Breed]
    dogs(_id: String): [Dog]
  }


`;

module.exports = typeDefs;
