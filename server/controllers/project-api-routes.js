var express = require("express");
var Project = require("../models/Project");

var router = express.Router();

//Test: Get all projects and show in api
router.get('/api', function(req, res) {
	Project.find({})
	.exec()
	.then(function(project) {
		console.log("Find all projects.");
		res.json(project);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Post new project to api
router.post('/api', function(req, res) {
	Project.create({
		name: req.body.name,
		completed: req.body.completed,
		currentProject: req.body.currentProject,
		githubSource: req.body.githubSource
	})
	.exec()
	.then(function(project) {
		console.log("Created new project.");
		res.json(project);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Update project and show in api
router.put('/api/:id', function(req, res) {
	Project.findOneAndUpdate({
		_id: req.params.id
	},
	{ 	$set: { 
			name: req.body.name,
			completed: req.body.completed,
			currentProject: req.body.currentProject,
			githubSource: req.body.githubSource
		},
		$push: {
			"leader": req.body._id,
			"team": req.body._id,
			"techStack": req.body._id,
			"parentIdea": req.body_id
		}
	}, {upsert: true})
	.exec()
	.then(function(project) {
		console.log("Updated project.");
		res.json(project);
	}).catch(function(err) {
		res.send(err);
	});
});

//Test: Delete project and show in api
router.delete('/api/:id', function(req, res) {
	Project.findOneAndRemove({
		_id: req.params.id
	})
	.exec()
	.then(function(project) {
		console.log("Deleted project.");
		res.json(project);
	}).catch(function(err) {
		res.send(err);
	});
});


module.exports = router;
