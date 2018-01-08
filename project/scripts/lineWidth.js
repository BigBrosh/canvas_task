var lineWidthR = document.getElementById('lineWidthR'),
		lineWidthI = document.getElementById('lineWidthI'),
		clWidth = lineWidthI.value;

var lineWidth = class {
	constructor(clWidth) {
		this._width = clWidth;
	}
}

export var LineWidth = new lineWidth(clWidth);


// line width through range
lineWidthI.value = lineWidthR.value;

lineWidthR.oninput = () => {
	lineWidthI.value = lineWidthR.value;
	LineWidth._width = lineWidthR.value;
}

// line width through input
lineWidthI.oninput = () => {
	if (lineWidthI.value > lineWidthR.max) {
		lineWidthI.value = lineWidthR.max;
	}

	else if (lineWidthI.value < lineWidthR.min) {
		lineWidthI.value = lineWidthR.min;
	}

	lineWidthR.value = lineWidthI.value;
	LineWidth._width = lineWidthI.value;
}