widget = function(){
	function appendHtml(str){
		var character = String.fromCharCode(str);
		document.getElementById("preview").innerHTML+=character;
	};


	document.getElementById("source").onkeyup=function(e){
		console.log(e.keyCode);
		var str = e.keyCode;
		appendHtml(str);
	};
};

window.addEventListener('load', widget);