// var Promise = require('promise');

$(document).on('ready', function(){

	$('.langButton').on('click', function(){
		console.log('click');
		$('.quiz-container').show();

	});

	$('#quiz-form').on('submit', function(e){
		e.preventDefault();
		var word = $('#word').val();
		var to = $('#to').val();
		var from = $('#langCode').val();

		var wordObject = {
			text: word,
			from: from,
			to: to
		};
		console.log(wordObject);
		console.log('click');
	
	});
});