var mongoose =  require('mongoose');
var BeGlobal = require('node-beglobal');
var beglobal = new BeGlobal.BeglobalAPI({
	api_token: 'M%2B85b%2Bmgeo4OsLdHt0IVEw%3D%3D'
});
var wordSchema = mongoose.Schema({
	word: String,
	from: String,
	to: String
});

var Word = mongoose.model('Word', wordSchema);

// var translateWord = function(word, from, to){
// 	beglobal.translations.translate(
// 		{text: word, from: from, to: to},
// 		function(err, results){
// 			if (err) {
// 				return console.log(err);
// 			}
// 			console.log(results);
// 		}
// 	);
	
// };

module.exports = Word;