import {FrameHandler} from './FrameHandler.js'
import {Drawing} from './drawLine.js'
import {UIController} from './UIController.js'

class Canvas {	
	constructor (wrap, device = 'mouse') {
		// wrap
		this._canvasWrap = document.querySelector(wrap + ' .canvas_wrap');
		this._element = this._canvasWrap.getContext('2d');

		// define new objects
		this._frameHandler = new FrameHandler(this._canvasWrap, this._element, wrap);
		this._controller = new UIController(this._canvasWrap, this._element, wrap, this._frameHandler);
		this._drawing = new Drawing(this._element, this._canvasWrap, this._controller, this._frameHandler, device);

		// set event list
		switch (device) {
			case 'mouse':
				this._eventList = ['mousedown', 'mouseup'];
				break;

			case 'screen':
				this._eventList = ['touchstart', 'touchend'];
				break;

			case 'keyboard':
				this._eventList = ['keydown', 'keyup'];
				break;

			default: return false;
		}

		// add drawing feature
		if (device == 'keyboard')
		{
			addEventListener(this._eventList[0], (e) => {this._drawing.beginDraw(e)}, false);
			addEventListener(this._eventList[1], (e) => {this._drawing.endDraw(e)}, false);	
		}

		else
		{
			this._canvasWrap.addEventListener(this._eventList[0], (e) => {this._drawing.beginDraw(e)}, false);
			this._canvasWrap.addEventListener(this._eventList[1], (e) => {this._drawing.endDraw(e)}, false);
		}
	}
}

var canvas1 = new Canvas('.main_wrapp.first');
var canvas2 = new Canvas('.main_wrapp.second', 'screen');
var canvas3 = new Canvas('.main_wrapp.third', 'keyboard');