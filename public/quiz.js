// CLIENT-SIDE

// var Promise = require('promise');
var lang = '';

var displayFeedback = function(input){
	if(input === 'correct'){
		$('.quiz-container').addClass('has-success');
		$('#word').after('<span id="checkMark" class="glyphicon glyphicon-ok form-control-feedback">');
		$('.randomWord').addClass('correct');
	}
		else if(input === 'incorrect'){
			$('.quiz-container').addClass('has-error');
			$('#word').after('<span id="checkMark" class="glyphicon glyphicon-remove form-control-feedback">');
			$('.randomWord').addClass('inCorrect');
		}
	resetWarning();

};

var resetWord = function(){
	// AJAX a new word
	$.get('/quiz/newWord', function(dataFromServer){
		var newWord = dataFromServer.word;
		console.log('newWord: ', newWord);
			setTimeout(function(){
				$('.randomWord').text(newWord);
			}, 3010);
	});
};

// Reset the words and form color
var resetWarning = function(){
	setTimeout(function(){
		$('.randomWord').removeClass('inCorrect correct');
	}, 3000);
	setTimeout(function(){
		$('#checkMark').remove();
	}, 3000);
	setTimeout(function(){
		$('.quiz-container').removeClass('has-success has-error');
	}, 3000);
	resetWord();
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