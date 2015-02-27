// CLIENT-SIDE

// var Promise = require('promise');
var lang = '';

var displayFeedback = function(input){
	if(input === 'correct'){
		$('.quiz-container').addClass('has-success');
				console.log('correct!');
		$('#word').after('<span id="checkMark" class="glyphicon glyphicon-ok form-control-feedback">');
		$('.randomWord').addClass('correct');
	}

};

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
		var answer = $('#word').val();
		var wordDB = $('.randomWord').text();
		var toLang = lang;
		var wordObject = {
			answer : answer,
			text: wordDB,
			from: 'eng',
			to: toLang
		};
		// console.log('wordObject: ', wordObject);
		// console.log('click');
		this.reset();

		$.post('/quiz/quizSubmit', wordObject, function(dataFromServer){
			console.log('dataFromServer: ', dataFromServer);
			displayFeedback(dataFromServer);
		});
	});
});