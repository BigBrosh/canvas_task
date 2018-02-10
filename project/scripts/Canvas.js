// import {StateHandler} from './StateHandler.js'
// import {Drawing} from './drawLine.js'
import {UIController} from './UIController.js'

var Canvas = function (canvasWrap, wrap) {	
	let self = this;

	self._canvasWrap = document.querySelector(canvasWrap);
	self._element = self._canvasWrap.getContext('2d');
	self._setCounter = self._wrap + 'SetCounter';

	var controller = new UIController(self._canvasWrap, wrap);

	// StateHandler[wrap] = [];
	// StateHandler[self._setCounter] = -1;


	// self._wrap.onclick = (e) => {
	// 	Drawing.beginDraw(e, self._element, self._wrap);

	// 	this.onmouseup = (e) => {
	// 		Drawing.endDraw(e, self._element, self._wrap);
	// 	}
	// }
}

var canvas1 = new Canvas('.canvas_wrap.first', '.main_wrapp');