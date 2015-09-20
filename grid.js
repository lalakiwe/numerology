
var INIT_POSITION = 0;
var SQUARE_SIZE = 150;
var FRAME_SIZE = 5;
var TEXT_SIZE = 40;

var canvasContext;


var lifeNumber1 = {
	x : INIT_POSITION + SQUARE_SIZE/2,
	y : INIT_POSITION + SQUARE_SIZE/2
};
var lifeNumber2 = {
	x : INIT_POSITION + SQUARE_SIZE/2,
	y : INIT_POSITION + SQUARE_SIZE + (SQUARE_SIZE - 2*FRAME_SIZE)/2
};
var lifeNumber3 = {
	x : INIT_POSITION + SQUARE_SIZE/2,
	y : 0
};
var lifeNumber4 = {
	x : 0,
	y : 0
};
var lifeNumber5 = {
	x : 0,
	y : 0
};
var lifeNumber6 = {
	x : 0,
	y : 0
};
var lifeNumber7 = {
	x : 0,
	y : 0
};
var lifeNumber8 = {
	x : 0,
	y : 0
};
var lifeNumber9 = {
	x : 0,
	y : 0
};
var lifeNumber0 = {
	x : 0,
	y : 0
};


function initCanvas(){
	var canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		canvas.width = window.innerWidth;
		canvas.height = window.innerWidth;
	    canvasContext = canvas.getContext("2d");
		SQUARE_SIZE = window.innerWidth/5;
		
		drawFrame();
		drawText();
	}
}

function drawFrame(){
	//左上
	canvasContext.fillStyle = "rgb(0,0,0)";
	canvasContext.fillRect (INIT_POSITION, INIT_POSITION, SQUARE_SIZE, SQUARE_SIZE);
	canvasContext.clearRect(INIT_POSITION + FRAME_SIZE, 
				  INIT_POSITION + FRAME_SIZE, 
				  SQUARE_SIZE - FRAME_SIZE*2, 
				  SQUARE_SIZE - FRAME_SIZE*2);

	//中上
	canvasContext.fillRect (INIT_POSITION + SQUARE_SIZE - FRAME_SIZE, 
				  INIT_POSITION,
				  SQUARE_SIZE, 
				  SQUARE_SIZE);
	canvasContext.clearRect(INIT_POSITION + SQUARE_SIZE, 
				  INIT_POSITION + FRAME_SIZE, 
				  SQUARE_SIZE - FRAME_SIZE*2, 
				  SQUARE_SIZE - FRAME_SIZE*2);
					
	//右上
	canvasContext.fillRect (INIT_POSITION + (SQUARE_SIZE - FRAME_SIZE)*2, 
				  INIT_POSITION,
				  SQUARE_SIZE, 
				  SQUARE_SIZE);
	canvasContext.clearRect(INIT_POSITION + SQUARE_SIZE*2 - FRAME_SIZE, 
				  INIT_POSITION + FRAME_SIZE, 
				  SQUARE_SIZE - FRAME_SIZE*2, 
				  SQUARE_SIZE - FRAME_SIZE*2);
					
					
	//左中
	canvasContext.fillRect (INIT_POSITION, 
				  INIT_POSITION + (SQUARE_SIZE - FRAME_SIZE), 
				  SQUARE_SIZE, 
				  SQUARE_SIZE);
				  
	canvasContext.clearRect(INIT_POSITION + FRAME_SIZE, 
				  INIT_POSITION + SQUARE_SIZE, 
			      SQUARE_SIZE - FRAME_SIZE*2, 
				  SQUARE_SIZE - FRAME_SIZE*2);

	//中中
	canvasContext.fillRect (INIT_POSITION + SQUARE_SIZE - FRAME_SIZE,
				  INIT_POSITION + SQUARE_SIZE - FRAME_SIZE,
				  SQUARE_SIZE, 
				  SQUARE_SIZE);
				  
	canvasContext.clearRect(INIT_POSITION + SQUARE_SIZE, 
				  INIT_POSITION + SQUARE_SIZE, 
				  SQUARE_SIZE - FRAME_SIZE*2, 
				  SQUARE_SIZE - FRAME_SIZE*2);
					
	//右中
	canvasContext.fillRect (INIT_POSITION + (SQUARE_SIZE - FRAME_SIZE)*2, 
				  INIT_POSITION + (SQUARE_SIZE - FRAME_SIZE),
				  SQUARE_SIZE, 
				  SQUARE_SIZE);
	canvasContext.clearRect(INIT_POSITION + SQUARE_SIZE*2 - FRAME_SIZE, 
				  INIT_POSITION + SQUARE_SIZE, 
				  SQUARE_SIZE - FRAME_SIZE*2, 
				  SQUARE_SIZE - FRAME_SIZE*2);
				  
	//左下
	canvasContext.fillRect (INIT_POSITION,
				  INIT_POSITION + (SQUARE_SIZE*2 - FRAME_SIZE*2),
				  SQUARE_SIZE, 
				  SQUARE_SIZE);
				  
	canvasContext.clearRect(INIT_POSITION + FRAME_SIZE, 
				  INIT_POSITION + SQUARE_SIZE*2 - FRAME_SIZE, 
				  SQUARE_SIZE - FRAME_SIZE*2, 
				  SQUARE_SIZE - FRAME_SIZE*2);
	//中下
	canvasContext.fillRect (INIT_POSITION + SQUARE_SIZE - FRAME_SIZE,
				  INIT_POSITION + (SQUARE_SIZE*2 - FRAME_SIZE*2),
				  SQUARE_SIZE, 
				  SQUARE_SIZE);
				  
	canvasContext.clearRect(INIT_POSITION + SQUARE_SIZE, 
				  INIT_POSITION + SQUARE_SIZE*2 - FRAME_SIZE, 
				  SQUARE_SIZE - FRAME_SIZE*2, 
				  SQUARE_SIZE - FRAME_SIZE*2);
	//右下
	canvasContext.fillRect (INIT_POSITION + (SQUARE_SIZE - FRAME_SIZE)*2, 
				  INIT_POSITION + (SQUARE_SIZE*2 - FRAME_SIZE*2),
				  SQUARE_SIZE, 
				  SQUARE_SIZE);
				  
	canvasContext.clearRect(INIT_POSITION + SQUARE_SIZE*2 - FRAME_SIZE, 
				  INIT_POSITION + SQUARE_SIZE*2 - FRAME_SIZE, 
				  SQUARE_SIZE - FRAME_SIZE*2, 
				  SQUARE_SIZE - FRAME_SIZE*2);	

	//0
	canvasContext.fillRect (INIT_POSITION + (SQUARE_SIZE - FRAME_SIZE)*3, 
				  INIT_POSITION + (SQUARE_SIZE*2 - FRAME_SIZE*2),
				  SQUARE_SIZE, 
				  SQUARE_SIZE);
				  
	canvasContext.clearRect(INIT_POSITION + SQUARE_SIZE*3 - FRAME_SIZE*2, 
				  INIT_POSITION + SQUARE_SIZE*2 - FRAME_SIZE, 
				  SQUARE_SIZE - FRAME_SIZE*2, 
				  SQUARE_SIZE - FRAME_SIZE*2);	
	
}

