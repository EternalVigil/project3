var express = require("express");
var Tech = require("../models/Tech");

var router = express.Router();

//Test: Get all techs and show in api
router.get('/api', function(req, res) {
	Tech.find({})
	.exec()
	.then(function(tech) {
		console.log("Find all techs.");
		res.json(tech);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Post new tech to api
router.post('/api', function(req, res) {
 	Tech.create({
		name: req.body.name,
		techType: req.body.techType,
		frontend: req.body.frontend,
		backend: req.body.backend,
		documentation: req.body.documentation
	})
	.then(function(tech) {
		console.log("Created new tech.");
		res.json(tech);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Update tech and show in api
router.patch('/api/:id', function(req, res) {
 	Tech.update({
		_id: req.params.id
	},
	{	$set: { 
			// name: req.body.name,
			// techType: req.body.techType,
			frontend: req.body.frontend,
			backend: req.body.backend
		}
		// }, 
		// $push: { 
		// 	"documentation": req.body.documentation,
		// 	"users": req.body._id,
		// 	"ideas": req.body._id,
		// 	"projects": req.body._id
		// }
	// }, {upsert: true})
	})
	.exec()
	.then(function(tech) {
		console.log("Updated tech.");
		res.json(tech);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Delete tech and show in api
router.delete('/api/:id', function(req, res) {
	Tech.findOneAndRemove({
		_id: req.params.id
	})
	.exec()
	.then(function(tech) {
		console.log("Deleted tech.");
		res.json(tech);
	}).catch(function(err) {
		res.send(err);
	});
});


module.exports = router;
