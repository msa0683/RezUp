// for npm pacakges you still have to use "var and require" because "import and from" will not work
var dbs = require('../models');
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var User = require("./models/Users");

const app = express();
const PORT = process.env.PORT || 3001;

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('public'));

//Passport Middleware
// =============================================================
var passport = require("passport");
var cookieParser = require("cookie-parser");
var session = require("express-session")
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());
require("./passport/passport")

mongoose.connect("mongodb://localhost:27017/rezUp");

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Mongoose Error: ', err);
});

db.once('open', () => {
  console.log('Mongoose connection successful.');
});

app.get('/', (req, res) => {
	console.log(dbs.user)
  res.sendFile('./public/index.html');
}); 



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
