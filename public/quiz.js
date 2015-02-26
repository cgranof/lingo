// var Promise = require('promise');
var lang = '';
$(document).on('ready', function(){

	$('.langButton').on('click', function(){
		console.log('click');
		$('.quiz-container').fadeIn();
		lang = $(this).val();
		console.log(lang);


	});

	$('#quiz-form').on('submit', function(e){
		e.preventDefault();
		var word = $('#word').val();
		// var to = $('#to').val();
		// var from = $('#langCode').val();

		var wordObject = {
			text: word,
			from: 'eng',
			to: lang
		};
		console.log(wordObject);
		console.log('click');

	});
});