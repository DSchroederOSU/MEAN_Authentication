// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var chartSchema = mongoose.Schema({

    name        : String,
    type        : String

});

// create the model for users and expose it to our app
module.exports = mongoose.model('Chart', chartSchema);