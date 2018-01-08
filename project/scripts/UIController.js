var lineWidthI = document.getElementById('lineWidthI'),
	clWidth = lineWidthI.value;

var UIController = class {
	constructor(property) {
		this._property = property;
	}
}

export var LineWidth = new UIController(clWidth);