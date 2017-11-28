// app/models/building.js
// The object definition for building
var mongoose = require('mongoose');

// define the schema for our user model
var buildingSchema = mongoose.Schema({

    name            : String,
    type            : String,
    acquisuiteid    : Number

});

// create the model for users and expose it to our app
module.exports = mongoose.model('Building', buildingSchema);