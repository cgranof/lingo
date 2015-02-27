var mongoose =  require('mongoose');
var random = require('mongoose-simple-random');

var wordSchema = mongoose.Schema({
	word: String,
  numCorrect : Number,
  numIncorrect : Number,
  numAttempted : Number
});
// Random word plugin
wordSchema.plugin(random);

var Word = mongoose.model('Word', wordSchema);

module.exports = Word;
