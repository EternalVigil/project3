var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({

	name: {
		type: Schema.Types.String
	},
	completed: { 
		type: Schema.Types.Boolean,
		default: false
	},
	currentProject: {
		type: Schema.Types.Boolean
		default: false
	},
	githubSource: {
		type: Schema.Types.String
	},
	leader: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	team: [{
		type: Schema.Types.ObjectId,
		ref: "User"
	}],
	techStack: [{
		type: Schema.Types.ObjectId,
		ref: "Tech"
	}],	
	parentIdea: {
		type: Schema.Types.ObjectId,
		ref: "Idea"
	}

}, {
	timestamps: {createdAt: "createdAt", updatedAt: "updatedAt"},
	toJSON: {getters: true} //both path and virtual getters
});

var Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
