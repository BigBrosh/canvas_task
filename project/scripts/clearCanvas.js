import {StateHandler} from './variables';

var clearBtn = document.getElementById('clear');

clearBtn.onclick = () => {
	StateHandler._element.clearRect(0, 0, StateHandler._wrap.width, StateHandler._wrap.height);
	StateHandler._currentImgSet = [];
	StateHandler.decreaseSetCounter();
}