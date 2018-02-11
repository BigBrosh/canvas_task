export var Drawing = new class {
	beginDraw(e, element, wrap, controller, frameHandler, device) {
		var xBegin = device == 'mouse' ? e.offsetX : device == 'screen' ? e.targetTouches[0].pageX - e.target.offsetLeft : '',
			yBegin = device == 'mouse' ? e.offsetY :device == 'screen' ? e.targetTouches[0].pageY - e.target.offsetTop : '';
	  
		element.beginPath();
		element.moveTo(xBegin, yBegin);

		device == 'screen' ? wrap.addEventListener('touchmove', function() {document.body.classList.add('active');}, false) : '';
	}

	endDraw(e, element, wrap, controller, frameHandler, device) {
		var xEnd = device == 'mouse' ? e.offsetX : device == 'screen' ? e.changedTouches[0].pageX - e.target.offsetLeft : '',
			yEnd = device == 'mouse' ? e.offsetY : device == 'screen' ? e.changedTouches[0].pageY - e.target.offsetTop : '';

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

		device == 'screen' ? document.addEventListener('touchend', function() {document.body.classList.remove('active');}, false) : '';
	}
}