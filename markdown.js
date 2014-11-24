widget = function(){
	document.getElementById("source").onkeyup=function(e){
		var textarea = e.target;
		appendHtml(markdown.toHTML(textarea.value));
	};
};

function appendHtml(html){
	document.getElementById("preview").innerHTML=html;
};

window.addEventListener('load', widget);