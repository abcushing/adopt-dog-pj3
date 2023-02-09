const connection = require("../../config/connection");
const { Dog, Breed,User } = require("../../models");
const { getRandomName, getRandomAge } = require("./data");
const users = require('./user.json');

// Start the seeding runtime timer
// setTimeout(() => {
console.time("seeding");
// Creates a connection to mongodb
connection.once("open", async () => {
  // Delete the entries in the collection
  console.log("seeding...");
  await Dog.deleteMany({});
  await User.deleteMany({})
  await User.create(users)
  // Empty arrays for randomly generated dogs and comments
  const dogs = [];

  // Makes comments array
  for (var i = 0; i < 1000; i++) {
    var id = Math.floor(Math.random() * 222) + 1;
    // console.log(await Breed.findById(id));
    dogs.push({
      breed: (await Breed.findOne({ id: id })).breed,
      name: getRandomName(),
      age: getRandomAge(),
      imgLink: (await Breed.findOne({ id: id })).imgLink,
    });
  }

  // Wait for the dogs array to be inserted into the database
  await Dog.insertMany(dogs);

  // Log out a pretty table for comments and dogs
  console.table(dogs);
  console.log("seeding complete!");
  console.timeEnd("seeding complete 🌱");
  process.exit(0);
});
// }, 1000);
