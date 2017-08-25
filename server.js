const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const methodOverride = require("method-override");
const flash = require('connect-flash');



// Routes
const index = require('./routes/index');
const api = require('./routes/api/index.js');
const users = require('./routes/api/users');


const app = express();

//Coonect to Mongoose
mongoose.connect("mongodb://localhost:27017/rezUp", { useMongoClient: true });

//View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//uncomment after placing favicon in public 
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'));
app.use(logger('dev'));
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

app.use('/', index);
app.use('/api', api);
app.use('/api/users', users);


// Configure Passport
const User = require('./models/user')
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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








// const PORT = process.env.PORT || 3001;

// app.use(methodOverride('_method'))

// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// app.use(bodyParser.text());

//Passport Middleware
// =============================================================

// var session = require("express-session")
// 
// require("./passport/passport")


// const db = mongoose.connection;


// db.on('error', (err) => {
//   console.log('Mongoose Error: ', err);
// });

// db.once('open', () => {
//   console.log('Mongoose connection successful.');
// });

// app.get('/', (req, res) => {
// 	res.send('jello')
//   res.sendFile('./public/index.html');
// }); 


// app.listen(PORT, function(){
//   console.log(("Express server listening on port " + PORT))
// });
