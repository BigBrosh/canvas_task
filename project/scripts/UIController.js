import {StateHandler} from './StateHandler';
import {canvas1} from './Canvas';

// creating parent class
export var UIController = function(wrap, parent) {
	var self = this;

	self._wrap = wrapClassName(wrap);
	self._inputRange = wrapClassName('lineWidthR');
	self._inputField = wrapClassName('lineWidthI');

	self._canvasWidth = parent._width;
	self._canvasHeight = parent._height;
	self._lineWidth = 1;
	self._lineColor = "#000";

	function wrapClassName(name) {
		return document.querySelectorAll(parent + ' .' + name);
	}

	function addEventListenerList(list, event, fn) {
		for (var i = 0, len = list.length; i < len; i++) {
			list[i].addEventListener(event, fn, false);
		}
	}
}
// export var UIController = new class {
// 	constructor() {
// 		this._lineWidth = 1;
// 		this._lineColor = "#000";
// 		this._canvasWidth = canvas1._wrap.width;
// 		this._canvasHeight = canvas1._wrap.height;
// 	}
// }


// line Width
var lineWidthR = document.getElementById('lineWidthR'),
	lineWidthI = document.getElementById('lineWidthI');

lineWidthI.value = UIController._lineWidth;
lineWidthR.value = lineWidthI.value;

lineWidthR.oninput = () => {
	lineWidthI.value = lineWidthR.value;
	UIController._lineWidth = lineWidthR.value;
}

lineWidthI.oninput = () => {
	if (lineWidthI.value > 10)
		lineWidthI.value = 10;

	else if (lineWidthI.value < 1)
		lineWidthI.value = 1

	lineWidthR.value = lineWidthI.value;
	UIController._lineWidth = lineWidthR.value;
}


// line Color
var colorInput = document.getElementById('colorChange');

colorInput.oninput = () => {
	UIController._lineColor = colorInput.value;
}


// canvas Width
var canvasWidth = document.getElementById('canvasWidth'),
	widthBtn = document.getElementById('applyWidth');

canvasWidth.value = UIController._canvasWidth;

widthBtn.onclick = () => {
	UIController._canvasWidth = canvasWidth.value;
	canvas1._wrap.width = UIController._canvasWidth;
	canvas1._element.putImageData(StateHandler._currentImgSet[StateHandler._setCounter], 0, 0);
}


// canvas Height
var canvasHeight = document.getElementById('canvasHeight'),
	heightBtn = document.getElementById('applyHeight');

canvasHeight.value = UIController._canvasHeight;

heightBtn.onclick = () => {
	UIController._canvasHeight = canvasHeight.value;
	canvas1._wrap.height = UIController._canvasHeight;
	canvas1._element.putImageData(StateHandler._currentImgSet[StateHandler._setCounter], 0, 0);
}