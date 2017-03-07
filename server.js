// Include Server Dependencies
// -------------------------------------------------
var express = require("express");
var bodyParser = require("body-parser");
// var cookieParser = require("cookie-parser");
// var flash = require("connect-flash");
// var LocalStrategy = require("passport-local").Strategy;
var mongoose = require("mongoose");
// var morgan = require("morgan");
// var passport = require("passport");
// var path = require("path");
// var session = require("express-session");

// Create Instance of Express
// -------------------------------------------------
var app = express();
var PORT = process.env.PORT || 3000;

// Set Up Express App to Handle Data Parsing
// -------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static Directory
// -------------------------------------------------
app.use(express.static(path.join(__dirname,"public")));

// MongoDB Configuration
// -------------------------------------------------
var mongoURL = process.env.MONGO || "mongodb://localhost/codespiration"
mongoose.connect(mongoURL);
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Passport Initialization
// -------------------------------------------------
// Francis' part


// Middleware for Routes
// -------------------------------------------------
app.use("/", controllers);


// Listener
// -------------------------------------------------
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
