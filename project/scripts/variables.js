// canvas
var wrap = document.getElementById('canvas_wrap'),
	element = wrap.getContext('2d'),

// states
	setCounter = -1,
	currentImgSet = [];



var stateHandler = class {
	constructor(wrap, element, setCounter, currentImgSet) {
		this._wrap = wrap;
		this._element = element;
		this._setCounter = setCounter;
		this._currentImgSet = currentImgSet;
	}

	//main methods
	increaseSetCounter() {
		this._setCounter++;
	}

	decreaseSetCounter() {
		this._setCounter--;
	}
}

export var StateHandler = new stateHandler(wrap, element, setCounter, currentImgSet);