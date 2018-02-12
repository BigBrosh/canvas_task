export var UIController = function(canvasWrap, element, parent, frameHandler) {
	let self = this;

	// inputs
	self._inputRange = wrapClassName('lineWidthR');
	self._inputField = wrapClassName('lineWidthI');
	self._inputColor = wrapClassName('colorChange');
	self._canvasWidthInput = wrapClassName('canvasWidth');
	self._canvasHeightInput = wrapClassName('canvasHeight');
	self._keyboardChecker = wrapClassName('keyboardChecker');

	// parametrs
	self._canvasWidth = canvasWrap.width;
	self._canvasHeight = canvasWrap.height;
	self._lineWidth = 1;
	self._lineColor = "#000";

	// buttons
	self._canvasWidthButton = wrapClassName('applyWidth');
	self._canvasHeightButton = wrapClassName('applyHeight');

	// set input's parametrs
	self._inputRange.value = self._lineWidth;
	self._inputField.value = self._lineWidth;
	self._canvasWidthInput.value = self._canvasWidth;
	self._canvasHeightInput.value = self._canvasHeight;

	// extra functions
	function wrapClassName(name) {
		return document.querySelector(parent + ' .' + name);
	}

	//event listeners
	self._inputRange.oninput = function() {
		self._inputField.value = self._inputRange.value;
		self._lineWidth = self._inputRange.value;
	}

	self._inputField.oninput = () => {
		if (self._inputField.value > 10)
			self._inputField.value = 10;

		else if (self._inputField.value < 1)
			self._inputField.value = 1;

		self._inputRange.value = self._inputField.value;
		self._lineWidth = self._inputFieldvalue;
	}

	self._inputColor.oninput = () => {
		self._lineColor = self._inputColor.value;
	}

	self._canvasWidthButton.onclick = () => {
		canvasWrap.width = self._canvasWidthInput.value;
		document.querySelector(parent).width = self._canvasWidth;
		element.putImageData(frameHandler._frames[frameHandler._frameCounter], 0, 0);
	}

	self._canvasHeightButton.onclick = () => {
		canvasWrap.height = self._canvasHeightInput.value;
		element.putImageData(frameHandler._frames[frameHandler._frameCounter], 0, 0);
	}

	if (self._keyboardChecker) {		
		self._keyboardChecker.onclick = e => {
			if (e.target.checked)
				document.body.classList.add('active');
			else
				document.body.classList.remove('active');
		}
	}
}