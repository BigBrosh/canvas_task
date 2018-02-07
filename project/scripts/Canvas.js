import {counter} from './Counter.js'
import {Handler} from './Handler.js'

var Canvas = function (wrapp) {
	counter.increase();
	
	var self = this;
	self._wrap = document.getElementById(wrapp);
	self._element = self._wrap.getContext('2d');
	self._number = counter._amount;
	self._ident = wrapp + counter._amount;

	Handler.add(self._ident);

	self._wrap.onclick = function() {
		console.log(self._ident);
		console.log(Handler._array[self._number - 1]);
		
		Handler._array.map(function(el, index) {
			if (el.name == self._ident) {
				console.log(index);
			}
		});
	}
}

export var canvas1 = new Canvas('canvas_wrap');