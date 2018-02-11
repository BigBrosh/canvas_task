import {FrameHandler} from './FrameHandler.js'
import {Drawing} from './drawLine.js'
import {UIController} from './UIController.js'

var Canvas = function (wrap, device = 'mouse') {	
	let self = this;

	// wrap
	self._canvasWrap = document.querySelector(wrap + ' .canvas_wrap');
	self._element = self._canvasWrap.getContext('2d');

	// define new objects
	self._frameHandler = new FrameHandler(self._canvasWrap, self._element, wrap);
	self._controller = new UIController(self._canvasWrap, self._element, wrap, self._frameHandler);

	// set event list
	switch (device) {
		case "mouse":
			self._eventList = ["mousedown", "mouseup"];
			break;

		case "screen":
			self._eventList = ["touchstart", "touchend"];
			break;

		case "keyboard":
			self._eventList = [];
			break;

		default: return false;
	}

	// add drawing feature
	self._canvasWrap.addEventListener(self._eventList[0], function(e) {Drawing.beginDraw(e, self._element, self._canvasWrap, self._controller, self._frameHandler, device)}, false);
	self._canvasWrap.addEventListener(self._eventList[1], function(e) {Drawing.endDraw(e, self._element, self._canvasWrap, self._controller, self._frameHandler, device)}, false);
}

var canvas1 = new Canvas('.main_wrapp.first');
var canvas2 = new Canvas('.main_wrapp.second', 'screen');
var canvas3 = new Canvas('.main_wrapp.third');