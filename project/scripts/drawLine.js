export class Drawing {
	constructor(element, wrap, controller, frameHandler, device) {
		this._xCoordinate = 0;
		this._yCoordinate = 0;
		this._keyboardChecker = true;

		this._beginDraw = (e) => {
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
					var xBegin = this._xCoordinate,
						yBegin = this._yCoordinate;				
					break;

				default: return false;
			}
			
			element.beginPath();
			element.moveTo(xBegin, yBegin);


	 		if (e.keyCode == 37)
	 		{
				if (this._xCoordinate == 0)
				{
					this._keyboardChecker = false;
					return false;
				}

				this._xCoordinate -= 1;
	 		}

			else if (e.keyCode == 38)
			{
				if (this._yCoordinate == 0)
				{
					this._keyboardChecker = false;
					return false;
				}

				this._yCoordinate -= 1;
			}

			else if (e.keyCode == 39)
			{
				if (this._xCoordinate == wrap.width)
				{
					this._keyboardChecker = false;
					return false;
				}

				this._xCoordinate += 1;
			}

			else if (e.keyCode == 40)
			{
				if (this._xCoordinate == wrap.height)
				{
					this._keyboardChecker = false;
					return false;
				}

				this._yCoordinate += 1;
			}
		}

		this._endDraw = (e) => {
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
					var xEnd = this._xCoordinate,
						yEnd = this._yCoordinate;
					break;

				default: return false;
			}

			if (this._keyboardChecker == true)
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

			this._keyboardChecker = true;
		}
	}
}