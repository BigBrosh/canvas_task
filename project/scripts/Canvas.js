import '../../css/main.css';
import {FrameHandler} from './FrameHandler.js';
import {Drawing} from './drawLine.js';
import {UIController} from './UIController.js';
import {UIController2} from './UIController2.js';

class Canvas {	
	constructor (wrap, device = 'mouse') {
		// wrap
		this._wrapName = wrap;
		this._device = device;
		this._canvasWrap = document.querySelector(wrap + ' .canvas_wrap');
		this._element = this._canvasWrap.getContext('2d');

		this._frameHandler = new FrameHandler(this._canvasWrap, this._element, this._wrapName);
		this._controller = new UIController(this._canvasWrap, this._element, this._wrapName, this._frameHandler);
		this._drawing = new Drawing(this._canvasWrap, this._element, this._controller, this._frameHandler, this._device);

		// set event list
		switch (device) {
			case 'mouse':
				this._eventList = ['mousedown', 'mouseup'];
				break;

			case 'screen':
				this._eventList = ['touchstart', 'touchend'];
				break;

			case 'keyboard':
				this._eventList = ['keydown'];
				break;

			default: return false;
		}

		// add drawing feature
		if (device == 'keyboard')
		{
			addEventListener(this._eventList[0], (e) => {this._drawing.continiousLineDrawing(e)}, false);
		}

		else
		{
			this._canvasWrap.addEventListener(this._eventList[0], (e) => {this._drawing.beginDraw(e)}, false);
			this._canvasWrap.addEventListener(this._eventList[1], (e) => {this._drawing.endDraw(e)}, false);
		}
	}

	setController(Parent) {
		this._controller = new Parent(this._canvasWrap, this._element, this._wrapName, this._frameHandler);
	}

	setFrameHandler(Parent) {
		this._frameHandler = new Parent(this._canvasWrap, this._element, this._wrapName);
	}

	setDrawing(Parent) {
		this._drawing = new Parent(this._canvasWrap, this._element, this._controller, this._frameHandler, this._device);
	}
}

var canvas1 = new Canvas('.main_wrapp.first');
canvas1.setFrameHandler(FrameHandler);
canvas1.setController(UIController2);
canvas1.setDrawing(Drawing);


var canvas2 = new Canvas('.main_wrapp.second', 'screen');
var canvas3 = new Canvas('.main_wrapp.third', 'keyboard');