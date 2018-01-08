// extra for width changing 
var lineWidthI = document.getElementById('lineWidthI'),
	clWidth = lineWidthI.value;

// creating parent class
var UIController = class {
	constructor(property) {
		this._property = property;
	}
}

export var LineWidth = new UIController(clWidth);
export var LineColor = new UIController('black');