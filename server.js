// for npm pacakges you still have to use "var and require" because "import and from" will not work

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var User = require("./models/User.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

mongoose.connect("mongodb://localhost:27017/Rez-Up");

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Mongoose Error: ', err);
});

db.once('open', () => {
  console.log('Mongoose connection successful.');
});

app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
}); 



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
