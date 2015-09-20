
function drawLine(fromX, fromY, toX, toY){
	var c=document.getElementById("canvas");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(fromX, fromY);
	ctx.lineTo(toX, toY);
	ctx.stroke();
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


