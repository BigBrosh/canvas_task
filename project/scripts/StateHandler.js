export var StateHandler = new class {
	constructor() {
		this._wrap = document.getElementById('canvas_wrap');
		this._element = this._wrap.getContext('2d');
		this._setCounter = -1;
		this._currentImgSet = [];
	}

	//main methods
	increaseSetCounter() {
		this._setCounter++;
	}

	decreaseSetCounter() {
		this._setCounter--;
	}
}