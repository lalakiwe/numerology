requird("./grid.js");
requird("./line.js");

function onLoad(){

  window.setTimeout(init, 300);

  
};

function init() {
	//alert("That was really slow!");
	initCanvas();
}

function requird(path){
	var js = document.createElement("script");

	js.type = "application/javascript";
	js.src = path;
	document.body.appendChild(js);
}


