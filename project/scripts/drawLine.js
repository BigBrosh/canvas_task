wrap.onmousedown = (e) => {
	var xBegin = e.offsetX,
		yBegin = e.offsetY;
  
	element.beginPath();
	element.moveTo(xBegin, yBegin);

	wrap.onmouseup = (e) => {
	var xEnd = e.offsetX,
		  yEnd = e.offsetY;
	
	element.lineTo(xEnd, yEnd);
	element.closePath();
	element.fill();
	element.strokeStyle = clColor;
	element.lineWidth = clWidth;
	element.stroke();
  }
}