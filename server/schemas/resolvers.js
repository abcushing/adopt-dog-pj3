const { Breed, Dog } = require('../../server/models');

const resolvers = {
  Query: {
    breed: async () => {
      return Breed.find({});
    },
    dogs: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Dog.find(params);
    },
  },

    // createVote: async (parent, { _id, breedNum }) => {
    //   const vote = await Dog.findOneAndUpdate(
    //     { _id },
    //     { $inc: { [`breed${breedNum}_votes`]: 1 } },
    //     { new: true }
    //   );
    //   return vote;
    // },

};

module.exports = resolvers;
