//register and login routes

var express = require('express');
var router = express.Router();

var User = require("../models/User")

// Get Register
router.get('/register', function(req, res){
//	res.render('register');
	console.log("GET to /users/register");
});

// Get Login
router.get('/login', function(req, res){
//	res.render('login');
	console.log("GET to /users/login");
});

// Get Register
router.post('/register', function(req, res){
//	res.render('register');
	console.log("POST to /users/register");

	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;
	var email = req.body.email;

	// Validation
	req.checkBody('firstName', 'First name is required').notEmpty();
	req.checkBody('lastName', 'Last name is required').notEmpty();
	req.checkBody('username', 'User name is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();

	var errors = req.validationErrors();

	if(errors) 
		console.log("There was an error.");
	
	else {
		console.log("Success!");

		var newUser = new User({
			firstName: firstName,
			lastName: lastName,
			username: username,
			password: password,
			email: email
		});
	
		User.createUser(newUser, function(err, user) {
			if(err)
				throw err;
			console.log(user);
		});

		req.flash("success_msg", "You are now registered and can now login.");

		res.redirect("/users/login");		
	}
});

module.exports = router;