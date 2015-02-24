var Word = require('../models/word.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	translate: function(req, res){
		res.render('translate');
	},

	translation: function(req, res){
		res.render('translation');
	},

	wordSubmit: function(req, res){
		console.log(Word);
		var submittedData = req.body;
		var newWord = new Word({
			word: submittedData.word,
			from: submittedData.from,
			to: submittedData.to
		});
		newWord.save(function(err, result){
			res.redirect('/translation');
			console.log(newWord);
			// console.log(newWord.word, newWord.from, newWord.to);
			// translateWord(newWord.word, newWord.from, newWord.to);
		});

	}
};

module.exports = indexController;