import {StateHandler} from './StateHandler';
import {UIController} from './UIController';

StateHandler._wrap.onmousedown = (e) => {
	var xBegin = e.offsetX,
		yBegin = e.offsetY;
  
	StateHandler._element.beginPath();
	StateHandler._element.moveTo(xBegin, yBegin);

	StateHandler._wrap.onmouseup = (e) => {
	var xEnd = e.offsetX,
		yEnd = e.offsetY;
	
	StateHandler._element.lineTo(xEnd, yEnd);
	StateHandler._element.closePath();
	StateHandler._element.fill();
	StateHandler._element.strokeStyle = UIController._lineColor;
	StateHandler._element.lineWidth = UIController._lineWidth;
	StateHandler._element.stroke();

	while(StateHandler._setCounter != StateHandler._currentImgSet.length - 1){
		StateHandler._currentImgSet.pop();
	}

	StateHandler.increaseSetCounter();
	console.log(StateHandler._setCounter);
    StateHandler._currentImgSet.push(StateHandler._element.getImageData(0, 0, StateHandler._wrap.width, StateHandler._wrap.height));
  }
}