var Word = require('../word.js');

// Prefill the empty database with some Words
Word.find({}, function(err, documents){
  if(documents.length === 0){
    // var furniture = new Word({
    //     "word": "furniture",
    //     "numCorrect" : 0,
    //     "numIncorrect" : 0,
    //     "numAttempted" : 0
    // });
    // furniture.save();

    var attraction = new Word({
        "word": "attraction",
        "numCorrect" : 0,
        "numIncorrect" : 0,
        "numAttempted" : 0
    });
    attraction.save();

    // var well_off = new Word({
    //     "word": "well-off",
    //     "numCorrect" : 0,
    //     "numIncorrect" : 0,
    //     "numAttempted" : 0
    // });
    // well_off.save();
  }
});