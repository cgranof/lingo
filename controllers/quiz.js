// SERVER-SIDE

var Word = require('../models/word.js');
var beglobal = require('../config.js');


var quizController = {

	error: function(req, res){
		res.render('error');
	},

	quiz: function(req, res){
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
		res.send(submittedData);
		// var translateWord = function(text, from, to){
		// 	beglobal.translations.translate(
		// 		{text: text, from: from, to: to},
		// 		function(err, results){
		// 			if (err) {
		// 				console.log('error API:', err);
		// 				// res.redirect('/error');
		// 			}
		// 			var serverResults = results;
		// 			console.log(results);
		// 			res.send({translationResults: serverResults});
		// 		}
		// 	);
		// };
		// translateWord(submittedData.text, submittedData.from, submittedData.to);
	}

};



module.exports = quizController;