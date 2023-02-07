const Dog = require("../models/Dog");
const Breed = require("../models/Breed");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

// Dog Type
const DogType = new GraphQLObjectType({
  name: "Dog",
  fields: () => ({
    id: { type: GraphQLID },
    breed: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    imgLink: { type: GraphQLString },
  }),
});

// Breed Type
const BreedType = new GraphQLObjectType({
  name: "Breed",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    breed: {
      type: GraphQLString,
    },
    category: {
      type: GraphQLString,
    },
    size: {
      type: GraphQLString,
    },
    exercise: {
      type: GraphQLString,
    },
    homeSize: {
      type: GraphQLString,
    },
    grooming: {
      type: GraphQLString,
    },
    coat: {
      type: GraphQLString,
    },
    sheds: {
      type: GraphQLString,
    },
    lifeSpan: {
      type: GraphQLString,
    },
    imgLink: {
      type: GraphQLString,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // get all dogs
    dogs: {
      type: new GraphQLList(DogType),
      resolve(parent, args) {
        return Dog.find();
      },
    },
    // dog by Id for individual dog page
    dog: {
      type: DogType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Dog.findById(args.id);
      },
    },
    breeds: {
      type: new GraphQLList(BreedType),
      resolve(parent, args) {
        return Breed.find();
      },
    },
    // get breed info for breed info page
    breed: {
      type: BreedType,
      args: { breed: { type: GraphQLString } },
      resolve(parent, args) {
        return Breed.findOne({ breed: args.breed });
      },
    },

    // get all dogs of specific breed
    dogsByBreed: {
      type: new GraphQLList(DogType),
      args: { breed: { type: GraphQLString } },
      resolve(parent, args) {
        return Dog.find({ breed: args.breed });
      },
    },
    // dynamic facet search
    facetSearch: {
      type: new GraphQLList(BreedType),
      args: {
        exercise: { type: new GraphQLList(GraphQLString) },
        category: { type: new GraphQLList(GraphQLString) },
        grooming: { type: new GraphQLList(GraphQLString) },
        homeSize: { type: new GraphQLList(GraphQLString) },
      },
      resolve(parent, args) {
        return Breed.find(args);
      },
    },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Add a dog
    addDog: {
      type: DogType,
      args: {
        breed: { type: GraphQLString },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve(parent, args) {
        console.log(args);
        const dog = new Dog({
          breed: args.breed,
          name: args.name,
          age: args.age,
        });

        return dog.save();
      },
    },
    // Delete a dog
    deleteDog: {
      type: DogType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Dog.findByIdAndRemove(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