function drawText(){

	canvasContext.font = TEXT_SIZE + "px serif";
	canvasContext.textBaseline = "hanging";
	
	function getPositionX1(width){
		return INIT_POSITION + (SQUARE_SIZE - width)/2;
	}
	function getPositionX2(width){
		return INIT_POSITION + (SQUARE_SIZE - width)/2 + SQUARE_SIZE - FRAME_SIZE;
	}
	function getPositionX3(width){
		return INIT_POSITION + (SQUARE_SIZE - width)/2 + 2*(SQUARE_SIZE - FRAME_SIZE);
	}
	function getPositionX4(width){
		return INIT_POSITION + (SQUARE_SIZE - width)/2 + 3*(SQUARE_SIZE - FRAME_SIZE);
	}	
	function getPositionY1(){
		return INIT_POSITION + (SQUARE_SIZE - TEXT_SIZE)/2;
	}
	function getPositionY2(){
		return INIT_POSITION + (SQUARE_SIZE - TEXT_SIZE)/2 + SQUARE_SIZE;
	}
	function getPositionY3(){
		return INIT_POSITION + (SQUARE_SIZE - TEXT_SIZE)/2 + 2*SQUARE_SIZE - FRAME_SIZE;
	}
	
	//1
	var width = canvasContext.measureText('1').width; 
	canvasContext.fillText("1", getPositionX1(width), getPositionY1());
	
	//2
	var width = canvasContext.measureText('2').width; 
	canvasContext.fillText("2", getPositionX1(width), getPositionY2());
	
	//3
	var width = canvasContext.measureText('3').width; 
	canvasContext.fillText("3", getPositionX1(width), getPositionY3());
	
	//4
	var width = canvasContext.measureText('4').width; 
	canvasContext.fillText("4", getPositionX2(width), getPositionY1());
	
	//5
	var width = canvasContext.measureText('5').width; 
	canvasContext.fillText("5", getPositionX2(width), getPositionY2());
	
	//6
	var width = canvasContext.measureText('6').width; 
	canvasContext.fillText("6", getPositionX2(width), getPositionY3());

	//7
	var width = canvasContext.measureText('7').width; 
	canvasContext.fillText("7", getPositionX3(width), getPositionY1());

	//8
	var width = canvasContext.measureText('8').width; 
	canvasContext.fillText("8", getPositionX3(width), getPositionY2());
	
	//9
	var width = canvasContext.measureText('9').width; 
	canvasContext.fillText("9", getPositionX3(width), getPositionY3());
	
	//0
	var width = canvasContext.measureText('0').width; 
	canvasContext.fillText("0", getPositionX4(width), getPositionY3());
	
	//var width = canvasContext.measureText('1').width; 
	//var heigh = canvasContext.measureText('1').height; 
	//document.getElementById("p1").innerHTML = "/       **"+width+","+heigh;	
}

