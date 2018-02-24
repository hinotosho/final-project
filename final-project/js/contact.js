$(document).ready(function() {
	$('#submit-button').on('submit', function() {
		var thankMsg = $('#feedback').parent().find('#thank');
		if ($(thankMsg).data('state') === 'hidden') {
			$(thankMsg).data('state', 'show');
			$(thankMsg).animate({'display': 'inline-block'}, 600);
			return;
		}
	});
});