export class UIController {
	constructor (canvasWrap, element, parent, frameHandler) {
		// inputs
		this._inputRange = wrapClassName('lineWidthR');
		this._inputField = wrapClassName('lineWidthI');
		this._inputColor = wrapClassName('colorChange');
		this._canvasWidthInput = wrapClassName('canvasWidth');
		this._canvasHeightInput = wrapClassName('canvasHeight');
		this._keyboardChecker = wrapClassName('keyboardChecker');

		// parametrs
		this._canvasWidth = canvasWrap.width;
		this._canvasHeight = canvasWrap.height;
		this._lineWidth = 1;
		this._lineColor = "#000";

		// buttons
		this._canvasWidthButton = wrapClassName('applyWidth');
		this._canvasHeightButton = wrapClassName('applyHeight');

		// set input's parametrs
		this._inputRange.value = this._lineWidth;
		this._inputField.value = this._lineWidth;
		this._canvasWidthInput.value = this._canvasWidth;
		this._canvasHeightInput.value = this._canvasHeight;

		// extra functions
		function wrapClassName(name) {
			return document.querySelector(parent + ' .' + name);
		}

		//event listeners
		this._inputRangeListener = () => {
			this._inputField.value = this._inputRange.value;
			this._lineWidth = this._inputRange.value;
			console.log(`${this._inputField.value} ${this._inputRange.value} ${this._lineWidth} ${this._lineColor} ${this._canvasWidth}`);
		}

		this._inputFieldListener = () => {
			if (this._inputField.value > 10)
				this._inputField.value = 10;

			else if (this._inputField.value < 1)
				this._inputField.value = 1;

			this._inputRange.value = this._inputField.value;
			this._lineWidth = this._inputField.value;
		}

		this._inputColorListener = () => {
			this._lineColor = this._inputColor.value;
		}

		this._keyboardCheckerListener = e => {
			this._keyboardChecker.onclick = e => {
				if (e.target.checked)
					document.body.classList.add('active');
				else
					document.body.classList.remove('active');
			}
		}

		// button events
		this._widthButtonEvent = () => {
			canvasWrap.width = this._canvasWidthInput.value;
			document.querySelector(parent).width = this._canvasWidth;
			element.putImageData(frameHandler._frames[frameHandler._frameCounter], 0, 0);
		}

		this._heightButtonEvent = () => {
			canvasWrap.height = this._canvasHeightInput.value;
			element.putImageData(frameHandler._frames[frameHandler._frameCounter], 0, 0);
		}

		// adding listeners
		this._inputRange.addEventListener('input', this._inputRangeListener);
		this._inputField.addEventListener('input', this._inputFieldListener);
		this._inputColor.addEventListener('input', this._inputColorListener);
		this._canvasWidthButton.addEventListener('input', this._widthButtonEvent);
		this._canvasHeightButton.addEventListener('input', this._heightButtonEvent);

		if (this._keyboardChecker)
		{		
			this._keyboardChecker.addEventListener('click', this._keyboardCheckerListener);
		}
	}
}