// Include the Mongoose Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');



const User = new Schema({
  username: {
    type: String,
    trim: true,
    required: "FirstName is Required"
  },
  password: {
    type: String,
    select: false,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  firstName: {
    type: String,
    trim: true,
    required: "FirstName is Required"
  },
  lastName: {
  	type: String,
    trim: true,
    required: "LastName is Required"
  },
  // email: a string that must match an email format and must be unique in the collection
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  // userCreated: the current date
  userCreated: {
    type: Date,
    default: Date.now
  },
  
});

User.plugin(passportLocalMongoose);
// Export it for use elsewhere
module.exports = mongoose.model('User', User);;