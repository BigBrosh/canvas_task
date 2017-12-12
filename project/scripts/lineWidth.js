// line width through range
lineWidthI.value = lineWidthR.value;
clWidth = lineWidthI.value;

lineWidthR.oninput = () => {
	lineWidthI.value = lineWidthR.value;
	clWidth = lineWidthR.value;
}


// line width through input
clWidth = lineWidthR.value;

lineWidthI.oninput = () => {
	if (lineWidthI.value > lineWidthR.max) {
		lineWidthI.value = lineWidthR.max;
	}

	else if (lineWidthI.value < lineWidthR.min) {
		lineWidthI.value = lineWidthR.min;
	}

	lineWidthR.value = lineWidthI.value;
	clWidth = lineWidthI.value;
}