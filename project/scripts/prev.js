import {StateHandler} from './variables';

var prevBtn = document.getElementById('prevBtn');

prevBtn.onclick = () => {
	if (StateHandler._setCounter <= 0) {
		StateHandler._element.clearRect(0, 0, StateHandler._wrap.width, StateHandler._wrap.height);
		StateHandler.decreaseSetCounter();
	}

	else {
		StateHandler.decreaseSetCounter();
		StateHandler._element.putImageData(StateHandler._currentImgSet[StateHandler._setCounter], 0, 0);
	}
}