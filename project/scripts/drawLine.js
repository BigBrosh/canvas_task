export var Drawing = new class {
	beginDraw(e, element, wrap, controller, frameHandler) {
		var xBegin = e.offsetX,
			yBegin = e.offsetY;
	  
		element.beginPath();
		element.moveTo(xBegin, yBegin);
	}

	endDraw(e, element, wrap, controller, frameHandler) {
		var xEnd = e.offsetX,
			yEnd = e.offsetY;

		element.lineTo(xEnd, yEnd);
		element.closePath();
		element.fill();
		element.strokeStyle = controller._lineColor;
		element.lineWidth = controller._lineWidth;
		element.stroke();

		while(frameHandler._frameCounter > frameHandler._frames.length - 1){
			frameHandler._frames.pop();
		}

		frameHandler._frameCounter++;
		frameHandler._frames.push(element.getImageData(0, 0, wrap.width, wrap.height));
	}
}