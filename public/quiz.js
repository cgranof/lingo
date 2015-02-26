// var Promise = require('promise');
var lang = '';
$(document).on('ready', function(){

	$('.langButton').on('click', function(){
		$('.quiz-container').fadeIn();
		$('.langButton').removeClass('active');
		$(this).addClass('active');
		lang = $(this).val();
		// console.log(lang);


	});

	$('#quiz-form').on('submit', function(e){
		e.preventDefault();
		var word = $('#word').val();

		var wordObject = {
			text: word,
			from: 'eng',
			to: lang
		};
		console.log(wordObject);
		console.log('click');

	});
});