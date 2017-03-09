// var express = require("express");
// var Idea = require("../models/Idea");

// var router = express.Router();

// //Test: Get all ideas and show in api
// router.get('/api', function(req, res) {
// 	Idea.find({})
// 	.exec()
// 	.then(function(idea) {
// 		console.log("Find all ideas.");
// 		res.json(idea);
// 	}).catch(function(err) {
// 		res.send(err);
// 	});
// });

// //Test: Post new idea to api
// router.post('/api', function(req, res) {
// 	Idea.create({
// 		//...
// 	})
// 	.exec()
// 	.then(function(idea) {
// 		console.log("Created new idea.");
// 		res.json(idea);
// 	}).catch(function(err) {
// 		res.send(err);
// 	});
// });

// //Test: Update idea and show in api
// router.put('/api/:id', function(req, res) {
// 	Idea.findOneAndUpdate({
// 		_id: req.params.id
// 	},
// 	{ $set: { 
// 			//...
// 		}
// 	}, {upsert: true})
// 	.exec()
// 	.then(function(idea) {
// 		console.log("Updated idea.");
// 		res.json(idea);
// 	}).catch(function(err) {
// 		res.send(err);
// 	});
// });

// //Test: Delete idea and show in api
// router.delete('/api/:id', function(req, res) {
// 	Idea.findOneAndRemove({
// 		_id: req.params.id
// 	})
// 	.exec()
// 	.then(function(idea) {
// 		console.log("Deleted idea.");
// 		res.json(idea);
// 	}).catch(function(err) {
// 		res.send(err);
// 	});
// });


// module.exports = router;
