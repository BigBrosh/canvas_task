import {LineWidth} from './UIController';

var lineWidthR = document.getElementById('lineWidthR'),
		lineWidthI = document.getElementById('lineWidthI');


// line width through range
lineWidthI.value = lineWidthR.value;

lineWidthR.oninput = () => {
	lineWidthI.value = lineWidthR.value;
	LineWidth._property = lineWidthR.value;
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
	LineWidth._property = lineWidthI.value;
}