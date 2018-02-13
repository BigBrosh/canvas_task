export class FrameHandler {
	constructor (wrap, element, parent) {
		// wrap
		this._wrap = wrap;
		this._element = element;

		// data
		this._frames = [];
		this._frameCounter = -1;

		// buttons
		this._nextBtn = wrapClassName('nextBtn');
		this._prevBtn = wrapClassName('prevBtn');
		this._clearBtn = wrapClassName('clear');
		this._saveBtn = wrapClassName('save');

		// extra functions
		function wrapClassName(name) {
			return document.querySelector(parent + ' .' + name);
		}

		function increaseFrameCounter() {
			this._frameCounter++;
		}

		function decreaseFrameCounter() {
			this._frameCounter--;
		}

		function resetFrames() {
			this._frames = [];
		}

		function resetCounter() {
			this._frameCounter = -1;
		}

		// event listeners
		this._nextBtn.onclick = () => {
			if (this._frameCounter != this._frames.length - 1)
			{
				increaseFrameCounter();
				this._element.putImageData(this._frames[this._frameCounter], 0, 0);
			}
		}

		this._prevBtn.onclick = () => {
			if (this._frameCounter <= 0)
			{
				this._element.clearRect(0, 0, this._wrap.width, this._wrap.height);
				resetCounter();
			}

			else 
			{
				decreaseFrameCounter();
				this._element.putImageData(this._frames[this._frameCounter], 0, 0);
			}
		}

		this._clearBtn.onclick = () => {
			this._element.clearRect(0, 0, this._wrap.width, this._wrap.height);
			resetFrames();
			resetCounter();
		}

		this._saveBtn.onclick = () => {
			this._saveBtn.href = this._wrap.toDataURL();
			this._saveBtn.download = `my canvas paint ${this._frameCounter + 1}`;
		}
	}
}