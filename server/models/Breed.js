const { Schema, model } = require('mongoose');

const breedSchema = new Schema({
    id:{
        type:Number
    },
    breed:{
        type:String
    },
    category:{
        type:String
    },
    size:{
        type:String,
    },
    exercise:{
        type:String,
    },
    homeSize:{
        type:String,
    },
    grooming:{
        type:String,
    },
    coat:{
        type:String,
    },

    lifeSpan:{
        type:Number,
    },
    imgLink:{
        type:String
    }
});

const Breed = model('breed', breedSchema);

module.exports = Breed;
