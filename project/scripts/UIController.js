import {StateHandler} from './StateHandler';
// import * from './Canvas';

// creating parent class
export var UIController = function(parent) {
	let self = this;

	// inputs
	self._inputRange = wrapClassName('lineWidthR');
	self._inputField = wrapClassName('lineWidthI');
	self._inputColor = wrapClassName('colorChange');
	self._canvasWidthInput = wrapClassName('canvasWidth');
	self._canvasHeightInput = wrapClassName('canvasHeight');

	// parametrs
	self._canvasWidth = parent._width;
	self._canvasHeight = parent._height;
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

	//event listeners
	function wrapClassName(name) {
		return document.querySelectorAll(parent + ' .' + name);
	}

	function addEventListenerList(list, event, fn) {
		for (var i = 0, len = list.length; i < len; i++) {
			list[i].addEventListener(event, fn, false);
		}
	}

	self._inputRange.oninput = () => {
		self._inputField = self._inputRange;
		self._lineWidth = self._inputRange;
	}

	self._inputField.oninput = () => {
		if (self._inputField.value > 10)
			self._inputField = 10;

		else if (self._inputField.value < 1)
			self._inputField = 1;

		self._inputRange = self._inputField;
		self._lineWidth = self._inputField;
	}

	self._inputColor.oninput = () => {
		self._lineColor = self._inputColor.value;
	}

	self._canvasWidthButton.onclick = () => {
		self._canvasWidth = self._canvasWidthInput.value;
		document.querySelector(parent).width = self._canvasWidth;
		// add putImageData!
	}

	self._canvasHeightButton.onclick = () => {
		self._canvasHeight = self._canvasHeightInput.value;
		// add putImageData!
	}
}

// canvas Width
// var canvasWidth = document.getElementById('canvasWidth'),
// 	widthBtn = document.getElementById('applyWidth');

// canvasWidth.value = UIController._canvasWidth;

// widthBtn.onclick = () => {
// 	UIController._canvasWidth = canvasWidth.value;
// 	canvas1._wrap.width = UIController._canvasWidth;
// 	canvas1._element.putImageData(StateHandler._currentImgSet[StateHandler._setCounter], 0, 0);
// }


// canvas Height
// var canvasHeight = document.getElementById('canvasHeight'),
// 	heightBtn = document.getElementById('applyHeight');

// canvasHeight.value = UIController._canvasHeight;

// heightBtn.onclick = () => {
// 	UIController._canvasHeight = canvasHeight.value;
// 	canvas1._wrap.height = UIController._canvasHeight;
// 	canvas1._element.putImageData(StateHandler._currentImgSet[StateHandler._setCounter], 0, 0);
// }