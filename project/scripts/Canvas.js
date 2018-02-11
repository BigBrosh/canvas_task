import {FrameHandler} from './FrameHandler.js'
import {Drawing} from './drawLine.js'
import {UIController} from './UIController.js'

var Canvas = function (wrap) {	
	let self = this;

	self._canvasWrap = document.querySelector(wrap + ' .canvas_wrap');
	self._element = self._canvasWrap.getContext('2d');

	self._frameHandler = new FrameHandler(self._canvasWrap, self._element, wrap);
	self._controller = new UIController(self._canvasWrap, self._element, wrap, self._frameHandler);


	self._canvasWrap.onmousedown = (e) => {
		Drawing.beginDraw(e, self._element, self._canvasWrap, self._controller, self._frameHandler);

		self._canvasWrap.onmouseup = (e) => {
			Drawing.endDraw(e, self._element, self._canvasWrap, self._controller, self._frameHandler);
		}
	}
}

var canvas1 = new Canvas('.main_wrapp.first');
var canvas2 = new Canvas('.main_wrapp.second');
var canvas3 = new Canvas('.main_wrapp.third');