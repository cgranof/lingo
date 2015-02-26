var Word = require('../models/word.js');
// var translate = require('../models/translate.js');
// var BeGlobal = require('node-beglobal');
var beglobal = require('../config.js');
// var beglobal = new BeGlobal.BeglobalAPI({
// 	api_token: 'M%2B85b%2Bmgeo4OsLdHt0IVEw%3D%3D'
// });

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	error: function(req, res){
		res.render('error');
	},

	translate: function(req, res){
		res.render('translate');
	},

	wordSubmit: function(req, res){
		var submittedData = req.body;
		var translateWord = function(text, from, to){
			beglobal.translations.translate(
				{text: text, from: from, to: to},
				function(err, results){
					if (err) {
						console.log('error:', err);
						res.redirect('/error');
					}				
					var serverResults = results;
					console.log(results);
					res.send({translationResults: serverResults});

				}
			);
		};
		translateWord(submittedData.text, submittedData.from, submittedData.to);
	},

	quiz: function(req, res){
		res.render('quiz');
	}

};
	
	

module.exports = indexController;