export var Drawing = function(element, wrap, controller, frameHandler, device) {
	let self = this;

	self._xCoordinate = 0;
	self._yCoordinate = 0;
	self._keyboardChecker = true;

	self._beginDraw = function (e) {
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
				var xBegin = self._xCoordinate,
					yBegin = self._yCoordinate;				
				break;

			default: return false;
		}
		
		element.beginPath();
		element.moveTo(xBegin, yBegin);


 		if (e.keyCode == 37)
 		{
			if (self._xCoordinate == 0)
			{
				self._keyboardChecker = false;
				return false;
			}

			self._xCoordinate -= 1;
 		}

		else if (e.keyCode == 38)
		{
			if (self._yCoordinate == 0)
			{
				self._keyboardChecker = false;
				return false;
			}

			self._yCoordinate -= 1;
		}

		else if (e.keyCode == 39)
		{
			if (self._xCoordinate == wrap.width)
			{
				self._keyboardChecker = false;
				return false;
			}

			self._xCoordinate += 1;
		}

		else if (e.keyCode == 40)
		{
			if (self._xCoordinate == wrap.height)
			{
				self._keyboardChecker = false;
				return false;
			}

			self._yCoordinate += 1;
		}
	}

	self._endDraw = function (e) {
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
				var xEnd = self._xCoordinate,
					yEnd = self._yCoordinate;
				break;

			default: return false;
		}

		if (self._keyboardChecker == true)
		{			
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

		self._keyboardChecker = true;
	}
}