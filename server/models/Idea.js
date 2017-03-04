var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IdeaSchema = new Schema({

	title: { 
		type: Schema.Types.String,
		required: true
	},
	description: {
		type: Schema.Types.Date
		required: true
	},
	githubExample: {
		type: Schema.Types.String
	},
	timeFrame: {
		type: Schema.Types.Date
	}

});

var Idea = mongoose.model("Idea", IdeaSchema);

module.exports = Idea;
