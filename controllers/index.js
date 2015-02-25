var Word = require('../models/word.js');
var translate = require('../models/translate.js');


var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	translate: function(req, res){
		res.render('translate');
	},

	translation: function(req, res){
		res.render('translation', {
			translate: translate.translateWord
		});
	},

	wordSubmit: function(req, res){
		
		var submittedData = req.body;
		var wordAfter = translate(submittedData.word, submittedData.from, submittedData.to);
		var newWord = new Word({
			word: submittedData.word,
			from: submittedData.from,
			to: submittedData.to
		});
		newWord.save(function(err, result){
			res.redirect('/translation');
			// console.log(newWord.word, newWord.from, newWord.to);
			// translateWord(newWord.word, newWord.from, newWord.to);
			console.log('wordAfter: ', wordAfter);
		});
			
	}
};
	
	

module.exports = indexController;