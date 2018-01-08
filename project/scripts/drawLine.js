import {StateHandler} from './variables';
import {LineWidth} from './lineWidth';
import {LineColor} from './lineColor';
import {LineWidth, LineColor} from './UIController';

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
	StateHandler._element.strokeStyle = LineColor._property;
	StateHandler._element.lineWidth = LineWidth._property;
	StateHandler._element.stroke();

	while(StateHandler._setCounter != StateHandler._currentImgSet.length - 1){
		StateHandler._currentImgSet.pop();
	}

	StateHandler._setCounter += 1;
    StateHandler._currentImgSet.push(StateHandler._element.getImageData(0, 0, StateHandler._wrap.width, StateHandler._wrap.height));
  }
}