import {StateHandler} from './StateHandler';
import {Canvas} from './Canvas';

// creating parent class
export var UIController = new class {
	constructor() {
		this._lineWidth = 1;
		this._lineColor = "#000";
		this._canvasWidth = Canvas._wrap.width;
		this._canvasHeight = Canvas._wrap.height;
	}
}


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
	Canvas._wrap.width = UIController._canvasWidth;
	Canvas._element.putImageData(StateHandler._currentImgSet[StateHandler._setCounter], 0, 0);
}


// canvas Height
var canvasHeight = document.getElementById('canvasHeight'),
	heightBtn = document.getElementById('applyHeight');

canvasHeight.value = UIController._canvasHeight;

heightBtn.onclick = () => {
	UIController._canvasHeight = canvasHeight.value;
	Canvas._wrap.height = UIController._canvasHeight;
	Canvas._element.putImageData(StateHandler._currentImgSet[StateHandler._setCounter], 0, 0);
}