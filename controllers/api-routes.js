var db = require('../models');
var express = require('express');
var router = express.Router();
var bcrypt = require("bcrypt");
var passport = require("passport");

var saltRounds = 10;

// router.get("/", function(req, res) {
// 	if (req.isAuthenticated()) {
// 		res.redirect("/user/" + req.user.username + "/home");
// 	} else {
// 		res.render("login");
// 	}
// 	// res.render("index");
// });

// router.get("/user/:username/home", function(req, res) {
// 	res.render("index");
// });

router.get("/login", function(req, res) {
	if (req.isAuthenticated()) {
		res.redirect("/user/" + req.user.username + "/home");
	} 
	else {
		res.render("LoginPage.js");
	}
});

router.post("/login", 
	passport.authenticate('local', { 
		successRedirect: '/',
        failureRedirect: '/LoginPage.js',
        // failureFlash: true 
    })
);

router.get("/signup", function(req, res) {
	 console.log(db.users)

	if (req.isAuthenticated()) {
		res.redirect("/")
	}
	else {
		res.render("signup")
	}
	
});

router.post("/signup", function(req, res) {
	var user = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
  		username: req.body.username,
  		email: req.body.email,
  		password:  bcrypt.hashSync(req.body.password, saltRounds) 
  	};
  	console.log(db.users)
	db.users.create(user).then(function (err) {
		res.redirect("/");
	});
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


router.get('/auth/facebook/return', passport.authenticate('facebook', {
	successRedirect:"/",
	failureRedirect: "/login"
}));

router.get("/auth/facebook", passport.authenticate('facebook'))

module.exports = router;
