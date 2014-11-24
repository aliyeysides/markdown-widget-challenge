function pageLoad(){
	function appendHtml(preview, str){
			console.log("appending");

		var character = String.fromCharCode(str);
		// preview.innerHTML = character;
		preview.appendChild(character);
	};

	var preview = document.getElementById("preview");

	document.getElementById("source").onkeyup(function(e){
		console.log("Key Up");
		var str = e.keycode;
		appendHtml(preview, str);
	});
};