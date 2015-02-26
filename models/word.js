var mongoose =  require('mongoose');

var wordSchema = mongoose.Schema({
	word: String,
  numCorrect : Number,
  numIncorrect : Number,
  numAttempted : Number
});

var Word = mongoose.model('Word', wordSchema);

module.exports = Word;
