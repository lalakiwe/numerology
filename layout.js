requird("./grid.js");
requird("./line.js");
requird("./utils.js");
requird("./circle.js");
requird("./logicFunction.js");



function requird(path){
	var js = document.createElement("script");

	js.type = "application/javascript";
	js.src = path;
	document.body.appendChild(js);
}

function onLoad(){

  window.setTimeout(init, 300);

};

function init() {
	//alert("That was really slow!");
	grid.getInstance().initCanvas();
}

function onClickSubmit(){
	
	var canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
	grid.getInstance().initCanvas();

	var year = document.getElementById("year");
	var month = document.getElementById("month");
	var day = document.getElementById("day");
	var hour = document.getElementById("hour");
	var minute = document.getElementById("minute");
	
	if(year.value == ""){
		alert("請輸入年!");		
		return;
	}
	else if(month.value == ""){
		alert("請輸入月!");		
		return;
	}
	else if(day.value == ""){
		alert("請輸入日!");		
		return;
	}
	else if(hour.value == ""){
		alert("請輸入時!");		
		return;
	}
	else if(minute.value == ""){
		alert("請輸入分!");		
		return;
	}

	var liveNumberObj = getNumbers(year.value, month.value, day.value, hour.value, minute.value);
	
	//alert(year.value+","+month.value+","+day.value+","+hour.value+","+minute.value);		
	//var liveNumberObj = getNumbers(1985, 12, 11, 17, 30);

	for(var i=0; i<liveNumberObj.oldLines.length; i++){
		var lineObj = liveNumberObj.oldLines[i];
		drawLineByGrid(lineObj.start, lineObj.end, lineObj.arrow);	
	}
	
	for(var i=0; i<liveNumberObj.circle.length; i++){
		var index = liveNumberObj.circle[i];
		drawCircle(index, 2);
	}


}

function onClickTaggle(){
	var btn = document.getElementById("taggleButton");
	if(btn.innerHTML == "oldLines"){
		btn.innerHTML = 'youngLines';
	}
	else{
		btn.innerHTML = 'oldLines';
	}
	
}