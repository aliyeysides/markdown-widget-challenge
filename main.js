$(document).ready(function() {
	$('#markdown').on('keyup', (function(event) {
		$content = $('#herp').val();
		
		console.log($content);
		startItalic = /^_/;
		endItalic = /_$/;
			if (startItalic.test($content) === endItalic.test($content)) {
				$('#derp').replaceWith("mookie")
			}
	}));
});
