// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
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
   password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
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
  // lastUpdated: a date type entry
  lastUpdated: { type: Date },
  // fullName: a string type entry
  fullName: String
 });


  
});

// Create the Model
var Users = mongoose.model('Users', UserSchema);

// Export it for use elsewhere
module.exports = Users;