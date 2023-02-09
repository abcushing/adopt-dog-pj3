const { Breed, Dog ,User} = require("../models");
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
  Query: {
    dogs: async () => {
      return Dog.find({});
    },
    dogsByBreed: async (parent, args) => {
      return Dog.find(args);
    },
    facetSearch: async (parent, args) => {
      return Breed.find(args);
    },
    breed: async (parent, args) => {
      return Breed.findOne(args);
    },
  },
  Mutation: {
    // Delete a dog
    deleteDog: async (parent, args) => {
      const dog = await Dog.findByIdAndRemove(args);
      return dog;
    },
    addDog: async (parent, args) => {
      const dog = await Dog.create(args);
      return dog;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
