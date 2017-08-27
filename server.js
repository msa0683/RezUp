require('babel-register');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const fileUpload = require('express-fileupload');
// const methodOverride = require("method-override");
const expressSession = require('express-session')({
  secret: 'random strings here',
  resave: false,
  saveUninitialized: false,
});
const webpack = require('webpack');


const flash = require('connect-flash');
const session = require("express-session")

const User = require('./models/user');
const PostAdd = require('./models/postAdd');

// Routes
const authentication = require('./routes/api/authentication');

const app = express();

app.use(fileUpload());

app.post("/upload", function(res,req){
  if(!req.files){
    res.send("No file uploaded");
  }
  else{
    var file = req.files.file;
    var extension = path.extname(file.name);
    if(extension !=="png" && extension !== ".gif" && extension !==".jpg"){
      res.send("only images are allowed");
    }
    else{
      file.mv(__dirname+"/uploads/" + file.name, function(err){
        if(err){
          res.status(500).send(err);
        }
        else{
          res.send("File Uploaded");
        }
      });
    }
  }
})
//Coonect to Mongoose
mongoose.connect("mongodb://localhost:27017/rezUp", { useMongoClient: true });

//View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
// app.use(methodOverride('_method'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'any random string can go here',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/authentication', authentication);



// Configure Passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post('/insert', function(req, res, next){
  var item =({
    venueName : req.body.venueName,
    email: req.body.email,
    venueType: req.body.venueType,
    occupancy: req.body.occupancy,
    amenities: req.body.amenities,
    date: req.body.date,
    time: req.body.time,
    price: req.body.price
}).save(function(err, res){
   if(err){
    res.json(err);
   }
   else{
   res.send("inserted");
   }

})

 
});
//catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error("Not Found");
	err.status = 404;
	next(err);
});

// error handler
app.use((err, req, res, next) => {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
})

const PORT = process.env.PORT || 3001;

const db = mongoose.connection;


db.on('error', (err) => {
  console.log('Mongoose Error: ', err);
});

db.once('open', () => {
  console.log('Mongoose connection successful.');
});

app.listen(PORT, function(){
  console.log(("Express server listening on port " + PORT))
});
