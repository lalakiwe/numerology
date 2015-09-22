requird("./grid.js");
requird("./line.js");
requird("./utils.js");
requird("./paint.js");
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

function onClickSubmit(isOldLines){
	
	var canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
	grid.getInstance().initCanvas();

	var btn = document.getElementById("toggleButton");
	if(isOldLines){
		btn.innerHTML = 'oldLines';
	}
	else{
		btn.innerHTML = 'youngLines';
	}


	var year = document.getElementById("year");
	var month = document.getElementById("month");
	var day = document.getElementById("day");
	var hour = document.getElementById("hour");
	var minute = document.getElementById("minute");
	
	if(year.value.trim() == ""){
		alert("請輸入年!");
		return;
	}
	else if(month.value.trim() == ""){
		alert("請輸入月!");
		return;
	}
	else if(day.value.trim() == ""){
		alert("請輸入日!");
		return;
	}
	else if(hour.value.trim() == ""){
		alert("請輸入時!");
		return;
	}
	else if(minute.value.trim() == ""){
		alert("請輸入分!");
		return;
	}

	var liveNumberObj = getNumbers(year.value, month.value, day.value, hour.value, minute.value);
	
	//alert(year.value+","+month.value+","+day.value+","+hour.value+","+minute.value);		
	//var liveNumberObj = getNumbers(1985, 12, 11, 17, 30);

	if(isOldLines){
		for(var i=0; i<liveNumberObj.oldLines.length; i++){
			var lineObj = liveNumberObj.oldLines[i];
			drawLineByGrid(lineObj.start, lineObj.end, lineObj.arrow);
		}
	}
	else{
		for(var i=0; i<liveNumberObj.youngLines.length; i++){
			var lineObj = liveNumberObj.youngLines[i];
			drawLineByGrid(lineObj.start, lineObj.end, lineObj.arrow);
		}
	}
	
	for(var i=0; i<liveNumberObj.circle.length; i++){
		var obj = liveNumberObj.circle[i];	
		drawCircle(obj.index, obj.count);
	}

	for(var i=0; i<liveNumberObj.triangle.length; i++){
		var index = liveNumberObj.triangle[i];
		drawTriangle(index);
	}

	drawRectangle(liveNumberObj.rectangle);
}

function onClickToggle(){
	var btn = document.getElementById("toggleButton");
	if(btn.innerHTML == "oldLines"){
		//btn.innerHTML = 'youngLines';
		onClickSubmit(false);
	}
	else{
		//btn.innerHTML = 'oldLines';
		onClickSubmit(true);
	}

	
}