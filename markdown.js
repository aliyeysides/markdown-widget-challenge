widget = function(){
	function appendHtml(html){
		// var character = String.fromCharCode(str);
		document.getElementById("preview").innerHTML=html;
	};


	document.getElementById("source").onkeyup=function(e){
		console.log(e);
		// var str = e.keyCode;
		var textarea = e.target;
		appendHtml(textarea.value);
	};
};

window.addEventListener('load', widget);