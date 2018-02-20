export class Drawing {
	constructor(wrap, element, controller, frameHandler, device) {
		this._element = element;
		this._wrap = wrap;
		this._controller = controller;
		this._frameHandler = frameHandler;
		this._device = device;

		this._xCoordinate = 0;
		this._yCoordinate = 0;
		this._keyboardChecker = true;
	}

	beginDraw(e) {
			// begin coordinates
			switch (this._device) {
				case 'mouse':
					var xBegin = e.offsetX,
						yBegin = e.offsetY;
					break;

				case 'screen':
					var xBegin = e.targetTouches[0].pageX - e.target.offsetLeft,
						yBegin = e.targetTouches[0].pageY - e.target.offsetTop;

					this._wrap.addEventListener('touchmove', function() {document.body.classList.add('active');}, false);
					break;

				case 'keyboard':
					var xBegin = this._xCoordinate,
						yBegin = this._yCoordinate;				
					break;

				default: return false;
			}
			
			this._element.beginPath();
			this._element.moveTo(xBegin, yBegin);


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
				if (this._xCoordinate == this._wrap.width)
				{
					this._keyboardChecker = false;
					return false;
				}

				this._xCoordinate += 1;
			}

			else if (e.keyCode == 40)
			{
				if (this._xCoordinate == this._wrap.height)
				{
					this._keyboardChecker = false;
					return false;
				}

				this._yCoordinate += 1;
			}
		}

		continiousLineDrawing(e) {
			this.beginDraw(e);
			this.endDraw(e);
		}

		endDraw(e) {
			// end coordinates
			switch (this._device) {
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
				this._element.lineTo(xEnd, yEnd);
				this._element.closePath();
				this._element.fill();
				this._element.strokeStyle = this._controller._lineColor;
				this._element.lineWidth = this._controller._lineWidth;
				this._element.stroke();

				while(this._frameHandler._frameCounter > this._frameHandler._frames.length - 1){
					this._frameHandler._frames.pop();
				}

				this._frameHandler._frameCounter++;
				this._frameHandler._frames.push(this._element.getImageData(0, 0, this._wrap.width, this._wrap.height));
			}

			this._keyboardChecker = true;
		}
}