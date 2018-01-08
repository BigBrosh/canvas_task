// canvas
var wrap = document.getElementById('canvas_wrap'),
	element = wrap.getContext('2d'),

// line
	lineWidthR = document.getElementById('lineWidthR'),
	lineWidthI = document.getElementById('lineWidthI'),

// canvas size
	canvasWidth = document.getElementById('canvasWidth'),
	canvasHeight = document.getElementById('canvasHeight'),
	widthBtn = document.getElementById('applyWidth'),
	heightBtn = document.getElementById('applyHeight'),

// clear button
	clearBtn = document.getElementById('clear'),

// color
	colorInput = document.getElementById('colorChange'),
	clColor = 'black',

// undo/redo
	prevBtn = document.getElementById('prevBtn'),
	nextBtn = document.getElementById('nextBtn'),
	setCounter = -1,
	currentImgSet = [],

//save button
	saveBtn = document.getElementById('save');



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
		this.setCounter++;
	}

	decreaseSetCounter() {
		this.setCounter--;
	}
}

export var StateHandler = new stateHandler(wrap, element, setCounter, currentImgSet);