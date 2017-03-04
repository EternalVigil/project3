var mongoose = require('mongoose');
var bcrypt = require("bcryptjs");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	
	firstName: { 
		type: Schema.Types.String,
		required: true
	},
	lastName: {
		type: Schema.Types.String,
		required: true
	},
	username: {
		type: Schema.Types.String,
		required: true
	}
	password: {
		type: Schema.Types.String,
		required: true
	},
	email: {
		type: Schema.Types.String,
		required: true
	},
	github: {
		type: Schema.Types.String,	
		required: false
	},
	createdAt: {
		type: Schema.Types.Date,
		default: Date.now
	}
	updatedAt: {
		type: Schema.Types.Date,
		default: Date.now
	}
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
