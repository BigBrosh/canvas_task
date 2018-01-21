import {StateHandler} from './StateHandler';


var canvasWidth = document.getElementById('canvasWidth'),
	widthBtn = document.getElementById('applyWidth');

canvasWidth.value = StateHandler._wrap.width;

widthBtn.onclick = () => {
  StateHandler._wrap.width = canvasWidth.value;
  StateHandler._element.putImageData(StateHandler._currentImgSet[StateHandler._setCounter], 0, 0);
}