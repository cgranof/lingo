var Word = require('../models/word.js');
var beglobal = require('../config.js');


var quizController = {

	error: function(req, res){
		res.render('error');
	},

	// wordSubmit: function(req, res){

	// },

	quiz: function(req, res){
		res.render('quiz');
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