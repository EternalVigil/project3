//register and login routes

var express = require('express');
var router = express.Router();

// Get Register
router.get('/register', function(req, res){
//	res.render('register');
	console.log("Routed to /users/register");
});

// Get Login
router.get('/login', function(req, res){
//	res.render('login');
	console.log("Routed to /users/login");
});

module.exports = router;