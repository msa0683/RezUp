const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../models/user.js');
var PostAdd = require('../../models/postAdd');
const router = express.Router();

// configure mongoose promises
mongoose.Promise = global.Promise;

router.get('/authenticated', (req, res) => {
  res.send(JSON.stringify({isAuthenticated: req.isAuthenticated(), userId: req.user ? req.user._id : ""}))
})

// POST to /register
router.post('/register', (req, res) => {
// Create a user object to save, using values from incoming JSON
  const newUser = new User(req.body);

  //Save user passport "register" method 
  User.register(newUser, req.body.password, (err, user) => {
    //If there's a problem, send back a JSON object with the error
    if(err) {
      return res.send(JSON.stringify({success: false, error: err }));
    }
    //else return JSON object w/ the new user info
    passport.authenticate('local')(req, res, function () {
      res.send(JSON.stringify({success: true, userId: user._id}))
    });
  });
});

// POST to /login
router.post('/login', (req, res) => {
  //look up the user by their username
  User.findOne({ username: req.body.username }, function (err, user) {
    passport.authenticate('local')(req, res, () => {
      // If logged in, we should have user info to send back
      if (req.user) {
        return res.send(JSON.stringify({success: true}));
      }

    // Otherwise return an error
      return res.send(JSON.stringify({success: false}));
    });
  });
  // if they exist, they'll have a username, so add that to our body
  
});

// GET to /logout
router.get('/logout', (req, res) => {
  req.logout();
  return res.send(JSON.stringify(req.user));
});

//Post new property to Mongo DB
router.post('/insert', function(req, res){
  var propObj = JSON.stringify(req.body);
  var newProperty = new PostAdd(JSON.parse(propObj));
  newProperty.save(function(error, doc) {
      console.log('Doc id  --',doc);
    if(error){
      console.log('Mongo Error  --',error);
      res.send(error);
    }
    else{
      res.send(doc);
    }
  });
});

module.exports = router;