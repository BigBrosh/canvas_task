export var StateHandler = new class {
	constructor() {
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