var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TechSchema = new Schema({
	
	name: { 
		type: Schema.Types.String
	},
	techType: {
		type: Schema.Types.String
	},
	documentation: {
		type: Schema.Types.Mixed
	}
});

var Tech = mongoose.model("Tech", TechSchema);

module.exports = Tech;
