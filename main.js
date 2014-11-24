$(document).ready(function() {
	$('#markdown').on('keyup', (function(event) {
		var content = this.text()
		$('#result').append(';')
	});)
});
