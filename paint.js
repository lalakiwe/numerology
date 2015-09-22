function drawCircle(gridIndex, count){

    var position = new gridToCoordinate(gridIndex);

    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    var radius = TEXT_SIZE + 10;
    for(var i=0; i<count; i++){
        ctx.beginPath();
        ctx.arc(position.x, position.y, radius, 0,2*Math.PI);
        ctx.stroke();
        radius += 10;
    }
}

function drawRectangle(gridIndex){
    var rectangleSize = TEXT_SIZE + 60;
    var position = new gridToCoordinate(gridIndex);
    var positionX = position.x - rectangleSize/2;
    var positionY = position.y - rectangleSize/2;

    var c=document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.strokeStyle="blue";
    ctx.rect(positionX, positionY, rectangleSize, rectangleSize);
    ctx.stroke();
}

function drawTriangle(gridIndex){
    var triangleLength = TEXT_SIZE + 60;
    var position = new gridToCoordinate(gridIndex);

    var c=document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.strokeStyle="#FF322E";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(position.x - triangleLength/2, position.y + Math.sqrt(3)*triangleLength/6);
    ctx.lineTo(position.x + triangleLength/2, position.y + Math.sqrt(3)*triangleLength/6);
    ctx.lineTo(position.x, position.y - triangleLength*Math.sqrt(3)/3);
    ctx.closePath();
    ctx.stroke();
}

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
	ctx.lineWidth = 4;
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
}

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