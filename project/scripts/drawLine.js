export var Drawing = new class {
	beginDraw(e, element, wrap, controller, frameHandler, device) {
		// begin coordinates
		switch (device) {
			case 'mouse':
				var xBegin = e.offsetX,
					yBegin = e.offsetY;
				break;

			case 'screen':
				var xBegin = e.targetTouches[0].pageX - e.target.offsetLeft,
					yBegin = e.targetTouches[0].pageY - e.target.offsetTop;

				wrap.addEventListener('touchmove', function() {document.body.classList.add('active');}, false);
				break;

			case 'keyboard':
				var xBegin = 0,
					yBegin = 0;

			default: return false;
		}
	  
		element.beginPath();
		element.moveTo(xBegin, yBegin);
	}

	endDraw(e, element, wrap, controller, frameHandler, device) {
		// end coordinates
		switch (device) {
			case 'mouse':
				var xEnd = e.offsetX,
					yEnd = e.offsetY;
				break;

			case 'screen':
				var xEnd = e.changedTouches[0].pageX - e.target.offsetLeft,
					yEnd = e.changedTouches[0].pageY - e.target.offsetTop;

				document.addEventListener('touchend', function() {document.body.classList.remove('active');}, false);
				break;

			case 'keyboard':
				var xEnd = 0,
					yEnd = 0;

			default: return false;
		}

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