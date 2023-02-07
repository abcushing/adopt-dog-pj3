const { Schema, model } = require("mongoose");

const dogSchema = new Schema({
  breed: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  imgLink: {
    type: String,
  },

});

const Dog = model("Dog", dogSchema);

module.exports = Dog;
