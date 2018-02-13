export class UIController {
	constructor (canvasWrap, element, parent, frameHandler) {
		this._canvasWrap = canvasWrap;
		this._element = element;
		this._frameHandler = frameHandler;

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

		// adding listeners
		this._inputRange.oninput = e => this.inputRangeListener();
		this._inputField.oninput = e => this.inputFieldListener();
		this._inputColor.oninput = e => this.inputColorListener();
		this._canvasWidthButton.onclick = e => this.widthButtonEvent();
		this._canvasHeightButton.onclick = e => this.heightButtonEvent();

		if (this._keyboardChecker)
		{		
			this._keyboardChecker.onclick = e => this.keyboardCheckerListener(e);
		}
	}

	//event listeners
	inputRangeListener() {
		this._inputField.value = this._inputRange.value;
		this._lineWidth = this._inputRange.value;
		console.log(`${this._inputField.value} ${this._inputRange.value} ${this._lineWidth} ${this._lineColor} ${this._canvasWidth}`);
	}

	inputFieldListener() {
		if (this._inputField.value > 10)
			this._inputField.value = 10;

		else if (this._inputField.value < 1)
			this._inputField.value = 1;

		this._inputRange.value = this._inputField.value;
		this._lineWidth = this._inputField.value;
	}

	inputColorListener() {
		this._lineColor = this._inputColor.value;
	}

	keyboardCheckerListener(e) {
		this._keyboardChecker.onclick = e => {
			if (e.target.checked)
				document.body.classList.add('active');
			else
				document.body.classList.remove('active');
		}
	}

	// button events
	widthButtonEvent() {
		this._canvasWidth = this._canvasWidthInput.value;
		this._canvasWrap.width = this._canvasWidth;
		this._element.putImageData(this._frameHandler._frames[this._frameHandler._frameCounter], 0, 0);
	}

	heightButtonEvent() {
		this._canvasHeight = this._canvasHeightInput.value;
		this._canvasWrap.height = this._canvasHeight;
		this._element.putImageData(this._frameHandler._frames[this._frameHandler._frameCounter], 0, 0);
	}
}