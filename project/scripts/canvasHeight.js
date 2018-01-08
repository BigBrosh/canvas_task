import {StateHandler} from './variables';

var canvasHeight = document.getElementById('canvasHeight'),
	heightBtn = document.getElementById('applyHeight');

canvasHeight.value = StateHandler._wrap.height;

heightBtn.onclick = () => {
  StateHandler._wrap.height = canvasHeight.value;
  StateHandler._element.putImageData(StateHandler._currentImgSet[StateHandler._setCounter], 0, 0);
}