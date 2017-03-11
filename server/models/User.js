var mongoose = require('mongoose');
var bcrypt = require("bcryptjs");
var Schema = mongoose.Schema;


//Todo: 
var UserSchema = new Schema({
	
	firstName: { 
		type: Schema.Types.String,
		required: [true, "Please enter your first name."]
	},
	lastName: {
		type: Schema.Types.String,
		required: [true, "Please enter your last name."]
	},
	username: {
		type: Schema.Types.String,
		required: [true, "Please enter your  name."],
		lowercase: true,
		unique: [true, "Username taken."]
	},
	password: {
		type: Schema.Types.String,
		required: [true, "Please enter a password."]
	},
	email: {
		type: Schema.Types.String,
		required: [true, "Please enter your first name."],
		unique: [true, "Email already used."]
	},
	github: {
		type: Schema.Types.String,	
		required: false
	},
	knownTech: [{
		type: Schema.Types.ObjectId,
		ref: "Tech"
	}],	
	learnTech: [{
		type: Schema.Types.ObjectId,
		ref: "Tech"
	}],
	submittedIdeas: [{
		type: Schema.Types.ObjectId,
		ref: "Idea"
	}],	
	projects: [{
		type: Schema.Types.ObjectId,
		ref: "Project"
	}]

}, {
	timestamps: {createdAt: "createdAt", updatedAt: "updatedAt"},
	toJSON: {getters: true} //both path and virtual getters
}
);

var User = mongoose.model("User", UserSchema);

module.exports = User;
