//Ensure auth and get home route "/"

var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', function(req, res){
//	res.render('index');
	console.log("GET to /");
});

module.exports = router;