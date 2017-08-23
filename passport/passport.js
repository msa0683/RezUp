var User = require('mongoose').model('User');
var passport = require('passport')
var db = require("../models/Users")
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require("passport-facebook").Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.user.findOne({where: {username:username}}).then(function (user, err) {
      if (err) { return done(err) }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.use(new FacebookStrategy ({
  clientID: "750249591766521",
  clientSecret: "a8f565dffb327f944dfb8b5eeb965dea",
  callbackURL: "http://localhost:3000/auth/facebook/return" 
}, function(accessToken, refreshToken, profile, cb) {
      db.user.findOne({where: {oauth_id: profile.id}}).then(function(user, err) {
        if(err) throw err
          if(user) {
            return cb(null, user) 
          } else {
            var user = {
              username: profile.displayName,
              oauth_id: profile.id
            }
            db.user.create(user).then(function(user, err) {
              cb(null, user);
            })

          }
      })

}));


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.user.findById(id).then(function(user, err) {
    done(err, user);
  });
});

