$(document).ready(function() {
	$('#markdown').on('keyup', (function(event) {
		var content = $('#herp').val();
		console.log(content);
		$('#derp').append(content);
	}));
});
