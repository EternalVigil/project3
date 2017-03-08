var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({

	name: {
		type: Schema.Types.String
	},
	completed: { 
		type: Schema.Types.String,
		default: false
	},
	currentProject: {
		type: Schema.Types.Date
		default: false
	},
	githubSource: {
		type: Schema.Types.String
	}

});

var Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
