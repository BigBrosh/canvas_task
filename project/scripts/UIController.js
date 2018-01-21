// creating parent class
export var UIController = new class {
	constructor() {
		this._lineWidth = 1;
		this._lineColor = "#000";
	}

	set LineWidth(param) {
		this._width = param;
	}

	set LineColor(param) {
		this._lineColor = param;
	}
}


// line width
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