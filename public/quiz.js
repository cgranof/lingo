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

	// $('#translate-form').on('submit', function(){
	// 	$('.translated').fadeIn();
	// 	console.log('click');
	// });

	$('#quiz-form').on('submit', function(e){
		e.preventDefault();
		var word = $('#word').val();
		var toLang = lang;
		var wordObject = {
			text: word,
			from: 'eng',
			to: toLang
		};
		// console.log('wordObject: ', wordObject);
		// console.log('click');
		this.reset();

		$.post('/quiz/quizSubmit', wordObject, function(dataFromServer){
			console.log('dataFromServer: ', dataFromServer);
		});

	});


});