// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    candy           : [{
        name: String
    }],
    block           : [{
        building     : String,
        chart        : String,
        variable     : String
    }]

});

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);