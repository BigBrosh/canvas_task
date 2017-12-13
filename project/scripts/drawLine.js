wrap.onmousedown = (e) => {
	var xBegin = e.offsetX,
		yBegin = e.offsetY;
  
	console.log(xBegin + ' ' + yBegin);
	element.beginPath();
	element.moveTo(xBegin, yBegin);

	wrap.onmousemove = (e) => {
		console.log(e.offsetX + ' ' + e.offsetY);
	}

	wrap.onmouseup = (e) => {
	var xEnd = e.offsetX,
		yEnd = e.offsetY;
	
	element.lineTo(xEnd, yEnd);
	element.closePath();
	element.fill();
	element.strokeStyle = clColor;
	element.lineWidth = clWidth;
	element.stroke();

	while(setCounter != currentImgSet.length - 1){
		currentImgSet.pop();
	}

	setCounter += 1;
    currentImgSet.push(element.getImageData(0, 0, wrap.width, wrap.height));
  }
}