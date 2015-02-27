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
							// Validate if translation is correct or not
							var checkTranslation = function(results){
								// Check if submission is correct word for word
								if(submittedData.answer.toLowerCase() === results.translation.toLowerCase()){
									console.log(submittedData.text);
									// Add one to numCorrect
									Word.findOneAndUpdate(
										{ word: submittedData.text },
										{ $inc: { numCorrect: 1 } },
										{upsert: true},
								    function(err, camp){
								    	console.log('done');
								    }
									);
									res.send({serverResults: serverResults});
								}
								else { console.log('incorrect');}
							};
						// Check if submitted answer matches translateWord API
						checkTranslation(serverResults);
				}
			);
		};
		// Pass submitted data to translate API
		translateWord(submittedData.text, submittedData.from, submittedData.to);
	}

};



module.exports = quizController;