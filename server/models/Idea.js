var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IdeaSchema = new Schema({

	name: { 
		type: Schema.Types.String,
		required: [true, "Enter an idea name."]
	},
	description: {
		type: Schema.Types.Mixed,
		required: [true, "Enter a description"]
	},
	rating: {
		type: Schema.Types.Number
	},
	githubExample: {
		type: Schema.Types.String
	},
	timeFrame: {
		type: Schema.Types.Number,
		required: [true, "Enter estimated time of completion for the idea."]
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	techStack: [{
		type: Schema.Types.ObjectId,
		ref: "Tech"
	}],	
	projects: [{
		type: Schema.Types.ObjectId,
		ref: "Project"
	}]

}, {
	timestamps: {createdAt: "createdAt", updatedAt: "updatedAt"},
	toJSON: {getters: true}, //both path and virtual getters
	id: false
});

var Idea = mongoose.model("Idea", IdeaSchema);

module.exports = Idea;
