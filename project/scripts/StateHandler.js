import {Canvas} from './Canvas';

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
		Canvas._element.putImageData(StateHandler._currentImgSet[StateHandler._setCounter], 0, 0);
	}
}


// prev
var prevBtn = document.getElementById('prevBtn');

prevBtn.onclick = () => {
	if (StateHandler._setCounter <= 0) {
		Canvas._element.clearRect(0, 0, Canvas._wrap.width, Canvas._wrap.height);
		StateHandler.reset();
	}

	else {
		StateHandler.decreaseSetCounter();
		Canvas._element.putImageData(StateHandler._currentImgSet[StateHandler._setCounter], 0, 0);
	}
}


// clear
var clearBtn = document.getElementById('clear');

clearBtn.onclick = () => {
	Canvas._element.clearRect(0, 0, Canvas._wrap.width, Canvas._wrap.height);
	StateHandler._currentImgSet = [];
	StateHandler.reset();
}


// save
var saveBtn = document.getElementById('save');

saveBtn.onclick = () => {
	saveBtn.href = Canvas._wrap.toDataURL();
	saveBtn.download = "canvaspainting.png";
}