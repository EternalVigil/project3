var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TechSchema = new Schema({
	
	name: { 
		type: Schema.Types.String,
		required: true,
		unique: true
	},
	techType: {
		type: Schema.Types.String,
		enum: ["language", "library", "database", "framework", "environment", "orm"]
	},
	frontend:{
		type: Schema.Types.Boolean
	},
	backend: {
		type: Schema.Types.Boolean
	},
	documentation: [{
		type: Schema.Types.Mixed
	}],
	users: [{
		type: Schema.Types.ObjectId,
		ref: "User"
	}],
	ideas: [{
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

var Tech = mongoose.model("Tech", TechSchema);

module.exports = Tech;
