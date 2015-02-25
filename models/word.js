var mongoose =  require('mongoose');
var BeGlobal = require('node-beglobal');

var wordSchema = mongoose.Schema({
	word: String,
	from: String,
	to: String
});

var Word = mongoose.model('Word', wordSchema);



module.exports = Word;
