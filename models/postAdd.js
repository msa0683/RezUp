// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostAdd = new Schema({
  venueName: {
    type: String,
    trim: true,
    required: "venueName is Required"
  },
  // email: a string that must match an email format and must be unique in the collection
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  // userCreated: the current date
  venueType: {
    type: String,
    
  },
  occupancy: {
    type: Number,
    
  },
    amenities: [{
    type: String
}],
    
  date: {
    type: Date,
    
  },
  time: [{
    type: Number
}],
  price: {
    type: Number,
    
  }
 
  
});

// Create the Model
var PostAdd = mongoose.model('postAdd', PostAdd);

// Export it for use elsewhere
module.exports = PostAdd;