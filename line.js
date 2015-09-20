

function drawLineByGrid(gridFrom, gridTo, isArrow) {
	var positionFrom = new gridToCoordinate(gridFrom);
	var positionTo = new gridToCoordinate(gridTo);
	if(isArrow){
		drawArrow(positionFrom.x, positionFrom.y, positionTo.x, positionTo.y);
	}
	else{
		drawLine(positionFrom.x, positionFrom.y, positionTo.x, positionTo.y);
	}
}

function drawLine(fromX, fromY, toX, toY){
	var c=document.getElementById("canvas");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(fromX, fromY);
	ctx.lineTo(toX, toY);
	ctx.stroke();
}

function drawArrow(x1, y1, x2, y2) {
	var c=document.getElementById("canvas");
	var context = c.getContext("2d");
    context.lineWidth = 2; 
    context.beginPath(); 
    context.moveTo(x1, y1); 
    context.lineTo(x2, y2); 
    context.stroke(); 
 
 
    var a = Math.PI / 6;
    var h = 24;
    var sa = Math.sin(a);
    var ca = Math.cos(a);
    context.save(); 
    context.translate(x2, y2); 
    context.scale(h, h);
    context.rotate(-Math.atan2(x2 - x1, y2 - y1));
    context.beginPath(); 
    context.moveTo(0, 0); 
    context.lineTo(+sa, -ca);
    context.moveTo(0, 0); 
    context.lineTo(-sa, -ca);
    context.quadraticCurveTo(0, -ca * (2 / 3), sa, -ca);
    context.fill(); 
    context.restore(); 
};

function drawDashLine(x1,y1,x2,y2,dashLen){
	var c=document.getElementById("canvas");
	var context=c.getContext("2d");
	
	dashLen = dashLen === undefined ? 5 : dashLen;

	var beveling = getBeveling(x2-x1,y2-y1);
	
	var num = Math.floor(beveling/dashLen);
	
	for(var i = 0 ; i < num; i++)
	{
		context[i%2 == 0 ? 'moveTo' : 'lineTo'](x1+(x2-x1)/num*i,y1+(y2-y1)/num*i);
	}
	context.stroke();
}

function getBeveling(x,y)
{
	return Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
}


