import {StateHandler} from './variables';

var saveBtn = document.getElementById('save');

saveBtn.onclick = () => {
	saveBtn.href = StateHandler._wrap.toDataURL();
	saveBtn.download = "canvaspainting.png";
}