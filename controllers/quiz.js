// SERVER-SIDE

var Word = require('../models/word.js');
var beglobal = require('../config.js');


var quizController = {

	error: function(req, res){
		res.render('error');
	},

	quiz: function(req, res){
		// Pass random word from DB to start quiz with
		Word.findOneRandom(function(err, wordsFromDB){
			if (err) {
				console.log(err);
			}
			else {
				res.render('quiz', {
					words : wordsFromDB
				});
			}
			// console.log('word from DB: ', wordsFromDB.word);
		});
	},

	quizSubmit: function(req, res){
		var submittedData = req.body;
		// res.send(submittedData);
		// Check API for translation
		var translateWord = function(text, from, to){
			beglobal.translations.translate(
				{text: text, from: from, to: to},
				function(err, results){
					if (err) {
						console.log('error API:', err);
						// res.redirect('/error');
					}
					var serverResults = results;
					console.log('server results: ', serverResults);
					console.log('entered word: ', submittedData);
							// Validate if translation is correct or not
							var checkTranslation = function(results){
								// Check if submission is correct word for word
								if(submittedData.answer.toLowerCase() == results.translation.toLowerCase()){
									console.log(submittedData.text);
									// Add one to numCorrect and numAttempted
									Word.findOneAndUpdate(
										{ word: submittedData.text },
										{ $inc: { numCorrect: 1,
															numAttempted: 1 } },
										{upsert: true},
									    function(err, result){
									    	console.log('correct +1correct & +1attemped');
									    	res.send('correct');
									    }
									);
								}
								else {
									Word.findOneAndUpdate(
										{ word: submittedData.text },
										{ $inc: { numInorrect: 1,
															numAttempted: 1 } },
										{upsert: true},
									    function(err, result){
									    	console.log('incorrect +1incorrect & +1attemped');
									    	res.send('incorrect');
									    }
									);
									console.log('incorrect');
								}
							};
						// Check if submitted answer matches translateWord API
						checkTranslation(serverResults);
				}
			);
		};
		// Pass submitted data to translate API
		translateWord(submittedData.text, submittedData.from, submittedData.to);
	},

	newWord : function (req, res){
		// Pass random word from DB for next question
		Word.findOneRandom(function(err, wordsFromDB){
			if (err) {
				console.log('err: ', err);
			}
			else {
				res.send(wordsFromDB);
			}
			// console.log('word from DB: ', wordsFromDB.word);
		});
	}

};



module.exports = quizController;