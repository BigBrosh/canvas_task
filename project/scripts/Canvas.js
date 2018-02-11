import {FrameHandler} from './FrameHandler.js'
import {Drawing} from './drawLine.js'
import {UIController} from './UIController.js'

var Canvas = function (wrap, device = 'mouse') {	
	let self = this;

	self._canvasWrap = document.querySelector(wrap + ' .canvas_wrap');
	self._element = self._canvasWrap.getContext('2d');

	self._frameHandler = new FrameHandler(self._canvasWrap, self._element, wrap);
	self._controller = new UIController(self._canvasWrap, self._element, wrap, self._frameHandler);


	self._iventList = device == "mouse" ? ["mousedown", "mouseup"] : device == "screen" ? ["touchstart", "touchend"] : [];

	self._canvasWrap.addEventListener(self._iventList[0], function(e) {Drawing.beginDraw(e, self._element, self._canvasWrap, self._controller, self._frameHandler)}, false);
	self._canvasWrap.addEventListener(self._iventList[1], function(e) {Drawing.endDraw(e, self._element, self._canvasWrap, self._controller, self._frameHandler)}, false);
}

var canvas1 = new Canvas('.main_wrapp.first');
var canvas2 = new Canvas('.main_wrapp.second', 'screen');
var canvas3 = new Canvas('.main_wrapp.third');