// import {StateHandler} from './StateHandler.js'
// import {Drawing} from './drawLine.js'
import {UIController} from './UIController.js'

var Canvas = function (wrap) {	
	let self = this;

	self._wrap = document.getElementsByClassName(wrap)[0];
	self._element = self._wrap.getContext('2d');
	self._setCounter = self._wrap + 'SetCounter';

	let controller = new UIController(wrap);

	// StateHandler[wrap] = [];
	// StateHandler[self._setCounter] = -1;


	// self._wrap.onclick = (e) => {
	// 	Drawing.beginDraw(e, self._element, self._wrap);

	// 	this.onmouseup = (e) => {
	// 		Drawing.endDraw(e, self._element, self._wrap);
	// 	}
	// }
}

var canvas1 = new Canvas('.canvas_wrap .first');