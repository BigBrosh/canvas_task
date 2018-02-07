import {canvas1} from './Canvas';

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

	reset() {
		this._setCounter = -1;
	}
}


// next
var nextBtn = document.getElementById('nextBtn');

nextBtn.onclick = () => {
	if(StateHandler._setCounter != StateHandler._currentImgSet.length - 1) {
		StateHandler.increaseSetCounter();
		canvas1._element.putImageData(StateHandler._currentImgSet[StateHandler._setCounter], 0, 0);
	}
}


// prev
var prevBtn = document.getElementById('prevBtn');

prevBtn.onclick = () => {
	if (StateHandler._setCounter <= 0) {
		canvas1._element.clearRect(0, 0, canvas1._wrap.width, canvas1._wrap.height);
		StateHandler.reset();
	}

	else {
		StateHandler.decreaseSetCounter();
		canvas1._element.putImageData(StateHandler._currentImgSet[StateHandler._setCounter], 0, 0);
	}
}


// clear
var clearBtn = document.getElementById('clear');

clearBtn.onclick = () => {
	canvas1._element.clearRect(0, 0, canvas1._wrap.width, canvas1._wrap.height);
	StateHandler._currentImgSet = [];
	StateHandler.reset();
}


// save
var saveBtn = document.getElementById('save');

saveBtn.onclick = () => {
	saveBtn.href = canvas1._wrap.toDataURL();
	saveBtn.download = "canvas1painting.png";
}