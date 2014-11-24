widget = function(){
	function appendHtml(html){
		document.getElementById("preview").innerHTML=html;
	};

	document.getElementById("source").onkeyup=function(e){
		var textarea = e.target;
		appendHtml(markdown.toHTML(textarea.value));
	};
};

window.addEventListener('load', widget);