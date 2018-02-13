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


		this._nextBtn.onclick = e => this.nextButtonEvent();

		this._prevBtn.onclick = e => this.previousButtonEvent();

		this._clearBtn.onclick = e => this.clearButtonEvent();

		this._saveBtn.onclick = e => this.saveButtonEvent();

		// extra functions
		function wrapClassName(name) {
			return document.querySelector(parent + ' .' + name);
		}
	}

	// frame events
	increaseFrameCounter() {
		this._frameCounter++;
	}

	decreaseFrameCounter() {
		this._frameCounter--;
	}

	resetFrames() {
		this._frames = [];
	}

	resetCounter() {
		this._frameCounter = -1;
	}

	// event listeners
	nextButtonEvent() {
		if (this._frameCounter != this._frames.length - 1)
		{
			this.increaseFrameCounter();
			this._element.putImageData(this._frames[this._frameCounter], 0, 0);
		}
	}

	previousButtonEvent() {
		if (this._frameCounter <= 0)
		{
			this._element.clearRect(0, 0, this._wrap.width, this._wrap.height);
			this.resetCounter();
		}

		else 
		{
			this.decreaseFrameCounter();
			this._element.putImageData(this._frames[this._frameCounter], 0, 0);
		}
	}

	clearButtonEvent() {
		this._element.clearRect(0, 0, this._wrap.width, this._wrap.height);
		this.resetFrames();
		this.resetCounter();
	}

	saveButtonEvent() {
		this._saveBtn.href = this._wrap.toDataURL();
		this._saveBtn.download = `my canvas paint ${this._frameCounter + 1}`;
	}
}