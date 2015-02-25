var mongoose =  require('mongoose');
var BeGlobal = require('node-beglobal');
var beglobal = new BeGlobal.BeglobalAPI({
	api_token: 'M%2B85b%2Bmgeo4OsLdHt0IVEw%3D%3D'
});

var translationResults = '';
var translateWord = function(word, from, to){
	beglobal.translations.translate(
		{text: word, from: from, to: to},
		function(err, results){
			if (err) {
				return console.log('error:', err);
			}
			translationResults = results;
			// console.log(translationResults);
		}
	);
	// console.log("click");
	return translationResults;
};

module.exports = translateWord;
