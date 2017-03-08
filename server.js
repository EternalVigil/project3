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
var path = require("path");
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
mongoose.Promise = global.Promise;
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
// var ideaRoutes = require("./server/controllers/idea-api-routes.js");
// var projectRoutes = require("./server/controllers/project-api-routes.js");
// var techRoutes = require("./server/controllers/tech-api-routes.js");
var userRoutes = require("./server/controllers/user-api-routes.js");

// app.use("/idea", ideaRoutes);
// app.use("/project", projectRoutes);
// app.use("/tech", techRoutes);
app.use("/user", userRoutes);

// app.use("/", controllers);


// Listener
// -------------------------------------------------
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
