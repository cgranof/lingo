var Word = require('../word.js');

Word.find({}, function(err, documents){
  if(documents.length === 0){
    // Prefill the empty database with some Words
    var word = new Word({});
    // word.save();
  }
});