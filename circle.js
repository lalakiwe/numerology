function drawCircle(gridIndex, count){
	
	var position = new gridToCoordinate(gridIndex);
	
	var c=document.getElementById("canvas");
	var ctx=c.getContext("2d");
	var radius = TEXT_SIZE+10;
	for(var i=0; i<count; i++){
		ctx.beginPath();
		ctx.arc(position.x, position.y, radius, 0,2*Math.PI);
		ctx.stroke();
		radius += 10;
	}

}
