var colorInput = document.getElementById('colorChange'),
	clColor = 'black';

var lineColor = class {
	constructor(color) {
		this._color = color;
	}
}

export var LineColor = new lineColor(clColor);


colorInput.oninput = () => {
  LineColor._color = colorInput.value;
}