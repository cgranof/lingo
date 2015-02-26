var mongoose =  require('mongoose');

quizWordSchema = mongoose.Schema({

  word : String,
  timesCorrect : Number,
  timesIncorrect : Number,
  timesAttempted : Number,

});

var quizWord = model.model('quizWord', quizWordSchema);
module.exports = quizWord;


