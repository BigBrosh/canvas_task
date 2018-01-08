import {StateHandler} from './variables';

var nextBtn = document.getElementById('nextBtn');

nextBtn.onclick = () => {
	if(StateHandler._setCounter != StateHandler._currentImgSet.length - 1) {
		StateHandler.increaseSetCounter();
		StateHandler._element.putImageData(StateHandler._currentImgSet[StateHandler._setCounter], 0, 0);
	}
}