export var FrameHandler = function(wrap, element, parent) {
	var self = this;

	// wrap
	self._wrap = wrap;
	self._element = element;

	// data
	self._frames = [];
	self._frameCounter = -1;

	// buttons
	self._nextBtn = wrapClassName('nextBtn');
	self._prevBtn = wrapClassName('prevBtn');
	self._clearBtn = wrapClassName('clear');
	self._saveBtn = wrapClassName('save');

	// extra functions
	function wrapClassName(name) {
		return document.querySelector(parent + ' .' + name);
	}

	function increaseFrameCounter() {
		self._frameCounter++;
	}

	function decreaseFrameCounter() {
		self._frameCounter--;
	}

	function resetFrames() {
		self._frames = [];
	}

	function resetCounter() {
		self._frameCounter = -1;
	}

	// event listeners
	self._nextBtn.onclick = () => {
		if (self._frameCounter != self._frames.length - 1)
		{
			increaseFrameCounter();
			self._element.putImageData(self._frames[self._frameCounter], 0, 0);
		}
	}

	self._prevBtn.onclick = () => {
		if (self._frameCounter <= 0)
		{
			self._element.clearRect(0, 0, self._wrap.width, self._wrap.height);
			resetCounter();
		}

		else 
		{
			decreaseFrameCounter();
			self._element.putImageData(self._frames[self._frameCounter], 0, 0);
		}
	}

	self._clearBtn.onclick = () => {
		self._element.clearRect(0, 0, self._wrap.width, self._wrap.height);
		resetFrames();
		resetCounter();
	}

	self._saveBtn.onclick = () => {
		self._saveBtn.href = self._wrap.toDataURL();
		self._saveBtn.download = `my canvas paint ${self._frameCounter + 1}`;
	}
}