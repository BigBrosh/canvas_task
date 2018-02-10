import {Counter} from './Counter.js'
import {StateHandler} from './StateHandler.js'
import {Drawing} from './drawLine.js'

var Canvas = function (wrapp) {
	Counter.increase();
	
	var self = this;
	self._wrap = document.getElementsByClassName(wrapp)[0];
	self._element = self._wrap.getContext('2d');
	self._setCounter = self._wrap + 'SetCounter';

	StateHandler[self._wrap] = [];
	StateHandler[self._setCounter] = -1;


	self._wrap.onclick = (e) => {
		Drawing.beginDraw(e, self._element, self._wrap);

		this.onmouseup = (e) => {
			Drawing.endDraw(e, self._element, self._wrap);
		}
	}
}

var canvas1 = new Canvas('.canvas_wrap .first');