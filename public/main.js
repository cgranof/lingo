$(document).on('ready', function(){

	$('#translate-form').on('submit', function(e){
		e.preventDefault();
		var word = $('#word').val();
		var to = $('#to').val();
		var from = $('#from').val();

		var wordObject = {
			text: word,
			from: from,
			to: to
		};

		$.post('/wordSubmit', wordObject, function(dataFromServer){
			console.log('data from server: ', dataFromServer);

			$('.translated').empty().text(
				dataFromServer.translationResults.translation
			);
		});
	});

});