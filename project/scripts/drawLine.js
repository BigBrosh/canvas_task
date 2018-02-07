import {StateHandler} from './StateHandler';
import {UIController} from './UIController';
import {canvas1} from './Canvas';

canvas1._wrap.onmousedown = (e) => {
	var xBegin = e.offsetX,
		yBegin = e.offsetY;
  
	canvas1._element.beginPath();
	canvas1._element.moveTo(xBegin, yBegin);

	canvas1._wrap.onmouseup = (e) => {
	var xEnd = e.offsetX,
		yEnd = e.offsetY;
	
	canvas1._element.lineTo(xEnd, yEnd);
	canvas1._element.closePath();
	canvas1._element.fill();
	canvas1._element.strokeStyle = UIController._lineColor;
	canvas1._element.lineWidth = UIController._lineWidth;
	canvas1._element.stroke();

	while(StateHandler._setCounter != StateHandler._currentImgSet.length - 1){
		StateHandler._currentImgSet.pop();
	}

	StateHandler.increaseSetCounter();
    StateHandler._currentImgSet.push(canvas1._element.getImageData(0, 0, canvas1._wrap.width, canvas1._wrap.height));
  }
}