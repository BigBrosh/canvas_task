// creating parent class
var UIController = class {
	constructor(property) {
		this._property = property;
	}
}

// extra for width changing 
var lineWidthI = document.getElementById('lineWidthI'),
	clWidth = lineWidthI.value;

// extra for color changing 
var colorInput = document.getElementById('colorChange'),
	clColor = colorInput.value;

export var LineWidth = new UIController(clWidth);
export var LineColor = new UIController(clColor);