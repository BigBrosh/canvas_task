export var Canvas = new class {
	constructor() {
		this._wrap = document.getElementById('canvas_wrap');
		this._element = this._wrap.getContext('2d');
	}
}