// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var blockSchema = mongoose.Schema({

    building     : String,
    chart        : String,
    variable     : String

});

// create the model for users and expose it to our app
module.exports = mongoose.model('Block', blockSchema);