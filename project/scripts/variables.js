// canvas
var wrap = document.getElementById('canvas_wrap'),
	element = wrap.getContext('2d'),

// line
	lineWidthR = document.getElementById('lineWidthR'),
	lineWidthI = document.getElementById('lineWidthI'),

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

	// getters
	get wrap() {
		return wrap;
	}

	get element() {
		return element;
	}

	get setCounter() {
		return setCounter;
	}

	get currentImgSet() {
		return currentImgSet;
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